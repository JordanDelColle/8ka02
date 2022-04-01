import React from 'react'

import {PanelStyles, PanelBody, PanelHeader} from './styles'

import {AddProduct} from 'components/products/widgets/AddProduct'

function AddProductPanel (title, ...props){
    return(
        <header>
            <PanelStyles>
                <PanelHeader>
                    {/* <h2>{title || "Display Panel"}</h2> */}
                    <h2>hi</h2>
                </PanelHeader>
                <PanelBody>
                    <AddProduct/>
                </PanelBody>
            </PanelStyles>
        </header>
    )
}

export default AddProductPanel;