import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-msjValidacion',
  templateUrl: './msjValidacion.component.html',
  styleUrls: ['./msjValidacion.component.css']
})
export class MsjValidacionComponent implements OnInit {

  constructor() { }

  @Input() control:AbstractControl;
  @Input() summited:boolean = false;

  ngOnInit() {
  }

  mostrarError(){
    if(!this.control){
      return false;
    }
    return this.control.invalid && this.summited;
  }

  mostrarError1(){
    if(!this.control){
      return false;
    }
    return this.control.invalid && this.summited;
  }
}