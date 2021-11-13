import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from 'src/schemas/actions';
import { Router } from '@angular/router';
import { Learner } from 'src/schemas/entities';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.generateFormGroup();
  }

  ngOnInit() {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group({
      teacherId: ['', Validators.compose([Validators.required])],
      learnerCode: ['', Validators.compose([Validators.required])],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const learner:Learner =  await this.loginService.login({
        teacherId: this.loginForm.controls.teacherId.value,
        learnerCode: this.loginForm.controls.learnerCode.value,
      });
      localStorage.setItem('learner': learner);
    }
  }
}
