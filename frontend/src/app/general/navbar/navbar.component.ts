import { Component, OnInit}  from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(navbar => {
      this.user = navbar.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('you are logged out, redirecting to login page', {
      cssClass: 'alert-success', timeout: 5000
    });
    this.router.navigate(['login']);
    return true;
  }

  reload(){
    //window.location.href = '/dashboard/home';
    this.router.navigate(['/dashboard/home']);
  }

}
