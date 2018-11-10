import React from 'react';

const loginSection = (props) => {
  return(
    <section id="login-section">
      <div className="section-heading">You are a</div>
      <div className="chain">
        <button className="six pockets blue" onClick={() => props.handleLogin("FACULTY")}>Faculty Member</button>
        <button className="six pockets green" onClick={() => props.handleLogin("STUDENT")}>Student</button>
      </div>
    </section>

  );
};

export default loginSection;
