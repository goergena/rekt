import React, { Component } from "react";
import Auth from '../../Auth/Auth.js'


export default class Callback extends Component {

    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                Loading...
            </div>
        )
    }
}