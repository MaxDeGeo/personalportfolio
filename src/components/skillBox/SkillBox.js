import React from 'react';
import './styles.css';
import Fade from 'react-reveal/Fade';

export default class SkillBox extends React.Component {
    render() {
        return (
            <Fade bottom>
                <div className="skillBox">
                    <img src={this.props.src} className="skillImage" alt={this.props.name}/>
                    <h4 className="skillName">{this.props.name}</h4>
                    <h5 className="skillTime">Time known: {this.props.time}</h5>
                    <h5 className="skillProf">Skill Level: {this.props.prof}</h5>
                </div>
            </Fade>
        )
    }
}