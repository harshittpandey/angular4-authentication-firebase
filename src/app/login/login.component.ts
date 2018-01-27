import { Component, OnInit, HostBinding } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [moveIn()],
  host :{'[@moveIn]' : ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor (public af: AngularFireAuth,private router :Router) {
this.af.auth.onAuthStateChanged((user) =>{
  		if(user) {
  			this.router.navigateByUrl('/members');
  		}
  	});
  }

  loginFb() {
  	this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
  }

  loginGoogle() {
  	this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

  ngOnInit() {
  }

}
