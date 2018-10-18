import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ng-zone-test',
  templateUrl: './ng-zone-test.component.html',
  styleUrls: ['./ng-zone-test.component.css']
})
export class NgZoneTestComponent implements OnInit, AfterViewInit {
  progress = 0;
  text;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit() {
    this.text = 'hellp world!';
  
  }

  ngAfterViewInit() {
    this.text = 'oops!'
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);
  
    if (this.progress < 100) {
      window.setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

}
