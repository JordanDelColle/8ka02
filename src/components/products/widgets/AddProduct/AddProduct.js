import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import { EditorFeedback } from 'components/products/EditorFeedback';
import ProductPreview from 'assets/images/8k2.jpg'

const defaults = {
  description: "Product Description",
  name: "Product Name",
  price: 0.00
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
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

  function handleSubmit (e) {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }
  if (isWriting) {
    return <EditorFeedback status={loading} writeCompleted={setIsWriting}/>
  } else {
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
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
)
  }

}

export default AddProduct