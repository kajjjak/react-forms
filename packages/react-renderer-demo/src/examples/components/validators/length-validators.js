import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/dist/cjs/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/dist/cjs/text-field';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField
};

const schema = {
  title: 'Start typing',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'length',
      label: 'Length field',
      helperText: 'min 5 characters, max 10',
      validate: [
        {
          type: validatorTypes.MIN_LENGTH,
          threshold: 5
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 10
        }
      ]
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'exact-length',
      label: 'Exact length field',
      helperText: 'must be 3 characters long',
      validate: [
        {
          type: validatorTypes.EXACT_LENGTH,
          threshold: 3
        }
      ]
    }
  ]
};

const LenghtValidators = () => (
  <div>
    <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
  </div>
);

export default LenghtValidators;
