import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  @Input() title?: string;
  @Output() doSave = new EventEmitter<void>();
  @Output() doClose = new EventEmitter<void>();
}
