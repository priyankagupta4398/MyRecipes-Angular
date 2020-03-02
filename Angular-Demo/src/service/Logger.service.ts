import { Injectable } from '@angular/core';

@Injectable()

export class Logger {

  constructor() { }

  demologger(log: any) {
    console.log(log);
  }

}
