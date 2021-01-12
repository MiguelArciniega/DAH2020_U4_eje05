import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  // Register
  async onRegister(user: User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error) {
      console.log('error en registro', error);
    }
  }

  // Login
  async onLogin(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error) {
      console.log('error en registro', error);
    }
  }

  loginGitUser() {
    return this.afAuth.signInWithPopup(new auth.GithubAuthProvider());
  }

  loginGoogleUser() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}

