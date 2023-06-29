import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

enum TitlePage {
  TITLE = 'product list page'
}

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink className={styles.headerLink} to="/">{TitlePage.TITLE}</NavLink>
      </div>
    </header>
  );
};
