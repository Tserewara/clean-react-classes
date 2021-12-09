import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  errorMEssage: string
  fieldName: string
  fieldValue: string

  validate (fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMEssage
  }
}
