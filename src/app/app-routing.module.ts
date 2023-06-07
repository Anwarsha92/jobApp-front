import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"adminpannel", component:AdminpannelComponent},
  {path:"admindashboard", component:AdmindashboardComponent},
  {path:"applications", component:ApplicationsComponent},
  {path:"notifications", component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
