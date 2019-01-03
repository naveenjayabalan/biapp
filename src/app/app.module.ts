import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { LoginComponent } from './login/login.component';
import { AsideSectionComponent } from './global/aside-section/aside-section.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './global/map/map.component';
import { ChartDataComponent } from './global/chart-data/chart-data.component';
import { GridTableComponent } from './global/grid-table/grid-table.component';
import {MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import {MatNativeDateModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import {MatProgressSpinnerModule, MatInputModule, MatSortModule, MatTabsModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    LoginComponent,
    AsideSectionComponent,
    HeaderComponent,
    MapComponent,
    ChartDataComponent,
    GridTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatCardModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule,
    MatDatepickerModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule, MatCheckboxModule, MatFormFieldModule,  MatInputModule, MatPaginatorModule,   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
