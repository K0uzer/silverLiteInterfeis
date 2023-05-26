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
const getArchiveContainerOfCreateNewDocument = () => `
<section class="archive__container-of-create-new-document">
  <img class="archive__create-new-document-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
  <div class="archive__wrapper-of-id-document">
    <span class="archive__document-of-text">Карточка абонентского дела №</span>
    <span class="archive__document-of-id"></span>
  </div>
  <form class="archive__create-new-document-of-form" action="" method="">
    <div class="archive__create-new-document-input-of-container-elements">
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Регистрационный номер:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Дата:</span>
        <input class="archive__create-new-document-of-input" type="datetime-local" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Номер абонентского дела:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Тип документа:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">ФИО:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Город:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Улица:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Номер договара:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Дом:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Корпус:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Квартира:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
    </div>
    <textarea class="archive__create-new-document-of-textarea" name="" id="" placeholder="Комментарий"></textarea>
    <table class="archive__create-new-document-of-table">
      <thead>
        <tr>
          <th><img class="archive__create-new-document-of-table-thead-img-for-list-del" src="./img/file/task.svg" alt="" srcset=""></th>
          <th>Имя файла</th>
          <th>Тип</th>
          <th>Автор</th>
          <th>Дата публикации</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
          <td>4123124</td>
          <td>4124</td>
          <td>124</td>
          <td>1527</td>
        </tr>

      </tbody>
    </table>
    <input class="archive__create-new-document-of-input-file" type="file">
    <button class="archive__create-new-document-of-button-add-new-file">Добавить файл</button>
    <button class="archive__create-new-document-of-button-create" type="submit">Создать документ</button>
    <div class="archive__create-new-document-wrapper-of-info">
      <div class="archive__create-new-document-element-of-info">
        <span class="archive__create-new-document-element-of-text">Создатель документа:</span>
        <span class="archive__create-new-document-element-of-info" id="idNewDocument"></span>
      </div>
      <div class="archive__create-new-document-element-of-info">
        <span class="archive__create-new-document-element-of-text">Дата последнего изменения:</span>
        <span class="archive__create-new-document-element-of-info" id="dateOfChangeDocument"></span>
      </div>
      <div class="archive__create-new-document-element-of-info">
        <span class="archive__create-new-document-element-of-text">Папка:</span>
        <span class="archive__create-new-document-element-of-info" id="folderOfDocument"></span>
      </div>
    </div>
  </form>
</section>
`;
const getAchiveContainerFileSearch = () => `<section class="achive__container-file-search">
  <h2 class="archive__container-file-search-title">Поиск</h2>
  <div class="archive__container-file-search-of-element">
    <select class="archive__container-file-search-of-element-select" name="" id="" aria-placeholder="Поиск по типу файла">
      <option class="archive__container-file-search-of-element-option" value="-">Выбор типа</option>
      <option class="archive__container-file-search-of-element-option" value="Правовые документы">Правовые документы</option>
      <option class="archive__container-file-search-of-element-option" value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
      <option class="archive__container-file-search-of-element-option" value="Заявления">Заявления</option>
      <option class="archive__container-file-search-of-element-option" value="Акты">Акты</option>
      <option class="archive__container-file-search-of-element-option" value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
      <option class="archive__container-file-search-of-element-option" value="Технический паспорт объекта">Технический паспорт объекта</option>
      <option class="archive__container-file-search-of-element-option" value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
      <option class="archive__container-file-search-of-element-option" value="Договор">Договор</option>
      <option class="archive__container-file-search-of-element-option" value="Служебные записи, рапорты">Служебные записи, рапорты</option>
      <option class="archive__container-file-search-of-element-option" value="Прочие документы">Прочие документы</option>
      <option class="archive__container-file-search-of-element-option" value="Проектно-техническая документация">Проектно-техническая документация</option>
      <option class="archive__container-file-search-of-element-option" value="Акты контрольного обслудования">Акты контрольного обслудования</option>
    </select>
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Номер абон. дела">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="ФИО">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Комментарий">
  </div>
  <div class="archive__container-file-search-of-element">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Город">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Дом">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Улица">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Квартира">
  </div>
  <div class="archive__container-file-search-of-element">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Номер договора">
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Имя файла">
    <button class="" id="searchOfDateReg">Поиск по дате регистрации</button>
    <div class="archive__container-file-search-of-element-wrapper">
      <span class="archive__container-file-search-of-element-text">C</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
      <span class="archive__container-file-search-of-element-text">По</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
    </div>
  </div>
  <button class="archive__container-file-search-of-element-button">Поиск</button>
  <img class="archive__container-file-search-of-element-button-out" src="./img/file/out.svg" alt="" srcset="">
</section>`;

// импорт элементов блока окна с папками //
// импорт элементов файлового блока //
// импорт всплывающих окон для блока работающего с файлами //
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
    Array.from(windowThisFile.children).forEach(element => {
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

// СБОРКА ФУНКЦИЙ ДЛЯ РАБОТЫ С ДОКУМЕНТАМИ //
function getRequiredWindowForFileWork() {
  // СОЗДАЕМ СЛУШАТЕЛИ //
  Array.from(fileMenu.children).forEach(item => {
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
}

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
const administratinsMenuList = document.querySelector('.employees-company__navigation-list');
const administrationManuButton = document.querySelector('.administration__element-button');
console.log(administratinsMenuList.children);
// ФУНКЦИИ ОТВЕЧАЮЩИЕ ЗА ПОЯВЛЕНИЕ ГЛАВНОГО МЕНЮ АДМИНА //
administrationsButtonOfOpenMenu.addEventListener('click', () => {
  if (administratinsMenu.classList.contains('administration__menu--closed')) {
    administratinsMenu.classList.remove('administration__menu--closed');
    administratinsMenu.classList.add('administration__menu--opened');
    console.log(1);
  } else {
    administratinsMenu.classList.add('administration__menu--closed');
    administratinsMenu.classList.remove('administration__menu--opened');
    console.log(2);
  }
});
Array.from(administratinsMenuList.children).forEach(item => {
  item.addEventListener('click', () => {
    console.log(3);
    administratinsMenu.classList.remove('administration__menu--opened');
    administratinsMenu.classList.add('administration__menu--closed');
  });
});

//              //
// БЕЗОПАСНОСТЬ //
//              //

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