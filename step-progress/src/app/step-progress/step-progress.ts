import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-progress',
  imports: [FormsModule,CommonModule,],
  templateUrl: './step-progress.html',
  styleUrl: './step-progress.scss'
})
export class StepProgress {
  options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' }
  ];

  selectedValue = '1';   // default selection
  progressValue = 0;     // default progress bar width

  onSelectChange() {
    switch (this.selectedValue) {
      case '1':
        this.progressValue = 0;   // start
        break;
      case '2':
        this.progressValue = 25;  // quarter complete
        break;
      case '3':
        this.progressValue = 50;  // half complete
        break;
      case '4':
        this.progressValue = 100; // fully complete 🎉
        break;
      default:
        this.progressValue = 0;
    }
  }
}