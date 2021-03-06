import React, { ReactElement } from 'react';

import ImgLoader from '~/components/common/ImgLoader';

import { Product } from '~/store/modules/products/types';

import './ProductCard.scss';

type PropsType = {
  product: Product;
  hasOverlay: boolean;
  hasHover: boolean;
  width: string;
};

function ProductCart({ product, hasOverlay, width }: PropsType): ReactElement {
  return (
    <figure
      className={hasOverlay ? 'product-card--overlay' : 'product-card'}
      style={{
        width,
        margin: '0 auto',
      }}
    >
      {hasOverlay ? <div data-testid="overlay" className="product-card__overlay" /> : null}
      <ImgLoader src={product.image} />
      <figcaption
        className={hasOverlay ? 'product-card__description--overlay' : 'product-card__description'}
      >
        {product.name}
      </figcaption>
    </figure>
  );
}

ProductCart.defaultProps = {
  width: '29rem',
  hasOverlay: false,
  hasHover: false,
};

export default ProductCart;
