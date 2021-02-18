import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('isValid [CLASS]');
  } else {
    console.log('Email invalid [CLASS]');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('isValid [FN]');
  } else {
    console.log('Email invalid [FN]');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), 'elisson.silva@gmail.com');
validaEmailFn(emailValidatorFnAdapter, 'elisson.silva@gmail.com');
