import { HEIGHT, WIDTH } from './constants';

export const generateBoard = () => {
  const arr = [];
  for (let i = 0; i < HEIGHT; i++) {
    arr[i] = [];
    for (let j = 0; j < WIDTH; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}