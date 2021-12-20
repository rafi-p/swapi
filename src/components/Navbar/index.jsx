import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {
} from '../index';
import {
  Container
} from './style.js';


const NavbarComponent = props => {
  const history = useHistory()
  const { pathname } = useLocation();

  return (
    <Container>
      navbar
    </Container>
  );
};

export default NavbarComponent;
