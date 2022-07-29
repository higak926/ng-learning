import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}
  public isLoadingSbj: Subject<void> = new Subject<void>();
}
