import { Component, OnInit } from '@angular/core';
import { User } from '../models/userInterface';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  Users: User | any

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.userService.getUsers()
      .subscribe(resp => {
        this.Users = resp
      })
  }

}
