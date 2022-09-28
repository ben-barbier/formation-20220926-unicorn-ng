import { Component, ViewChild } from '@angular/core';
import { UnicornDTO } from '../../shared/models/unicornDTO.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
  public unicorns: UnicornDTO[] = [];

  @ViewChild('unicornName') public unicornName: unknown;

  constructor(unicornsService: UnicornsService) {
    unicornsService.getAll().subscribe((unicorns: UnicornDTO[]) => {
      this.unicorns = unicorns;
    });
  }

  public removeUnicornFromList(unicorn: UnicornDTO): void {
    this.unicorns = this.unicorns.filter((u) => u.id !== unicorn.id);
  }

  public test(value: string) {
    console.log(this.unicornName);
    debugger;
  }
}
