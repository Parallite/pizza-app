import styles from './Menu.module.css';

import { Heading } from '../../components/Heading';
import { Search } from '../../components/Search';

export const Menu = () => {
    return <>
        <div className={styles.head}>
            <Heading> Меню </Heading>
            <Search placeholder='Введите блюдо или состав' />
        </div>
    </>;
};
