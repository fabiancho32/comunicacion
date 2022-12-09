import { HijoComponent } from './components/hijo/hijo.component';
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"padre", component:PadreComponent},
  {path:"hijo", component:HijoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
