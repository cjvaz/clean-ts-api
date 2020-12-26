import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'
export class EmalValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
