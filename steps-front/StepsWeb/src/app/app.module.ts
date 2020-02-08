import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatGridListModule,
  MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GuideListComponent } from './component/guide-list/guide-list.component';
import { NavComponent } from './component/nav/nav.component';
import { NewGuideFormComponent } from './component/new-guide-form/new-guide-form.component';
import { EditGuideComponent } from './component/edit-guide/edit-guide.component';
import { GuideComponent } from './component/guide/guide.component';
import { GuideStepsComponent } from './component/guide-steps/guide-steps.component';
import { SearchGuidesComponent } from './component/search-guides/search-guides.component';
import { ViewGuideComponent } from './component/view-guide/view-guide.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    GuideListComponent,
    NavComponent,
    NewGuideFormComponent,
    HomeComponent,
    EditGuideComponent,
    GuideComponent,
    GuideStepsComponent,
    SearchGuidesComponent,
    ViewGuideComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
