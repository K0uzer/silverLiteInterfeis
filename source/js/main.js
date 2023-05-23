// импорт элементов блока окна с папками //
import {
  addSquare
} from './view/folder/mainFolder/buttons/add-square.js';
import {
  directInbox
} from './view/folder/mainFolder/buttons/director-inbox.js';
import {
  documentUpload
} from './view/folder/mainFolder/buttons/document-upload.js';
import {
  exportsButton
} from './view/folder/mainFolder/buttons/exportsButton.js';
import {
  minusSquare
} from './view/folder/mainFolder/buttons/minus-square.js';
import {
  refresh
} from './view/folder/mainFolder/buttons/refresh.js';
import {
  scissor
} from './view/folder/mainFolder/buttons/scissor.js';
import {
  documentTalbeRow
} from './view/folder/newRow/documentTableRow.js';
// импорт элементов файлового блока //
import {
  addSquare
} from './view/file/buttons/add-square.js';
import {
  directInbox
} from './view/file/buttons/director-inbox.js';
import {
  addSminusSquarequare
} from './view/file/buttons/';
import {
  refresh
} from './view/file/buttons/add-square.js';
import {
  scissor
} from './view/file/buttons/add-square.js';
import {
  searchStatus
} from './view/file/buttons/add-square.js';


// ПЕРЕМЕННЫЕ //
const buttonOfOpenFolderWindow = document.querySelector('.archive__filder-menu-img');
const buttonOfCloseFolderWindow = document.querySelector('.archive__filder-menu-img--rotate');
const windowThisFolder = document.querySelector('.archive__folder');
const searchOfDateRegButton = document.getElementById('searchOfDateReg');
const archiveContainerFileSearchOfElementWrapper = document.querySelector('.archive__container-file-search-of-element-wrapper');
const archiveFolrmFolder = document.querySelector('.archive__folder-menu-form');
const archiveFolderInputSearch = document.querySelector('.archive__folder-input');
const folderButtonContainer = document.querySelector('.archive__folder-button-container');
const folderWrapperTable = document.querySelector('.archive__folder-content-container');
const folderTableBody = document.getElementById('folderTalbeBody');
const fileMenu = document.querySelector('.archive__file-menu');

// ФОРМИРОВАНИЯ ИНТЕРФЕЙСА //
const getHighInterfase = () => {
  // ФОРМИРУЕМ ОКНО ДЛЯ РАБОТЫ С ПАПКОЙ //
  folderButtonContainer.innerHTML += addSquare();
  folderButtonContainer.innerHTML += minusSquare();
  folderButtonContainer.innerHTML += scissor();
  folderButtonContainer.innerHTML += directInbox();
  folderButtonContainer.innerHTML += documentUpload();
  folderButtonContainer.innerHTML += exportsButton();
  folderButtonContainer.innerHTML += refresh();
  // ДОБАВЛЯЕМ ПЕРВЫЕ ДВЕ ГЛАВНЫЕ ПАПКИ В ТАБЛИЦУ ОКНА FOLDER //
  for(let i = 0; i < 20; i++) {
    folderTableBody.innerHTML += documentTalbeRow();
  };

  // ФОРМИРУЕМ ОКНО ДЛЯ РАБОТЫ С ФАЙЛАМИ //


};

// СЛУШАТЕЛИ СОБЫТИЫЙ ДЛЯ РАБОТЫ С ОКНОМ ПАПОК //
// СОЗДАЕМ СЛУШАТЕЛИ //
const getListnersOfWindowFolders = () => {
  buttonOfOpenFolderWindow.addEventListener('click', () => {
    windowThisFolder.style = 'display: block';
  });

  buttonOfCloseFolderWindow.addEventListener('click', () => {
    windowThisFolder.style = 'display: none';
  });
};

// ОКНО ПОИСКА //
// searchOfDateRegButton.addEventListener('click', () => {
//   archiveContainerFileSearchOfElementWrapper.classList.add('archive__container-file-search-of-element-wrapper--active');
//   searchOfDateRegButton.style = 'display: none';
// });

// БЕЗОПАСНОСТЬ //
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.ctrlKey && event.key === 'c') {
    console.log('You pressed Shift + Ctrl + C!');
  }
  console.log('You pressed Shift');
});

document.addEventListener('contextmenu', (e) => {
  console.log('listener of context menu');
  window.location.href = 'http://localhost:3000/authorization.html';
  e.preventDefalt();
});

// ЗАПУСК ФУНКЦИЙ //
getListnersOfWindowFolders();

getHighInterfase();

// ПРОВЕРЯЕМ ТЕКУЩЕЕ МЕСТОПОЛОЖЕНИЕ ПОЛЬЗОВАТЕЛЯ //
switch (window.location.href) {
  case 'http://localhost:3000/index.html':
    break;
  case 'http://localhost:3000/authorization.html':
    break;
};
