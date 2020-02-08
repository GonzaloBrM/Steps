import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideListComponent } from './component/guide-list/guide-list.component';
import { NewGuideFormComponent } from './component/new-guide-form/new-guide-form.component';
import { HomeComponent } from './component/home/home.component';
import { EditGuideComponent } from './component/edit-guide/edit-guide.component';
import { GuideComponent } from './component/guide/guide.component';
import { GuideStepsComponent } from './component/guide-steps/guide-steps.component';
import { SearchGuidesComponent } from './component/search-guides/search-guides.component';
import { ViewGuideComponent } from './component/view-guide/view-guide.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'myGuides' , component: GuideListComponent},
  {path: 'newGuide', component: NewGuideFormComponent},
  {path: 'editGuide', component: EditGuideComponent},
  {path: 'viewGuide', component: ViewGuideComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'guideSteps', component: GuideStepsComponent},
  {path: 'searchGuides', component: SearchGuidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
