import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-list-of-friend',
  templateUrl: './list-of-friend.component.html',
  styleUrls: ['./list-of-friend.component.scss']
})
export class ListOfFriendComponent implements OnInit,OnChanges {

  @Input() user;
  images: [Object];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.getFollowerImage(this.user)
  }

  ngOnChanges(data) {
    console.log(data)
  }

  getFollowerImage(user) { // avatar from other friends
    if (user && user.following && user.following.length > 0) {
      return this.data.ListOfFriends(user).subscribe((elem) => {
        this.images = elem.json();
      })
    }
  }

}