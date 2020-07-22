import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute, private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  async onSubmit(): Promise<void> {
    try {
      this.isLoading = true;
      if (this.loginForm.valid) {
        await this.authenticationService.login(this.loginForm.value, this.returnUrl);
      }
    } catch (error) {
      console.log(error);

    } finally {
      this.isLoading = false;
    }
  }
}
