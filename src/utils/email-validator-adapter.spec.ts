import { EmalValidatorAdapter } from './email-validator-adapter'

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmalValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
