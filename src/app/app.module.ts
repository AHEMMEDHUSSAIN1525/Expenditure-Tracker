import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddincomeComponent } from './addincome/addincome.component';
import { TrackertableComponent } from './trackertable/trackertable.component'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from'@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ReportComponent } from './report/report.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AddincomeComponent,
    TrackertableComponent,
    LoginComponent,
    NavbarComponent,
    PieChartComponent,
    BarChartComponent,
    ReportComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TableModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component: LoginComponent
        },
        {
          path:'addincome',
          component: AddincomeComponent
        },
        {
          path:'report',
          component: ReportComponent
        }
      ]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }