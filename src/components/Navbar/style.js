import styled from 'styled-components';
import { Fonts, FontStyles, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
  background: ${Colors.black.default};
  height: 100px;
  display: flex;
  padding: 0 30px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 10px 0px;

  @media ${Sizes.sm} {
    height: 65px;
  }

  .img-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    width: 250px;
    height: auto;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        transform: scale(1.1);
      }
    }

    @media ${Sizes.sm} {
      width: 125px;
      left: 30px;
      transform: translateY(50%);
    }
  }

  .btn-wish {
    background: ${Colors.black.black1};
    padding: 10px 20px;
    border-radius: 5px;

    cursor: pointer;
    transition: all .3s;
    &:hover {
      outline:  1px solid ${Colors.white.default};
    }

    @media ${Sizes.sm} {
      padding: 5px 10px;
    }
  }
`;

export {
  Container,
};