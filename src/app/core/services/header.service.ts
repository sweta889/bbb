import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {

  public title : BehaviorSubject<string> = new BehaviorSubject('Header');
  public path : BehaviorSubject<string> = new BehaviorSubject('Home');

  constructor() { }

}
