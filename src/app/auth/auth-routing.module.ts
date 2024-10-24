import { Routes} from "@angular/router";
import { CreateAccountComponent } from "./component/create-account/create-account.component";
import { LoginComponent } from './component/login/login.component';

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
]