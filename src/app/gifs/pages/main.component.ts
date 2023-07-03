import { Component, ViewChild } from '@angular/core';
import { Foto } from '../interface/foto.interface';
import GifsService from '../service/gifs.service';
@Component({
  selector: 'gif-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  @ViewChild('contenedor')
  divScolleable!: HTMLElement;

  private start:number = 0;

  private currentTopic : string = this.gif.tagHistory[0];

  public topic:string = '';

  constructor(private gif:GifsService){}
  
  get photos():Foto[]{
    return [...this.gif.photos];
  }

  scrolleable($event:Event){
    let desplazamientoPorPagina:number = window.innerHeight;
    let posicionScroll:number = ($event.target as Element).scrollTop;
    let pagina:number = Math.floor(posicionScroll / desplazamientoPorPagina);
    if(this.currentTopic !== this.gif.tagHistory[0]){
      this.currentTopic = this.gif.tagHistory[0];
      this.start = 0;
    }
    if(pagina>this.start){
      this.start = pagina;
      this.gif.searchTag(this.gif.tagHistory[0], pagina);
    }
  }

}
