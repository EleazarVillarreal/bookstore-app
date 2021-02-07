import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from 'react-bootstrap';
import Marquee from './Marquee';
import MarqueeBox from './MarqueeBox';

const StyledButton = styled(Button)<ButtonProps>`
  width: 180px;
`;

const App: React.FC = () => {
  return (
    <>
      <Marquee backgroundImage="https://raw.githubusercontent.com/Firebrand/imageshare/master/kvothebooks.jpg">
        <MarqueeBox>
          <h1 className="font-weight-bold">You haven't read anything yet.</h1>
          <p>
            They say outside of a dog, a book is a man's best friend (inside of
            a dog it's too dark to read). Com in, chat with us, share your
            favorite books & films and we'll introduce you to some of the
            greatest friends you'll ever know.
          </p>
          <StyledButton
            as="a"
            className="btn btn-success align-self-center"
            href="#"
          >
            Come visit us!
          </StyledButton>
        </MarqueeBox>
      </Marquee>
    </>
  );
};

export default App;
