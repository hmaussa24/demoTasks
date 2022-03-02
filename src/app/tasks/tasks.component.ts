import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 
  tareas: any;
  public form: any;
  user_id: string = "";
  constructor(private route: ActivatedRoute, private rest: RestService, private formBilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap
      this.getTasks(params.userid)
      this.user_id=params.userid

    })
    this.form = this.formBilder.group({
      task: [''],
      important: ['']
    })
  }


  public getTasks(userid: string){
    this.rest.get(`http://localhost:8080/api/tasks/user/${userid}`)
    .subscribe(result => {
      console.log(result)
      this.tareas = result
    })
  }

  public enviarTarea() {
    this.rest.post("http://localhost:8080/api/tasks/crear", 
    {
      task: this.form.value.task,
      important: this.form.value.important,
      user: {
        id: this.user_id
      }

    }
    )
    .subscribe(result => {
      console.log(result)
      this.getTasks(this.user_id)
      this.form.reset();
    })
  }

  public deleteTask(){
    this.getTasks(this.user_id);
  }



}
