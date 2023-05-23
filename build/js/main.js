"use strict";

const addSquare = () => `
<img src="./img/add-square.svg" class="archive__folder-button" title="Создать папку" alt="">
`;
const directInbox = () => `
  <img src="./img/direct-inbox.svg" class="archive__folder-button" title="Вставить" alt="">
`;
const documentUpload = () => `
  <img src="./img/document-upload.svg" class="archive__folder-button" title="Папка на уровень выше" alt="">
`;
const exportsButton = () => `
  <img src="./img/export.svg" class="archive__folder-button" title="Папка верхнего уровня" alt="">
`;
const minusSquare = () => `
  <img src="./img/minus-square.svg" class="archive__folder-button" title="Удалить папку" alt="">
`;
const refresh = () => `
  <img src="./img/refresh.svg" class="archive__folder-button" title="Сбросить поиск" alt="">
`;
const scissor = () => `
  <img src="./img/scissor.svg" class="archive__folder-button" title="Вырезать" alt="">
`;
const documentTalbeRow = () => `
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
`;

// импорт элементов блока окна с папками //
// импорт элементов файлового блока //

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

// archiveFolrmFolder.insertBefore( , archiveFolrmFolder.archiveFolderInputSearch);
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
  for (let i = 0; i < 20; i++) {
    folderTableBody.innerHTML += documentTalbeRow();
  }

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

// ЗАПУСК ФУНКЦИЙ //
getListnersOfWindowFolders();
getHighInterfase();