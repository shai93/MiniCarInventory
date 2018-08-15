import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { Response } from '@angular/http';
import { ApiService } from '../api.service';
import { Manufacturer } from '../manufacturer';


@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})

export class AddManufacturerComponent implements OnInit {

  name: string;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }

  addManuRecord(data) {
    console.log(this.apiservice.createManufacturer(data));
  }
}
