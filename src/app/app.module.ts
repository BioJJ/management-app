import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; 
// Component site
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

// View / Components User
import { UserComponent } from './views/user/user.component';
import { ListComponent } from './components/user/list/list.component';
import { CreateComponent } from './components/user/create/create.component';
import { DeleteComponent } from './components/user/delete/delete.component';
import { UpdateComponent } from './components/user/update/update.component';

// Module
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// View / Components Category
import { CategoryComponent } from './views/category/category.component';
import { ListComponent as ListProperty } from './components/category/list/list.component';
import { CreateComponent as CreateProperty } from './components/category/create/create.component';
import { DeleteComponent as DeleteProperty } from './components/category/delete/delete.component';
import { UpdateComponent as UpdateProperty } from './components/category/update/update.component';

// View / Components Product
import { ProductComponent } from './views/product/product.component';
import { ListComponent as ListProduct } from './components/product/list/list.component';
import { CreateComponent as CreateProduct } from './components/product/create/create.component';
import { DeleteComponent as DeleteProduct } from './components/product/delete/delete.component';
import { UpdateComponent as UpdateProduct } from './components/product/update/update.component';

import { httpInterceptorProviders } from './interceptors';
import { LineComponent } from './components/dashboard/line/line.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    UserComponent,
    ListComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    CategoryComponent,
    ListProperty,
    CreateProperty,
    DeleteProperty,
    UpdateProperty,
    ProductComponent,
    ListProduct,
    CreateProduct,
    DeleteProduct,
    UpdateProduct,
    LineComponent,
  ],
  imports: [
    AuthModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatStepperModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
