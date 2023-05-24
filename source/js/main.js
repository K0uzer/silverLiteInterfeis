// импорт элементов блока окна с папками //
import {
  getCreateButton
} from './view/folder/buttons/create-button.js';
import {
  getDeleteButton
} from './view/folder/buttons/delete-button.js';
import {
  getDocumentUpload
} from './view/folder/buttons/document-upload.js';
import {
  getHighLevelButton
} from './view/folder/buttons/high-level-button.js';
import {
  getInsertButton
} from './view/folder/buttons/insert-button.js';
import {
  getRefreshButton
} from './view/folder/buttons/refresh-button.js';
import {
  getScissorButton
} from './view/folder/buttons/scissor-button.js';
import {
  getArchiveFolderTable
} from './view/folder/table/archive_folder-table-row.js';
// импорт элементов файлового блока //
import {
  getAddSquare
} from './view/file/buttons/add-square.js';
import {
  getMinusSquare
} from './view/file/buttons/minus-square.js';
import {
  getDirectInbox
} from './view/file/buttons/director-inbox.js';
import {
  getRefresh
} from './view/file/buttons/refresh.js';
import {
  getScissor
} from './view/file/buttons/scissor.js';
import {
  getSearchStatus
} from './view/file/buttons/search-status.js';
import {
  getScrollTableBodyRow
} from './view/file/table/scroll-table-body-row.js';


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
const fileTalbeBody = document.getElementById('fileTalbeBody');

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

// ФУНКЦИЯ СОБЫТИЫЙ ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getRequiredWindowForFileWork = () => {
  // СОЗДАЕМ СЛУШАТЕЛИ //
  Array.from(fileMenu.children).forEach((item) => {
    item.addEventListener('click', () => console.log(item));
  });
};

// РАБОТА С ИНТЕРФЕЙСОМ //
const getHighInterfase = () => {
  // ФОРМИРУЕМ ОКНО ДЛЯ РАБОТЫ С ПАПКОЙ //
  folderButtonContainer.innerHTML += getCreateButton();
  folderButtonContainer.innerHTML += getDeleteButton();
  folderButtonContainer.innerHTML += getScissorButton();
  folderButtonContainer.innerHTML += getInsertButton();
  folderButtonContainer.innerHTML += getDocumentUpload();
  folderButtonContainer.innerHTML += getHighLevelButton();
  folderButtonContainer.innerHTML += getRefreshButton();
  // ДОБАВЛЯЕМ ПЕРВЫЕ ДВЕ ГЛАВНЫЕ ПАПКИ В ТАБЛИЦУ ОКНА FOLDER //
  for(let i = 0; i < 2; i++) {
    folderTableBody.innerHTML += getArchiveFolderTable();
  };
  // ФУНКЦИЯ ДЛЯ РАБОТЫ С ПАПКАМИ //

  // ФОРМИРУЕМ ОКНО ДЛЯ РАБОТЫ С ФАЙЛАМИ //
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileTalbeBody.innerHTML += getScrollTableBodyRow();
  fileMenu.innerHTML += getAddSquare();
  fileMenu.innerHTML += getMinusSquare();
  fileMenu.innerHTML += getDirectInbox();
  fileMenu.innerHTML += getScissor();
  fileMenu.innerHTML += getSearchStatus();
  fileMenu.innerHTML += getRefresh();
  // ФУНКЦИЯ ДЛЯ РАБОТЫ С ФАЙЛАМИ //
  getRequiredWindowForFileWork();
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
