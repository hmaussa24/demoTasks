import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'taskDemo';
  usuarios: any = []
  
  constructor(private restService: RestService){}

  ngOnInit(): void {
    this.cargarData()
  }

  public  cargarData(){
    this.restService.get("http://localhost:8080/api/users/all")
    .subscribe(result => {
        console.log(result)
        this.usuarios = result
    })
  }

  public procesarEvento($event: any[]){
        this.usuarios = $event
  }


}
