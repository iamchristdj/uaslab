import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  addFriend(friend: Friend) {
    throw new Error('Method not implemented.');
  }

  private dbPath = '/friends';

  friendsRef: AngularFireList<Friend> = null;

  constructor(private db:AngularFireDatabase) {
    this.friendsRef = db.list(this.dbPath);
   }

  createFriend(friend: Friend): void{
    this.friendsRef.push(friend);
  }

  updateFriend(key: string,value: any): Promise<void>{
    return this.friendsRef.update(key, value);
  }

  deleteFriend(key: string):Promise<void>{
    return this.friendsRef.remove(key);
  }

  getFriendsList(): AngularFireList<Friend> {
    return this.friendsRef;
  }

  deleteAll(): Promise<void>{
    return this.friendsRef.remove();
  }
}
