import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})
export class LoginContentComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}
