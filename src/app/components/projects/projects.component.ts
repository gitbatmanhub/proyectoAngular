import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../services/projects.services";
import { Project } from "../../models/project";
import { Global } from "../../services/global";

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
    this.projects=[];
    this.url= Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }
getProjects(){
    this.projects = [];
    this._projectService.getProjects().subscribe(
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
