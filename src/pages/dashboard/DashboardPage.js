import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { Outlet } from 'react-router-dom';

import {AppBar} from './../../components/appbar';
import {SideBar} from 'components/sidebar'
import {auth} from 'libs/firebase'
import {DashboardPageStyles} from './styles'
import { PanelBody } from 'components/panels/styles';
import {Panels} from 'components/panels';


function DashboardPage (props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
            navigator('/')
        }
    })
    if (isUser){
        return (
        <>
            <AppBar/>
            <DashboardPageStyles>
                <SideBar/>
                <Outlet/>
            </DashboardPageStyles>
            
        </>
        )

    }else{
        return null
    }
}

export default DashboardPage;