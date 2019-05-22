import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

DiaryEntryForm = new FormGroup({
  diaryHeading : new FormControl('New Diary Entry'),
  diaryEntryDate : new FormControl(''),
  diaryEntry : new FormControl('')
});


  saveEntry() {
  //save method called
  //console.log(JSON.stringify(this.DiaryEntryForm.value));
  console.log(this.DiaryEntryForm.value);

  }

}
