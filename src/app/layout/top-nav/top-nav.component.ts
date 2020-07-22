import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  islogin = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue) {
      this.islogin = true;
    }else{
      this.islogin = false;
    }
  }
  logout(): void {
    this.authenticationService.logout();
  }

}
