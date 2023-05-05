import React from 'react';
import { Field } from 'react-final-form';
import { Input } from 'react-query/types/devtools/styledComponents';

export const InputFormFieldComponent = ({ name, type = 'text', ...props }) => {
    return (
        <Field type={type} name={name}>
            {({ input }) => <Input {...input} {...props} />}
        </Field>
    );
};
