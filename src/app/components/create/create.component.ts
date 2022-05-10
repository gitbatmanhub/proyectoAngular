import { Component, OnInit } from '@angular/core';
import { Project} from "../../models/project";
import { ProjectsService} from "../../services/projects.services";
import { uploadService } from "../../services/upload.services";
import { Global } from "../../services/global";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectsService, uploadService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project: Project;
  public saveProject!: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  public _id: Project;



  constructor(
    private _projectService: ProjectsService,
    private _uploadService: uploadService
  ) {
    this.title = 'Crear Projecto';
    this.project = new Project('', '', '', '', 2022, '', '');
    this.status = "";
    this.filesToUpload=[];
    this.url=Global.url

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    // Guardar datos
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){


          //Subir imágen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) =>{

            this.saveProject = result.project;

            this.status = 'succes';
            form.reset();
          });



        }else{
          this.status = 'failed';
        }
      }, error => {
        console.log(<any>error);

      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
