import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnicornDTO } from '../../../shared/models/unicornDTO.model';
import { UnicornsService } from '../../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
  @Input() public unicorn!: UnicornDTO;
  @Output() private removed = new EventEmitter<UnicornDTO>();

  public age!: number;

  constructor(private unicornService: UnicornsService) {}

  ngOnInit(): void {
    this.age = new Date().getFullYear() - this.unicorn.birthyear;
  }

  public delete(unicorn: UnicornDTO) {
    this.unicornService.delete(unicorn).subscribe(() => {
      this.removed.emit(unicorn);
    });
  }
}
