import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ContactService } from '../service-contact/contact.service'
import { PersonService } from '../service-person/person.service'


interface IPerson {
  name: string;
  lastName: string;
  cpf: string;
  date: string;
}

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.scss']
})
export class AddContatoComponent implements OnInit {
  formAdd: FormGroup;
  contactType = 'TELEPHONE';

  id: string='';
  person: IPerson = {
    name: '',
    lastName: '',
    date: '',
    cpf: '',
  };

   constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private servicePerson: PersonService,
    private serviceContact: ContactService,
  ) {
    this.formAdd = this.fb.group({
      value: ['', Validators.required],
    });
  }

   ngOnInit(): void {
     this.getPerson();
   }

   type(type: string){
     this.contactType= type;
   }

   getPerson() {
    const id = localStorage.getItem('personEdit');
    this.servicePerson.getPersonById(id).subscribe(
      (succ) => {
        console.log(succ);
        this.person = {
          name: succ.name,
          lastName: succ.lastName,
          date: succ.date,
          cpf: succ.cpf,
        };
        this.id = succ.id;
      },
      (err) => {
        console.log(err);
        this.snackBar.open(`Problema ao pegar dados de usuário: ${err.error}`);
      }
    );
  }

  add() {
    if(this.formAdd.valid && this.id != ''){
      console.log('oi')
      const contact = {
        person: {
          name: this.person.name,
          lastName: this.person.lastName,
          date: this.person.date,
          cpf: this.person.cpf,
        },
        value: this.formAdd.get('value')?.value,
        contactType: this.contactType
      }
      this.serviceContact.postContact(contact).subscribe(
          (succ) => {
            this.snackBar.open('Usuario alterado com sucesso');
          },
          (err) => {
            this.snackBar.open(`Problema ao cadastrar usuário: ${err.error}`);
          }
        );
    }
  }
}


