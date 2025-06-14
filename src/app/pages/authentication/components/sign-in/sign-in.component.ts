import { Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../../../ui-components/components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../ui-components/components/button/button.component';
import { Router } from '@angular/router';
import {
  AUTHENTICATION_UI_ROUTES,
  HOME_PAGE_UI_ROUTES,
  MAIN_APP_UI_ROUTES,
} from '../../../../shared/constants/ui-routes';
import { HttpService } from '../../../../shared/services/http.service';
import { AUTH_API_ROUTES } from '../../../../shared/constants/api-routes';
import { finalize, take } from 'rxjs';
import { ToastMessageService } from '../../../../shared/services/toast-message.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  private router = inject(Router);
  private httpService = inject(HttpService);
  private toastMessageService = inject(ToastMessageService);

  signinForm!: FormGroup;
  submitLoader!: boolean;
  passwordType!: string;

  ngOnInit(): void {
    this.passwordType = 'password';
    this.initializeForm();
  }

  initializeForm() {
    this.signinForm = new FormGroup({
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(null, Validators.required),
    });
  }

  getFormControl(control: string) {
    return this.signinForm.controls[control] as FormControl;
  }

  changePasswordType(inputType: any) {
    this.passwordType = inputType;
  }

  navigateToSignUp() {
    this.router.navigate([
      `${AUTHENTICATION_UI_ROUTES.MAIN}/${AUTHENTICATION_UI_ROUTES.SIGN_UP}`,
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
