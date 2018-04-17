import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInput } from './bad-input';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  body = JSON.stringify({
    CvLink: 'Petar',
    SourceCodeLink: 'https://github.com/builtforbeginners',
    IsTest: true
  });

  constructor(private serviceApp: AppService) {}

  ngOnInit(): void 
  {
    this.serviceApp.callWebService(this.body)
      .subscribe(
        newResponse => {
          console.log(newResponse)
        }, 
        (error:AppError) => {
            if(error instanceof BadInput){ }
            else 
              throw error;
        });
  }
}
