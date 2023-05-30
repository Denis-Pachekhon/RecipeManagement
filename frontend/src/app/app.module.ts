import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchbarComponent } from './searchbar/searchbar.component';

import {AuthService} from './auth.service';
import {RecipeService} from './recipe.service'
import { HttpClientModule } from '@angular/common/http';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecipesComponent,
    RecipeDetailComponent, 
    RecipeEditComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    RecipeCardComponent,
    RecipeAddComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
