import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';

@NgModule({
  exports: [ProjectsContainerComponent],
  declarations: [ProjectsContainerComponent, ProjectListComponent, ProjectCardComponent, ProjectFormComponent, ValidationErrorsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
