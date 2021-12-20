import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text
} from '../../components/index'
import {
  Container
} from './style.js';
import {
  Images,
  Colors,
  FontStyles
} from '../../constant/index'
import { convert, LocalStorage } from '../../helpers/index';
import * as planetsAction from '../../store/planet/actions';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Dashboard = props => {
  const dispatch = useDispatch();


  return (
    <Container>
      <Text
        styling={ FontStyles.mediumM }
        text='Dashboard'
        color={ Colors.grey.darkGrey }
        className={ !isMobile ? 'mb-40' : 'mb-30' }
      />
    </Container>
  );
};

export default Dashboard;
