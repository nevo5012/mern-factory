import {  useState } from 'react';

import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import JobsManuComp from './pages/jobsManu';
import LoginComp from './pages/login';
import ManagerPageComp from './pages/managerPage';
import SellerPageComp from './pages/sellerPage';


function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function ManuComp(params) {


  const [user] = useState(
    getSessionStorageOrDefault('user', false)
  );
    

  const logout = () =>
  {
    sessionStorage.clear()
    window.location.assign('/')
  }


  return (
    <>
      <Router>


        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Factory management</Navbar.Brand>
            
            <Nav style={{display: user? 'block' : "none"}}>
              <Navbar.Text>
                Signed in as: {user.first_name}
              </Navbar.Text>
              {' '}
              <Button onClick={logout}> sign out</Button>
             
              
              
            </Nav>
            <Nav style={{display: user? 'none' : "block"}}>


              <Link to="/">
                <Button> Login</Button>

              </Link>
            </Nav>
          </Container>
        </Navbar>


        <Switch>

          <Route exact path='/' component={LoginComp} />
          <Route path='/jobsmanu' component={JobsManuComp} />
          <Route path='/managerpage' component={ManagerPageComp} />
          <Route path='/sellerpage' component={SellerPageComp} />


        </Switch>





      </Router>
    </>
  );
}


export default ManuComp;