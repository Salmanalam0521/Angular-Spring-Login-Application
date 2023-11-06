import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './loginpage/login/login.component';
import { NotFoundComponent } from './defaultpage/not-found/not-found.component';
import { NavbarComponent } from './navigationpage/navbar/navbar.component';
import { FooterComponent } from './footerpage/footer/footer.component';

const Router:Routes=[
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Router),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
