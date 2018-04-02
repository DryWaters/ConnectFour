import { HEIGHT, WIDTH } from './constants';

export generateBoard = (HEIGHT, WIDTH) => {
  const arr = [];
  for (let i = 0; i < HEIGHT; i++) {
    arr[i] = [];
    for (let j = 0; j < WIDTH; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}