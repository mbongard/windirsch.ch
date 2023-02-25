import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-frame',
  templateUrl: './form-frame.component.html',
  styleUrls: ['./form-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFrameComponent {
  @Input() confirmLabel = 'Save';
  @Input() confirmAction?: () => Observable<any>;
  @Output() formSuccess = new EventEmitter<void>();
  @Output() formCancel = new EventEmitter<void>();

  onSave(): void {
    if (this.confirmAction) {
      this.confirmAction().subscribe(() => {
        this.formSuccess.emit();
      })
    }
  }
}
