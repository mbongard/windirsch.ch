import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input[control]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inputType: 'text' | 'password' | 'new-password' = 'text';
  @Input() autocomplete: 'on' | 'off' | 'new-password' = 'on';
  @Input() errorMessage: string | null = null;
}
