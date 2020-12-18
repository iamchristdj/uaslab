import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.scss'],
})
export class FriendDetailsComponent implements OnInit {

  @Input() friend: Friend;

  constructor(private friendService: FriendService) { }

  ngOnInit() {

  }

  updateActive(isActive: boolean){
    this.friendService
      .updateFriend(this.friend.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteFriend(){
    this.friendService
      .deleteFriend(this.friend.key)
      .catch(err => console.log(err));
  }

}
