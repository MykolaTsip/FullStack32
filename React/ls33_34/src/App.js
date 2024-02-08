// import './App.css';
import './App.scss';

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

import { Stack, Button} from '@mui/material';

import Accordion from 'react-bootstrap/Accordion';
// import { Accordion } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      
      <div className="user">
        <div className="user_img">
          <div className="user_img-i">
            <img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" />
          </div>
        </div>
        <div className="user_title">
            <h2> Hello world</h2>
        </div>
        <div className="user_content">
            Lorem kgk fdjgfdn gjdfngi
        </div>
      </div>


      <div className="block"></div>

      <div className="block2"></div>

      <div className="d">
        <p>
          sdvsfs 
        </p>
        <p>
          dslf fgdpp
        </p>
      </div>


      <hr/>

      <Stack>
        <Button variant="contained"> HFh </Button>
      </Stack>

      <hr/>

      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;
