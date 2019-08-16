
import { init } from '@rematch/core';
import global from '../models/global';

export const store = init({
  models: { global },
});
