import React from 'react';
import './styles.css'
import Fade from 'react-reveal/Fade';

export default class ExperienceBox extends React.Component {
    render() {
        return (
            <Fade bottom>
                <div className="expBox">
                    <h3 className="expTitle">{this.props.title}</h3>
                    <h6 className="expDate">{this.props.date}</h6>
                    <div className="expRole">
                        <h4 className="expPrimTitle">{this.props.primaryRoleTitle}:</h4>
                        <p className="expPrim">{this.props.primaryRole}</p>
                    </div>
                    {this.props.secondaryRole && this.props.secondaryRoleTitle ? 
                    (
                    <div className="expRole">
                        <h4 className="expSecTitle">{this.props.secondaryRoleTitle}:</h4>
                        <p className="expSec">{this.props.secondaryRole}</p>
                    </div>
                    ) : null}
                    <div className="expDescSec">
                        <p className="expDesc"><span className="expDescTitle">Description:</span> {this.props.description}</p>
                    </div>
                </div>
            </Fade>
        )
    }
}