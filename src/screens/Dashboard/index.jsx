import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  PlanetCard
} from '../../components/index';
import {
  Container,
  Header,
  Content
} from './style.js';
import {
  Images,
  Colors,
  FontStyles
} from '../../constant/index';
import { convert, LocalStorage } from '../../helpers/index';
import * as planetsAction from '../../store/planet/actions';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import InfiniteScroll from 'react-infinite-scroll-component';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [mainData, setMainData] = useState(Array.from({ length: 10 }));
  const arrData = Array.apply(null, Array(10)).map(() => {});

  const TableHeader = () => {
    return (
      <Header>
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
        <Text
          styling={ FontStyles.mediumM }
          text='No'
          color={ Colors.black.default }
          className='custom'
        />
      </Header>
    );
  };

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setMainData(prevState => (prevState.concat(Array.from({ length: 10 }))));
  });
};

  const TableContent = () => {
    return (
      <Content
        id='scrollableDiv'
        // style={ {
        //   // height: 300,
        //   overflow: 'auto',
        //   display: 'flex',
        //   flexDirection: 'column-reverse',
        // } }
      >
        <InfiniteScroll
          dataLength={ mainData.length }
          next={ fetchMoreData }
          hasMore={ true }
          loader={
            <div
              style={ { display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0' } }
            >
              <Text
                styling={ FontStyles.mediumS }
                text='Loading'
                color={ Colors.black.default }
              />
            </div>
          }
          scrollableTarget='scrollableDiv'
          // inverse={ true }
          // style={ { display: 'flex', flexDirection: 'column-reverse' } }
        >
          {mainData.map((planet, i) => {
            return (
              <PlanetCard
                key={ i }
                planet={ planet }
              />
            );
          })}
        </InfiniteScroll>
      </Content>
    );
  };


  return (
    <Container>
      {/* <Text
        styling={ FontStyles.mediumM }
        text='Dashboard'
        color={ Colors.grey.darkGrey }
      /> */}
      <div
        className='table-container'
      >
        <TableHeader />
        <TableContent />
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Color</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            arrData.map((el, i) => {
              return (
                <tr
                  key={ i }
                >
                  <td>Lorem.</td>
                  <td>Ullam.</td>
                  <td>Vel.</td>
                  <td>At.</td>
                  <td>Quis.</td>
                </tr>
              );
            })
          }
        </tbody>
      </table> */}
    </Container>
  );
};

export default Dashboard;
