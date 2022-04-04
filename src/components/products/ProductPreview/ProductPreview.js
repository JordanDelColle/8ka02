import React from 'react';

import {ProductPreviewStyles, ProductName, ProductImage, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage.previewImage} alt="8k nike flex" width="320" height="184"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductPreview