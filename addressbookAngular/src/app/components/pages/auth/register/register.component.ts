import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  userId = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  onSubmit() {
    this.userService.register(this.userForm.value).subscribe(
      (result) => this.returntoLogin(),
      (err) => {
        if (err.status == 422)
          this.toastr.error('Email address has already been taken.');
        else console.log(err);
      }
    );
  }

  returntoLogin() {
    this.router.navigate(['/auth/login']);
  }
}
