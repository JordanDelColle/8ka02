import React from 'react';
import {Link} from "react-router-dom";
import {AppBar} from './../../components/appbar';

function DashboardPage () {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Dashboard</h1>
            </header>
        </>
      );
}

export default DashboardPage;