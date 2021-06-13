import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './index.less';

const FormItem = ({
  label, onChange = () => { }, type = 'text', value,
}) => (
  <div className={styles.formItem}>
    <label>
      {label}
      :
    </label>
    <input type={type} onChange={onChange} value={value} />
  </div>
);

function Login(props) {
  const {
    logout, login, token, history,
  } = props;
  const [password, setPassword] = useState('wcj');
  const [username, setUsername] = useState('wcj');
  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (token) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <div className={styles.login}>
      <FormItem
        label="Username"
        value={username}
        onChange={(env) => setUsername('username', env.target.value)}
        placeholder="Username"
      />
      <FormItem
        label="Password"
        value={password}
        onChange={(env) => setPassword('username', env.target.value)}
        placeholder="Type your password"
      />
      <button
        type="button"
        className={styles.btn}
        onClick={() => login({ password, username })}
      >
        Login
      </button>
    </div>
  );
}

const mapState = ({ global, user }) => ({
  test: global.test,
  token: user.token,
  message: user.message,
  loading: user.loading,
});

const mapDispatch = ({ user }) => ({
  logout: user.logout,
  login: user.login,
});

export default connect(mapState, mapDispatch)(Login);
