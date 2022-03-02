import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap
    })
  }


  public getTasks(userid: string){
    this.rest.get("")
  }



}
