import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
