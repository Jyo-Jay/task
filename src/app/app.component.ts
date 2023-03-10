import { Component, OnInit} from '@angular/core';
import { Data } from '../app/model/data.model'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'senwell-task';

  dataList:Data[] =[]

  constructor (private dataService: DataService){ }


  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next:(list:Data[])=>this.dataList=list,
      error:(e:any)=>console.error("Error",e),
      complete:()=>console.log("Done")
    })
  }


}

