import { Component, OnInit } from '@angular/core';
import {DiaryServiceService} from '../diary-service.service';
@Component({
  selector: 'app-stock-diary',
  templateUrl: './stock-diary.component.html',
  styleUrls: ['./stock-diary.component.css']
})
export class StockDiaryComponent implements OnInit {

  constructor(private service: DiaryServiceService) { }
diaryEntryList = [
  {diaryHeading: "New Diary Entry de", diaryEntryDate: "Thu May 30 2019 09:33:09 GMT+0000 (Greenwich Mean Time)", diaryEntry: "test sda"},
  {diaryHeading: "New Diary Entry de", diaryEntryDate: "Thu May 27 2019 09:33:09 GMT+0000 (Greenwich Mean Time)", diaryEntry: "test sda 1"}
];


  ngOnInit() {
 this.service.getJSON().subscribe( data => {
  console.log(data);
  this.diaryEntryList = data.Listdata;
});

  }

}
