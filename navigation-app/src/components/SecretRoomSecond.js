import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SecretRoomSecond = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('secretRoomSecondUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/비밀의 방/next');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'SECONDSECRET') { // 두 번째 암호
      localStorage.setItem('secretRoomSecondUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/비밀의 방/next');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/비밀 연구실.png')" }}>
      <h2>비밀의 방</h2>
      <img src="/images/009.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="두 번째 암호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">확인</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SecretRoomSecond;
