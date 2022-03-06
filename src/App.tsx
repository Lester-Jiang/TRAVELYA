import React from 'react';
import './App.css';
import tw from "twin.macro";
import { TopSection } from './containers/TopSection';
import { ExploreSection } from './containers/ExploreSection';
import { Footer } from './components/Footer';

import {store} from "./store";
import {StoreContext} from 'redux-react-hook';

const AppContainer = tw.div`
  flex
  w-full
  h-full
  flex-col
`;

function App() {
  return (
      <StoreContext.Provider value={store}>
        <AppContainer>
          <TopSection></TopSection>
          <ExploreSection></ExploreSection>
          <Footer></Footer>
        </AppContainer>
      </StoreContext.Provider>
  );
}

export default App;
