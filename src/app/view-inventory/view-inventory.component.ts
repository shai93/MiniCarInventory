import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  model=[];
  manuName:string;
  modelName:string;
  model_id:number;
  color:string;
  year:number;
  reg_no:number;
  note:string;
  soldModelId ={"model_id":null};

  constructor(private apiservice: ApiService,private modalService: NgbModal) { }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };

    this.apiservice.getAllData()
        .subscribe((data)=> {
          this.model = data
          console.log(this.model);
        })
  }

  openLg(content,data) {
    this.modelName = data.model;
    this.model_id = data.model_id;
    this.manuName= data.manu;
    this.color=data.color;
    this.year=data.year;
    this.reg_no=data.reg_no;
    this.note=data.note;

    this.modalService.open(content, { size: 'lg' });
  }

  sold(modelid){
    this.soldModelId.model_id = modelid;
    this.apiservice.deleteModel(this.soldModelId);
  }

}
