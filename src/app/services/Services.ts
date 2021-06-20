import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlField} from '../bo/UrlField';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {

  // URL = 'http://localhost:8080';
  URL = 'https://thetriplex-backend.herokuapp.com';
  filtroHeader: string;
  srcVideo: string;

  constructor(private http: HttpClient) {
    this.filtroHeader = '';
    this.srcVideo = '';
  }

  getAllItemsFromEntity(entity: string): Observable<any> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.get(this.URL + '/' + entity + '/' + 'getAll', {headers});
  }

  getByIdFromEntity(entity: string, id: number): Observable<any> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.get(this.URL + '/' + entity + '/getById?' + 'id=' + id, {headers});
  }

  getFromEntityByPage(entity: string, obj: any): Observable<any> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.post(this.URL + '/' + entity + '/' + 'getByPage', obj, {headers});
  }


  getItemsFromEntityByFields(entity: string, method: string, fields: UrlField[]): Observable<any> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    let urlFields = '';
    let cont = 0;
    for (const field of fields) {
      if (cont > 0) {
        urlFields += '&' + field.fieldName + '=' + field.value;
      } else if (cont === 0) {
        urlFields = field.fieldName + '=' + field.value;
      }

      cont++;
    }
    return this.http.get(this.URL + '/' + entity + '/' + method + '?' + urlFields,
      {headers});
  }

  saveEntity(entity: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.post(this.URL + '/' + entity, body, {headers});
  }

  editEntity(entity: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.put(this.URL + '/' + entity, body, {headers});
  }

  deleteEntity(entity: string, id: number): Observable<any>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    });

    return this.http.delete(this.URL + '/' + entity + '?id=' + id,  {headers});
  }

}
