import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import {AuthService} from "../../../../api/gen";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
