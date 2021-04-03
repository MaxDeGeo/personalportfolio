import React from 'react';
import './styles.css';
import Fade from 'react-reveal/Fade';

export default class ProjectBox extends React.Component {
    
    generateBox = () => {
        let box = null;

        if (this.props.left) {
            box = (
                <div className="projectBox">
                    <div className="projectDetails">
                        <h3 className="projectTitle">{this.props.title}</h3>
                        <h4 className="projectType">{this.props.type}</h4>
                        <h5 className="projectLang">Language(s): {this.props.languages}</h5>
                        <p className="projectDesc">{this.props.description}</p>
                    </div>
                </div>
            )
        } else {
            box = (
                <div className="projectBox">
                    <div className="projectDetails">
                        <h3 className="projectTitle">{this.props.title}</h3>
                        <h4 className="projectType">{this.props.type}</h4>
                        <h5 className="projectLang">Language(s): {this.props.languages}</h5>
                        <p className="projectDesc">{this.props.description}</p>
                    </div>
                </div>
            )
        }
        return box;
    }

    render() {
        return (
            <Fade bottom>
                {this.generateBox()}
            </Fade>
        )
    }
}