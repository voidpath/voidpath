import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private pageService: PageService,
  ) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.pageService.updateAuthState(true);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }


  addDisplayName(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const displayName = prompt('enter a display name');

    const data = { 
      displayName: displayName
    } 

    return userRef.set(data, { merge: true });

  }



  signUp(email: string, displayName: string, fullName: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        this.createUserProfile(credential.user, displayName, fullName);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  private createUserProfile(user: any, displayName: string, fullName: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = { 
      uid: user.uid, 
      email: user.email,
      status: 'testing',
      displayName: displayName,
      fullName: fullName,
      photoURL: 'https://st2.depositphotos.com/1502311/12020/v/380/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg?forcejpeg=true',
    } 
    return userRef.set(data, { merge: true });
  }


  signIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((credential) => {
        const user = credential.user;
        console.log('hello user: ' + user!.uid);
        this.pageService.updateAuthState(true);
        this.router.navigate(['/profile']);
        return this.updateUserProfile(user);
      }).catch((error) => {
        console.error(error.code, error.message);
      })
  }

  private updateUserProfile(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = { 
      uid: user.uid, 
      email: user.email,
      status: 'testing',
      displayName: user.displayName,
      fullName: user.fullName,
      photoURL: user.photoURL
    } 
    return userRef.set(data, { merge: true });
  }


  async signOut() {
    await this.afAuth.signOut();
    this.pageService.updateAuthState(false);
    this.router.navigate(['/profile']);
  }
  

}
