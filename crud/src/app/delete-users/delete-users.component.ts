import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/userInterface';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {
  user: User

  constructor(private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.userService.getUsersById(id).subscribe(user => {
      this.user = user
    })
  }

  deleteUser(): void {
    this.userService.deleteUser(this.user.id).subscribe(() => {
      console.log('user deletado')
      this.router.navigate(['/table-users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/table-users'])
  }

}
