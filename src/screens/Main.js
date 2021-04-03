import React, { Fragment } from 'react';
import NavBar from '../components/navBar/NavBar';
import './Main.css';
import ExperienceBox from '../components/experienceBox/ExperienceBox';
import SkillBox from '../components/skillBox/SkillBox';
import ProjectBox from '../components/projectBox/ProjectBox';
import Fade from 'react-reveal/Fade';

//Resume
import resume from '../resume/degeorge_max.pdf';

//Skill Icons
import github from '../images/github.png';
import linkedIn from '../images/linkedIn.png';
import itchio from '../images/itchio.png';
import developer from '../images/developer.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import js from '../images/js.png';
import reactLogo from '../images/react.svg';
import CSharp from '../images/Csharp.png';
import Cpp from '../images/cpp.png';
import java from '../images/java.png';
import ruby from '../images/ruby.png';
import swift from '../images/swift.png';
import vs from '../images/vs.png';
import vscode from '../images/vscode.png';
import xcode from '../images/xcode.png';
import unity from '../images/unity.png';
import rubymine from '../images/rubymine.png';
import photoshop from '../images/photoshop.svg';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollHeight: 0,
            buttonText: 'Send',
            name: "",
            email: "",
            message: "",
        }

        this.name = React.createRef();
        this.email = React.createRef();
        this.message = React.createRef();
    }

    componentDidMount() {
        document.querySelector('#content').addEventListener('scroll', this.updateScroll);
    };

    //When the page has been scrolled at all, change the navbar color to non-white
    updateScroll = event => {
        let scrollTop = event.srcElement.scrollTop;

        this.setState({
            scrollHeight: scrollTop,
        });
    }

    //On name, email, or message, updates the respective states for form submission
    onChange = (field, event) => {
        if (field === "name") {
            this.setState({
                name: event.target.value,
                buttonText: 'Send',
            })
            this.name.current.style.borderColor = "#252525";
        } else if (field === "email") {
            this.setState({
                email: event.target.value,
                buttonText: 'Send',
            })
            this.email.current.style.borderColor = "#252525";
        } else {
            this.setState({
                message: event.target.value,
                buttonText: 'Send',
            })
            this.message.current.style.borderColor = "#252525";
        }
    }

    //Validates the email for the form
    validateEmail = () => {
     if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) && this.state.email !== "")
      {
        return true;
      }
        this.email.current.style.borderColor = "#FF0000";
        return false;
    }

    //Validates the name for the form
    validateName = () => {
        if (this.state.name !== "") {
            return true;
        } else {
            this.name.current.style.borderColor = "#FF0000";
            return false;
        }
    }

    //Validates the message has contents for the form
    validateMessage = () => {
        if (this.state.message !== "") {
            return true;
        } else {
            this.message.current.style.borderColor = "#FF0000";
            return false;
        }
    }

    //Checks all three form sections for correct information
    validateSubmit = () => {
        let didEmailPass = this.validateEmail();
        let didNamePass = this.validateName();
        let didMessagePass = this.validateMessage();
        if (didEmailPass && didNamePass && didMessagePass) {
            return true;
        }
        
        return false;
    }
    
    //On button click, attempts to send form if information is correct.
    sendEmail = (event) => {
        if (this.validateSubmit()) {
            this.setState({
                buttonText: 'Sending...',
            })
    
            const templateId = 'portfolio_contact';
            this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})    
        }
    }

    //Updates button upon API response from emailjs
    sendFeedback = async (templateId, variables) => {
        let result = await window.emailjs.send('gmail', templateId, variables);

        if (result.status === 200) {
            this.setState({
                buttonText: 'Sent!',
            });
        } else {
            this.setState({
                buttonText: 'Failed.',
            });

            setTimeout(() => {
                this.setState({
                    buttonText: 'Send',
                })
            }, 2000);
        }
      }

    render() {
        return (
            <Fragment>
                <NavBar top={this.state.scrollHeight}/>
                <article id="content">
                    <section id="banner">
                        <div id="leftBanner">
                            <h1 id="name">Max De George</h1>
                            <h2 className="job">Web Developer</h2>
                            <h2 className="job">& Game Programmer</h2>
                        </div>
                        <div id="rightBanner">
                            <img src={developer} alt="Max De George"/>
                        </div>
                    </section>
                    <section id="about">
                        <Fade bottom>
                            <div className="sectionHeader">About</div>
                            <p id="bio">Welcome! My name's Max De George and I'm a Front-End Web Developer and Game Programmer. I'm a fourth year student at the Rochester Institute of Technology
                            majoring in Game Design & Development along with a minor in Entrepreneurship. I'm from Long Island, New York, and some of my hobbies include playing music (I've played the bass
                            guitar for eight years and the double bass for 13 years), playing board games, and hanging out with my friends. I aspire to combine innovation and entertainment into one,
                            so that I help not only to forward technology, but also help create something entertaining that others can enjoy in the process. That's enough about me, onto the important
                            information! (If you're looking for just a resume, please click <a href={resume} rel="noopener noreferrer" target="_blank" >here</a>)
                            </p>
                        </Fade>
                    </section>
                    <section id="experience">
                        <Fade bottom>
                            <div className="sectionHeader">Experience</div>
                            <div id="experienceContent">
                                <ExperienceBox 
                                    title="Rochester Institute of Technology"
                                    primaryRoleTitle="Major"
                                    primaryRole="Game Design & Development"
                                    secondaryRoleTitle="Minor"
                                    secondaryRole="Entrepreneurship"
                                    date="August 2016 - Current"
                                    description="Currently in the 4th year of undergraduate schooling majoring in Game Design & Development and minoring in Entrepreneurship."/>
                                <ExperienceBox 
                                    title="Retail Business Services"
                                    primaryRoleTitle="Role"
                                    primaryRole="Front-End Web Developer Coop"
                                    date="June 2019 - December 2019"
                                    description="Worked as a front-end web developer creating internal applications for Ahold Delhaize and its brands. Through this cooperative education
                                    I learned more about the front-end environment, as well became proficient in React and React-Native, as well as worked with MongoDB a little bit."/>
                                <ExperienceBox 
                                    title="Northridge Church"
                                    primaryRoleTitle="Role"
                                    primaryRole="Full Stack Web Developer Coop"
                                    date="August 2018 - December 2018"
                                    description="Worked as a full stack developer for Northridge Church. Was tasked with creating a time management application, using Ruby and Ruby on Rails
                                    as the language for the task, as well as PostgreSQL as the database. Learned how to operate on my own and find solutions to problems when no one else was around
                                    to help."/>
                                <ExperienceBox 
                                    title="Cru International Headquarters"
                                    primaryRoleTitle="Role"
                                    primaryRole="Full Stack Web Developer Intern"
                                    date="June 2018 - July 2018"
                                    description="Worked as a full stack developer for Cru Headquarters. Along with the other interns, we were told to create a prayer request application that could
                                    be used on the phone, but using Ruby and Ruby on Rails on the web for a quick prototyping of the project during the internship. Learned all about team management
                                    and how to openly communicate about problems and blockers, and how to get around them."/>
                        </div>
                       </Fade>
                    </section>
                    <section id="skills">
                        <Fade bottom>
                            <div className="sectionHeader">Skills</div>
                            <section id="languages">
                                <h3 className="skillSectionTitle">Languages</h3>
                                <div className="listLayout">
                                    <SkillBox
                                        src={html5}
                                        name="HTML"
                                        time="7 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={css3}
                                        name="CSS"
                                        time="7 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={js}
                                        name="JavaScript"
                                        time="7 years"
                                        prof="Proficient"/>
                                    <SkillBox
                                        src={reactLogo}
                                        name="React"
                                        time="6 months"
                                        prof="Proficient"/>
                                    <SkillBox
                                        src={reactLogo}
                                        name="React Native"
                                        time="3 months"
                                        prof="Proficient"/>
                                    <SkillBox
                                        src={CSharp}
                                        name="C#"
                                        time="4 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={Cpp}
                                        name="C++"
                                        time="2 years"
                                        prof="Proficient"/>
                                    <SkillBox
                                        src={java}
                                        name="Java"
                                        time="6 years"
                                        prof="Capable"/>
                                    <SkillBox
                                        src={ruby}
                                        name="Ruby"
                                        time="2 years"
                                        prof="Capable"/>
                                    <SkillBox
                                        src={swift}
                                        name="Swift"
                                        time="1 years"
                                        prof="Novice"/>
                                </div>
                            </section>
                            <section id="Software">
                                <h3 className="skillSectionTitle">Software</h3>
                                <div className="listLayout">
                                    <SkillBox
                                        src={vs}
                                        name="Visual Studio"
                                        time="4 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={vscode}
                                        name="VS Code"
                                        time="3 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={xcode}
                                        name="Xcode"
                                        time="1 years"
                                        prof="Capable"/>
                                    <SkillBox
                                        src={unity}
                                        name="Unity"
                                        time="4 years"
                                        prof="Experienced"/>
                                    <SkillBox
                                        src={rubymine}
                                        name="RubyMine"
                                        time="2 years"
                                        prof="Capable"/>
                                    <SkillBox
                                        src={photoshop}
                                        name="Adobe Photoshop"
                                        time="4 years"
                                        prof="Proficient"/>
                                </div>
                            </section>
                        </Fade>
                    </section>
                    <section id="projects">
                        <div className="sectionHeader">Projects</div>
                        <ProjectBox 
                            title="Snoverload"
                            left={true}
                            type="Mobile Game"
                            languages="C#"
                            description="Snoveload is an infinite runner app developed for iOS and Android using Unity. Originally prototyped in the spring of 2019,
                                Snoverload was released in the winter of 2020 after the formation of a team and was the first game released by Ardin Interactive." />
                        <ProjectBox 
                            title="lunchbox Store Manager App"
                            left={false}
                            type="Mobile Application"
                            languages="JavaScript (React Native)"
                            description="The lunchbox Store Manager App was built in React Native and released for internal use for lunchbox, a POC (Proof of Concept)
                                from Retail Business Services. The app manages store inventory, reordering, store history, and product removal." />
                        <ProjectBox 
                            title="Career Pathing"
                            left={true}
                            type="Web Application"
                            languages="HTML, CSS, JavaScript (React)"
                            description="Career Pathing is an internal tool used by Retail Business Services to allow employees of the company to determine the preferred
                                career path that they would like to take to get from their current role to their desired role. " />
                        <ProjectBox 
                            title="Daily Goals"
                            left={false}
                            type="Web Application"
                            languages="HTML, CSS, JavaScript, Ruby"
                            description="Daily Goals is a time tracking web application designed for Northridge Church to keep track of employees' hours spent on tasks to
                                determine where they are being productive or wasteful. The app tracks hours, auto generates tasks created by the user, and breaks down stats
                                for the user and supervisors to better understand the hours dedicated to different fields and departments." />
                        <ProjectBox 
                            title="E.C.H.O"
                            left={true}
                            type="Computer Game"
                            languages="C#"
                            description="E.C.H.O was the product of the 72 hour Music Game Jam in which we had to design and build a game focused on sound and music. Our team
                                of three designed a game that relied on proximity of sound and volume of sound to traverse levels in a puzzle based design. Our team removed almost all
                                visuals to force the player to rely on only sound alone to solve puzzles, which also made the game handicap friendly for those who are visually handicapped." />
                    </section>
                    <section id="contact">
                        <Fade bottom>
                            <div className="sectionHeader">Contact</div>
                            <div>
                                <div id="emailForm">
                                    <div id="contactLeft">
                                        <div id="contactName">
                                            <label>Name</label>
                                            <input ref={this.name} onChange={(event) => this.onChange("name", event)} required></input>
                                        </div>
                                        <div id="contactEmail">
                                            <label>Email</label>
                                            <input ref={this.email} onChange={(event) => this.onChange("email", event)} required></input>
                                        </div>
                                    </div>
                                    <div id="contactRight">
                                        <textarea ref={this.message} id="contactMess" placeholder="Your message here" required onChange={(event) => this.onChange("message", event)}></textarea>
                                    </div>
                                </div>
                                <div id="submitButton" value="Submit" onClick={this.sendEmail}>
                                    <p>{this.state.buttonText}</p>
                                </div>
                            </div>
                        </Fade>
                    </section>
                    <footer id="footer">
                        <h3 className="sectionHeader">Social Media</h3>
                        <div id="socialList">
                            <a href="https://github.com/MaxDeGeo" rel="noopener noreferrer" target="_blank"><img src={github} alt="GitHub Link" /></a>
                            <a href="https://www.linkedin.com/in/max-degeorge/" rel="noopener noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn Link" /></a>
                            <a href="https://maxdegeo.itch.io/" rel="noopener noreferrer" target="_blank"><img src={itchio} alt="Itch.io Link" /></a>
                        </div>
                        <p id="copyright">&copy; {new Date().getFullYear()} Max De George</p>
                    </footer>
                </article>
            </Fragment>
        );
    }
}