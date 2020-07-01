/*
 { fields: ["email"],
  message: "email es requerido",
  validators: [{sanitizer: false, validator: () => true, args: [1,50]}]
}
 */
export interface Validators {
    sanitizer: boolean,
    validator: (...args: any) => boolean,
    args: object[]
}

// un validador para un atributo tiene muchos validadores
// check('email').normalizeEmail().isEmail(),
export interface Validator {
    fields: string[],
    message: string,
    validators: Validators[]
}

