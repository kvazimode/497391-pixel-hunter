import {pics} from "./data/temp-pics";

export default {
  level: 0,
  life: 3,
  time: 15,
  tasks: [
    {template: `onePic`, text: `Угадай, фото или рисунок?`, pictures: [pics.paintings[0]], correct: `paint`, answer: ``, time: 0},
    {template: `onePic`, text: `Угадай, фото или рисунок?`, pictures: [pics.photos[0]], correct: `photo`, answer: ``, time: 0},
    {template: `onePic`, text: `Угадай, фото или рисунок?`, pictures: [pics.photos[1]], correct: `photo`, answer: ``, time: 0},
    {template: `onePic`, text: `Угадай, фото или рисунок?`, pictures: [pics.paintings[1]], correct: `paint`, answer: ``, time: 0},
    {template: `twoPic`, text: `Угадайте для каждого изображения фото или рисунок?`, pictures: [pics.paintings[2], pics.photos[2]], correct: [`paint`, `photo`], answer: ``, time: 0},
    {template: `twoPic`, text: `Угадайте для каждого изображения фото или рисунок?`, pictures: [pics.paintings[0], pics.paintings[1]], correct: [`paint`, `paint`], answer: ``, time: 0},
    {template: `twoPic`, text: `Угадайте для каждого изображения фото или рисунок?`, pictures: [pics.photos[1], pics.photos[2]], correct: [`photo`, `photo`], answer: ``, time: 0},
    {template: `twoPic`, text: `Угадайте для каждого изображения фото или рисунок?`, pictures: [pics.photos[2], pics.paintings[0]], correct: [`photo`, `paint`], answer: ``, time: 0},
    {template: `threePic`, text: `Найдите рисунок среди изображений`, pictures: [pics.photos[2], pics.photos[1], pics.paintings[0]], correct: pics.paintings[0], answer: ``, time: 0},
    {template: `threePic`, text: `Найдите рисунок среди изображений`, pictures: [pics.photos[0], pics.paintings[1], pics.photos[2]], correct: pics.paintings[1], answer: ``, time: 0}
  ],
  settings: {
    FAST: 10,
    SLOW: 20,
    EXTRA_POINT: 50,
    NORMAL_POINT: 100
  }
};
