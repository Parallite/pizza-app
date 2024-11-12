import clsx from 'clsx';
import styles from './Search.module.css';
import { forwardRef, InputHTMLAttributes } from 'react';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({
    isValid = true,
    className,
    ...props
}, ref
) {
    return (
        <div className={styles.wrapper}>
            <input
                ref={ref}
                className={clsx(
                    styles.input,
                    className,
                    isValid && styles.invalid
                )}
                {...props}
            />
            <img src="/search.svg" alt="Иконка поиска" className={styles.icon} />
        </div>
    );
});
