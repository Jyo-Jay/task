import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http'
import { Data } from '../app/model/data.model';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  apiURL="http://localhost:4200/assets/data.json"

  data$!:Observable<Data[]>


  constructor( private http:HttpClient) { }


  getData():Observable<Data[]>{
    this.data$=this.http.get<Data[]>(this.apiURL)
    return this.data$
  }
}

