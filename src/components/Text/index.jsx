import React from 'react';
import { StyledText } from './style';

const Text = ({ color, text, lineHeight, styling, ...props }) => {
  return (
    <StyledText
      color={ color }
      lineHeight= { lineHeight }
      styling= { styling }
      { ...props }
    >
      {text}
    </StyledText>
  );
};

export default Text;
