import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {

  friend: Friend = new Friend();
  submitted = false;

  constructor(private friendService: FriendService) { }

  ngOnInit() {

  }

  newFriend(): void{
    this.submitted = false;
    this.friend = new Friend();
  }

  save() {
    this.friendService.addFriend(this.friend);
    this.friend = new Friend();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
