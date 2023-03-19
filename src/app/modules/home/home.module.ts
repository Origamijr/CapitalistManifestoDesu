import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ResearchComponent
  ]
})
export class HomeModule { }
