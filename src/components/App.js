import React from 'react';

import { AppFooter } from './App-footer';
import { AppNav } from './App-nav';
import { Banner } from './Banner';
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { StayInTouch } from './StayInTouch';

function App() {
  return (
    <div className="App">
      <AppNav />
      <div className="App-body">
        <Banner />
        <SectionOne />
        <SectionTwo />
        <StayInTouch />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
