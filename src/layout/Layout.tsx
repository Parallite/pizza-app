import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Button } from '../components/Button';
import clsx from 'clsx';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <div className={styles.user}>
                    <img className={styles.avatar} src="/avatar.png" alt="Аватар пользователя" />
                    <div className={styles.name}>Serjik</div>
                    <div className={styles.email}>email@email.ru</div>
                </div>
                <div className={styles.menu}>
                    <NavLink to='/' className={({ isActive }) => (clsx(
                        styles.link,
                        isActive && styles.active
                    ))}>
                        <img src="/menu-icon.svg" alt="Иконка меню" />
                        Меню
                    </NavLink>
                    <NavLink to='/cart' className={({ isActive }) => (clsx(
                        styles.link,
                        isActive && styles.active
                    ))}>
                        <img src="/cart-icon.svg" alt="Иконка корзины" />
                        Корзина
                    </NavLink>
                </div>
                <Button className={styles.exit}>
                    <img src="/exit-icon.svg" alt="Иконка выхода" />
                    Выход
                </Button>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};
