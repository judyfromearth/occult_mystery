import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BreakRoom = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여러 암호와 해당 페이지 경로 설정
    const passwordRoutes = {
      'P1': '/room/힌트/P1',
      'P2': '/room/힌트/P2',
      'P3': '/room/힌트/P3',
      'P4': '/room/힌트/P4',
      'P5': '/room/힌트/P5',
      'H1': '/room/힌트/H1',
      'H2': '/room/힌트/H2',
      'H3': '/room/힌트/H3',
      'H4': '/room/힌트/H4',
      'H5': '/room/힌트/H5',
      'L-AB': '/room/힌트/L-AB',
      // 필요한 힌트 코드 추가 가능
    };

    // 입력된 암호가 passwordRoutes에 있는지 확인 후 해당 경로로 이동
    if (passwordRoutes[password]) {
      navigate(passwordRoutes[password]);
    } else {
      setError('잘못된 힌트 코드야! 다시 적어줘');
    }
  };

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>힌트</h2>
      <img src="/images/힌트.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="text" // 수정: type을 text로 변경하여 힌트 입력 시 가려지지 않도록
          placeholder="힌트 코드를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">확인</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default BreakRoom;

