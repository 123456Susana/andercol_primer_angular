import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  //atributos=variables
  nombre: string="Susana";
  edad:number=20

  numeros:any[]=[1,2,3,4,5,6,7,8,9,10];

  // personajes:any[]=["https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/2.jpg?alt=media&token=1e016554-0654-442b-8870-28594aa8f94f", "https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/betty.jpeg?alt=media&token=132da2d1-0019-495a-aec5-ff1ce1642c41","https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/marce.jpg?alt=media&token=b8df4023-bd2e-4851-ae25-5430c40aaf71" , "https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/patri.jpg?alt=media&token=cc54739d-f30c-4dbc-b57b-43128d7b7be0", "https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/arando.jpg?alt=media&token=8851a8b4-f14c-47c4-9910-4a7050c1b892"];

  personajes:Personaje[]=[
    {"nombre":"betty", "edad":30, "foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/betty.jpeg?alt=media&token=132da2d1-0019-495a-aec5-ff1ce1642c41"},
    {"nombre":"armando", "edad":45, "foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/arando.jpg?alt=media&token=8851a8b4-f14c-47c4-9910-4a7050c1b892"},
    {"nombre":"patricia","edad":36,"foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/patri.jpg?alt=media&token=cc54739d-f30c-4dbc-b57b-43128d7b7be0"},
    {"nombre":"mario","edad":40,"foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/2.jpg?alt=media&token=1e016554-0654-442b-8870-28594aa8f94f"},
    {"nombre":"marcela","edad":37,"foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/marce.jpg?alt=media&token=b8df4023-bd2e-4851-ae25-5430c40aaf71"}
  ]


  constructor() { }

}
