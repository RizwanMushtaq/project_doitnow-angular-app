import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public credentialsIncorrect = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.credentialsIncorrect = false;
    const { username, password } = this.loginForm.value;

    this.loginService.login(username, password).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      this.credentialsIncorrect = true;
    } else if (error.status === 0) {
      alert('Something went with Infrastructure. Contact IT team');
    } else {
      alert('Please try again or contact IT team.');
    }
  }
}
