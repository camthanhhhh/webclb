import React, { useState } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log(`UserName: ${username}`);
    console.log(`Password: ${password}`);
    // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
    // Nếu đăng nhập thất bại, hiển thị lỗi
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Xử lý gửi email quên mật khẩu ở đây
    console.log(`Email: ${email}`);
    // Nếu gửi email thành công, hiển thị thông báo
    // Nếu gửi email thất bại, hiển thị lỗi
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label for="username">UserName:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
        <Button variant="link">ForgotPassword?</Button>
        {/* <button type="button" onClick={handleForgotPassword}>
          Quên mật khẩu?
        </button> */}
        
      </form>
    </div>
  );
};

export default LoginPage;