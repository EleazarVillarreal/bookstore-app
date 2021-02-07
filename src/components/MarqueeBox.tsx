import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

export interface MarqueeBoxProps {
  backgroundColor?: string;
  boostrapCols?: string;
  color?: string;
  marginTop?: string;
  padding?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const StyledDiv = styled.div<MarqueeBoxProps>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  flex-direction: column;
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
`;

const MarqueeBox: React.FC<MarqueeBoxProps> = ({
  backgroundColor = 'rgba(0, 0, 0, 0.6)',
  boostrapCols = 'col-md-5',
  children,
  color = '#fff',
  marginTop = '250px',
  padding = '15px',
  textAlign = 'left',
}) => (
  <Container>
    <Row>
      <StyledDiv
        backgroundColor={backgroundColor}
        className={boostrapCols}
        color={color}
        marginTop={marginTop}
        padding={padding}
        textAlign={textAlign}
      >
        {children}
      </StyledDiv>
    </Row>
  </Container>
);

export default MarqueeBox;
