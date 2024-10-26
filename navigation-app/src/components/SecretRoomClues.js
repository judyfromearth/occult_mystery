import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HintRoom = () => {  // 컴포넌트명도 변경
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여러 암호와 페이지 경로 설정
    const passwordRoutes = {
      '438750': '/room/힌트/next',    // 기존 휴게실 암호의 새로운 경로
      '123456': '/room/힌트1',        // 다른 힌트로 이동
      '789101': '/room/힌트2',        // 또 다른 힌트로 이동
      // 필요한 암호와 페이지 경로 추가 가능
    };

    // 입력된 암호가 passwordRoutes에 있는지 확인
    if (passwordRoutes[password]) {
      navigate(passwordRoutes[password]);
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/힌트.png')" }}>
      <h2>힌트</h2>
      <img src="/images/004.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="암호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">조사하기</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default HintRoom;

