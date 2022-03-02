import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 
  @Input() usuario: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.usuario);
  }

}
