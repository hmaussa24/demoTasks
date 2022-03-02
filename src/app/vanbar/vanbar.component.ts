import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-vanbar',
  templateUrl: './vanbar.component.html',
  styleUrls: ['./vanbar.component.css']
})
export class VanbarComponent implements OnInit {

  buscar:string;
  @Output() 
  propagar: EventEmitter<any[]> = new EventEmitter();
  usuarios: any[] = [];

  constructor(private restService: RestService) {
    this.buscar="";
   }

  ngOnInit(): void {

  }

  public buscarByEmail(){
    this.restService.get(`http://localhost:8080/api/users/${this.buscar}`)
    .subscribe(result => {
      this.usuarios.push(result)
      this.propagar.emit(this.usuarios);
      this.usuarios = []
    })
  }

}
