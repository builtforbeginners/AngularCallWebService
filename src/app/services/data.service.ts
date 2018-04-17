import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';


@Injectable()
export class DataService 
{
  constructor(private url: string, private _http: Http){ }

  callWebService(resource)
  {
    return  this._http.post(this.url,resource)
      .map(response => response.json())
      .catch(this.handleError);    
  }

  private handleError(error: Response){
    if(error.status === 404)
      return Observable.throw(new BadInput()) ;

    if(error.status === 404)
      return Observable.throw(new NotFoundError(error));
    
      return Observable.throw(new AppError(error));
  }

}
