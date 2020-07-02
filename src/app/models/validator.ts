/*
 { fields: ["email"],
  message: "email es requerido",
  validators: [{sanitizer: false, validator: () => true, args: [1,50]}]
}
 */
export interface Validator {
    sanitizer: boolean,
    validator: (...args: any) => boolean | any,
    args: any[]
}

// un validador para un atributo tiene muchos validadores
// check('email').normalizeEmail().isEmail(),
// check(['email', 'name'], 'el atributo es requerido').isRequired()
export interface ValidatorField {
    fields: string[],
    message: string,
    validators: Validator[]
}

