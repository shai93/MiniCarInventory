import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Manufacturer } from './manufacturer';
import {Alldata} from './alldata';

const API_URL = "http://localhost";

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  public getAllManufacturers(): Observable<Manufacturer[]>{
      return  this.http.get('http://localhost/Manufacturer.php?getmanufacturer')
      .map((res: Response)=>{
        let body;
        if (res.text()) {
          body = res.json();
        }
        return body || {};
      })
      .catch(this.handleError);
  }

  public getAllData(): Observable<Alldata[]>{
    return  this.http.get('http://localhost/Db.php?alldata')
    .map((res: Response)=>{
      let body;
      if (res.text()) {
        body = res.json();
      }
      return body || {};
    })
    .catch(this.handleError);
}

  public createManufacturer(manufacturer:{}){
    //console.log(manufacturer);
      return this.http
        .post('http://localhost/Manufacturer.php?addmanufacturer', manufacturer)
        .subscribe((res:Response)=>{ console.log(res);alert('Success'); location.reload();},
          (err)=>{
            //console.log(err);
        })
  }

  public createModel(model:{}){
    console.log(model);
    console.log('ssss');
      return this.http
        .post('http://localhost/Model.php?addmodel', model)
        .subscribe((res:Response)=>{ },//alert('Success');location.reload();},
          (err)=>{
            //console.log(err);
        })
  }

  public deleteModel(modelid:{}){
    console.log(modelid);
      return this.http
        .post('http://localhost/Model.php?deletemodel', modelid)
        .subscribe((res:Response)=>{alert('Success'); location.reload();},
          (err)=>{
            //console.log(err);
        })
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
