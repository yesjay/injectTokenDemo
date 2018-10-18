import { Component, OnInit, Inject } from '@angular/core';
import { DATA, DATA_STRING, DATA_OBJECT, DataConfig } from './shared';

@Component({
  selector: 'app-inject-token-test',
  templateUrl: './inject-token-test.component.html',
  styleUrls: ['./inject-token-test.component.css'],
  providers: [
    {provide: DATA, useValue: DATA_OBJECT, multi: true},
    {provide: DATA, useValue: DATA_STRING, multi: true},
  ]
})
export class InjectTokenTestComponent implements OnInit {

  constructor(
    @Inject(DATA) private data: DataConfig
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

}
