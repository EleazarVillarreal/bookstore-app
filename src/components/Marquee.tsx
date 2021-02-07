import React from 'react';
import styled from 'styled-components';

export interface MarqueeProps {
  backgroundColor?: string;
  backgroundImage?: string;
  minHeight?: string;
}

const StyledSection = styled.section<MarqueeProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  min-height: ${({ minHeight }) => minHeight};
  overflow: auto;
`;

const Marquee: React.FC<MarqueeProps> = ({
  backgroundColor,
  backgroundImage,
  children,
  minHeight = '700px',
}) => (
  <StyledSection
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    minHeight={minHeight}
  >
    {children}
  </StyledSection>
);

export default Marquee;
