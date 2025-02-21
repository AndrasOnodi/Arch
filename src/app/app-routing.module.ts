import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sigh-up', component: SignUpComponent},
  {path: 'sign-out', component: SignOutComponent},
  {path: '', redirectTo: 'sign-up', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
