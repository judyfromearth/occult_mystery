import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LabRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2> 이상한 형상이 스쳐간다 </h2>
      <img src="/images/clue.png" alt="Clue 7" className="clue-image" />
      {/* <img src="/images/clue7.png" alt="Clue 8" className="clue-image" /> */}
      <button onClick={() => navigate('/')}>소름끼친다</button>
    </div>
  );
};

export default LabRoomClues;
