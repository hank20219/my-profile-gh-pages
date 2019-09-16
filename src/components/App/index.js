    import React, { Component } from 'react';
    import { BrowserRouter as Router, Switch, Route, Link, History, Location } from 'react-router-dom';
    import Home from '../../components/Home';
    import About from '../../components/About';
    import Contact from '../../components/Contacts';
    import Repos from '../../components/Repos';
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
                        marginLeft: expanded ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}
                >
                <h2>Welcome to my page</h2>
                <Switch>
                    <Route path="/" exact component={Home} />                
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                </div>
            <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }} 
                    onToggle = {this.onToggle}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <i className="fa fa-fw fa-report" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                About
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">
                            <NavIcon>
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
        /*<Router>
            <div>
              <h2>Welcome to my homepage</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
                <li><Link to={'/repos'} className="nav-link">Repos</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/repos' component={Repos} />
                  <Route path='/contact' component={Contact} />
              </Switch>
            </div>
          </Router>*/
        );
      }
    }

    export default App;
