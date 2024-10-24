import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-hero',
  templateUrl: './login-hero.component.html',
  styleUrls: ['./login-hero.component.css']
})
export class LoginHeroComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}
