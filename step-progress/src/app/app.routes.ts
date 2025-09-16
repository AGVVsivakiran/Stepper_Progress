import { Routes } from '@angular/router';
import { StepProgress } from './step-progress/step-progress';

export const routes: Routes = [
    {path: '', redirectTo: 'step-progress', pathMatch: 'full'},
    {path: 'step-progress', component: StepProgress}
];
