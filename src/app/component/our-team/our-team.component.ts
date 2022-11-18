import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  users:any;
  constructor(
    public pagesService: PagesService
    ) { }

  ngOnInit(): void {    
    this.getUsers();

  }

  getUsers(){
    this.pagesService.GetUser()
      .subscribe(res=>{
        this.users=res;
      })
    }
 

}
