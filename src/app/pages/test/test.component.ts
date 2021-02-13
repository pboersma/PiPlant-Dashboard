import { Component, OnInit } from '@angular/core';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  faTemperatureHigh = faTemperatureHigh;
  constructor() { }

  ngOnInit(): void {
  }

}
