import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/components/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  userId = null;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkTokenIfExist();
    this.userForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.userForm.controls;
  }

  Login() {
    this.userService.login(this.userForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        if (err.status == 401)
          this.toastr.error(
            'Incorrect username or password.',
            'Authentication failed.'
          );
        else console.log(err);
      }
    );
  }

  checkTokenIfExist() {
    if (localStorage.getItem('token') != null) this.router.navigate(['/home']);
  }
}
