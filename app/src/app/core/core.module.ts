import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CoreModule { }
