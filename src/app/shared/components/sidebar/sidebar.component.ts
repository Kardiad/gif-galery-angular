import { Component, OnInit } from '@angular/core';
import GifsService from 'src/app/gifs/service/gifs.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
  propDelete = faTrash;

  constructor(private gifs:GifsService){}

  get getTags(){
    return this.gifs.tagHistory;
  }

  ngOnInit(): void {
    if(this.gifs.tagHistory.length>0){
      const first:string = this.gifs.tagHistory.shift()!;
      this.gifs.searchTag(first);
    }
  }

  search(tag:string){
    this.gifs.searchTag(tag);
  }

  clearHistoric(){
    this.gifs.clearHistory();
    this.gifs.setPhoto = [];
  }

}
