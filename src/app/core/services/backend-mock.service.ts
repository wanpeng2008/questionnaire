import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular2-in-memory-web-api";

@Injectable()
export class BackendMockService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let login = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {login};
  }
}


