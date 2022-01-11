import React from 'react';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Name: ', props.title);
        console.log('Price: ', props.price);
        console.log('Size: ', props.currentSize);
        console.log('Color: ', props.currentColor);
      }}
    >
      {props.children}
    </form>
  );
};
ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
