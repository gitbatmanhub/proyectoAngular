import { Component, OnInit } from '@angular/core';
import { Project} from "../../models/project";
import { ProjectsService} from "../../sercices/projects.services";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectsService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project: Project;


  constructor(
    private _projectService: ProjectsService
  ) {
    this.title = 'Crear Projecto';
    this.project = new Project('', '', '', '', 2022, '', '');
  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(this.project);

  }

}
