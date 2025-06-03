import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TigrinComponent } from './pages/tigrin/tigrin.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path: 'play',
        component: TigrinComponent
    }
];
