"use strict";

const getCreateButton = () => `
<img src="./img/folder/create-button.svg" class="archive__folder-button" title="Создать папку" alt="">
`;
const getDeleteButton = () => `
  <img src="./img/folder/delete-button.svg" class="archive__folder-button" title="Удалить папку" alt="">
`;
const getDocumentUpload = () => `
  <img src="./img/folder/document-upload.svg" class="archive__folder-button" title="Папка на уровень выше" alt="">
`;
const getHighLevelButton = () => `
  <img src="./img/folder/high-level-button.svg" class="archive__folder-button" title="Папка верхнего уровня" alt="">
`;
const getInsertButton = () => `
  <img src="./img/folder/insert-button.svg" class="archive__folder-button" title="Вставить" alt="">
`;
const getRefreshButton = () => `
  <img src="./img/folder/refresh-button.svg" class="archive__folder-button" title="Обновить таблицу & сбросить поиск" alt="">
`;
const getScissorButton = () => `
  <img src="./img/folder/scissor-button.svg" class="archive__folder-button" title="Вырезать" alt="">
`;
const getArchiveFolderTable = () => `
<tr>
  <td><input type="checkbox" class="archive__folder-table-of-checkbox" name="" id=""></td>
  <td></td>
  <td></td>
</tr>`;
const getAddSquare = () => `
  <img src="./img/file/add-square.svg" class="archive__file-button" title="Создать документ" alt="">
`;
const getMinusSquare = () => `
  <img src="./img/file/minus-square.svg" class="archive__file-button" title="Удалить документ" alt="">
`;
const getDirectInbox = () => `
  <img src="./img/file/direct-inbox.svg" class="archive__file-button" title="Вставить" alt="">
`;
const getRefresh = () => `
  <img src="./img/file/refresh.svg" class="archive__file-button" title="Обновить таблицу & Сбросить поиск" alt="">
`;
const getScissor = () => `
  <img src="./img/file/scissor.svg" class="archive__file-button" title="Вырезать" alt="">
`;
const getSearchStatus = () => `
  <img src="./img/file/search-status.svg" class="archive__file-button" title="Поиск" alt="">
`;
const getScrollTableBodyRow = () => `
<tr>
  <td><input class="scroll-table-body__input-of-check-box" type="checkbox" name="" id=""></td>
  <td>341</td>
  <td>44</td>
  <td>4</td>
  <td>Правовые документы</td>
  <td>Заявление на опломбирование</td>
  <td>12</td>
  <td>Силенко И.П.</td>
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
  Array.from(fileMenu.children).forEach(item => {
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
  for (let i = 0; i < 2; i++) {
    folderTableBody.innerHTML += getArchiveFolderTable();
  }
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