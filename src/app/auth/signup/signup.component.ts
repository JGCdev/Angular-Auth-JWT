import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        if (res.result) {
          console.log(res)
          this.signupForm.reset()
          this.router.navigate(['auth/sign-in']);
        }
      })
    } else {
      console.log('formulario invalido', this.signupForm);
    }

  }
}
