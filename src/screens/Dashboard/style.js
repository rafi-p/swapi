import styled from 'styled-components';
import { Fonts, Images, Colors, Sizes } from '../../constant';

const Container = styled.div`
  @media ${Sizes.sm} {
    overflow-x: scroll;
  }
  .table-container {
    padding: 0 200px;

    padding-top: 200px;
    position: fixed;
    width: calc(100% - 400px);
    background: ${Colors.white.default};

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
    padding-top: 260px;

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
    }
`;


const TableWrapper = styled.div`
  padding: 0 200px;
  margin-top: 200px;

  @media ${Sizes.sm} {
    padding: unset;
    width: 200vw;
    margin-top: 125px;
  }

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
  table {
    width: 100%;
    table-layout: fixed;
    position: relative;
    @media screen and (max-width: 768px){
        table-layout: unset;
    }
    /* thead {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        background: ${Colors.white.default}
    } */
    th {
        position: sticky;
        top: 0;
        /* left: 0;
        width: 100%; */
        background: ${Colors.white.default};
    }

    .row-head {
        /* box-shadow: 0px 2px 10px 0px $shadow; */
    }

    td, th {
        text-align: center;
    }

    td {
        padding: 20px 10px;
        border-bottom: 1px solid ${Colors.grey.lineGrey};
        font-size: 12px;
        vertical-align: middle;
        transition: all .3;

        &.clicked {
          cursor: pointer;
          &:hover {
            font-weight: 700;
          }
        }
    }

    th {
        padding: 15px 10px;
        font-weight: 600;
        white-space: nowrap;
    }
    th:after{
        content:'';
        position:absolute;
        left: 0;
        bottom: 0;
        width:100%;
        border-bottom: 2px solid ${Colors.black.default};
    }
  }
`;

const ModalInfo = styled.div`
    background: ${Colors.white.default};
    border-radius: 20px;
    width: 486px;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${Sizes.sm} {
      width: unset;
      padding: 20px;
      margin: 10px;
    }
    & > * {
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0px;
        }
    }


    .xIcon {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    .all-text {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px 100px;
        @media ${Sizes.sm} {
          grid-gap: 10px 20px;
        }
    }
    .btn-wish {
        background: ${Colors.black.default};
        padding: 10px 20px;
        border-radius: 5px;
        transition: all .3s;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`;

export {
  Container,
  Header,
  Content,
  TableWrapper,
  ModalInfo
};