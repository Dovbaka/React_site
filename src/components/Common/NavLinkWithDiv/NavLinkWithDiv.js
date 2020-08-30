import React from 'react'
import {Route, Link} from 'react-router-dom'

function NavLinkWithDiv({to,exact, children, divStyle, divActiveStyle}) {
    //custom styles in divStyle and divActiveStyle
    return (
        <Route path={to} exact={exact} children={({match}) => (
            <div className={match ? divStyle + " " + divActiveStyle : divStyle}>
                <Link to={to}>{children}</Link>
            </div>
        )}/>
    )
}

export default NavLinkWithDiv;