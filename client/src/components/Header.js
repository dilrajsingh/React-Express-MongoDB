import React, {Component} from 'react';

import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return; // Still waiting for request to be resolved
            case false: 
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return <li><a href="/api/logout">Logout (under construction)</a></li>
        }
    }

    render(){
        // console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Header
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToPropsOLD(state){
    return { auth: state.auth };
}

function mapStateToProps({auth}){
    return { auth };
}


export default connect(mapStateToProps)(Header);