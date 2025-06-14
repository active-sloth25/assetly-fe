import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, finalize } from 'rxjs';
import { AUTH_API_ROUTES } from '../../../../shared/constants/api-routes';
import {
  AUTHENTICATION_UI_ROUTES,
  MAIN_APP_UI_ROUTES,
} from '../../../../shared/constants/ui-routes';
import { HttpService } from '../../../../shared/services/http.service';
import { InputComponent } from '../../../../ui-components/components/input/input.component';
import { ButtonComponent } from '../../../../ui-components/components/button/button.component';
import { ToastMessageService } from '../../../../shared/services/toast-message.service';
import { setItem } from '../../../../shared/utils/persistent-storage.utils';
import {
  ACCESS_TOKEN,
  AUTH_USER,
} from '../../../../shared/constants/app.constants';
import {
  setAccessToken,
  setAuthUser,
} from '../../../../shared/utils/app.utils';

@Component({
  selector: 'app-verify-otp',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private httpService = inject(HttpService);
  private toastMessageService = inject(ToastMessageService);

  otpForm!: FormGroup;
  submitLoader!: boolean;
  resendOtpLoader!: boolean;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.otpForm = new FormGroup({
      email: new FormControl(this.activatedRoute.snapshot.queryParams['email']),
      otp: new FormControl(null, Validators.required),
    });
  }

  getFormControl(control: string) {
    return this.otpForm.controls[control] as FormControl;
  }

  navigateToSignIn() {
    this.router.navigate([
      `${AUTHENTICATION_UI_ROUTES.MAIN}/${AUTHENTICATION_UI_ROUTES.SIGN_IN}`,
    ]);
  }

  resendOTP() {
    this.resendOtpLoader = true;
    const { email } = this.otpForm.getRawValue();
    this.httpService
      .post(`${AUTH_API_ROUTES.MAIN}/${AUTH_API_ROUTES.RESEND_OTP}`, {
        email,
      })
      .pipe(
        take(1),
        finalize(() => (this.resendOtpLoader = false))
      )
      .subscribe({
        next: (res: any) => {
          this.toastMessageService.showSuccessToastMessage(res?.message);
        },
      });
  }

  onSubmit() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
    } else {
      this.submitLoader = true;
      this.httpService
        .post(
          `${AUTH_API_ROUTES.MAIN}/${AUTH_API_ROUTES.VERIFY_OTP}`,
          this.otpForm.getRawValue()
        )
        .pipe(
          take(1),
          finalize(() => (this.submitLoader = false))
        )
        .subscribe({
          next: (res) => {
            const response = res.data;
            // set access token
            if (response.accessToken) {
              const token = response.accessToken;
              setAccessToken(token);
            }

            // set auth user
            const authUser = {
              email: response.email,
              firstName: response.firstName,
              lastName: response.lastName,
              role: response.role,
              region: response.region,
            };

            setAuthUser(authUser);
            this.router.navigate([`${MAIN_APP_UI_ROUTES.MAIN}`]);
          },
        });
    }
  }
}
