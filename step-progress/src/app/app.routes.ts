import { Routes } from '@angular/router';
import { StepProgress } from './step-progress/step-progress';
import { Switch } from './excercise/switch/switch';
import { Funnel } from './funnel/funnel';

export const routes: Routes = [
    {path: '', redirectTo: 'step-progress', pathMatch: 'full'},
    {path: 'step-progress', component: StepProgress},
    {path: 'switch', component: Switch},
    {path: 'funnel', component: Funnel}
];
