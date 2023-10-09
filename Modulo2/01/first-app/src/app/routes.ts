import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeatilsComponent } from './deatils/deatils.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DeatilsComponent,
    title: 'Home Details',
  },
];

export default routeConfig;
