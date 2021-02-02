import React from 'react';
import styled from 'styled-components';

export interface MarqueeProps {
  background?: string;
  minHeight?: string;
}

const StyledSection = styled.section<MarqueeProps>`
  background: url(${({ background }) => background});
  background-size: cover;
  min-height: ${({ minHeight }) => minHeight};
  overflow: auto;
`;

const Marquee: React.FC<MarqueeProps> = ({
  background = 'https://raw.githubusercontent.com/Firebrand/imageshare/master/kvothebooks.jpg',
  children,
  minHeight = '700px',
}) => (
  <StyledSection background={background} minHeight={minHeight}>
    {children}
  </StyledSection>
);

export default Marquee;
