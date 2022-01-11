import { useState } from 'react';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  //helper functions
  const getPrice = (currentSize) => {
    const foundSize = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + foundSize.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>

        <ProductForm
          title={props.title}
          price={getPrice(currentSize)}
          currentSize={currentSize}
          currentColor={currentColor}
        >
          <OptionSize
            sizes={props.sizes}
            currentSize={currentSize}
            setCurrentSize={(size) => setCurrentSize(size.name)}
          />

          <OptionColor
            colors={props.colors}
            currentColor={currentColor}
            setCurrentColor={(color) => setCurrentColor(color)}
          />

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </ProductForm>
      </div>
    </article>
  );
};
Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Product;
