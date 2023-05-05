import React, { PropsWithChildren } from 'react';
import css from './base-input.styles.module.css';

export const BaseInput = props => {
    return <input type="text" {...props} className={css.input} />;
};
