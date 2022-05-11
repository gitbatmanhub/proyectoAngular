import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var JQuery:any;
declare var $:any;


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() ancho!:number;
  @Input() captions!:boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor!: any;


  constructor() {
    this.autor = {
      nombre: "Edwin Romero",
      website:"https://github.com/gitbatmanhub"
    }


  }

  ngOnInit(): void {

    $("#logo").click(function (e:any){
      e.preventDefault();
      $("header").css("background", "green");
    });
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.ancho
    });
  }

  lanzar(event:any){
    this.conseguirAutor.emit(this.autor);
  }

}
