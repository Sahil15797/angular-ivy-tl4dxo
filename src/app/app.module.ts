import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule],
  declarations: [AppComponent, HelloComponent,AdminComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
