import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service-person/person.service';

interface IPerson {
  name: string;
  lastName: string;
  cpf: string;
  date: string;
  id: number;
}

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss'],
})
export class ListPeopleComponent implements OnInit {
  listPeople: IPerson[] = [];

  constructor(private service: PersonService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    console.log();
    this.service.getAllPeople().subscribe((succ: any) => {
      succ.map((item: IPerson) => {
        this.listPeople.push(item);
      });
    });
  }

  countList() {
    return this.listPeople.length;
  }
}
