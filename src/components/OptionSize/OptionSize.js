import React from 'react';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <li key={size.name}>
            <button
              type="button"
              className={clsx(size.name === props.currentSize && styles.active)}
              onClick={() => props.setCurrentSize(size)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
