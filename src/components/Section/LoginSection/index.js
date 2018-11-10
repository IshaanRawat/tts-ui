import React from 'react';

const loginSection = (props) => {
  return(
    <div className="login-container">
      <div>Login as</div>
      <button onClick={() => props.handleLogin("FACULTY")}>Faculty Member</button>
      <button onClick={() => props.handleLogin("ADMIN")}>Administrator</button>
      <button onClick={() => props.handleLogin("STUDENT")}>Student</button>
    </div>

  );
};

export default loginSection;
