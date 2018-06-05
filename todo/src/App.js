import React, { Component } from 'react';
import styled, {css} from 'styled-components'

import './App.css';



const NavContainer = styled.div ``;

const NavItem = styled.div `
  position: relative;
`;

const DesktopNav = styled.nav `
  background-color : #4A90E2;
  width : 1024px;
  height : 78px;
  
  ${NavContainer} {
    display: flex;
    align-items: center;
    
    ${NavItem} {
      margin: 0 10px;
      text-align: center;
    }
    a {
      margin-left : 25px;
    }
  };


`;






class DesktopNavigation extends React.Component {
  // constructor (props) {
  //   super(props)
  
  // }
  
  render() {
    return (
      <DesktopNav>
        Nav
        <NavContainer>
          <NavItem>
            <a>My Task</a>
          </NavItem>
          <NavItem>
            <a>In Progress</a>
          </NavItem>
          <NavItem>
            <a>Completed</a>
          </NavItem>
        </NavContainer>
      </DesktopNav>
    );
  }

}


export default DesktopNavigation;
