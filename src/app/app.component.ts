import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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


}
