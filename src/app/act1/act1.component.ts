import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-act1',
  templateUrl: './act1.component.html',
  styleUrls: ['./act1.component.css']
})
export class Act1Component implements OnInit {
  listaGlobal : any = [];
  @Input() nombreact1: number | string | undefined;
  @Input() listaHija : any = [] ;


  constructor() {

  }




  ngOnInit(): void {

 

  }

}
