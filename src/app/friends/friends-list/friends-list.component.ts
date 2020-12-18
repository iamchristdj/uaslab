import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {

  friends: any;

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriendsList();
  }

  getFriendsList(){
    this.friendService.getFriendsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(friends =>{
      this.friends = friends;
    });
  }

  deleteFriends(){
    this.friendService.deleteAll().catch(err => console.log(err));
  }
  
}
