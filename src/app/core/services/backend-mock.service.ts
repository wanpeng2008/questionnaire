import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable()
export class BackendMockService implements InMemoryDbService{

  constructor() { }
  createDb() {
    return {
      'login': [],
      'questionnaires': []
    }
  }
}


