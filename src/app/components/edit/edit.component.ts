import { Component, OnInit } from '@angular/core';
import { Project} from "../../models/project";
import { ProjectsService} from "../../services/projects.services";
import { uploadService } from "../../services/upload.services";
import { Global } from "../../services/global";
import {Router, ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectsService, uploadService]
})
export class EditComponent implements OnInit {
  public title:string;
  public project!: Project;
  public saveProject!: Project;
  public status!: string;
  public filesToUpload!: Array<File>;
  public url: string;


  constructor(
    private _projectService: ProjectsService,
    private _uploadService: uploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Editar Proyecto';
    this.url=Global.url;

  }



  ngOnInit(): void {
    this._route.params!.subscribe(params=>{
      let id = params.id;

      this.getProject(id);

    });
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project= response.project;

      }, error => {
        console.log(<any>error)
      }
    )

  }
  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
        response =>{
          if(response.project){


            //Subir imágen
            if (this.filesToUpload){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) =>{
                this.saveProject = response.project;
                this.status = 'succes';
              });
            }else{
              this.saveProject = response.project;
              this.status = 'succes';
            }

          }else{
            this.status = 'failed';
          }
        }, error => {
        }
      )

  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
}
