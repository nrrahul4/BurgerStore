import React from 'react';
import Aux from '../../hoc/aux';

const Layout = (props) =>(
    <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
);
export default Layout;