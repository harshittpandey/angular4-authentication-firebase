import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFireAuth,private router: Router) {

    this.af.auth.onAuthStateChanged((user) =>{
      if(user) {
        this.name = user;
      }
    });

  }

  logout() {
     this.af.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }

}
