/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import { LitElement, TemplateResult } from 'lit-element';
import { ValidatableMixin } from '../index.js';

export declare class ValidatableInput {
  render(): TemplateResult;

  constructor();

  _onInput(e: CustomEvent): void;
}

export declare interface ValidatableInput extends ValidatableMixin, LitElement {
  
}
