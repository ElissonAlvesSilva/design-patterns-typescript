// component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];
  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) {
        return false;
      }
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail);
