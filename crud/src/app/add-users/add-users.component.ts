import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/userInterface';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  // name = new FormControl('')
  // newUserForm: FormGroup
  // buttonType: any

  form: FormGroup
  constructor(private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['']
    })
  }
  ngOnInit(): void { }

  submitForm() {
    const valorForm = {
      name: this.form.get('name').value
    }
    this.userService.createUsers(valorForm).subscribe((res: any) => {
      console.log(res)
      this.form.reset()
      this.router.navigate([''])
    })
    // let formData: any = new FormData()
    // formData.append('name', this.form.get('name').value)
  }

  cancelar(): void {
    this.form.reset()
    console.log('Operação cancelada')
    this.router.navigate([''])
  }

}
