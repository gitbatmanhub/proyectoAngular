import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../sercices/projects.services";
import { Project } from "../../models/project";
import { Global } from "../../sercices/global";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectsService]
})
export class ProjectsComponent implements OnInit {
public projects: Project[];
public url: string;
  constructor(
    private _projectService:ProjectsService


) {
    this.url= Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }
getProjects(){
    this.projects = [];
    this._projectService.getProject().subscribe(
      response =>{
        if (response.projects){
          this.projects= response.projects;
        }
      }, error => {
        console.log(<any>error);
      }
    );
}
}
