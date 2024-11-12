import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

import { FC } from 'react';

interface ProductCardProps {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
    rating: number
}

export const ProductCard: FC<ProductCardProps> = ({
    id,
    title,
    description,
    image,
    price,
    rating
}) => {
    return (
        <Link to={`/product/${id}`} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.head} style={{ backgroundImage: `url(${image})` }}>
                    <div className={styles.price}>
                        {price}&nbsp;
                        <span className={styles.currency}>₽</span>
                    </div>
                    <button className={styles.button}>
                        <img src="/cart-button-icon.svg" alt="Кнопка добавления в корзину" />
                    </button>
                    <div className={styles.rating}>
                        {rating}&nbsp;
                        <img src="/star-icon.svg" alt="Иконка рейтинга" />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </Link>
    );
};
