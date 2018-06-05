import React, { Component } from 'react';
import styled, {css} from 'styled-components';
// import {BoardPanel} from './Board';
// import {DesktopNavigation} from './Nav'
import './App.css';


const GridWrapper = styled.div ``;
const NavContainer = styled.div ``;
const NavItem = styled.button ``;



const NavWrapper = styled.nav `
 background-color : #4A90E2;
  width : 100%;
  height : 78px;
  
  ${GridWrapper} {
    display: flex;
    align-items: center;
    
    ${NavItem} {
      text-align: center;
      margin: 0 120px;
      
    }
  };

`;

const BoardContainer = styled.div `
  background-color : gray;
  width: 500px;
  height: 123px;

`;
const BoardContent = styled.div ``;
const BoardTitle = styled.div ``;
const BoardRectangle = styled.div ``;

class DesktopNavigation extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <NavWrapper>
        <GridWrapper>
          <NavContainer>
            <NavItem>My Tasks</NavItem>
            <NavItem>In Progress</NavItem>
            <NavItem>Completed</NavItem>

          </NavContainer>
        </GridWrapper>
      </NavWrapper>
    );
  }
}


const BoardPanel = () => (
  <BoardPanel>
    <BoardContainer>
      <BoardContent>
      <BoardTitle>
        Type something here
      </BoardTitle>

      </BoardContent>
      <BoardRectangle>
      </BoardRectangle>
    </BoardContainer>
  </BoardPanel>
);


export default DesktopNavigation;
// export default {DesktopNavigation, BoardPanel }
