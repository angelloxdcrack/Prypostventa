import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app//login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  {
    path: '',
     loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NopagefoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
