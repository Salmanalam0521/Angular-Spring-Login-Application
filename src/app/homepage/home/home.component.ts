import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/login-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:LoginServiceService){}
  token:string|null=null;

 userDetails:any;

  ngOnInit(){
    this.getUser();
  }
  getUser(){
    this.service.getUserDetails().subscribe(
      (response)=>{
        this.userDetails=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
