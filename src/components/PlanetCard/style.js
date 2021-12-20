import styled from 'styled-components';
import { Fonts, FontStyles, Images, Colors, Sizes } from '../../constant';

const Container = styled.ul`
  list-style: none;
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid ${Colors.grey.lineGrey};

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    word-break: break-word;
  }
`;

export {
  Container,
};