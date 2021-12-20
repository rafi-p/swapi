import styled from 'styled-components';
import { Fonts, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
  .table-container {
    padding: 0 200px;
    margin-top: 80px;

    @media ${Sizes.sm} {
      padding: 0 20px;
      overflow-x: scroll;
      margin-top: 50px;
    }
  }
`;
const Header = styled.div`
  background-color: ${Colors.white.default};
  display: flex;
  padding: 20px 20px;
  box-shadow: 0 0.2vw 0.6vw rgba(0, 0, 0, 0.1);
  /* border-radius: .5vw .5vw 0 0; */
  @media ${Sizes.sm} {
    width: 200vw;
  }
  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-right: 1px solid ${Colors.grey.lineGrey};
    &:last-of-type {
      border: none;
    }
  }
`;
const Content = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height: calc(100vh - 275px);

    scrollbar-color: ${Colors.grey.lineGrey} ${Colors.white.pureWhite};
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 2px
    }
    &::-webkit-scrollbar-track {
        background-color: ${Colors.white.pureWhite};
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background: ${Colors.grey.lineGrey};
        box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    }

    @media ${Sizes.sm} {
      width: 200vw;
      max-height: calc(100vh - 200px);
    }
`;

export {
  Container,
  Header,
  Content
};