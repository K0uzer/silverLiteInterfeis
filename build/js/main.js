"use strict";

// ПЕРЕМЕННЫЕ //
const buttonOfOpenFolderWindow = document.querySelector('.archive__filder-menu-img');
const buttonOfCloseFolderWindow = document.querySelector('.archive__filder-menu-img--rotate');
const windowThisFolder = document.querySelector('.archive__folder');

// СЛУШАТЕЛИ СОБЫТИЫЙ ДЛЯ РАБОТЫ С ОКНОМ ПАПОК //
buttonOfOpenFolderWindow.addEventListener('click', () => {
  windowThisFolder.style = 'display: block';
});
buttonOfCloseFolderWindow.addEventListener('click', () => {
  windowThisFolder.style = 'display: none';
});