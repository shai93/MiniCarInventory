import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  model=[];

  selectedfile:File = null;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getAllManufacturers()
        .subscribe((data)=> {
          this.model = data
        })
  }

  onFileSelected(event){
    //console.log(event.target.files[0]);
    this.selectedfile = event.target.files[0];
  }
  addModelRecord(data) {
    data.file = this.selectedfile;
    data.filename = this.selectedfile.name;
    data.filetype = this.selectedfile.type;
    data.filesize = this.selectedfile.size;
    //console.log(data);
    console.log(this.apiservice.createModel(data));
  }

}
