import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const InnerPlaza = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('innerPlazaUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/내부 광장/next');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '714414') {
      localStorage.setItem('innerPlazaUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/내부 광장/next');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  if (isUnlocked) {
    return (
      <div className="room-container" style={{ backgroundImage: "url('/images/광장.png')" }}>
        <h2>내부 광장</h2>
        <p>This room is unlocked.</p>
        {/* 추가 콘텐츠를 여기에 삽입할 수 있습니다. */}
      </div>
    );
  }

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/광장.png')" }}>
      <h2>내부 광장</h2>
      <img src="/images/005.png" alt="Hint" className="hint-image" />
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

export default InnerPlaza;
