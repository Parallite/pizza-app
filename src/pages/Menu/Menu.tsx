import styles from './Menu.module.css';

import { Heading } from '../../components/Heading';
import { Search } from '../../components/Search';
import { ProductCard } from '../../components/ProductCard';

export const Menu = () => {
    return <>
        <div className={styles.head}>
            <Heading>Меню</Heading>
            <Search placeholder='Введите блюдо или состав' />
        </div>
        <div>
            <ProductCard
                id={1}
                title='Наслаждение'
                description='Салями, руккола, помидоры, оливки'
                image='/product.png'
                price={300}
                rating={4.5}
            />
        </div>
    </>;
};
