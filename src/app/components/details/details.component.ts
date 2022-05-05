import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../services/projects.services";
import { Project } from "../../models/project";
import { Global } from "../../services/global";
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[ProjectsService]

})
export class DetailsComponent implements OnInit {

  public url:string;
  public project!: Project;


  constructor(
    private _projectService: ProjectsService,
    private _router: Router,
    private _route : ActivatedRoute,

  ) {
    this.url=Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
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


  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/proyectos']);
        }

      }, error => {
        console.log(<any>error)
      }
    )

  }


}
