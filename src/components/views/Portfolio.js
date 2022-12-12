import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Timer1 from '../images/hb_pic.png'
import Timer2 from '../images/moon-phases.en.gif'
import Timer3 from '../images/color.png'


const styles = {
  portfolio:{
    marginLeft:"10%",
    marginRight:"10%",
  },
};

export default function Portfolio() {
    return (
    <div className='d-flex flex-row' style={styles.portfolio}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Timer1} />
      <Card.Body>
        <Card.Title>Homeward-Bound</Card.Title>
        <Card.Text>
          Help lost pets find their way home again.
        </Card.Text>
        <a href="https://github.com/bburton5/homeward-bound">
        <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Timer2} />
      <Card.Body>
        <Card.Title>Star-Gazer</Card.Title>
        <Card.Text>
          Find the perfect night to go star gazing.
        </Card.Text>
        <a href="https://github.com/night-hike/star-gazer">
        <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Timer3} />
      <Card.Body>
        <Card.Title>Tiletopia</Card.Title>
        <Card.Text>
          Idle game where you collect coins to continue to the next level. 
        </Card.Text>
        <a href="">
        <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    );
  }