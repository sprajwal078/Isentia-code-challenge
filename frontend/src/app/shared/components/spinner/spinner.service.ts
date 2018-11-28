import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerShowing: BehaviorSubject<boolean> = new BehaviorSubject(false);

  hide(): void {
    this.spinnerShowing.next(false);
  }

  show(): void {
    this.spinnerShowing.next(true);
  }

  getSpinner(): Observable<boolean> {
    return this.spinnerShowing.asObservable();
  }
}
