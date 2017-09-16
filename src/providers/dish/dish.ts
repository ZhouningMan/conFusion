import { baseURL } from './../../shared/baseurl';
import { Dish } from './../../shared/dish';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: Http, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }

  public getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + "dishes")
                    .map(res => this.processHTTPMsgService.extractData(res))
                    .catch(error => this.processHTTPMsgService.handleError(error));
  }
  public getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => this.processHTTPMsgService.extractData(res))
                    .catch(error => this.processHTTPMsgService.handleError(error));
  }

  public getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => this.processHTTPMsgService.extractData(res)[0])
                    .catch(error => this.processHTTPMsgService.handleError(error));
  }

}
