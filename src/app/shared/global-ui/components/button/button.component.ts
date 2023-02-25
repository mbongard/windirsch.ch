import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() icon?: IconProp;
  @Input() imagePath?: string;
  @Input() disabled = false;
  @Input() type: 'default' | 'success' | 'danger' | 'plain' | 'header' = 'default';
  @Input() rounded = false;
  @Input() iconPlacement: 'left' | 'right' = 'left';
  @Input() fullWidth = false;
  @Input() size: 'normal' | 'large' | 'x-large' = 'normal';
  @Input() shadow = false;

  @Output() btnClick = new EventEmitter<MouseEvent>();
}
