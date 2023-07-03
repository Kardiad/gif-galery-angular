import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../../interface/foto.interface';

@Component({
  selector: 'gif-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  
  @Input() foto! : Foto;


}
