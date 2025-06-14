import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { take, finalize } from 'rxjs';
import { AUTH_API_ROUTES } from '../../../../shared/constants/api-routes';
import {
  AUTHENTICATION_UI_ROUTES,
  HOME_PAGE_UI_ROUTES,
  MAIN_APP_UI_ROUTES,
} from '../../../../shared/constants/ui-routes';
import { HttpService } from '../../../../shared/services/http.service';
import { ToastMessageService } from '../../../../shared/services/toast-message.service';
import { ButtonComponent } from '../../../../ui-components/components/button/button.component';
import { InputComponent } from '../../../../ui-components/components/input/input.component';
import {
  MAX_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../../../../shared/constants/app.constants';
import { confirmPasswordValidator } from '../../../../shared/utils/app.utils';

@Component({
  selector: 'app-sign-up',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private router = inject(Router);
  private httpService = inject(HttpService);
  private toastMessageService = inject(ToastMessageService);

  signinForm!: FormGroup;
  submitLoader!: boolean;
  passwordType!: string;
  confirmPasswordType!: string;

  ngOnInit(): void {
    this.passwordType = 'password';
    this.confirmPasswordType = 'password';
    this.initializeForm();
  }

  initializeForm() {
    this.signinForm = new FormGroup(
      {
        firstName: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(MAX_NAME_LENGTH),
          ])
        ),
        lastName: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(MAX_NAME_LENGTH),
          ])
        ),
        email: new FormControl(
          null,
          Validators.compose([Validators.required, Validators.email])
        ),
        password: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(MIN_PASSWORD_LENGTH),
          ])
        ),
        confirmPassword: new FormControl(null, Validators.required),
      },
      { validators: confirmPasswordValidator('password', 'confirmPassword') }
    );
  }

  getFormControl(control: string) {
    return this.signinForm.controls[control] as FormControl;
  }

  changePasswordType(inputType: any, field: string) {
    if (field === 'password') {
      this.passwordType = inputType;
    }

    if (field === 'confirmPassword') {
      this.confirmPasswordType = inputType;
    }
  }

  navigateToSignIn() {
    this.router.navigate([
      `${AUTHENTICATION_UI_ROUTES.MAIN}/${AUTHENTICATION_UI_ROUTES.SIGN_IN}`,
    ]);
  }

  onSubmit() {
    this.router.navigate([
      `${MAIN_APP_UI_ROUTES.MAIN}/${HOME_PAGE_UI_ROUTES.MAIN}`,
    ]);
    // if (this.signinForm.invalid) {
    //   this.signinForm.markAllAsTouched();
    // } else {
    //   this.submitLoader = true;
    //   this.httpService
    //     .post(
    //       `${AUTH_API_ROUTES.MAIN}/${AUTH_API_ROUTES.LOGIN}`,
    //       this.signinForm.getRawValue()
    //     )
    //     .pipe(
    //       take(1),
    //       finalize(() => (this.submitLoader = false))
    //     )
    //     .subscribe({
    //       next: (res) => {
    //         this.toastMessageService.showSuccessToastMessage(res?.message);
    //         this.router.navigate(
    //           [
    //             `${AUTHENTICATION_UI_ROUTES.MAIN}/${AUTHENTICATION_UI_ROUTES.VERIFY_OTP}`,
    //           ],
    //           { queryParams: { email: this.signinForm.getRawValue().email } }
    //         );
    //       },
    //     });
    // }
  }
}
