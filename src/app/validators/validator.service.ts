export class ValidatorService {
    validator: object;
    constructor(validator: object) {
        this.validator = validator;
    }
}

export function ValidatorFactory(validator: object) {
    return () => new ValidatorService(validator)
}
