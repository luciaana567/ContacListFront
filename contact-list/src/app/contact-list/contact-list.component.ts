import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../service-contact/contact.service';

interface IContact {
  value: string;
  contactType: string;
  person: IPerson;
  contactId: number;
}

interface IPerson {
  name: string;
  lastName: string;
  cpf: string;
  date: string;
  id: number;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  listContact: IContact[] = [];

  name = '';
  constructor(
    private service: ContactService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getContacts();
    this.name = this.listContact[0].person.name;
  }

  getContacts() {
    const id = localStorage.getItem('personIdContacts');
    console.log(id)
    this.service.getAllContactByPerson(id).subscribe((succ: any) => {
      // succ.map((item: IContact) => {

      //   this.listContact.push(item);
      // });
      console.log(succ)
      this.listContact=succ;
    });
  }

  countList() {
    return this.listContact.length;
  }

  editContact(person: any) {
    localStorage.setItem('personEdit', `${person.personId}`);
    this.router.navigate([`/editPerson`]);
  }

  delete(contact: any) {
    console.log(contact);
    this.service.deleteContactById(contact.contactId).subscribe(
      (succ) => {
        this.snackBar.open('Contato deletado com sucesso');
        const index = this.listContact.findIndex(contact);
        this.listContact.slice(index, 1);
      },
      (err) => {
        this.snackBar.open(`Erro ao deletar contato: ${err.error}`);
      }
    );
  }
}
