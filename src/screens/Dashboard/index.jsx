import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  PlanetCard
} from '../../components/index';
import {
  Container,
  Header,
  Content,
  TableWrapper
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
  const chatDiv = useRef(null);
  const [mainData, setMainData] = useState(Array.from({ length: 20 }));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const arrData = Array.apply(null, Array(10)).map(() => {});

  const fetchMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setMainData(mainData.concat(Array.from({ length: 20 })));
      setLoading(false);
    }, 1500);
  };


  const dataTh = [
    {
      label: 'No.',
      value: 'no'
    },
    {
      label: 'Comodity',
      value: 'komoditas'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'Size',
      value: 'size'
    },
    {
      label: 'City',
      value: 'area_kota'
    },
    {
      label: 'Province',
      value: 'area_provinsi'
    },
    {
      label: 'Data added',
      value: 'tgl_parsed'
    },
  ];

  const RenderTable = () => {
    return (
      <TableWrapper>

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
          // scrollableTarget='scrollableDiv'
        >
          <table>
            <thead>
              <tr className='row-head'>
                {
                  dataTh.map((el, i) => {
                    return (
                      <th  key={ i }>label</th>
                    );
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                mainData &&
                mainData.map((el, i) => {
                  return (
                    <tr key={ i }>
                      <td>lorem</td>
                      <td>lorem</td>
                      <td>lorem</td>
                      <td>lorem</td>
                      <td>lorem</td>
                      <td>lorem</td>
                      <td>lorem</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </InfiniteScroll>

      </TableWrapper>
    );
  };


  return (
    <Container>
      <RenderTable/>
    </Container>
  );
};

export default Dashboard;
