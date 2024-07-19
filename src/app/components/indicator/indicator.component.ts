import { Component, Input } from '@angular/core';
import { PasswordStrength } from 'src/app/types/types';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent {
  @Input() passwordStrength: PasswordStrength = 'empty';
}
