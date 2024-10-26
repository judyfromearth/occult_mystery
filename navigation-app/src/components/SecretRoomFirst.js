import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SecretRoomFirst = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('secretRoomFirstUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/비밀의 방/second');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '2052') { // 첫 번째 암호
      localStorage.setItem('secretRoomFirstUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/비밀의 방/second');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/복도.png')" }}>
      <h2>???</h2>
      <img src="/images/008.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="첫 번째 암호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">확인</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SecretRoomFirst;
