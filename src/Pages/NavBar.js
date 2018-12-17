import React, { Component } from 'react';
import './NavBar.css';

import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '24px',
      left: '36px',
      top: '26px',
    //   padding: '2em'
    },
    bmBurgerBars: {
      background: '#66FCF1'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  

class NavagationComponent extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu styles={ styles }>
        <nav className="topnav">
                <li><a href="../index.html">Home Page</a></li>
                <li><a href="#aboutPortion">About</a></li>
                <li><a href="#headingExperience">Resume</a></li>
                <li><a href="#projectID">Projects</a></li>
        </nav>
        </Menu>

    );
  }
}

// class NavagationComponent extends Component {
//     render(){
//         return (
//             <nav className="topnav">
//                 <a href="../index.html">Home Page</a>
//                 <a href="#">About</a>
//                 <a href="#">Contact</a>
//                 <a href="#">Tetris</a>
//             </nav>
//         );
//     }

    
// };  

export default NavagationComponent;