import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../../interface/foto.interface';
import GifsService from '../../service/gifs.service';

@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent {
  
  @Input() list:Array<Foto> = [];

  constructor(private gif:GifsService){}

}
