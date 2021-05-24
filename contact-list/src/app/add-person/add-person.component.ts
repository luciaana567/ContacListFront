import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../service-person/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  formAdd: FormGroup;

  constructor(private fb: FormBuilder, private service: PersonService) {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  add() {
    if (!this.formAdd.invalid) {
      this.service
        .postPerson({
          name: this.formAdd.get('name'),
        })
        .subscribe((succ) => {
          alert('sucess');
        });
    }
  }
}
