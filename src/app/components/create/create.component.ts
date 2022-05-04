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
  public status: string;


  constructor(
    private _projectService: ProjectsService
  ) {
    this.title = 'Crear Projecto';
    this.project = new Project('', '', '', '', 2022, '', '');
    this.status = "";
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
          this.status = 'succes';
          form.reset();
        }else{
          this.status = 'failed';
        }
      }, error => {
        console.log(<any>error);

      }
    )
  }

}
