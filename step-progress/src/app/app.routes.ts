import { Routes } from '@angular/router';
import { StepProgress } from './step-progress/step-progress';
import { Switch } from './excercise/switch/switch';
import { Funnel } from './funnel/funnel';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'step-progress', component: StepProgress},
    {path: 'switch', component: Switch},
    {path: 'funnel', component: Funnel}
];
