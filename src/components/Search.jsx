import React from 'react';
import styles from '@styles/Search.module.scss';

const Search = () => {
    return(
        <div className={styles['container-search']}>
            <input type="search" className={styles.search} placeholder='Search product' />
            <div className={styles['cont-rigth']}>
                <label htmlFor="order">Order: </label>
                <select name="order" >
                    <option className={styles.opcion1} value="1">Most recent</option>
                    <option className={styles.opcion2} value="2">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Search;