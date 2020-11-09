import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();


  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(formdata: NgForm) {
     
    const loginResult = this.data.login(this.user);

    //console.log('los datos que llevo',loginResult);
    
    if (loginResult) {
      
      this.router.navigateByUrl('/new-post');


    //console.log('Aqui tienes el fallo',loginResult);
      
        
    } else {
      
      alert('Vuelve a intentarlo, algo no va bien')

    }
    
    

  
}
}