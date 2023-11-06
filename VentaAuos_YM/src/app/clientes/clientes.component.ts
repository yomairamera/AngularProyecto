import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/Cliente';
import { clienteService } from '../servicios/Clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class Clientescomponent implements OnInit {
  
  tituloPagina = "Registro del cliente";
  cliente = { id:"", nombre:"", apellido:"", telefono:"", email:"" };
  quiereContacto: boolean = false;
  formularioCliente: FormGroup;

  constructor(private _router: Router,private clienteService: clienteService, private formBuilder: FormBuilder) { }

  wasValidated = false;


  ngOnInit(): void {
    this.formularioCliente = this.formBuilder.group({
      "id": [null, Validators.required],
      "nombre": [null, Validators.required],
      "apellido":[null, Validators.required],
      "telefono": [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')])],
      "email":[null, Validators.required],
    });
    console.log(this.formularioCliente);
  }

 
  goInicio(): void {
    this._router.navigate(['/home']);
  }

  registra(): void {
    //alert("En construccion");
    //this._router.navigate(["/autos"]);

    this.formularioCliente.controls['id'].setValue(null);
    this.formularioCliente.controls['nombre'].setValue(null);
    this.formularioCliente.controls['apellido'].setValue(null);
    this.formularioCliente.controls['telefono'].setValue(null);
    this.formularioCliente.controls['email'].setValue(null);
    this.wasValidated = false;

    let cliente: Cliente = {...this.formularioCliente.value};
    console.log(cliente);
    this.clienteService.agregarCliente(cliente).subscribe((respuesta) =>{
      alert(respuesta.mensaje);
      console.log(respuesta);
    } )
  }

  guardarCliente(){

    this.wasValidated = true;
    if(!this.formularioCliente.valid){
      console.log(this.formularioCliente);
      alert("Faltan campos requeridos");
      return;
    }
    let cliente:Cliente = {...this.formularioCliente.value};
    console.log(cliente);
    this.clienteService.agregarCliente(cliente).subscribe((respuesta)=>{
      alert(respuesta.mensaje);
      if(respuesta.codigo == 1){
        this.registra();
      }
      console.log(respuesta);
    },
    (errorHttp:HttpErrorResponse) => {
      console.log(errorHttp.error);
      let mensaje = errorHttp.error.mensaje;
      mensaje += errorHttp.error.error?.id ? (' - ' + errorHttp.error.error?.id) : "";
      mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
      mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
      mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
      mensaje += errorHttp.error.error?.email ? (' - ' + errorHttp.error.error?.email) : "";
      alert(mensaje);
    });

    this._router.navigate(["/home"]);

    }
}
