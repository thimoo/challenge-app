/**
 * Created by sa7bi on 01.07.17.
 */

import React, { Component} from 'react'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            'name' : 'React Challenge'
        }
    }
    render(){
        return(
            <nav className="navbar navbar-inverse bg-inverse">
                <a className="navbar-brand text-center">
                    { this.state.name}
                </a>
            </nav>
        );
    }
}

export default Navbar;
