import React, { Component } from 'react';
import logo from '../Tile1.jpg';
import FlexView from 'react-flexview';
import personalPic from '../personalImage.jpg'



class Home extends Component {
  render() {
    return (
      <div className="home" id="aboutPortion">
       <FlexView column height={"100vh"} hAlignContent='center' vAlignContent='center'>
             <img src={`${personalPic}`} alt="Picture of Mikhail, Myself!" style={{maxHeight:"35vh", borderRadius: "50%"}}>
             </img>
             <div style={{ fontSize: "40px" }}>
                 Mikhail Bondarenko
             </div>
             <div style={{ fontSize: "28px", color: "#C5C6C7" }}>
                 Coder &nbsp;  Linux Enthusiast &nbsp; Debugger 
             </div>
             <br/>
             <FlexView row hAlignContent='center' vAlignContent='center'>
                 <a href="https://www.linkedin.com/in/mikhailbondarenko/" className="fa fa-linkedin"></a>
                 <a href="https://github.com/mikbonda/"  className="fa fa-github-alt" ></a>
             </FlexView>
        </FlexView>

      </div>
    );
  }
}

export default Home;
