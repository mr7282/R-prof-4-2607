import React from "react";
import PropTypes from "prop-types";

import "../styles/styles.css";



export default class Layout extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    render() {
        return (
            <div className={this.props.className}>
                <h3>SupaChat</h3>
            </div>
        );
    }
}
