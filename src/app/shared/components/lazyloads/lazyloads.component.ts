import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyloads',
  templateUrl: './lazyloads.component.html',
  styleUrls: ['./lazyloads.component.css']
})
export class LazyloadsComponent implements OnInit {

  @Input() url:string = '';
  hasLoaded:boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Image is required')
  }

  onLoad(){
    setTimeout(()=>{
      this.hasLoaded = true;
    }, 200)
  }


}
