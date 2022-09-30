import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/userInterface';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  @Input() user: User

  constructor(private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.userService.getUsersById(id).subscribe(user => {
      this.user = user
    })
  }

  updateUser(): void {
    // this.userService.updateUser(this.user).subscribe(() => {
    //   console.log('user atualizado')
    //   this.router.navigate(['/table-users'])
    //   console.clear()
    // })
    this.userService.updateUser(this.user).subscribe((res) => console.log('res'))
    this.router.navigate(['/table-users'])
  }

  cancel(): void {
    this.router.navigate(['/table-users'])
    console.clear()
  }

}
