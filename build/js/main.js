"use strict";

// ПЕРЕМЕННЫЕ //
const buttonOfOpenFolderWindow = document.querySelector('.archive__filder-menu-img');
const buttonOfCloseFolderWindow = document.querySelector('.archive__filder-menu-img--rotate');
const windowThisFolder = document.querySelector('.archive__folder');
const searchOfDateRegButton = document.getElementById('searchOfDateReg');
const archiveContainerFileSearchOfElementWrapper = document.querySelector('.archive__container-file-search-of-element-wrapper');

// СЛУШАТЕЛИ СОБЫТИЫЙ ДЛЯ РАБОТЫ С ОКНОМ ПАПОК //
buttonOfOpenFolderWindow.addEventListener('click', () => {
  windowThisFolder.style = 'display: block';
});
buttonOfCloseFolderWindow.addEventListener('click', () => {
  windowThisFolder.style = 'display: none';
});

// ОКНО ПОИСКА //
searchOfDateRegButton.addEventListener('click', () => {
  archiveContainerFileSearchOfElementWrapper.classList.add('archive__container-file-search-of-element-wrapper--active');
  searchOfDateRegButton.style = 'display: none';
});

// БЕЗОПАСНОСТЬ //
document.addEventListener('keydown', event => {
  if (event.shiftKey && event.ctrlKey && event.key === 'c') {
    console.log('You pressed Shift + Ctrl + C!');
  }
  console.log('You pressed Shift');
});
document.addEventListener('contextmenu', e => {
  console.log('listener of context menu');
  window.location.href = 'http://localhost:3000/authorization.html';
  e.preventDefalt();
});