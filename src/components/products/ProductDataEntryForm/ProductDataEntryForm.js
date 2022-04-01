import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'
import {Label, Input} from 'ui/forms'

import {TextArea} from 'ui/forms/textarea'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { SubmitButton } from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
          </ProductImage>
          <fieldset>
          <ProductName>
            <Label>Product Name</Label>
            <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
          </ProductName>
          <ProductPrice>
            <Label>Product Price</Label>
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
          </ProductPrice>
          </fieldset>
          <ProductDescription>
            <Label>Product Description</Label>
            <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={200} rows={6}/>
          </ProductDescription>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm