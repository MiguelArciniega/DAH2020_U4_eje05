import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  onLogout() {
    console.log('Logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
