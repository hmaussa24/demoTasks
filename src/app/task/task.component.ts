import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() tareas: ITask = {};

  @Output() delete: EventEmitter<boolean> = new EventEmitter();

  constructor(private rest: RestService) { }

  ngOnInit(): void {

    console.log(this.tareas)
  }

  public deleteTask(id?:number){
    this.rest.get(`http://localhost:8080/api/tasks/delete/${id}`)
    .subscribe(result => {
      this.delete.emit(true);
      console.log("Eliminado")
    })
  }

}

interface ITask {
  id?: number;
  important?: boolean;
  task?: string;
}
