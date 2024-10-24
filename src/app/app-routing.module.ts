import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { CreateComponent } from './components/user/create/create.component';
import { DeleteComponent } from './components/user/delete/delete.component';
import { UpdateComponent } from './components/user/update/update.component';
import { CategoryComponent } from './views/category/category.component';
import { CreateComponent as CreateProperty } from './components/category/create/create.component';
import { DeleteComponent as DeleteProperty } from './components/category/delete/delete.component';
import { UpdateComponent as UpdateProperty } from './components/category/update/update.component';
import { ProductComponent } from './views/product/product.component';
import { CreateComponent as CreateProduct } from './components/product/create/create.component';
import { DeleteComponent as DeleteProduct } from './components/product/delete/delete.component';
import { UpdateComponent as UpdateProduct } from './components/product/update/update.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },

  // User Routes
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },
  {
    path: 'users/create',
    component: CreateComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'users/update/:id',
    component: UpdateComponent,
  },
  {
    path: 'users/delete/:id',
    component: DeleteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },

  // Property Routes
  {
    path: 'categories',
    component: CategoryComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },
  {
    path: 'categories/create',
    component: CreateProperty,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },
  {
    path: 'categories/update/:id',
    component: UpdateProperty,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'categories/delete/:id',
    component: DeleteProperty,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },

  // Product Routes
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },
  {
    path: 'product/create',
    component: CreateProduct,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,USER',
    },
  },

  {
    path: 'product/update/:id',
    component: UpdateProduct,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'product/delete/:id',
    component: DeleteProduct,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN',
    },
  },
  ...LoginRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
