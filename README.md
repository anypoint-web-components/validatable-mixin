[![Published on NPM](https://img.shields.io/npm/v/@anypoint-web-components/validatable-mixin.svg)](https://www.npmjs.com/package/@anypoint-web-components/validatable-mixin)

[![Build Status](https://travis-ci.com/anypoint-web-components/validatable-mixin.svg)](https://travis-ci.com/anypoint-web-components/validatable-mixin)

# ValidatableMixin

A mixin to implement user input validation in a LitElement component.

This validatable supports multiple validators.

Use `ValidatableMixin` to implement an element that validates user input. Use the related `ArcValidatorBehavior` to add custom validation logic to an anypoint-input or other wrappers around native inputs.

To implement the custom validation logic of your element, you must override the protected `_getValidity()` method of this mixin, rather than `validate()`.

## Accessibility

Changing the `invalid` property, either manually or by calling `validate()` will update the `aria-invalid` attribute.

## Usage

### Installation

```bash
npm i @anypoint-web-components/validatable-mixin --save
```

### Using `_getValidity()` function

```javascript
import { LitElement, html } from 'lit-element';
import { ValidatableMixin } from '@anypoint-web-components/validatable-mixin';

class InputValidatable extends ValidatableMixin(LitElement) {
  render() {
    return html`<input @input="${this._onInput}"/>`;
  }

  _onInput(e) {
    this.validate(e.target.value);
  }

  _getValidity(value) {
    return value.length >= 6;
  }
}
window.customElements.define('input-validatable', InputValidatable);
```

### Using custom validators

```html
<cats-only message="Only cats are allowed!"></cats-only>
<input-validatable validator="cats-only"></input-validatable>

<script>
import { LitElement } from 'lit-element';
import { ValidatorMixin } from '@anypoint-web-components/validator-mixin';
import { ValidatableMixin } from '@anypoint-web-components/validatable-mixin';

class CatsOnly extends ValidatorMixin(LitElement) {
  validate(value) {
    return value.match(/^(c|ca|cat|cats)?$/) !== null;
  }
}
window.customElements.define('cats-only', CatsOnly);

class InputValidatable extends ValidatableMixin(LitElement) {
  render() {
    return html`<input @input="${this._onInput}"/>`;
  }

  _onInput(e) {
    this.validate(e.target.value);
  }
}
window.customElements.define('input-validatable', InputValidatable);
</script>
```

## Development

```sh
git clone https://github.com/anypoint-web-components/validator-mixins
cd validator-mixins
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
