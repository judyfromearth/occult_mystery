import React from 'react';

const PasswordReset = () => {
  return (
    <div className="container">
      <h2>암호 초기화</h2>
      <p>여기에 암호 초기화에 대한 설명을 적어주세요.</p>
      <input type="text" placeholder="암호 초기화 코드 입력" className="password-input" />
      <button className="password-button">확인</button>
    </div>
  );
};

export default PasswordReset;
