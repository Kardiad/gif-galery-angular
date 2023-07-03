import { Component } from '@angular/core';
import GifsService from '../../service/gifs.service';

@Component({
  selector: 'gif-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {

  public search:string = '';

  constructor(private gif: GifsService){}

  setTopic(){
    if(this.search!==''){
      const busqueda : string = this.search.toLowerCase();
      this.gif.searchTag(busqueda);
      this.addLocal(busqueda);
      this.search = '';
    }
  }

  private addLocal(item:string){
    this.gif.setInLocal(item);
  }

}
