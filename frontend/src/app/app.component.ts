import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './shared/components/spinner/spinner.service';

@Component({
  selector: 'isen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  spinnerShowing: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerShowing = this.spinnerService.getSpinner();
  }
}
