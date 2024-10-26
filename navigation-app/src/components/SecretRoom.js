import React, { useEffect } from 'react';
import '../App.css';

const SecretRoom = () => {
  useEffect(() => {
    const unlocked = localStorage.getItem('secretRoomSecondUnlocked');
    if (unlocked !== 'true') {
      window.location.href = '/'; // 암호를 풀지 않은 경우 메인 페이지로 리다이렉트
    }
  }, []);

  return (
    <div className="room-container" style={{ backgroundColor: 'black' }}>
      <h2>비밀의 방</h2>
      <p>단서를 여기에 삽입합니다.</p>
    </div>
  );
};

export default SecretRoom;
