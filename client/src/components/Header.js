import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return; // Still waiting for request to be resolved
            case false: 
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
            return [
                <li key="1"><Payments /></li>,
                <li key="3" style={{ margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                </li>,
                <li key="2"><a href="/api/logout">Logout (under construction)</a></li>
              ];

        }
    }

    render(){
        // console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo">
                        Header
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

/* the funciton below is an easier way to write this
function mapStateToPropsOLD(state){
    return { auth: state.auth };
}
*/

function mapStateToProps({auth}){
    return { auth };
}


export default connect(mapStateToProps)(Header);