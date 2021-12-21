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
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const arrData = Array.apply(null, Array(10)).map(() => {});

  const getPlanets = dispatch(planetsAction.getPlanets);
  const dataPlanets = useSelector(state => state.planets.data);

  const fetchMoreData = () => {
    // setLoading(true);
    setPage(page + 1);
    // getPlanets({ page: page + 1 });
    // if (page === 1) {
    //   setTimeout(() => {
    //     // setLoading(false);
    //     setPage(page + 1);
    //   }, 3000);
    // } else {
    //   setPage(page + 1);
    // }
  };

  // useEffect(() => {
  //   getPlanets();
  // }, []);

  useEffect(() => {
    if (dataPlanets && Object.keys(dataPlanets).length > 0) {
      setMainData(prevState => [
        ...prevState,
        ...dataPlanets.results
      ]);
    }

  }, [dataPlanets]);

  useEffect(() => {
    getPlanets({ page });
  }, [page]);


  const dataTh = [
    {
      label: 'Planet',
      value: 'planet'
    },
    {
      label: 'Climate',
      value: 'climate'
    },
    {
      label: 'Terrain',
      value: 'terrain'
    },
    {
      label: 'Population',
      value: 'population'
    },
    {
      label: 'Gravity',
      value: 'gravity'
    },
    {
      label: 'Surface Water',
      value: 'area_provinsi'
    },
    {
      label: 'Orbital Period',
      value: 'orbital_period'
    },
  ];

  const RenderTable = () => {
    return (
      <TableWrapper>

        <InfiniteScroll
          dataLength={ mainData.length }
          next={ fetchMoreData }
          hasMore={ page < 6 }
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
                      <th  key={ i }>{el.label}</th>
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
                      <td>{el.name}</td>
                      <td>{el.climate}</td>
                      <td>{el.terrain}</td>
                      <td>{ el.population}
                        {/* { el.population && el.population !== 'unknown'
                          ?
                          Number(el.population).toLocaleString(['ban', 'id'])
                          :
                          '-'
                        } */}
                      </td>
                      <td>{el.gravity}</td>
                      <td>{el.surface_water}</td>
                      <td>{el.orbital_period}</td>
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
