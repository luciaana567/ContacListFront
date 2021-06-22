import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContatoComponent } from './add-contato/add-contato.component'

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
    path: 'listContact',
    component: ContactListComponent,
  },
  {
    path: 'addPerson',
    component: AddPersonComponent,
  },
   {
    path: 'addContact',
    component: AddContatoComponent,
  },
  {
    path: 'editPerson',
    component: EditPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
