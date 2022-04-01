import React from 'react'

import {PanelStyles, PanelBody, PanelHeader} from './styles';

function AllProductsPanel (title, ...props){
    return(
        <header>
            <PanelStyles>
                <PanelHeader>
                    {/* <h2>{title || "Display Panel"}</h2> */}
                    <h2>hello</h2>
                </PanelHeader>
                <PanelBody></PanelBody>
            </PanelStyles>
        </header>
    )
}

export default AllProductsPanel;