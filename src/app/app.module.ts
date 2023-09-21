import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Container/header/header.component';
import { NavbarComponent } from './Container/navbar/navbar.component';
import { containerComponent} from './Container/container.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './Container/search/search.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './Container/product/product.component';
import { CoursesComponent } from './Container/courses/courses.component';
import { FilterComponent } from './Container/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    containerComponent,
    BindingComponent,
    SearchComponent,
    DirectivesComponent,
    ProductComponent,
    CoursesComponent,
    FilterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
