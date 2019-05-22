import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockDiaryComponent } from './stock-diary/stock-diary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DiaryServiceService} from './diary-service.service';
const appRoutes: Routes=[
  {path:'home', component:HomeComponent},
  {path:'write', component:AddEntryComponent},
  {path:'read', component:StockDiaryComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockDiaryComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DiaryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
