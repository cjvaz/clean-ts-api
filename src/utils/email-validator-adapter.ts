import { EmailValidator } from '../presentation/protocols/email-validator'

export class EmalValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
