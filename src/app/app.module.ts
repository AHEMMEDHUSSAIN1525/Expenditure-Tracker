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
import {CheckboxModule} from 'primeng/checkbox';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from'@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ReportComponent } from './report/report.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SendComponent } from './records/send/send.component';
import { ReceiveComponent } from './records/receive/receive.component';

import { RecordsService } from './shared/services/records.service';
import { FiltersComponent } from './filters/filters.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddincomeComponent,
    TrackertableComponent,
    LoginComponent,
    NavbarComponent,
    PieChartComponent,
    BarChartComponent,
    ReportComponent,

    SendComponent,
    ReceiveComponent,
    FiltersComponent
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
    CheckboxModule,
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
      ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }