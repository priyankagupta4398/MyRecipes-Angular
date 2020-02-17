import { Injectable } from '@angular/core';

@Injectable()

export class Logger {

  constructor() { }

  demologger(log: string) {
    console.log(log);
  }

}
