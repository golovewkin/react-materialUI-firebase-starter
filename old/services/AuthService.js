import firebase from './firebase';
import {LogService} from "./LogService";
import {UserDBService} from "./UserDBService";

export class AuthService {
  static async signOut(history) {
    try {
      await firebase.auth().signOut();
      history.push('/');
    } catch (e) {
      LogService.showAndLogError('sign out error', e);
    }
  }

  static async logIn(email, password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      LogService.showAndLogError('log in error', e);
    }
  }

  static async createFirebaseAccount(email, password, history) {
    try {
      await UserDBService.createUser({email, password});
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (e) {
      LogService.showAndLogError('create account error', e);
    }
  }
}
