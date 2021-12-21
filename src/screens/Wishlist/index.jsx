import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  PlanetCard,
  CustomModal
} from '../../components/index';
import {
  Container,
  Header,
  Content,
  TableWrapper,
  ModalInfo
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
  const [offset, setOffset] = useState(0);
  const [code, setCode] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const limit = 4;
  const getPlanetByCode = dispatch(planetsAction.getPlanetByCode);
  const dataPlanetByCode = useSelector(state => state.planets.dataByCode);
  const saveToFav = dispatch(planetsAction.saveToFav);
  const removeToFav = dispatch(planetsAction.removeToFav);
  const dataFave = useSelector(state => state.planets.dataFave);

  useEffect(() => {
    LocalStorage.setPlanets(dataFave);

  }, [dataFave]);

  useEffect(() => {
    let temp = [...dataFave];
    temp = temp.slice(offset * limit, (offset * limit) + limit);
    setMainData(temp);
  }, [offset, dataFave]);


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

  const handleModal = url => {
    setOpenModal(true);
    let temp = url;
    if (url) {
      temp = temp.split('/');
      temp = temp[temp.length - 2];
    }
    setCode(temp);
    getPlanetByCode({ code: temp });
  };

  const handleWish = data => {
    let action = null;
    if (data.status) {
      action = removeToFav;
    } else {
      action = saveToFav;
    }

    action(null, { ...data, status: !data.status })
    .then(res => {
      getPlanetByCode({ code });
      setOpenModal(false);
      setOffset(0);
    })
    .catch(err => {

    });
  };

  useEffect(() => {
    if (!openModal) {
      setCode(null);
    }
  }, [openModal]);

  const RenderTable = () => {
    return (
      <TableWrapper>
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
                      <td
                        className='clicked'
                        onClick={ () => handleModal(el.url) }
                      >{el.name}</td>
                      <td>{el.climate}</td>
                      <td>{el.terrain}</td>
                      <td>{ el.population}</td>
                      <td>{el.gravity}</td>
                      <td>{el.surface_water}</td>
                      <td>{el.orbital_period}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

      </TableWrapper>
    );
  };


  return (
    <Container>
      <div className='wrapper-content'>
        <RenderTable/>
        {
          dataFave.length === 0 &&
          <Text
            styling={ FontStyles.boldM }
            text={ 'No Wishlist' }
            color={ Colors.black.default }
            className='empty'
          />

        }
      </div>
      {
        dataFave.length !== 0 &&
        <div className='pagination'>
          <img
            src={ Images.arrowPageLeft }
            alt=''
            onClick={ () => {
              if ((offset + 1) !== 1) {
                setOffset(offset - 1);
              }
            } }
            className={ `${(offset + 1) !== 1 ? '' : 'disabled'}` }
          />
          <div>
            {offset + 1}
          </div>
          <img
            src={ Images.arrowPageRight }
            alt=''
            onClick={ () => {
              if ((offset + 1) !== Math.ceil(dataFave.length / limit)) {
                setOffset(offset + 1);
              }
            } }
            className={ `${(offset + 1) !== Math.ceil(dataFave.length / limit) ? '' : 'disabled'}` }
          />
        </div>
      }
        <CustomModal
          isOpen={
            openModal
          }
          closeModal={ () => { setOpenModal(false); } }
        >
          <ModalInfo
          >
            <img
              className='xIcon'
              src={ Images.x }
              alt=''
              onClick={ () => { setOpenModal(false); } }
            />
            <Text
              styling={ FontStyles.heading3 }
              text='PLANET'
              color={ Colors.black.default }
            />
            {
              dataPlanetByCode && Object.keys(dataPlanetByCode).length > 0 &&
              <div className='all-text'>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Name'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.name }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Rotation Period'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.rotation_period }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Orbital Period'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.orbital_period }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Diameter'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.diameter }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Climate'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.climate }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Gravity'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.gravity }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Terrain'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.terrain }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Surface Water'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.surface_water }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Population'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.population }
                    color={ Colors.black.default }
                  />
                </div>
                <div className='text-wrapper'>
                  <Text
                    styling={ FontStyles.mediumM }
                    text='Created'
                    color={ Colors.black.default }
                  />
                  <Text
                    styling={ FontStyles.boldM }
                    text={ dataPlanetByCode.created }
                    color={ Colors.black.default }
                  />
                </div>
              </div>
            }
            {
              dataPlanetByCode && Object.keys(dataPlanetByCode).length > 0 &&
              <div className='btn-wish'>
                <Text
                  styling={ FontStyles.mediumM }
                  text={
                    dataPlanetByCode?.status
                    ?
                    'Remove from Wishlist'
                    :
                    'Add to Wishlist'
                  }
                  color={ Colors.white.default }
                  onClick={ () => handleWish(dataPlanetByCode) }
                />
              </div>
            }
          </ModalInfo>
        </CustomModal>
    </Container>
  );
};

export default Dashboard;
