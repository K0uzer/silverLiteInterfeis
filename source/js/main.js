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
// импорт всплывающих окон для блока работающего с файлами //
import {
  getArchiveContainerOfCreateNewDocument
} from './view/file/archive__container-of-create-new-document.js';
import {
  getAchiveContainerFileSearch
} from './view/file/achive__container-file-search.js';
import {
  getArchiveContainerOfOpenedDocument
} from './view/file/archive__container-of-opened-document.js';

// ПЕРЕМЕННЫЕ //
const windowThisFile = document.querySelector('.archive__file');
const windowThisFolder = document.querySelector('.archive__folder');
const buttonOfOpenFolderWindow = document.querySelector('.archive__filder-menu-img');
const buttonOfCloseFolderWindow = document.querySelector('.archive__filder-menu-img--rotate');
const archiveFolrmFolder = document.querySelector('.archive__folder-menu-form');
const archiveFolderInputSearch = document.querySelector('.archive__folder-input');
const folderButtonContainer = document.querySelector('.archive__folder-button-container');
const folderWrapperTable = document.querySelector('.archive__folder-content-container');
const folderTableBody = document.getElementById('folderTalbeBody');
const fileMenu = document.querySelector('.archive__file-menu');
const fileTalbeBody = document.getElementById('fileTalbeBody');

// ФУНКЦИИ УНИВЕРСАЛЫ //

//                            //
// БЛОК КОДА РАБОТЫ С ПАПКАМИ //
//                            //

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

//                                //
// БЛОК КОДА РАБОТЫ С ДОКУМЕНТАМИ //
//                                //

// ОБЩИЕ ФУНКЦИИ В БЛОКЕ КОДА FILE//
// УДАЛЕНИЕ ОКНА ИЗ DOM ДЕРЕВА //
const getDeleteWindowFromDomTree = (button, className) => {
  button.addEventListener('click', () => {
    Array.from(windowThisFile.children).forEach((element) => {
      if (element.className === className) {
        windowThisFile.removeChild(element);
      }
    });
  });
};

// ФУНКЦИЯ ОКНА ПОИСКА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getWorkWithTheSearchWindow = () => {
  windowThisFile.innerHTML += getAchiveContainerFileSearch();
  const searchOfDateRegButton = document.getElementById('searchOfDateReg');
  const archiveButtonOutSearch = document.querySelector('.archive__container-file-search-of-element-button-out');
  searchOfDateRegButton.addEventListener('click', () => {
    const archiveContainerFileSearchOfElementWrapper = document.querySelector('.archive__container-file-search-of-element-wrapper');
    archiveContainerFileSearchOfElementWrapper.classList.add('archive__container-file-search-of-element-wrapper--active');
    searchOfDateRegButton.style = 'display: none';
  });
  getDeleteWindowFromDomTree(archiveButtonOutSearch, 'achive__container-file-search');
};

// ФУНКЦИЯ ОКНА СОЗДАНИЯ ДОКУМЕНТА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getWorkWithTheWindowOfCrateDocument = () => {
  windowThisFile.innerHTML += getArchiveContainerOfCreateNewDocument();
  const archiveWindowCreateDocumentOfButtonOut = document.querySelector('.archive__create-new-document-of-button-out');
  getDeleteWindowFromDomTree(archiveWindowCreateDocumentOfButtonOut, 'archive__container-of-create-new-document');
};

// ФУНКЦИЯ ОКНА УДАЛЕНИЯ ДОКУМЕНТА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getDeleteDocumentFromArchiveTable = () => {

};

// ФУНКЦИЯ ОКНА ВЫРЕЗКИ ДОКУМЕНТА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getCutOutSelectedDocument = () => {

};

// ФУНКЦИЯ ОКНА ВСТАВКИ ДОКУМЕНТА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getPutSelectedDocument = () => {

};

// ФУНКЦИЯ ОКНА ОБНОВЛЕНИЯ ТАБЛИЦЫ\СОРОСА ПОИСКА ДОКУМЕНТА ДЛЯ РАБОТЫ С ФАЙЛАМИ //
const getUpdateTableWithDocument = () => {

};

// СБОРКА ФУНКЦИЙ ДЛЯ РАБОТЫ С ДОКУМЕНТАМИ //
function getRequiredWindowForFileWork() {
  // СОЗДАЕМ СЛУШАТЕЛИ //
  Array.from(fileMenu.children).forEach((item) => {
    item.addEventListener('click', () => {
      switch (item.title) {
        case 'Создать документ':
          getWorkWithTheWindowOfCrateDocument();
          console.log(item);
          break;
        case 'Удалить документ':
          console.log(item);
          break;
        case 'Вставить':
          console.log(item);
          break;
        case 'Вырезать':
          console.log(item);
          break;
        case 'Поиск':
          getWorkWithTheSearchWindow();
          console.log(item);
          break;
        case 'Обновить таблицу & Сбросить поиск':

      }
    });
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
  };
  // ФУНКЦИЯ ДЛЯ РАБОТЫ С ПАПКАМИ //

  // ФОРМИРУЕМ ОКНО ДЛЯ РАБОТЫ С ДОКУМЕНТАМИ //
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

//                   //
// АДМИНИСТРИРОВАНИЕ //
//                   //

const administrationsButtonOfOpenMenu = document.querySelector('.administration__button-open-menu');
const administratinsMenu = document.querySelector('.administration__menu');
const administratinsMenuList = document.querySelector('.administration__menu-list');

// ФУНКЦИИ ОТВЕЧАЮЩИЕ ЗА ПОЯВЛЕНИЕ ГЛАВНОГО МЕНЮ АДМИНА //
administrationsButtonOfOpenMenu.addEventListener('click', () => {
  if (administratinsMenu.classList.contains('administration__menu--closed')) {
    administratinsMenu.classList.remove('administration__menu--closed');
    administratinsMenu.classList.add('administration__menu--opened');
  } else {
    administratinsMenu.classList.add('administration__menu--closed');
    administratinsMenu.classList.remove('administration__menu--opened');
  }
});

Array.from(administratinsMenuList.children).forEach((item) => {
  item.children[0].addEventListener('click', () => {
    administratinsMenu.classList.remove('administration__menu--opened');
    administratinsMenu.classList.add('administration__menu--closed');
  });
});

//              //
// БЕЗОПАСНОСТЬ //
//              //

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