import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonService } from '../service-person/person.service';
import { DatePipe } from '@angular/common';

interface IPerson {
  name: string;
  lastName: string;
  cpf: string;
  date: string;
}

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
})
export class EditPersonComponent implements OnInit {
  formEdit: FormGroup;
  person: IPerson = {
    name: '',
    lastName: '',
    date: '',
    cpf: '',
  };

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: PersonService,
    private datePipe: DatePipe
  ) {
    this.formEdit = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', [Validators.required]],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    const id = localStorage.getItem('personEdit');
    this.service.getPersonById(id).subscribe(
      (succ) => {
        console.log(succ);
        this.person = {
          name: succ.name,
          lastName: succ.lastName,
          date: succ.date,
          cpf: succ.cpf,
        };
        this.form();
      },
      (err) => {
        console.log(err);
        this.snackBar.open(`Problema ao pegar dados de usuário: ${err.error}`);
      }
    );
  }

  form() {
    const formatDate = this.datePipe.transform(this.person.date, 'yyyy-MM-dd');
    this.formEdit = this.fb.group({
      name: [this.person.name, Validators.required],
      lastName: [this.person.lastName, Validators.required],
      cpf: [this.person.cpf, [Validators.required]],
      date: [formatDate, Validators.required],
    });
  }

  edit() {
    if (this.formEdit.valid) {
      const id = localStorage.getItem('personEdit');
      if (id) {
        this.service
          .putPersonById(id, {
            name: this.formEdit.get('name')?.value,
            lastName: this.formEdit.get('lastName')?.value,
            cpf: this.formEdit.get('cpf')?.value,
            date: this.formEdit.get('date')?.value,
          })
          .subscribe(
            (succ) => {
              this.snackBar.open('Usuario alterado com sucesso');
            },
            (err) => {
              console.log(err);
              this.snackBar.open(
                `Problema ao editar dados do usuário: ${err.error}`
              );
            }
          );
      } else {
        this.snackBar.open(`Problema ao editar dados do usuário: `);
      }
    }
  }
}
