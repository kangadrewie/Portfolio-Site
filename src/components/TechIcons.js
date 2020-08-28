import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';

class TechIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: window.matchMedia("(min-width: 768px)").matches,
            iconSize: 'big',
            tech: {
                name: '',
<<<<<<< HEAD
                exp: '',
                frameworks: []
            }
=======
                exp: '1 Year',
                frameworks: 'React.JS'
            },
            itemSelected: false
>>>>>>> site_2/master
        }
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 886px)").addListener(handler);
    }

    handleClick = (e) => {
        if (e.currentTarget.getAttribute('lang') === 'python') {
<<<<<<< HEAD
            this.setState({tech: {name: 'Python 3', desc: "I build both small and large scale applications in JavaScript daily for desktop, tablet, mobile or server. Combined with an in-depth understanding of UX and design means I can take applications from start to finish. I can also provide consulting and advice on solutions."}})
        }
    }
=======
            this.setState({tech: {name: 'Python3,', exp: '1 Year,', frameworks: '\'Flask\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'js') {
            this.setState({tech: {name: 'Javascript,', exp: '1 Year,', frameworks: '\'jQuery\',  \'ReactJS\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'html') {
            this.setState({tech: {name: 'HTML5,', exp: '1 Year,', frameworks: '\'Bootstrap\',  \'SemanticUI\',  \'CSS Grid\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'react') {
            this.setState({tech: {name: 'ReactJS,', exp: '3 Months,', frameworks: '\'Spring\',  \'react-animations\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'css') {
            this.setState({tech: {name: 'CSS3,', exp: '1 Year,', frameworks: '\'Bootstrap\',  \'SemanticUI\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'aws') {
            this.setState({tech: {name: 'AWS,', exp: '1 Year,', frameworks: '\'LightSail\',  \'S3\',  \'EC2\''}})
            this.setState({itemSelected: true})
        }
        if (e.currentTarget.getAttribute('lang') === 'git') {
            this.setState({tech: {name: 'Git,', exp: '1 Year,', frameworks: 'null'}})
            this.setState({itemSelected: true})
        }
    }

    closeBraces = () => {
        this.setState({itemSelected: !this.state.itemSelected})
    }
>>>>>>> site_2/master
    
    render() {
        console.log(this.state.matches)
        return(
            <Fade duration={1500} bottom>
                <div style={container}>
                    <h3 style={heading}>Familiar Technologies : </h3>
                    <table>
                        <tbody>
                            <FadeIn delay="200" transitionDuration="600" style={fadeStyle} wrapperTag={"tr"} childTag={"td"}>
                                <h3 style={braces}>{'{'}</h3>
                                <i id="codeIcons" lang="python" className={(this.state.matches) ? "big python icon" : "large python icon"} alt="Python3" onClick={this.handleClick}>,</i>
<<<<<<< HEAD
                                <i id="codeIcons" lang="js" className={(this.state.matches) ? "big js icon" : "large js icon"} alt="Javascript">,</i>
                                <i id="codeIcons" lang="html" className={(this.state.matches) ? "big html5 icon" : "large html5 icon"} alt="HTML5">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big react icon" : "large react icon"}>,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big flask icon" : "large flask icon"} alt="Flask">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big css3 icon" : "large css3 icon"} alt="CSS3">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big aws icon" : "large aws icon"} alt="AWS">,</i>
                                <i id="codeIcons" className={(this.state.matches) ? "big git icon" : "large git icon"} alt="GIT"></i>
                                <h3 style={braces}>{'}'}</h3>
                            </FadeIn>
                        </tbody>
                    </table>
=======

                                <i id="codeIcons" lang="js" className={(this.state.matches) ? "big js icon" : "large js icon"} alt="Javascript" onClick={this.handleClick}>,</i>

                                <i id="codeIcons" lang="html" className={(this.state.matches) ? "big html5 icon" : "large html5 icon"} alt="HTML5" onClick={this.handleClick}>,</i>
                                
                                <i id="codeIcons" lang="react" className={(this.state.matches) ? "big react icon" : "large react icon"} onClick={this.handleClick}>,</i>

                                <i id="codeIcons" lang="css" className={(this.state.matches) ? "big css3 icon" : "large css3 icon"} alt="CSS3" onClick={this.handleClick}>,</i>

                                <i id="codeIcons" lang="aws" className={(this.state.matches) ? "big aws icon" : "large aws icon"} alt="AWS" onClick={this.handleClick}>,</i>

                                <i id="codeIcons" lang="git" className={(this.state.matches) ? "big git icon" : "large git icon"} alt="GIT" onClick={this.handleClick}></i>

                                <h3 style={braces} className={(this.state.itemSelected) ? "hide" : ""}>{'}'}</h3>
                                <i style={closeJSON} className={(this.state.itemSelected) ? "large caret up icon" : ""} onClick={this.closeBraces}></i>
                            </FadeIn>
                        </tbody> </table>
                    <table style={techTable}>
                        <tbody className={(this.state.itemSelected) ? "" : "hide"}>
                            <div style={font}>tech : {'{'}</div>
                            <div style={font} className="marginLeft"> name: {this.state.tech.name}</div>
                            <div style={font} className="marginLeft"> exp: {this.state.tech.exp}</div>
                            <div style={font} className="marginLeft"> frameworks:  [ {this.state.tech.frameworks} ]</div>
                            <div style={font}>{'}'}</div>
                        </tbody>
                    </table>
                        <h3 style={ClosingBraces} className={(this.state.itemSelected) ? "" : "hide"}>{'}'}</h3>
>>>>>>> site_2/master
                </div>
            </Fade>
        )
    }
}

const fadeStyle = {
    display: 'none'
}

<<<<<<< HEAD
=======
const closeJSON = {
    cursor: 'pointer'
}

const techTable = {
    marginTop: '10px',
    marginLeft: '40px'
}

>>>>>>> site_2/master
const braces = {
    fontWeight: '800',
    fontSize: '2em'
}

<<<<<<< HEAD
=======
const ClosingBraces = {
    paddingTop: '0',
    marginTop: '0',
    fontWeight: '800',
    fontSize: '2em'
}

const font = {
    fontFamily: 'monospace',
    fontSize: '1.1em',
}

>>>>>>> site_2/master
const p = {
    textAlign: 'center',
    opacity: '0',
    top: '10px'
}

const tableHead = {
    height: '10px'
}

const heading = {
    fontWeight: '400',
    fontFamily: 'monospace',
    paddingTop: '50px',
    paddingBottom: '20px',
    fontSize: '1em',
}

const container = {
    positon: 'relative',
}

const langDescription = {
    width: '100%'
}

export default TechIcons;
