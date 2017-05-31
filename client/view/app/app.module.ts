import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from '../../components';
import { DashboardComponent, ContactComponent, DetailsComponent, SponsorsComponent} from '../index';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'sponsors', component: SponsorsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
