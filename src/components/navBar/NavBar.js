import React from 'react';
import './styles.css';

export default class NavBar extends React.Component {

    render() {
        return (
            <div id={this.props.top === 0 ? "navBar": "navBarColored"}>
                <div id="leftSide">
                    <a href="#banner" id="nameLink">Max De George</a>
                </div>
                <div id="rightSide">
                    <div id="links">
                        <a href="#about" className="link">About</a>
                        <a href="#experience" className="link">Experience</a>
                        <a href="#skills" className="link">Skills</a>
                        <a href="#projects" className="link">Projects</a>
                        <a href="#contact" className="link">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
};