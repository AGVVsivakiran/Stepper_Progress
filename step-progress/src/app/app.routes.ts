import { Routes } from '@angular/router';
import { StepProgress } from './step-progress/step-progress';
import { Switch } from './excercise/switch/switch';
import { Funnel } from './funnel/funnel';
import { Login } from './login/login';
import { Table } from './table/table';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'table', component: Table},
    {path: 'step-progress', component: StepProgress},
    {path: 'switch', component: Switch},
    {path: 'funnel', component: Funnel}
];
