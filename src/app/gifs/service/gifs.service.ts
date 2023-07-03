import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Foto } from '../interface/foto.interface';
import { SearchResponse } from '../interface/search.interface';


@Injectable({
  providedIn: 'root'
})

export default class GifsService {

  private _tagHistory : Array<string> = [];
  private base_url : string = 'https://api.giphy.com/v1/gifs';
  private api : string = '8hE7hev4cqBL7ZR94k1PvlvKlXldE2q9';
  private _photoList : Array<Foto> = [];

  constructor(private http:HttpClient) { 
    this.getLocalStorage();
  }

  set setPhoto(photos:Array<Foto>){
    this._photoList = photos;
  }

  set tagHistory(history:Array<string>){
    this._tagHistory = history;
  }

  get photos(){
    return [...this._photoList];
  }

  get tagHistory(){
    //crea copia del array
    return [...this._tagHistory];
  }

  setInLocal(item:string){
    localStorage.setItem('searchs', JSON.stringify(this._tagHistory)) ;
  }

  getLocalStorage(){
    if(localStorage.getItem('searchs')===null){
      localStorage.setItem('searchs', JSON.stringify(this._tagHistory));
      return;
    }
    let tags:Array<string> = JSON.parse(localStorage.getItem('searchs')!);
    if(tags.length>0){
      this._tagHistory = tags;
    }
  }

  searchTag(tag:string, pag?:number):void{
    let pagination:number = this.isUndefined(pag);
    this.emptyPhotoList(tag);
    this.find(pagination, tag);
    this.orderAndFilter(tag);
  }

  private find(pagination:number, tag:string){
    const params = new HttpParams()
      .set('api_key', this.api)
      .set('limit', 10)
      .set('offset', pagination*10)
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${this.base_url}/search`, {params})
      .subscribe((resp)=>{
        this.convertToList(resp);
      })
  }

  private emptyPhotoList(tag:string){
    if(this._tagHistory[0]!==tag){
      this._photoList = [];
    }
  }

  private isUndefined(pag:number | undefined):number{
    if(pag === undefined){
      return 0;
    }else{
      return pag;
    }
  }

  clearHistory(){
    this._tagHistory = [];
    localStorage.setItem('searchs', JSON.stringify(''));
  }

  private orderAndFilter(tag:string){
    this._tagHistory = this._tagHistory.filter((oldtag)=>oldtag!=tag);
    this._tagHistory.unshift(tag);
  }
  
  private convertToList(data:SearchResponse):void{
    data.data.forEach((photo)=>{
      this._photoList.push({
        titulo : photo.title,
        url: photo.images.downsized_medium.url,
        alter: photo.type,
        descripcion: photo.slug,
        loaded:true
      })
    })
  }

}
