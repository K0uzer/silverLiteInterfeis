"use strict";

const archivePageMaxLever = () => `<img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img" title="Открыть окно для работы с папками" alt="Бургер">
<section class="archive__folder">
  <div class="archive__filder-menu-container-img">
    <img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img--rotate" alt="Бургер">
    <span class="archive__filder-title">Тукущая папка: Верхняя</span>
  </div>
  <div class="archive__folder-button-container">
    <img src="./img/folder/create-button.svg" class="archive__folder-button" title="Создать папку" alt="">
    <img src="./img/folder/delete-button.svg" class="archive__folder-button" title="Удалить папку" alt="">
    <img src="./img/folder/document-upload.svg" class="archive__folder-button" title="Папка на уровень выше" alt="">
    <img src="./img/folder/high-level-button.svg" class="archive__folder-button" title="Папка верхнего уровня" alt="">
    <img src="./img/folder/insert-button.svg" class="archive__folder-button" title="Вставить" alt="">
    <img src="./img/folder/refresh-button.svg" class="archive__folder-button" title="Обновить таблицу & сбросить поиск" alt="">
    <img src="./img/folder/scissor-button.svg" class="archive__folder-button" title="Вырезать" alt="">
  </div>
  <form action="" method="post" class="archive__folder-menu-form">
    <input class="archive__folder-input" type="text" title="Быстрый поиск" placeholder="Поиск">
    <div class="archive__folder-conteiner-checkbox-type-of-search">
      <input type="checkbox" id="type-folder-search-of-number" class="archive__folder-input-type-of-search" name="" id="">
      <img src="./img/folder/repeate-one.svg" class="archive__folder-icon-of-checkbox" title="Поиск по номеру" alt="">
      <input type="checkbox" id="type-folder-search-of-name" class="archive__folder-input-type-of-search" name="" id="">
      <img src="./img/folder/folder.svg" class="archive__folder-icon-of-checkbox" title="Поиск по имени" alt="">
    </div>
  </form>
  <div class="archive__folder-content-container">
    <table class="archive__folder-table">
      <thead>
        <tr>
          <th><img src="./img/folder/task.svg"></th>
          <th>Номер</th>
          <th>Имя</th>
        </tr>
      </thead>
      <tbody id="folderTalbeBody">
        <tr>
          <td><input type="checkbox" class="archive__folder-table-of-checkbox" name="" id=""></td>
          <td>1</td>
          <td>Абонентские дела</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="archive__folder-table-of-checkbox" name="" id=""></td>
          <td>2</td>
          <td>Дела</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section class="archive__file">
  <div class="archive__file-menu">
    <img src="./img/file/add-square.svg" class="archive__file-button" title="Создать документ" id="archiveCreateDoc" alt="">
    <img src="./img/file/minus-square.svg" class="archive__file-button" title="Удалить документ" id="archiveDeleteDoc" alt="">
    <img src="./img/file/scissor.svg" class="archive__file-button" title="Вырезать" id="archiveCutOut" alt="">
    <img src="./img/file/direct-inbox.svg" class="archive__file-button" title="Вставить" id="archivePutIn" alt="">
    <img src="./img/file/refresh.svg" class="archive__file-button" title="Обновить таблицу & Сбросить поиск" id="archiveUpdateTable" alt="">
    <img src="./img/file/search-status.svg" class="archive__file-button" title="Поиск" id="archiveSearch" alt="">
    <div class="archive__file-menu-under-line"></div>
  </div>
  <div class="scroll-table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Рег. номер</th>
          <th>Номер абон. дела</th>
          <th>Тип</th>
          <th>Комментарий</th>
          <th>Номер договора</th>
          <th>ФИО</th>
        </tr>
      </thead>
    </table>
    <div class="scroll-table-body">
      <table>
        <tbody id="fileTalbeBody">
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
        </tbody>
      </table>
    </div>
  </div>
`;
const getArchiveContainerOfCreateNewDocument = () => `
<section class="archive__container-of-create-new-document">
  <div class="archive__wrapper-of-id-document">
    <span class="archive__document-of-text">Карточка абонентского дела №</span>
    <span class="archive__document-of-id"></span>
    <img class="archive__create-new-document-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
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
        <tr>
          <td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
          <td>4123124</td>
          <td>4124</td>
          <td>124</td>
          <td>1527</td>
        </tr>
        <tr>
          <td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
          <td>4123124</td>
          <td>4124</td>
          <td>124</td>
          <td>1527</td>
        </tr>
        <tr>
          <td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
          <td>4123124</td>
          <td>4124</td>
          <td>124</td>
          <td>1527</td>
        </tr>
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

/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
*/

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.getElementById('p2');

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //
const levelAcceptOfUser = 1;

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

//            //
//  ФУНКЦИИ   //
//            //

/// АРХИВ ///

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: block;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
const getCloseBlockForNewDocument = () => {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOutWithCreateNewDocument = document.querySelector('.archive__create-new-document-of-button-out');
  archiveButtonOutWithCreateNewDocument.addEventListener('click', () => {
    Array.from(archiveFile.children).forEach(item => {
      if (item.classList.contains('archive__container-of-create-new-document')) archiveFile.removeChild(item);
    });
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
const getCreateBlockForNewDocument = () => {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  archiveButtonOfCraeteDoc.addEventListener('click', () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
  });
};

// Создаем новый экземпляр MutationObserver
const observer = new MutationObserver(mutations => {
  // Перебираем все мутации (изменения) в DOM-дереве
  mutations.forEach(mutation => {
    // Перебираем все добавленные элементы в мутации
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Если добавленный элемент является нашим элементом, добавляем слушатель
        if (node.id === 'archiveCreateDoc') {
          node.addEventListener('click', handleClick);
        }
      }
    });

    // Перебираем все удаленные элементы в мутации
    mutation.removedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Если удаленный элемент является нашим элементом, удаляем слушатель
        if (node.id === 'archiveCreateDoc') {
          node.removeEventListener('click', handleClick);
        }
      }
    });
  });
});

// Запускаем отслеживание изменений в DOM-дереве
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Обработчик события клика
function handleClick() {
  console.log('Клик по элементу');
}

// НАСТРОЙКА //

// ПОМОЩЬ //

// АДМИНИСТРИРОВАНИЕ //

// ВЫХОД //

//                                           //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ   //
//                                           //

// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МАКСИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMaxLevelAccess = () => {
  acrchivePage.innerHTML = archivePageMaxLever();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
};

//                                         //
//  УСЛОВИЯ ДЛЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСОВ   //
//                                         //

// ВНОСИМ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
if (levelAcceptOfUser === 1) {
  getCreateInterfasForMaxLevelAccess();
}