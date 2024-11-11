import clsx from 'clsx';
import styles from './Input.module.css';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
    isValid = true,
    className,
    ...props
}, ref
) {
    return (
        <input
            ref={ref}
            className={clsx(
                styles.input,
                className,
                isValid && styles.invalid
            )}
            {...props}
        />
    );
});
