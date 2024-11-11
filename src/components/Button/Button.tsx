import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type AppearanceType = 'big' | 'small'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    appearance?: AppearanceType;
}

export const Button: FC<ButtonProps> = ({
    children,
    appearance = 'small',
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles.accent,
                className,
                appearance === 'big' && styles.big,
                appearance === 'small' && styles.small
            )}
            {...props}
        >
            {children}
        </button >
    );
};
