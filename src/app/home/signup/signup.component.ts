import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { SignupService } from './signup.service';
import { NewUser } from './new-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpServide: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        [this.userNotTakenValidatorService.checkUserNameTaken()],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

  signUp() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpServide
      .signUp(newUser)
      .subscribe(() => this.router.navigate(['']),
      err => console.log(err)
      );
  }
}
