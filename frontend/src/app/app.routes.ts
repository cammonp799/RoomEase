import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { GridLayoutWithSidebarComponent } from './pages/property/grid-layout-with-sidebar/grid-layout-with-sidebar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'grid-layout-with-sidebar', component: GridLayoutWithSidebarComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '404' }
];
