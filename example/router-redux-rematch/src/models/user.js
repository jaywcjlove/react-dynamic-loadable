import request from '../utils/request';

const getToken = () => localStorage.getItem('token');
const getUsername = () => localStorage.getItem('username');

export default {
  state: {
    token: getToken(),
    username: getUsername(),
    loading: false,
    message: '',
  },
  reducers: {
    changeLoading(state, payload) {
      return { ...state, loading: payload };
    },
    addUserData(state, payload) {
      return { ...state, ...payload };
    },
    sendMessage(state, payload) {
      return { ...state, message: payload };
    },
  },
  effects: {
    async login({ username, password }) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      // Fetch 请求实例
      this.changeLoading(true);
      const data = await request('/api/login', {
        method: 'POST',
        body: { username, password },
      });
      if (data.token) {
        await this.addUserData(data);
        await localStorage.setItem('token', data.token);
        await localStorage.setItem('username', data.username);
      } else if (data.error) {
        await this.sendMessage(data.error);
      }
      await this.changeLoading(false);
    },
    async logout() {
      await localStorage.removeItem('token');
      await localStorage.removeItem('username');
      await this.addUserData({ username: null, token: null });
    },
  },
};
