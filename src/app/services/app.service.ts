import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class AppService extends DataService
{
  constructor(http: Http) { 
    super('http://applyf5.azurewebsites.net:80/f5tech/apply', http);
  }
}
