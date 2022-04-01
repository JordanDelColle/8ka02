import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import ProductPreview from 'assets/images/8k2.jpg'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('230.96')
  const [productDescription, setProductDescription] = useState('Product Description')
  const [productImage, setProductImage] = useState(ProductPreview)
  const formatter = useNumberFormat()

  function handleProductName (name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription (description) {
    setProductDescription(description)
  }
  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productDescription={productDescription} 
          productImage={productImage}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          />
        </AddProductStyles>
  )
}

export default AddProduct