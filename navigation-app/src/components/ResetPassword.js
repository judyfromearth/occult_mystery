import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'UNLOCKER') { // 실제 암호로 변경해야 함
      navigate('/');
    } else {
      setError('Invalid code. Please try again.');
    }
  };

  return (
    <div className="reset-container">
      <img src="/images/암호초기화.png" alt="Reset Hint" className="reset-hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="암호 초기화 코드를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">확인</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ResetPassword;
