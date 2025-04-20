import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import OasisSperrenLassenOnline from './pages/OasisSperrenLassenOnline';
import OasisSpielsperreAufheben from './pages/OasisSpielsperreAufheben';
import OasisSperreAusland from './pages/OasisSperreAusland';
import OnlineCasinoOhneOasis from './pages/OnlineCasinoOhneOasis';
import OasisLotto from './pages/OasisLotto';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/oasis-sperren-lassen-online" element={<OasisSperrenLassenOnline />} />
            <Route path="/oasis-spielersperre-aufheben" element={<OasisSpielsperreAufheben />} />
            <Route path="/oasis-sperre-auch-im-ausland" element={<OasisSperreAusland />} />
            <Route path="/online-casino-ohne-oasis" element={<OnlineCasinoOhneOasis />} />
            <Route path="/oasis-lotto" element={<OasisLotto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;