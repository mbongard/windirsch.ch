import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  username?: string;

  setSession(username: string): void {
    this.username = username;
  }
}
