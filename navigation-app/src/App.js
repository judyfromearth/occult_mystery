import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExternalRoom from './components/ExternalRoom';
import VaultRoom from './components/VaultRoom';
import LabRoom from './components/LabRoom';
import BreakRoom from './components/BreakRoom';
import InnerPlaza from './components/InnerPlaza';
import ControlRoom from './components/ControlRoom';
import DiningRoom from './components/DiningRoom';
import SecretRoomFirst from './components/SecretRoomFirst';
import SecretRoomSecond from './components/SecretRoomSecond';
import ExternalRoomClues from './components/ExternalRoomClues';
import VaultRoomClues from './components/VaultRoomClues';
import LabRoomClues from './components/LabRoomClues';
import BreakRoomClues from './components/BreakRoomClues';
import InnerPlazaClues from './components/InnerPlazaClues';
import ControlRoomClues from './components/ControlRoomClues';
import DiningRoomClues from './components/DiningRoomClues';
import SecretRoomClues from './components/SecretRoomClues';
import ResetPassword from './components/ResetPassword';
import HintDisplay from './components/HintDisplay'; // HintDisplay import 추가

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/room/A 사물함" element={<ExternalRoom />} />
        <Route path="/room/A 사물함/next" element={<ExternalRoomClues />} />
        <Route path="/room/B 사물함" element={<VaultRoom />} />
        <Route path="/room/B 사물함/next" element={<VaultRoomClues />} />
        <Route path="/room/동아리방" element={<LabRoom />} />
        <Route path="/room/동아리방/next" element={<LabRoomClues />} />
        <Route path="/room/힌트" element={<BreakRoom />} />
        <Route path="/room/힌트/:hintCode" element={<HintDisplay />} /> {/* 힌트 코드에 따른 페이지 */}
        <Route path="/room/내부 광장" element={<InnerPlaza />} />
        <Route path="/room/내부 광장/next" element={<InnerPlazaClues />} />
        <Route path="/room/통제실" element={<ControlRoom />} />
        <Route path="/room/통제실/next" element={<ControlRoomClues />} />
        <Route path="/room/식당" element={<DiningRoom />} />
        <Route path="/room/식당/next" element={<DiningRoomClues />} />
        <Route path="/room/비밀의 방" element={<SecretRoomFirst />} />
        <Route path="/room/비밀의 방/second" element={<SecretRoomSecond />} />
        <Route path="/room/비밀의 방/next" element={<SecretRoomClues />} />
      </Routes>
    </Router>
  );
};

export default App;

