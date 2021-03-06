import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-material-owneraccount';
  public reportedError: boolean;
  public errorPercentage = 0;
  public timer;

  constructor() { }

  public checkChanged = (event) => {
    this.reportedError = event.checked;

    this.reportedError ? this.startTimer() : this.stopTimer();
  }

  private startTimer = () => {
    this.timer = setInterval(() => {
      this.errorPercentage += 1;

      if (this.errorPercentage === 100) {
        clearInterval(this.timer);
      }
    }, 30);
  }

  private stopTimer = () => {
    clearInterval(this.timer);
    this.errorPercentage = 0;
  }
}
