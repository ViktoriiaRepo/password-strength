import { Component } from '@angular/core';
import { PasswordStrength } from 'src/app/types/types';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  passwordStrength: 'empty' | 'short' | 'easy' | 'medium' | 'strong' = 'empty';
  showPassword = false;

  onPasswordChange(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    this.passwordStrength = this.evaluatePasswordStrength(password);
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  evaluatePasswordStrength(password: string): PasswordStrength {
    if (!password.length) {
      console.log('empty');
      return 'empty';
    }

    if (password.length < 8) {
      console.log('short');
      return 'short';
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols && password.length >= 8) {
      console.log('strong');
      return 'strong';
    }

    if (
      ((hasLetters && hasDigits) ||
        (hasDigits && hasSymbols) ||
        (hasLetters && hasSymbols)) &&
      password.length >= 8
    ) {
      console.log('medium');
      return 'medium';
    }

    return 'easy';
  }
}
