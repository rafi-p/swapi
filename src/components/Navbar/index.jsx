import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Images, Colors, FontStyles } from '../../constant/index';
import {
  Text
} from '../../components/index';
import {
} from '../index';
import {
  Container
} from './style.js';


const NavbarComponent = props => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Container>
      <div className='img-wrapper'>
        <img
        src={ Images.starWars }
        alt=''
        onClick={ () => history.push('/') }
        />
      </div>
      <div
        className='btn-wish'
        // onClick={ () => history.push('/wishlist') }
      >
        <Text
          styling={ FontStyles.mediumM }
          text='Wishlist'
          color={ Colors.white.default }
        />
      </div>
    </Container>
  );
};

export default NavbarComponent;
