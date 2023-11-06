import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:LoginServiceService,private router:Router){}
  
  token:string|null=null;
  statusCode:number|null=null;
  errorCode:number|null=null;
  message:string|null=null;

loginError:string|null=null;

  postData(data:User):void{
    console.log(data);
    this.service.login(data).subscribe(
      (response)=>{
        console.log(response);
        this.token=response.data.token
        this.errorCode=response.errorCode
        this.message=response.message
        this.statusCode=response.statusCode

        this.doNavigating();
      },
      (error)=>{
        console.log("This is error block");
        console.log(error);
      }
    )

  }

doNavigating():void{
  if(this.statusCode==0&&this.token!=null){
    this.service.updateData(this.token);
    this.router.navigate(["/home"]);
  }
  else{
    switch(this.errorCode){
      case 8:this.loginError="Authentication Error";break;
      case 9:this.loginError="Bad credentials";break;
      case 10:this.loginError="Password expired";break;
      case 11:this.loginError="Account Expired";break;
      case 12:this.loginError="Account De-activated";break;
      case 13:this.loginError="Account Locked";break;
    }
  }

}
}


