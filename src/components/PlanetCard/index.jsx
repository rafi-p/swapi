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


const PlanetCard = props => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Container>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Loremaaaaaaaaa'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
      <li>
        <Text
          styling={ FontStyles.mediumM }
          text='Lorem'
          color={ Colors.red.default }
        />
      </li>
    </Container>
  );
};

export default PlanetCard;
