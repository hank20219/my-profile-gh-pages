    import React, { Component } from 'react';
    import { BrowserRouter as Router, Switch, Route, Link, History, Location } from 'react-router-dom';
    import Home from '../../components/Home';
    import About from '../../components/About';
    import Contact from '../../components/Contacts';
    import Repos from '../../components/Repos';
    import logo from '../../icons/logo.svg';
    import homeIcon from '../../icons/home.svg';
    import aboutIcon from '../../icons/about.svg';
    import contactIcon from '../../icons/contact.svg';
    import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '@trendmicro/react-sidenav/dist/react-sidenav.css';
    import "./App.css";

    class App extends Component {
      state = {
        selected: 'home',
        extended : false  
      };
      onSelect = (selected) => {
        this.setState({ selected: selected });
      };
      onToggle = (expanded) => {
        this.setState({ expanded: expanded });
      };
      render() {
        const { expanded, selected } = this.state;
        return (
        <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>                                
                <div
                    style={{
                        marginLeft: expanded ? 230 : 54,
                        padding: '5px 20px 0 0px',
                        backgroundColor: '#343A40'
                    }}
                >
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">                        
                        <a class="navbar-brand"  href="/">
                            <img src = {logo} width = "117px" style={{float:'left'}} />
                            <h1 style= {{padding:'17px 0 0 0'}}>Welcome to my page</h1>
                        </a>                        
                    </nav>  
                    
                </div>
            
                <div
                    style={{
                        marginLeft: expanded ? 240 : 64,
                        padding: '5px 20px 0 20px'
                    }}
                >
                    <Switch>
                        <Route path="/" exact component={Home} />                
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            <SideNav
                    onSelect={(selected) => {                        
                        const to = '/' + selected;
                        if (location.pathname !== to && selected !== "home") {
                            history.push(to);
                        }else if (selected === "home"){
                            history.push('/');
                        }
                    }} 
                    onToggle = {this.onToggle}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <img src = {homeIcon} 
                                     style = {{position: 'inherit',
                                               padding: '0 0 10px 0',
                                               width: '75%',
                                               height: '75%',
                                               opacity: '0.8',
                                             }} />
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <img src = {aboutIcon} 
                                     style = {{position: 'inherit',
                                               padding: '0 0 10px 0',
                                               width: '75%',
                                               height: '75%',
                                               opacity: '0.8',
                                             }} />
                                <i className="fa fa-fw fa-report" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                About
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">                            
                            <NavIcon>
                            <img src = {contactIcon} 
                                     style = {{position: 'inherit',
                                               padding: '0 0 10px 0',
                                               width: '75%',
                                               height: '75%',
                                               opacity: '0.8',
                                             }} />
                                <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Contact
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </React.Fragment>
        )}
        />
        </Router>
        );
      }
    }

    export default App;
