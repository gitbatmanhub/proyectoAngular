import { Component, OnInit } from '@angular/core';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider!: number;
  public anchoToSlider!: any;
  public captions:boolean;
  public autor!: any;



  constructor() {
    this.captions=true;
  }

  ngOnInit(): void {

  }

  cargarSlider(){

    this.anchoToSlider = this.widthSlider;
  }

  borrarSlider(){
    this.anchoToSlider= false;
  }

  getAutor(event:any){
    this.autor = event;
  }

}
