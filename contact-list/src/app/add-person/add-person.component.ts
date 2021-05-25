import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonService } from '../service-person/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  formAdd: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private service: PersonService
  ) {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', [Validators.required]],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  add() {
    if (this.formAdd.valid) {
      this.service
        .postPerson({
          name: this.formAdd.get('name')?.value,
          lastName: this.formAdd.get('lastName')?.value,
          cpf: this.formAdd.get('cpf')?.value,
          date: this.formAdd.get('date')?.value,
        })
        .subscribe(
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
