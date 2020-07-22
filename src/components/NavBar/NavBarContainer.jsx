import React from 'react';
import {connect} from "react-redux";
import NavBar from "./NavBar";

class NavBarContainer extends React.Component{
    render() {
        return <NavBar {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.authentication.userId,
    }
};

export default connect(mapStateToProps)(NavBarContainer);