import { Validator } from '../models/validator'

export class ValidatorService {
    validators: Validator[];
    constructor(validators: Validator[]) {
        this.validators = validators;
    }
}

export function ValidatorFactory(validators: Validator[]) {
    return () => new ValidatorService(validators)
}
