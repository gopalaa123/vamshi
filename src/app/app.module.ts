import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule,MatButtonToggleModule,MatIconModule,MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule,MatMenuModule,MatListModule,MatDividerModule,MatGridListModule,MatExpansionModule,MatCardModule,MatTabsModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,MatTableModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from  './service/newsapiservices.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { SingingComponent } from './singing/singing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingingComponent,
    
 
  ],
  entryComponents: [
    LoginComponent,
    SingingComponent
  ],
  imports: [
    BrowserModule,FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
    
    
    
    

   


    

  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
