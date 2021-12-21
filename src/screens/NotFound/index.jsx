import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  PlanetCard,
  CustomModal
} from '../../components/index';
import {
  Container,
} from './style.js';
import {
  Images,
  Colors,
  FontStyles
} from '../../constant/index';
import { convert, LocalStorage } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import InfiniteScroll from 'react-infinite-scroll-component';

const NotFound = props => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Text
        styling={ FontStyles.heading2 }
        text={ 'Page Not Found' }
        color={ Colors.black.default }
      />
    </Container>
  );
};

export default NotFound;
