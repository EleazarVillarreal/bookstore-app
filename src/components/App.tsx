import React from 'react';
import Marquee from './Marquee';

const App: React.FC = () => {
  return (
    <>
      <Marquee background="https://raw.githubusercontent.com/Firebrand/imageshare/master/kvothebooks.jpg">
        <h1>You haven't read anything yet.</h1>
        <p>
          They say outside of a dog, a book is a man's best friend (inside of a
          dog it's too dark to read). Com in, chat with us, share your favorite
          books & films and we'll introduce you to some of the greatest friends
          you'll ever know.
        </p>
        <button>Come visit us!</button>
      </Marquee>
    </>
  );
};

export default App;
