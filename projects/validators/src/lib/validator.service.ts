import { ValidatorField } from './validator'

export class ValidatorService {
    validatorFields: ValidatorField[];
    constructor(validatorFields: ValidatorField[]) {
        this.validatorFields = validatorFields;
    }
}

export function ValidatorFactory(validatorFields: ValidatorField[]) {
    return () => new ValidatorService(validatorFields)
}
