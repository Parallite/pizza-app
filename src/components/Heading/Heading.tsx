import clsx from 'clsx';
import styles from './Heading.module.css';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

export const Heading: FC<HeadingProps> = ({ children, className, ...props }) => {
    return (
        <h1
            className={clsx(
                className,
                styles.heading
            )}
            {...props}
        >
            {children}
        </h1>
    );
};
