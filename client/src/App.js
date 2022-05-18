import React from 'react';
import Routerse from './compoment/routers/Route'
import { BrowserRouter } from 'react-router-dom'
import Globale from './compoment/globalCss/Globale'


function App() {
  return (
    <Globale >
      <BrowserRouter>
        <Routerse pink />
      </BrowserRouter>
    </Globale>
  );
}

export default App;
