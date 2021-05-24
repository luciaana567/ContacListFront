import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPeopleComponent } from './list-people/list-people.component';

const routes: Routes = [
  {
    path: '',
    component: ListPeopleComponent,
  },
  {
    path: 'listPeople',
    component: ListPeopleComponent,
  },
  {
    path: 'addPerson',
    component: AddPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
