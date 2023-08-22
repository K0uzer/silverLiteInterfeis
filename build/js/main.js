"use strict";

// JSON как объект //
const data = [{
  'id': 341,
  'number_register': 4,
  'id_subscriber': 4,
  'type_document': 'Заявления',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01 17:52',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [3, 4],
  'id_parent': 9
}, {
  'id': 342,
  'number_register': 3,
  'id_subscriber': 3,
  'type_document': 'Баланс водопотребления и водоотведения',
  'comments': 'Заявление',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [2],
  'id_parent': 4
}, {
  'id': 343,
  'number_register': 2,
  'id_subscriber': 2,
  'type_document': 'Служебные записи, рапорты',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [1],
  'id_parent': 8
}, {
  'id': 344,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 345,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 346,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 347,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 348,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 349,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 3
}, {
  'id': 350,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 351,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 352,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 353,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 354,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 355,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 356,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}, {
  'id': 357,
  'number_register': 1,
  'id_subscriber': 1,
  'type_document': 'Проектно-техническая документация',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '2025-02-01',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [],
  'id_parent': 11
}];
const archivePageMaxLever = () => `<img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img" title="Открыть окно для работы с папками" alt="Бургер">
<section class="archive__folder">
  <div class="archive__filder-menu-container-img">
    <img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img--rotate" alt="Бургер">
    <span class="archive__filder-title">Текущая папка: Верхнего уровня</span>
  </div>
  <div class="archive__folder-button-container">
    <img src="./img/folder/create-button.svg" class="archive__folder-button" id="createFolder" title="Создать папку" alt="">
    <img src="./img/folder/delete-button.svg" class="archive__folder-button" id="deleteFolder" title="Удалить папку" alt="">
    <img src="./img/folder/document-upload.svg" class="archive__folder-button" id="upLevelFolder" title="Папка на уровень выше" alt="">
    <img src="./img/folder/high-level-button.svg" class="archive__folder-button" id="upMaxLevelFolder" title="Папка верхнего уровня" alt="">
    <img src="./img/folder/insert-button.svg" class="archive__folder-button" id="putFolder" title="Вставить" alt="">
    <img src="./img/folder/refresh-button.svg" class="archive__folder-button" id="updateTableFolder" title="Обновить таблицу & сбросить поиск" alt="">
    <img src="./img/folder/scissor-button.svg" class="archive__folder-button" id="cutOutFolder" title="Вырезать" alt="">
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
      <tbody id="folderTalbeBody"></tbody>
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
        <tbody id="fileTalbeBody"></tbody>
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
        <input class="archive__create-new-document-of-input" type="number" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Дата:</span>
        <input class="archive__create-new-document-of-input" type="datetime-local" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Номер абонентского дела:</span>
        <input class="archive__create-new-document-of-input" type="number" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Тип документа:</span>
        <select class="archive__create-new-document-of-input">
          <option value="-">Выбор типа</option>
          <option value="Правовые документы">Правовые документы</option>
          <option value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
          <option value="Заявления">Заявления</option>
          <option value="Акты">Акты</option>
          <option value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
          <option value="Технический паспорт объекта">Технический паспорт объекта</option>
          <option value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
          <option value="Договор">Договор</option>
          <option value="Служебные записи, рапорты">Служебные записи, рапорты</option>
          <option value="Прочие документы">Прочие документы</option>
          <option value="Проектно-техническая документация">Проектно-техническая документация</option>
          <option value="Акты контрольного обслудования">Акты контрольного обслудования</option>
        </select>
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
        <input class="archive__create-new-document-of-input" type="number" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Дом:</span>
        <input class="archive__create-new-document-of-input" type="text" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Корпус:</span>
        <input class="archive__create-new-document-of-input" type="number" name="" id="">
      </div>
      <div class="archive__create-new-document-of-element-form">
        <span class="archive__create-new-document-of-text">Квартира:</span>
        <input class="archive__create-new-document-of-input" type="number" name="" id="">
      </div>
    </div>
    <textarea class="archive__create-new-document-of-textarea" name="" id="" placeholder="Комментарий"></textarea>
    <table class="archive__create-new-document-of-table">
      <thead>
        <tr>
          <th><img class="archive__create-new-document-of-table-thead-img-for-list-del" src="./img/file/task.svg" alt="" srcset=""></th>
          <th>Имя файла</th>
          <th>Тип</th>
          <th>Размер</th>
          <th>Автор</th>
          <th>Дата публикации</th>
        </tr>
      </thead>
      <tbody class="archive__create-new-document-of-table-body">

      </tbody>
    </table>
    <input class="archive__create-new-document-of-input-file" type="file">
    <button class="archive__create-new-document-of-button-add-new-file">Добавить файл</button>
    <button class="archive__create-new-document-of-button-create">Создать документ</button>
    <div class="archive__create-new-document-wrapper-of-info">
      <div class="archive__create-new-document-element-of-info">
        <span class="archive__create-new-document-element-of-text">Создатель документа:</span>
        <span class="archive__create-new-document-element-of-info" id="idNewDocument"></span>
      </div>
      <div class="archive__create-new-document-element-of-info">
        <span class="archive__create-new-document-element-of-text">Дата создания:</span>
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
    <input type="text" class="archive__container-file-search-of-element-input" placeholder="Номер документа">
    <div class="archive__container-file-search-of-element-wrapper">
      <span class="archive__container-file-search-of-element-text">C</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
      <span class="archive__container-file-search-of-element-text">По</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
    </div>
  </div>
  <button class="archive__container-file-search-of-element-button">Поиск</button>
  <img class="archive__container-file-search-of-element-button-out" src="./img/file/out.svg" alt="" srcset="">
</section>`;
const getArchiveContainerOfOpenedDocument = (userName, dateCreatedDocument, folder) => `
  <section class="archive__container-of-opened-document">
    <img class="archive__opened-document-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
    <div class="archive__wrapper-of-id-document">
      <span class="archive__document-of-text">Карточка абонентского дела №</span>
      <span class="archive__document-of-id"></span>
    </div>
    <form class="archive__opened-document-of-form" action="" method="">
      <div class="archive__opened-document-input-of-container-elements">
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Регистрационный номер:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Дата:</span>
          <input class="archive__opened-document-of-input" disabled type="datetime-local" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Номер абонентского дела:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Тип документа:</span>
          <select class="archive__opened-document-of-input" disabled>
            <option value="-">Выбор типа</option>
            <option value="Правовые документы">Правовые документы</option>
            <option value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
            <option value="Заявления">Заявления</option>
            <option value="Акты">Акты</option>
            <option value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
            <option value="Технический паспорт объекта">Технический паспорт объекта</option>
            <option value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
            <option value="Договор">Договор</option>
            <option value="Служебные записи, рапорты">Служебные записи, рапорты</option>
            <option value="Прочие документы">Прочие документы</option>
            <option value="Проектно-техническая документация">Проектно-техническая документация</option>
            <option value="Акты контрольного обслудования">Акты контрольного обслудования</option>
          </select>
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">ФИО:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Город:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Улица:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Номер договара:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Дом:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Корпус:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
        <div class="archive__opened-document-of-element-form">
          <span class="archive__opened-document-of-text">Квартира:</span>
          <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
        </div>
      </div>
      <textarea class="archive__opened-document-of-textarea" disabled name="" id="" placeholder="Комментарий"></textarea>
      <table class="archive__opened-document-of-table">
        <thead>
          <tr>
            <th><img class="archive__opened-document-of-table-thead-img-for-list-del" src="./img/file/task.svg" alt="" srcset=""></th>
            <th>Имя файла</th>
            <th>Тип</th>
            <th>Размер</th>
            <th>Автор</th>
            <th>Дата публикации</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" class="archive__opened-document-of-table-button-for-delete" disabled></td>
            <td>Описание</td>
            <td>
              <select class="archive__opened-document-of-input" disabled>
                <option value="-">Выбор типа</option>
                <option value="Правовые документы">Правовые документы</option>
                <option value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
                <option value="Заявления">Заявления</option>
                <option value="Акты">Акты</option>
                <option value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
                <option value="Технический паспорт объекта">Технический паспорт объекта</option>
                <option value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
                <option value="Договор">Договор</option>
                <option value="Служебные записи, рапорты">Служебные записи, рапорты</option>
                <option value="Прочие документы">Прочие документы</option>
                <option value="Проектно-техническая документация">Проектно-техническая документация</option>
                <option value="Акты контрольного обслудования">Акты контрольного обслудования</option>
              </select>
            </td>
            <td>30кб</td>
            <td>Иван И.И.</td>
            <td>20.12.2023</td>
          </tr>
        </tbody>
      </table>
      <div class="archive__opened-document-of-button-add-new-file-wrapper">
        <button class="archive__opened-document-of-button-add-new-file" disabled>Присоеденить</button>
        <button class="archive__opened-document-of-button-add-new-file" disabled>Показать</button>
        <button class="archive__opened-document-of-button-add-new-file" disabled>Удалить</button>
      </div>
      <div class="archive__opened-document-of-button-add-new-file-wrapper">
        <button class="archive__opened-document-of-button-add-new-file" disabled>Печать</button>
        <button class="archive__opened-document-of-button-add-new-file" disabled>Протоколы печати</button>
        <button class="archive__opened-document-of-button-create" type="">Редактировать</button>
        <input class="archive__opened-document-of-input-add-new-file" type="file">
      </div>
      <div class="archive__opened-document-wrapper-of-info">
        <div class="archive__opened-document-element-of-info">
          <span class="archive__opened-document-element-of-text">Создатель документа:</span>
          <span class="archive__opened-document-element-of-info" id="idNewDocument">${userName}</span>
        </div>
        <div class="archive__opened-document-element-of-info">
          <span class="archive__opened-document-element-of-text">Дата последнего изменения:</span>
          <span class="archive__opened-document-element-of-info" id="dateOfChangeDocument">${dateCreatedDocument}</span>
        </div>
        <div class="archive__opened-document-element-of-info">
          <span class="archive__opened-document-element-of-text">Папка:</span>
          <span class="archive__opened-document-element-of-info" id="folderOfDocument">${folder}</span>
        </div>
      </div>
    </form>
  </section>
`;
const rowTableDocument = () => `<tr>
<td><input class="scroll-table-body__input-of-check-box" type="checkbox" name="" id=""></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>`;

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ВРЕМЕНИ //
const getCurrentTime = item => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  item.value = `${formattedDate} ${formattedTime}`;
  item.disabled = 'true';
};

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ //
function createRow(talbe, array, getHtmlCode) {
  for (let i = 0; i < array.length; i++) {
    talbe.innerHTML += getHtmlCode();
  }
}

// ФУНКЦИЯ ДЛЯ НАЛОЖЕНИЯ ТРЕБУЕМОГО СТИЛЯ НА ЭЛЕМЕНТ //
function applyInvisabilityOnElement(item, property, meaning) {
  item.style = `${property}: ${meaning}`;
}

// ФУНЦИЯ ДЛЯ ЗАПОЛНЕНИЯ КОЛИЧЕСТВОМ ТРЕБУЕМЫХ ДОРОЖЕК В ТАБЛИЦУ К ЧИСЛУ ЭЛЕМЕНТОВ СФОРМИРОВАННОГО МАССИВА //
function fillInInformations(array) {
  for (let i = 0; array.length > i; i++) {
    createNewRowInTableForDocuments(array[i].id, i);
  }
  getInformationsForTable(array);
}

// ФУНКЦИЯ ДЛЯ ОТКЛЮЧЕНИЯ И ВЫКЛЮЧЕНИЯ КНОПКИ //

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ДОРОЖКИ ТАБЛИЦЫ //
const deleteFile = item => function getProsessOfRemove() {
  const parentElement = item.parentNode;
  const mainParent = parentElement.parentNode;
  mainParent.remove();
};
const archiveCreateFileRowOfTable = (fileName, fileSize, fileCreator, fileDateCrate) => `<tr>
<td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
<td>${fileName}</td>
<td>
  <select class="archive__create-new-document-of-input">
    <option value="-">Выбор типа</option>
    <option value="Правовые документы">Правовые документы</option>
    <option value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
    <option value="Заявления">Заявления</option>
    <option value="Акты">Акты</option>
    <option value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
    <option value="Технический паспорт объекта">Технический паспорт объекта</option>
    <option value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
    <option value="Договор">Договор</option>
    <option value="Служебные записи, рапорты">Служебные записи, рапорты</option>
    <option value="Прочие документы">Прочие документы</option>
    <option value="Проектно-техническая документация">Проектно-техническая документация</option>
    <option value="Акты контрольного обслудования">Акты контрольного обслудования</option>
  </select>
</td>
<td>${fileSize}</td>
<td>${fileCreator}</td>
<td>${fileDateCrate}</td>
</tr>`;

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ФАЙЛА //
const addNewFile = (input, infoList, tableBody) => function add() {
  console.log(2);
  const fileList = input.files;
  if (fileList !== undefined) {
    const file = fileList[0];
    // ЗАЛИВАЕМ ГОТОВЫЙ HTML КОД ИЗ ФУНКЦИИ С ДОБАВЛЕНИЕМ ДАННЫХ ОБ ЗАГРУЖЕННОМ ФАЙЛЕ //
    tableBody.innerHTML += archiveCreateFileRowOfTable(file.name, `${file.size / 8} кб`, nameUser, infoList);
  }
  deleteFileFromTable();
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ФАЙЛА ИЗ ТАБЛИЦЫ //
function deleteFileFromTable() {
  const buttonsOfDeleteFile = document.querySelectorAll('.archive__create-new-document-of-table-button-for-delete');
  // ВЕШАЕМ СЛУШАТЕЛИ СОБЫТИЙ НА ВСЕ КНОПКИ //
  buttonsOfDeleteFile.forEach(item => item.addEventListener('click', deleteFile(item)));
}
const protocolsOfPrint = () => `
  <section class="protocols-of-print">
    <div class="protocols-of-print__content-of-protocols">
      <span class="protocols-of-print__preview">Протоколы печати по документу</span>
      <span class="protocols-of-print__preview">(НОМЕР ДОКУМЕНТА)</span>
      <button class="protocols-of-print__button-close">Закрыть</button>
    </div>
    <div class="protocols-of-print__content-of-protocols">
      <input type="datetime-local" class="protocols-of-print__input-of-filter-protocols" placeholder="Период С">
      <input type="datetime-local" class="protocols-of-print__input-of-filter-protocols" placeholder="Период По">
      <input type="text" class="protocols-of-print__input-of-filter-protocols" placeholder="Комментарий">
    </div>
    <div class="protocols-of-print__content-of-protocols">
      <table class="protocols-of-print__table">
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>Пользователь</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody class="protocols-of-print__table-body">
          <tr>
            <td>13.08.2018 15:04</td>
            <td>Манохива И.А./Специалист договорного отдела</td>
            <td>распечатано вложение "scan0.tiff" (заявление)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`;

// import {
//   Sane
// } from '/node_modules/sane/index.js';

//            //
// КОДНСТАНТЫ //
//            //

const archivePage = document.getElementById('p2');
const countElementOfDocument = 11;
const nameUser = 'Ганин А.В';

//            //
// ПЕРЕМЕННЫЕ //
//            //

let cutOutDocument = '';

// ФУНКЦИЯ ОТРИСОВКИ ИНТЕРФЕЙСА //
const createInterfeisOfArchiver = () => {
  archivePage.innerHTML = archivePageMaxLever();
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
function getCreateBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  const createChildElementInParent = () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
    createDocument();
  };
  archiveButtonOfCraeteDoc.addEventListener('click', createChildElementInParent);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
function getCloseBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOutWithCreateNewDocument = document.querySelector('.archive__create-new-document-of-button-out');
  // функция для удаления дочернего элемента //
  const removeElementOfChild = classOfChild => {
    Array.from(archiveFile.children).forEach(item => {
      if (item.classList.contains(classOfChild)) archiveFile.removeChild(item);
    });
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocumentOfTable();
    putInElementInTable();
    openWindowForFilterOfDocument();
    getOpenedDocument();
    clearFilters();
  };
  archiveButtonOutWithCreateNewDocument.addEventListener('click', removeElementOfChild.bind(null, 'archive__container-of-create-new-document'));
}

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ДОКУМЕНТА В ТАБЛИЦУ //
const addDocumentInTable = arrayInputs => function arrayInputsOfCreateDocument() {
  const arrayForNewElementOfTalbe = [{}];
  fillInInformations(arrayForNewElementOfTalbe);
  const textAreaOfCreateDocument = document.querySelector('.archive__create-new-document-of-textarea');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  addElementInArrayOfDocument(arrayInputs);
};

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ЭЛЕМЕНТА В ГЛАВНЫЙ МАССИВ ДОКУМЕТНОВ //
function addElementInArrayOfDocument(arrayInputs) {
  console.log(arrayInputs);
  for (let i = 0; i < arrayInputs.length; i++) {
    console.log(arrayInputs[i].value);
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ СОЗДАНИЯ ДОКУМЕНТА //
function createDocument() {
  const arrayInputsOfCreateDocument = document.querySelectorAll('.archive__create-new-document-of-input');
  const nameUserOfCreatedDocument = document.getElementById('idNewDocument');
  const dateLastChangeDocument = document.getElementById('dateOfChangeDocument');
  const buttonOfAddDocument = document.querySelector('.archive__create-new-document-of-button-add-new-file');
  const buttonOfCreateDocument = document.querySelector('.archive__create-new-document-of-button-create');
  const documentId = document.querySelector('.archive__document-of-id');
  const inputInWindowCreateDocument = document.querySelector('.archive__create-new-document-of-input-file');
  const infoListElements = document.querySelectorAll('.archive__create-new-document-element-of-info');
  const tableBodyOfTableFiles = document.querySelector('.archive__create-new-document-of-table-body');
  getCurrentTime(arrayInputsOfCreateDocument[1]);
  documentId.textContent = data[data.length - 1].id_subscriber + 1;
  dateLastChangeDocument.textContent = arrayInputsOfCreateDocument[1].value;
  nameUserOfCreatedDocument.textContent = nameUser;
  buttonOfAddDocument.addEventListener('click', addNewFile(inputInWindowCreateDocument, infoListElements[3].textContent, tableBodyOfTableFiles));
  buttonOfCreateDocument.addEventListener('click', addDocumentInTable(arrayInputsOfCreateDocument));
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ДОКУМЕНТА ИЗ ТАБЛИЦЫ //
function getTableElementFromArchiveDocuments() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const buttonDeleteOfElement = document.getElementById('archiveDeleteDoc');
  const onButtonDelete = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach(item => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) elementArchiveTable.parentNode.remove();
    });
    // getCreateBlockForNewDocument();
  };

  buttonDeleteOfElement.addEventListener('click', onButtonDelete);
}

// ФУНКЦИЯ ДЛЯ ВЫРЕЗАНИЯ ДОКУМЕНТА //
function cutOutDocumentOfTable() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const buttonOfCutOutDocument = document.getElementById('archiveCutOut');
  const cutOutElement = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach(item => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) {
        cutOutDocument += item.outerHTML;
        elementArchiveTable.parentNode.remove();
      }
    });
  };
  buttonOfCutOutDocument.addEventListener('click', cutOutElement);
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ВЫРЕЗАННОГО ЭЛЕМЕНТА В ТАБЛИЦУ //
function putInElementInTable() {
  const rowInTalbeBodyOfFile = document.getElementById('fileTalbeBody');
  const putInButton = document.getElementById('archivePutIn');
  const putInElement = () => {
    if (cutOutDocument !== '') {
      rowInTalbeBodyOfFile.insertAdjacentHTML('beforeend', cutOutDocument);
      cutOutDocument = '';
    }
  };
  putInButton.addEventListener('click', putInElement);
}

// ФУНКЦИЯ ДЛЯ СБРОСА ФИЛЬТРОВ //
function clearFilters() {
  const buttonOfUpdateTable = document.getElementById('archiveUpdateTable');
  const getOldTalbe = () => {
    const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
    Array.from(tableBodyDocumentsOfArchive.children).forEach(item => item.remove());
    fillInInformations(data);
  };
  buttonOfUpdateTable.addEventListener('click', getOldTalbe);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ОТКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
function openWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOfFilter = document.getElementById('archiveSearch');
  const getWindowOfFilter = () => {
    archiveFile.innerHTML += getAchiveContainerFileSearch();
    closeWindowForFilterOfDocument();
    getFilteredDocuments(data);
  };
  buttonOfFilter.addEventListener('click', getWindowOfFilter);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
function closeWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOutForWindowFilterDocument = document.querySelector('.archive__container-file-search-of-element-button-out');
  const removeWindowOfFilter = () => {
    archiveFile.children[2].remove();
    openWindowForFilterOfDocument();
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocumentOfTable();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutForWindowFilterDocument.addEventListener('click', removeWindowOfFilter);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАПОЛНЕНИЯ ОТКРЫТОГО ДОКУМЕНТА ИНФОРМАЦИЕЙ //
const openDocument = target => function getDoc() {
  const archiveFile = document.querySelector('.archive__file');
  archiveFile.innerHTML += getArchiveContainerOfOpenedDocument(nameUser, '10.01.2022', 'Абонентские дела');
  const documentIdSubscriber = document.querySelector('.archive__document-of-id');
  const documentInputs = document.querySelectorAll('.archive__opened-document-of-input');
  const documentTextArea = document.querySelector('.archive__opened-document-of-textarea');
  const documentTableOfFiles = document.querySelector('.archive__opened-document-of-table');
  for (let i = 0; i < data.length; i++) {
    if (Number(target.id) === Number(data[i].id)) {
      for (let n = 0; n < countElementOfDocument; n++) {
        documentInputs[0].value = data[i].number_register;
        documentInputs[1].value = data[i].date_registration;
        documentInputs[2].value = data[i].id_subscriber;
        documentInputs[3].value = data[i].type_document;
        documentInputs[4].value = data[i].name_object;
        documentInputs[5].value = data[i].name_sity;
        documentInputs[6].value = data[i].name_street;
        documentInputs[7].value = data[i].number__agreement;
        documentInputs[8].value = data[i].number_home;
        documentInputs[9].value = data[i].number_body;
        documentInputs[10].value = data[i].number_flat;
      }
      documentTextArea.value = data[i].comments;
      documentIdSubscriber.textContent = data[i].id_subscriber;
      // documentTableOfFiles
    }
  }

  editOfDocument();
  closeDocument();
  if (Array.from(archiveFile.children).length >= 4) Array.from(archiveFile.children)[3].remove();
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ДОКУМЕНТА //
function getOpenedDocument() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach(item => {
    item.addEventListener('click', openDocument(item));
  });
}

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ДОКУМЕНТА //
function closeDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOutWithOpenedDocument = document.querySelector('.archive__opened-document-of-button-out');
  const outWithOpenedDocument = () => {
    Array.from(archiveFile.getElementsByClassName('archive__container-of-opened-document'))[0].remove();
    openWindowForFilterOfDocument();
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocumentOfTable();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutWithOpenedDocument.addEventListener('click', outWithOpenedDocument);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ РЕДАКТИРОВАНИЕ ДОКУМЕНТА //
function editOfDocument() {
  const editButton = document.querySelector('.archive__opened-document-of-button-create');
  const buttonsOfControlsDocument = document.querySelectorAll('.archive__opened-document-of-button-add-new-file');
  const inputsOfDocument = document.querySelectorAll('.archive__opened-document-of-input');
  const textAreaOfDocument = document.querySelector('.archive__opened-document-of-textarea');
  const checkBoxOfDocument = document.querySelector('.archive__opened-document-of-table-button-for-delete');
  const tableWithTheFile = document.querySelector('.archive__opened-document-of-table');
  const inputOfTheTableFile = document.querySelector('.archive__opened-document-of-table-button-for-delete');
  const infoListCreatedElements = document.querySelectorAll('.archive__opened-document-element-of-info');
  const inputOfOpenedDocument = document.querySelector('.archive__opened-document-of-input-add-new-file');

  // Функция для добавления файла //
  const addFile = () => buttonsOfControlsDocument[0].addEventListener('click', addNewFile(inputOfOpenedDocument, infoListCreatedElements[3].textContent, tableWithTheFile.children[1]));

  // Функция-сборщик для просмотр файлов //
  const showFile = () => {
    // Функция для просмотр файлов (НЕ PDF) //
    // createWindowForPrintFile();
    // Функция для просмотра файла (PDF) //
    console.log('Показать');
  };

  // Функция для просмотра файла (PDF) //
  const deleteFile$$1 = () => {
    Array.from(tableWithTheFile.children).forEach(tableElement => {
      tableElement.children[0].contains(inputOfTheTableFile) && inputOfTheTableFile.checked ? tableElement.children[0].remove() : console.log('Элемент не подлежит удалению ' + tableElement.children[0]);
    });
  };

  // Функция для создания окна печати //
  function createWindowForPrintFile() {
    const windowForPrint = document.createElement('section');
    const containerForImg = document.createElement('div');
    const imgForPrint = document.createElement('img');
    document.body.append(windowForPrint);
    windowForPrint.append(containerForImg);
    containerForImg.append(imgForPrint);
    windowForPrint.classList.add('container-for-print-file');
    imgForPrint.onload = function () {
      imgForPrint.style = 'display: block; width: 200px; height: auto;';
      imgForPrint.src = '/photo_2023-05-23_10-20-03.jpg';
    }();
    windowForPrint.style = 'display: flex; position: absolute; justify-content: center; align-items: center; z-index: 5; width: 100%; height: 100%; background-color: white;';
    windowForPrint.children.style = 'display: block; width: 70%; height: 70%;';
    const containerForPrint = document.querySelector('.container-for-print-file');
    closeWindowForPrint(containerForPrint);
  }

  // Функция для печати файла //
  const printFile = () => {
    createWindowForPrintFile();
    const el = document.querySelector('.container-for-print-file');
    console.log('Печать');
    window.print(el.innerHTML);
  };

  // Функция для вывода требуемого изображения //
  // addImageProcess(src){
  //   return new Promise((resolve, reject) => {
  //     let img = new Image()
  //     img.onload = () => resolve(img.height)
  //     img.onerror = reject
  //     img.src = src
  //   })
  // }

  // ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА С ДОКУМЕНТОМ //
  function closeWindowForPrint(container) {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        container.remove();
      }
    });
  }

  // Функция закрытия окна протоколов печати //
  const closeWindowProtocolsOfPrint = parent => function removeWindowProtocols() {
    parent.children[3].remove();
  };

  // Функция для вывода протоколов печати //
  const showProtocols = () => {
    const archiveFile = document.querySelector('.archive__file');
    archiveFile.innerHTML += protocolsOfPrint();
    const buttonCloseWindowProtocolsOfPrint = document.querySelector('.protocols-of-print__button-close');
    buttonCloseWindowProtocolsOfPrint.addEventListener('click', closeWindowProtocolsOfPrint(archiveFile));
  };

  // Функция для сохранения изменений в документе //
  const saveFile = () => {
    console.log('Изменения в документе сохранены');
    editButton.textContent = 'Редактировать';
    inputsOfDocument.forEach(item => item.disabled = true);
    textAreaOfDocument.disabled = true;
    checkBoxOfDocument.disabled = true;
    editButton.removeEventListener('click', saveFile);
    editButton.addEventListener('click', edit);
  };

  // Функция-сборщик для работы с данными документа и его редактированием //
  function edit() {
    editButton.textContent = 'Сохранить';
    editButton.type = '';
    buttonsOfControlsDocument.forEach(item => {
      item.disabled = false;
      if (item.textContent === 'Присоеденить') item.addEventListener('click', addFile());
      if (item.textContent === 'Показать') item.addEventListener('click', showFile);
      if (item.textContent === 'Удалить') item.addEventListener('click', deleteFile$$1);
      if (item.textContent === 'Печать') item.addEventListener('click', printFile);
      if (item.textContent === 'Протоколы печати') item.addEventListener('click', showProtocols);
    });
    inputsOfDocument.forEach(item => item.disabled = false);
    textAreaOfDocument.disabled = false;
    checkBoxOfDocument.disabled = false;
    editButton.removeEventListener('click', edit);
    editButton.addEventListener('click', saveFile);
  }
  editButton.addEventListener('click', edit);
}

// ФУНЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ ДОРОЖКИ В ТАБЛИЦЕ //
function createNewRowInTableForDocuments(indexChildren, iElement) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  tableBodyDocumentsOfArchive.innerHTML += rowTableDocument();
  tableBodyDocumentsOfArchive.children[iElement].id = indexChildren;
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛЕНИЯ ИНФОРМАЦИЕЙ ДОРОЖКИ ИЗ ТАБЛИЦЫ //
function getInformationsForTable(array) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach(item => {
    try {
      for (let i = 0; i < array.length; i++) {
        if (Number(item.id) === Number(array[i].id)) {
          item.children[1].textContent = array[i].id;
          item.children[2].textContent = array[i].number_register;
          item.children[3].textContent = array[i].id_subscriber;
          item.children[4].textContent = array[i].type_document;
          item.children[5].textContent = array[i].comments;
          item.children[6].textContent = array[i].number__agreement;
          item.children[7].textContent = array[i].name_object;
        }
      }
    } catch (error) {
      console.log('Ошибка при заполнении данными таблицы');
    }
  });
  getOpenedDocument();
}

// ФУНКЦИЯ СЛУШАТЕЛЬ СОБЫТИЙ ДЛЯ ФИЛЬТРАЦИИ ТАБЛИЦЫ ДОКУМЕТОВ //
function getFilteredDocuments(array) {
  const buttonFilter = document.querySelector('.archive__container-file-search-of-element-button');
  buttonFilter.addEventListener('click', () => filterOfArray(array));
}

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВА //
function filterOfArray(array) {
  const inputsSearch = document.querySelectorAll('.archive__container-file-search-of-element-input');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach(item => item.remove());
  const filteredArray = array.filter(item => {
    const selectSearch = document.querySelector('.archive__container-file-search-of-element-select');
    if (item.type_document !== selectSearch.value && selectSearch.value !== '-') {
      item.remove;
    } else if (item.number_register !== Number(inputsSearch[0].value) && inputsSearch[0].value !== '') {
      item.remove;
    } else if (item.name_object !== Number(inputsSearch[1].value) && inputsSearch[1].value !== '') {
      item.remove;
    } else if (item.comments !== Number(inputsSearch[2].value) && inputsSearch[2].value !== '') {
      item.remove;
    } else if (item.name_sity !== Number(inputsSearch[3].value) && inputsSearch[3].value !== '') {
      item.remove;
    } else if (item.number_home !== Number(inputsSearch[4].value) && inputsSearch[4].value !== '') {
      item.remove;
    } else if (item.name_street !== Number(inputsSearch[5].value) && inputsSearch[5].value !== '') {
      item.remove;
    } else if (item.number_flat !== Number(inputsSearch[6].value) && inputsSearch[6].value !== '') {
      item.remove;
    } else if (item.number__agreement !== Number(inputsSearch[7].value) && inputsSearch[7].value !== '') {
      item.remove;
    } else if (item.id !== Number(inputsSearch[8].value) && inputsSearch[8].value !== '') {
      item.remove;
    } else {
      return item;
    }
  });
  fillInInformations(filteredArray);
}
const archiveFolderTableRow = () => `<tr>
<td><input type="checkbox" class="archive__folder-table-of-checkbox" name="" id=""></td>
<td></td>
<td></td>
</tr>`;
const arrayChildrenOfFolderThree = [{
  'idFolder': 2,
  'idParent': 0,
  'numberAgreement': 'Абонентское дело 1',
  'numberSubscriber': 1,
  'folderLevel': 1,
  'comments': 'level1'
}, {
  'idFolder': 3,
  'idParent': 2,
  'numberAgreement': 'проектно-техническая документация',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 4,
  'idParent': 2,
  'numberAgreement': 'учредительные и рег документы',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 5,
  'idParent': 2,
  'numberAgreement': 'акты ко',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 6,
  'idParent': 2,
  'numberAgreement': 'договор',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 7,
  'idParent': 2,
  'numberAgreement': 'письма-жалобы абонентов и ответы',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 8,
  'idParent': 2,
  'numberAgreement': 'служ записи, рапорты',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 9,
  'idParent': 2,
  'numberAgreement': 'прочие документы',
  'numberSubscriber': 1,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 10,
  'idParent': 0,
  'numberAgreement': 'Абонентское дело 2',
  'numberSubscriber': 2,
  'folderLevel': 1,
  'comments': 'level1'
}, {
  'idFolder': 11,
  'idParent': 10,
  'numberAgreement': 'проектно-техническая документация',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 12,
  'idParent': 10,
  'numberAgreement': 'учредительные и рег документы',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 13,
  'idParent': 10,
  'numberAgreement': 'акты ко',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 14,
  'idParent': 10,
  'numberAgreement': 'договор',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 15,
  'idParent': 10,
  'numberAgreement': 'письма-жалобы абонентов и ответы',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 16,
  'idParent': 10,
  'numberAgreement': 'служ записи, рапорты',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 17,
  'idParent': 10,
  'numberAgreement': 'прочие документы',
  'numberSubscriber': 2,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 18,
  'idParent': 1,
  'numberAgreement': 'Проектно-техническая документация 1',
  'numberSubscriber': 4,
  'folderLevel': 1,
  'comments': 'level1'
}, {
  'idFolder': 19,
  'idParent': 18,
  'numberAgreement': 'проектно-техническая документация',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 20,
  'idParent': 18,
  'numberAgreement': 'учредительные и рег документы',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 21,
  'idParent': 18,
  'numberAgreement': 'акты ко',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 22,
  'idParent': 18,
  'numberAgreement': 'договор',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 23,
  'idParent': 18,
  'numberAgreement': 'письма-жалобы абонентов и ответы',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 24,
  'idParent': 18,
  'numberAgreement': 'служ записи, рапорты',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}, {
  'idFolder': 25,
  'idParent': 18,
  'numberAgreement': 'прочие документы',
  'numberSubscriber': 4,
  'folderLevel': 2,
  'comments': 'level1'
}];
const folderThree = [{
  'idFolder': 0,
  'idParent': null,
  'numberAgreement': 'Абонентские дела',
  'numberSubscriber': '-',
  'folderLevel': 0
}, {
  'idFolder': 1,
  'idParent': null,
  'numberAgreement': 'Проектно-техническая документация',
  'numberSubscriber': '-',
  'folderLevel': 0
}];
const getContainerForCreateNewFolder = () => `
<section class="archive__create-new-folder">
  <h1 class="archive__create-new-folder-preview">Новая папка</h1>
  <div class="archive__create-new-folder-of-form">
    <input class="archive__create-new-folder-of-input" type="number" id="numberAgreement" placeholder="Номер договора" required>
    <input class="archive__create-new-folder-of-input" type="number" id="numberSubscriber" placeholder="Абоненткий номер" required>
    <input class="archive__create-new-folder-of-input" type="text" id="comment" placeholder="Комментарий" required>
    <button class="archive__create-new-folder-of-button-create" type="submit" id="buttonSaveFolder">Создать</button>
    </div>
  </div>
  <img class="archive__create-new-folder-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
</section>
`;

//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //

let cutOutFolder = '';
let levelOfFolder = 0;
let counterSubmerged = 0;

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    console.log('ОТКРЫТИЕ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ');
    archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    console.log('ЗАКРЫТИЕ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ');
    archiveFolder.style = 'display: none;';
  });
};

// ФУНУКЦИЯ ДЛЯ ЗАГРУЗКИ РОДИТЕЛЬСКИХ ПАПОК В ТАБЛИЦУ //
function loadFolderParentInTable() {
  const folderTableBody = document.getElementById('folderTalbeBody');
  for (let i = 0; i < folderThree.length; i++) {
    folderTableBody.innerHTML += archiveFolderTableRow();
    if (folderThree[i].idFolder === i) {
      fillInRowOfFolderTalbe(folderTableBody, folderThree[i].numberSubscriber, folderThree[i].numberAgreement);
      console.log('ЗАГРУЗКИ РОДИТЕЛЬСКОЙ ПАПОК В ТАБЛИЦУ');
    }
  }
}

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
function openWindowForCreateFolder() {
  const buttonOfCreateFolder = document.getElementById('createFolder');
  function getWindowForCreateFolder() {
    console.log('ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ');
    const archiveFolderContentContainer = document.querySelector('.archive__folder-content-container');
    archiveFolderContentContainer.innerHTML += getContainerForCreateNewFolder();
    const buttonOfLeaveWindowForCreateFolder = document.querySelector('.archive__create-new-folder-of-button-out');
    const buttonForCreateNewFolder = document.getElementById('buttonSaveFolder');
    closeWindowForCreateFolder(buttonOfLeaveWindowForCreateFolder);
    createFolder(buttonForCreateNewFolder);
  }
  buttonOfCreateFolder.addEventListener('click', getWindowForCreateFolder);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ //
const getDownInFolderNotTopLevel = (array, folder, folderTableBody, currentFodler) => function () {
  if (levelOfFolder !== 0) {
    console.log('ПОГРУЖЕНИЕ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ');
    const idElementFromOfFilteredArray = array.filter(item => item.numberAgreement === event.target.parentNode.children[2].textContent);
    console.log('ВЫЗОВ ФУНКЦИИ ПОГРУЖЕНИЯ');
    submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, idElementFromOfFilteredArray[0].idFolder);
  }
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ОКНА СОЗДАНИЯ ПАПКИ ИЗ ДЕРЕВА //
const removeWindowForCreateFolder = () => function removeContainer() {
  const folderContentContainer = document.querySelector('.archive__folder-content-container');
  folderContentContainer.children[1].remove();
  console.log('ЗАКРЫТИЕ ОКНА СОЗДАНИЯ ПАПКИ');
  if (levelOfFolder === 0) {
    getDownInFolderLevelBelow();
  }
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
function closeWindowForCreateFolder(button) {
  button.addEventListener('click', removeWindowForCreateFolder());
  console.log('СОЗДАНИЯ ПАПКИ');
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПАПКИ //
function createFolder(button) {
  button.addEventListener('click', createTableFolderRow);
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК //
function createTableFolderRow() {
  const currentFodler = document.querySelector('.archive__filder-title');
  const inputOfNumberAgreement = document.getElementById('numberAgreement');
  const inputOfNumberSubscriber = document.getElementById('numberSubscriber');
  const inputOfComment = document.getElementById('comment');
  const folderTableBody = document.getElementById('folderTalbeBody');
  console.log('СОЗДАНИЕ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК');
  if (levelOfFolder !== 0 && inputOfNumberAgreement.value !== '' && inputOfNumberSubscriber.value !== '' && inputOfComment.value !== '') {
    if (levelOfFolder === 1) {
      createNewFolder(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, inputOfNumberAgreement.value, folderThree.filter(item => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent)[0].idFolder);
    } else if (levelOfFolder > 1) {
      createNewFolder(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, inputOfNumberAgreement.value, arrayChildrenOfFolderThree.filter(item => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent)[0].idFolder);
    }
    createChildrenFolderList(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, arrayChildrenOfFolderThree.length - 1);
    submergence(inputOfNumberSubscriber.value, currentFodler, folderTableBody, arrayChildrenOfFolderThree.length + 1, levelOfFolder);
    folderTableBody.innerHTML += archiveFolderTableRow();
    fillInRowOfFolderTalbe(folderTableBody, inputOfNumberAgreement.value, inputOfNumberSubscriber.value);
  } else if (levelOfFolder === 0) {
    return alert('Запрещено создание папок при нахождении в корневой папке');
  } else {
    return alert('Ошибка создания папки');
  }
}

// ФУНКЦИЯ ДЛЯ ЗАНЕСЕНИЯ НОВОЙ ПАПКИ В МАССИВ //
function createNewFolder(array, numberSubscriber, numberAgreement, idParent) {
  array.push({
    'idFolder': array.length,
    'idParent': idParent,
    'numberAgreement': numberAgreement,
    'numberSubscriber': numberSubscriber,
    'folderLevel': levelOfFolder,
    'comments': ''
  });
}

// ФУНКЦИЯ ДЛЯ ЗАНЕСЕНИЯ СПИСКА ТРЕБУЕМЫХ ДОЧЕРНИХ ПАПОК В МАССИВ //
function createChildrenFolderList(array, numberSubscriber, idParent) {
  const listChidrenFolderNumberAgreement = ['проектно-техническая документация', 'учредительные и рег документы', 'акты ко', 'договор', 'письма-жалобы абонентов и ответы', 'служ записи, рапорты', 'прочие документы'];
  listChidrenFolderNumberAgreement.forEach(item => {
    array.push({
      'idFolder': arrayChildrenOfFolderThree.length,
      'idParent': idParent,
      'numberAgreement': item,
      'numberSubscriber': numberSubscriber,
      'folderLevel': levelOfFolder,
      'comments': ''
    });
  });
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ДОРОЖКИ ИНФОРМАЦИЕЙ ТАБЛИЦЫ ПАПОК //
function fillInRowOfFolderTalbe(table, inputOfNumberAgreement, inputOfNumberSubscriber) {
  console.log('ЗАПОЛНЕНИЯ ДОРОЖКИ ИНФОРМАЦИЕЙ ТАБЛИЦЫ ПАПОК');
  const childrenElement = Array.from(table.children);
  childrenElement[childrenElement.length - 1].children[1].textContent = inputOfNumberAgreement;
  childrenElement[childrenElement.length - 1].children[2].textContent = inputOfNumberSubscriber;
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ПАПКИ //
function deleteFolder() {
  const buttonForDeleteFolder = document.getElementById('deleteFolder');
  buttonForDeleteFolder.addEventListener('click', searchCheckedInputs);
}

// ФУНКЦИЯ ДЛЯ ПОИСКА ВЫБРАННЫХ ДОРОЖЕК //
function searchCheckedInputs() {
  const folderTableBody = document.getElementById('folderTalbeBody');
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  for (const element of arrayChildrenOfTableBody) {
    deleteCheckedRowInTableFolder(element);
  }
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ВЫБРАННОЙ ДОРОЖКИ ТАБЛИЦЫ //
function deleteCheckedRowInTableFolder(element) {
  console.log('УДАЛЕНИЕ ВЫБРАННОЙ ДОРОЖКИ ТАБЛИЦЫ');
  const firstTdElement = element.children[0];
  if (firstTdElement.children[0].checked === true) {
    cutOutFolder += element.outerHTML;
    element.remove();
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ C ВЕРХНЕЙ НА УРОВЕНЬ НИЖЕ //
function getDownInFolderLevelBelow() {
  if (levelOfFolder === 0) {
    const currentFodler = document.querySelector('.archive__filder-title');
    const folderTableBody = document.getElementById('folderTalbeBody');
    const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
    const getFolderLevelBelow = () => function getDown(event) {
      console.log('ПОГРУЖЕНИЕ В ПАПКУ C ВЕРХНЕЙ НА УРОВЕНЬ НИЖЕ');
      if (event.target.textContent === 'Абонентские дела' || event.target.parentNode.children[2].textContent === 'Абонентские дела') {
        submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 0);
      } else if (event.target.textContent === 'Проектно-техническая документация' || event.target.parentNode.children[2].textContent === 'Проектно-техническая документация') {
        submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 1);
      }
      console.log(levelOfFolder);
    };
    for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
      for (let n = 1; n < arrayChildrenOfTableBody[i].children.length; n++) {
        arrayChildrenOfTableBody[i].children[n].addEventListener('click', getFolderLevelBelow());
      }
    }
  }
}

// ФУНКЦИЯ ДЛЯ ПОГРУЖЕНИЯ //
function submergence(numberSubscriber, currentFodler, folderTableBody, idFolder, level) {
  console.log('РАБОТА ГЛАВНОЙ ФУНКЦИИ ПОГРУЖЕНИЯ');
  levelOfFolder++;
  console.log('ПРИБАВЛЯЮ ЗНАЧЕНИЕ УРОВЕНЯ ПАПКИ НА 1', levelOfFolder);
  if (event.target.textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.textContent}`;
  } else if (event.target.parentNode.children[2].textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.parentNode.children[2].textContent}`;
  }
  folderTableBody.innerHTML = '';
  const newTableBodyOfDocuemnt = document.querySelector('.scroll-table-body');
  newTableBodyOfDocuemnt.innerHTML += '';
  const filteredArrayOfChildrenFolder = arrayChildrenOfFolderThree.filter(item => item.idParent === idFolder);
  createRow(folderTableBody, filteredArrayOfChildrenFolder, archiveFolderTableRow);
  getContentOfFolder(folderTableBody, filteredArrayOfChildrenFolder);
  getDocumentsFromFolder(event, levelOfFolder, idFolder);
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  goUpToTheFolderToTheTopLevel();
  goUpToTheFolderToTheHigherLevel();
  if (levelOfFolder !== 0) {
    for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
      for (let n = 1; n < arrayChildrenOfTableBody[i].children.length; n++) {
        arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder, event.target.parentNode.children[2].textContent, folderTableBody, currentFodler, level));
      }
    }
  }
}

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВОВ ДОК.ОВ И ПАПОК, ДЛЯ НАХОЖДЕНИЯ ДОК.ОВ ПРИВЯЗАННЫХ К ПАПКЕ ДЛЯ ОТРИСОВКИ ФАЙЛОВ //
function getDocumentsFromFolder(event, level, idFolder) {
  let parentFolter;
  if (level !== 0) {
    parentFolter = folderThree.filter(item => item.numberAgreement === event.target.parentNode.children[2].textContent);
    if (folderThree.length !== 0) {
      console.log('ПОЛУЧЕНИЕ ФИЛЬТРОВАННОГО МАССИВА ПАПОК', parentFolter);
      const filteredArrayOfDocument = data.filter(item => item.id_parent === idFolder);
      console.log('ФИЛЬТРОВАННЫЙ МАССИВ ПАПОК', parentFolter);
      console.log('ЗАГРУЗКА ДОКУМЕНТОВ В ТАБЛИЦУ ПО-ФИЛЬТРОВАННОМУ МАССИВУ');
      fillInInformations(filteredArrayOfDocument);
    }
  } else {
    parentFolter = folderThree.filter(item => item.numberAgreement === event.target.parentNode.children[2].textContent);
  }
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
const moveToTheFolderAbove = (button, arrayFoldersOfMain, arrayFoldersOfSecondary, current, body, level, buttonForRemoveListener) => {
  button.removeEventListener('click', buttonForRemoveListener);
  levelOfFolder = 1;
  const oldCurrentFodler = current.textContent;
  const oldFolderFromArrayChildrenOfFolderThree = arrayFoldersOfSecondary.filter(item => `Текущая папка: ${item.numberAgreement}` === oldCurrentFodler);
  const newFolderFromArrayChildrenOfFolderThree = arrayFoldersOfMain.filter(item => oldFolderFromArrayChildrenOfFolderThree[0].idParent === item.idFolder);
  submergence(newFolderFromArrayChildrenOfFolderThree[0].numberSubscriber, current, body, newFolderFromArrayChildrenOfFolderThree[0].idFolder, level);
  current.textContent = `Текущая папка: ${newFolderFromArrayChildrenOfFolderThree[0].numberAgreement}`;
};

// ФУНКЦИЯ ДЛЯ КОНТРОЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
function goUpToTheFolderToTheHigherLevel() {
  const buttonOfLevelUp = document.getElementById('upLevelFolder');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');
  const goUpToTheFolder = event => {
    if (counterSubmerged === 0) setTimeout(counterSubmerged++, 1);else {
      if (levelOfFolder === 1) {
        buttonOfLevelUp.removeEventListener('click', goUpToTheFolder);
        console.log(levelOfFolder, 'Уровень папки перед поднятием');
        levelOfFolder = 0;
        Array.from(folderTableBody.children).forEach(e => e.remove());
        Array.from(tableBodyDocumentsOfArchive.children).forEach(e => e.remove());
        currentFodler.textContent = 'Текущая папка: Верхнего уровня';
        loadFolderParentInTable();
        getDownInFolderLevelBelow();
        console.log(`Перемещение в папку уровня ${levelOfFolder}`);
        return event;
      } else if (levelOfFolder === 2) {
        moveToTheFolderAbove(buttonOfLevelUp, folderThree, arrayChildrenOfFolderThree, currentFodler, folderTableBody, levelOfFolder, goUpToTheFolder);
      } else if (levelOfFolder === 3) {
        moveToTheFolderAbove(buttonOfLevelUp, folderThree, arrayChildrenOfFolderThree, currentFodler, folderTableBody, levelOfFolder, goUpToTheFolder);
      } else if (levelOfFolder === 4) {
        buttonOfLevelUp.removeEventListener('click', goUpToTheFolder);
        levelOfFolder = 3;
        const oldCurrentFodler = currentFodler.textContent;
        currentFodler.textContent = 'Текущая папка: Верхнего уровня';
        console.log(oldCurrentFodler);
        console.log(`Перемещение в папку уровня ${levelOfFolder}`);
        return event;
      } else {
        return event;
        alert('Error in raising a folder to the level of its parent');
      }
    }
  };
  buttonOfLevelUp.addEventListener('click', goUpToTheFolder);
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ МАКСИМАЛЬНОГО УРОВЕНЯ //
function goUpToTheFolderToTheTopLevel() {
  const buttonOfUpOnFolderMaxLevel = document.getElementById('upMaxLevelFolder');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');
  const climbToTheMaximumLevelFolder = () => {
    console.log('Перемещение папки на максивальный верхний уровень');
    Array.from(folderTableBody.children).forEach(e => e.remove());
    Array.from(tableBodyDocumentsOfArchive.children).forEach(e => e.remove());
    currentFodler.textContent = 'Текущая папка: Верхнего уровня';
    levelOfFolder = 0;
    loadFolderParentInTable();
    getDownInFolderLevelBelow();
  };
  buttonOfUpOnFolderMaxLevel.addEventListener('click', climbToTheMaximumLevelFolder);
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ПАПКИ //
function insertFolder() {
  const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
  const buttonPutInOfFolder = document.getElementById('putFolder');
  const putInElement = () => {
    console.log('ВСТАВКА ПАПКИ');
    if (cutOutFolder !== '') {
      talbeBodyOfFolder.insertAdjacentHTML('beforeend', cutOutFolder);
      cutOutFolder = '';
    }
  };
  buttonPutInOfFolder.addEventListener('click', putInElement);
}

// ФУНКЦИЯ ДЛЯ ВЫРЕЗАНИЯ ПАПКИ //
function cutTheFolder() {
  const buttonOfCutOutFolder = document.getElementById('cutOutFolder');
  function cutOutRow() {
    console.log('ВЫРЕЗАНИЯ ПАПКИ');
    searchCheckedInputs();
    insertFolder();
  }
  buttonOfCutOutFolder.addEventListener('click', cutOutRow);
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ //
function getContentOfFolder(tableBody, filteredArray) {
  console.log('ЗАПОЛНЕНИЕ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ');
  const newArrayChildrenOfTableBody = Array.from(tableBody.children).map((element, id) => {
    element.children[1].textContent = filteredArray[id].numberSubscriber;
    element.children[2].textContent = filteredArray[id].numberAgreement;
  });
}

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ //
function updateTheTable() {
  const buttonOfUpdateTheTable = document.getElementById('updateTableFolder');
  const currentFodler = document.querySelector('.archive__filder-title');
  const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
  const updateAndThrowDownOfTheTableContent = () => {
    console.log('ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ');
    console.log(levelOfFolder, 'Уровень погружения');
    if (levelOfFolder !== 0) {
      if (levelOfFolder === 1) {
        console.log(1, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ');
        folderThree.filter(item => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
        const filteredArrayOfFolder = arrayChildrenOfFolderThree.filter(item => item.idParent === folderThree[0].idFolder);
        createRow(talbeBodyOfFolder, filteredArrayOfFolder, archiveFolderTableRow);
        getContentOfFolder(talbeBodyOfFolder, filteredArrayOfFolder);
        getDocumentsFromFolder(event, levelOfFolder, folderThree[0].idFolder);
        submergence(folderThree[0].numberSubscriber, currentFodler, talbeBodyOfFolder, folderThree[0].idFolder, levelOfFolder);
      } else {
        console.log(2, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ');
        arrayChildrenOfFolderThree.filter(item => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
        const filteredArrayOfChildren = arrayChildrenOfFolderThree.filter(item => item.idParent === arrayChildrenOfFolderThree[0].idFolder);
        createRow(talbeBodyOfFolder, filteredArrayOfChildren, archiveFolderTableRow);
        getContentOfFolder(talbeBodyOfFolder, filteredArrayOfChildren);
        getDocumentsFromFolder(event, levelOfFolder, arrayChildrenOfFolderThree[0].idFolder);
      }
    } else {
      console.log(3, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ');
      Array.from(talbeBodyOfFolder.children).forEach(e => e.remove());
      levelOfFolder = 0;
      loadFolderParentInTable();
      getDownInFolderLevelBelow();
    }
    goUpToTheFolderToTheTopLevel();
    goUpToTheFolderToTheHigherLevel();
    searchFolder();
  };
  buttonOfUpdateTheTable.addEventListener('click', updateAndThrowDownOfTheTableContent);
}

// ФУНКЦИЯ ПОИСКА ПАПКИ //
function searchFolder() {
  const inputForTheSearchFolder = document.querySelector('.archive__folder-input');
  const checkboxForSearchOfNumber = document.getElementById('type-folder-search-of-number');
  const checkboxForSearchOfName = document.getElementById('type-folder-search-of-name');
  const buttonsForSearchToTheFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
  const getListFolders = item => function getFolder() {
    console.log('ПОИСК ПАПКИ');
    resetFolderEffects();
    sortingOfFolder(item);
    updateTheTable();
    // for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
    //   for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
    //     arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder, event.target.parentNode.children[2].textContent, folderTableBody, currentFodler, level));
    //   }
    // }
  };

  // ФУНКЦИЯ-СБОРЩИК ДЛЯ СОРТИРОВКИ //
  function sortingOfFolder(item) {
    const folderTableBody = document.getElementById('folderTalbeBody');
    const fileTalbeBody = document.getElementById('fileTalbeBody');
    if (item.title === 'Поиск по номеру' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberSubscriber = arrayChildrenOfFolderThree.filter(element => Number(element.numberSubscriber) === Number(inputForTheSearchFolder.value));
      settingUpButtonsOfFolder(checkboxForSearchOfNumber, item);
      Array.from(fileTalbeBody.children).forEach(e => e.remove());
      Array.from(folderTableBody.children).forEach(e => e.remove());
      createRow(folderTableBody, filteredArrayOfNumberSubscriber, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberSubscriber);
      clearOfInputForSearch(inputForTheSearchFolder);
    } else if (item.title === 'Поиск по имени' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberAgreement = arrayChildrenOfFolderThree.filter(element => element.numberAgreement == inputForTheSearchFolder.value);
      settingUpButtonsOfFolder(checkboxForSearchOfName, item);
      Array.from(fileTalbeBody.children).forEach(e => e.remove());
      Array.from(folderTableBody.children).forEach(e => e.remove());
      createRow(folderTableBody, filteredArrayOfNumberAgreement, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberAgreement);
      clearOfInputForSearch(inputForTheSearchFolder);
    }
  }

  // ФУНКЦИЯ ДЛЯ ОТЧИСТКИ INPUT //
  function clearOfInputForSearch(input) {
    console.log('ОТЧИСТКА INPUT');
    input.value = '';
  }

  // ФУНКЦИЯ ДЛЯ СБРОСА ЭФФЕКТОВ НА КНОПКАХ ПОИСКА //
  function resetFolderEffects() {
    console.log('СБРОС ЭФФЕКТОВ НА КНОПКАХ ПОИСКА');
    const buttonsOfSettingFilterFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
    buttonsOfSettingFilterFolder.forEach(element => element.style = 'border: none');
    checkboxForSearchOfName.checked === false;
  }
  // ФУНКЦИЯ ДЛЯ НАСТРОЙКИ КПОНОК //
  function settingUpButtonsOfFolder(checkbox, item) {
    console.log('НАСТРОЙКИ КПОНОК ПОИСКА');
    checkbox.checked === true;
    item.style = 'border: 1px solid black';
  }
  buttonsForSearchToTheFolder.forEach(item => {
    item.addEventListener('click', getListFolders(item));
  });
}

//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ПАНЕЛИ АДМИНА //
const getAdminPanels = (item, array) => function getPanel() {
  Array.from(array).forEach(e => applyInvisabilityOnElement(e, 'display', 'none'));
  if (item.id === 'panelAdminOfEmployeesCompany') {
    Array.from(array)[0].style = 'display: block';
  } else if (item.id === 'panelAdminOfGroupAccess') {
    Array.from(array)[1].style = 'display: block';
  } else if (item.id === 'panelAdminOffileStorage') {
    Array.from(array)[2].style = 'display: block';
  } else if (item.id === 'panelAdminOfProtocols') {
    Array.from(array)[3].style = 'display: block';
  }
};

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЕМ МЕЖДУ ПАНЕЛЯМИ АДМИНИСТРАТОРА //
function switchingBetweenAdminPanels() {
  const panelAdminOfEmployeesCompany = document.querySelector('.employees-company');
  const panelAdminOfGroupAccess = document.querySelector('.group-access');
  const panelAdminOfFileStorage = document.querySelector('.file-storage');
  const panelAdminOfProtocols = document.querySelector('.protocols');
  const arrayOfAdminPanels = [panelAdminOfEmployeesCompany, panelAdminOfGroupAccess, panelAdminOfFileStorage, panelAdminOfProtocols];
  const buttonsOfSwitchingAndminsPanels = document.querySelectorAll('.page__element-button');
  Array.from(buttonsOfSwitchingAndminsPanels).forEach(item => {
    item.addEventListener('click', getAdminPanels(item, arrayOfAdminPanels));
  });
}

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ВСПЛЫВАЮЩЕГО МЕНЮ //
function getByttonList() {
  const buttonOfOpenMenu = document.querySelector('.page__admin-button-open-menu');
  const menuBlock = document.querySelector('.page__admin-menu');
  const openMenu = () => {
    menuBlock.classList.toggle('page__admin-menu--open');
    buttonOfOpenMenu.classList.toggle('page__admin-button-open-menu--cliked');
  };
  buttonOfOpenMenu.addEventListener('click', openMenu);
}

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОГО БЛОКА КОГДА И СКРЫТИЯ СТАРОГО  //
const showNewBlock = (item, array) => function getBlock() {
  Array.from(array).forEach(e => applyInvisabilityOnElement(e, 'display', 'none'));
  if (item.id === 'employeesCompany') {
    Array.from(array)[0].style = 'display: block';
  } else if (item.id === 'worckingEmloyees') {
    Array.from(array)[1].style = 'display: block';
  } else if (item.id === 'sittingsUsers') {
    Array.from(array)[2].style = 'display: block';
  }
};

// ФУНКЦИЯ ДЛЯ СМЕНЫ ТАБЛИЦ В "employees-company"  //
function changeTable() {
  const employeesCompany = document.querySelector('.employees-company__wrapper-content');
  const worckingEmloyees = document.querySelector('.worcking-emloyees');
  const sittingsUsers = document.querySelector('.sittings-of-users');
  const arrayOfTables = [employeesCompany, worckingEmloyees, sittingsUsers];
  const listButtonsOfGetTable = document.querySelectorAll('.employees-company__navigation-table');
  Array.from(listButtonsOfGetTable).forEach(item => {
    item.addEventListener('click', showNewBlock(item, arrayOfTables));
  });
}

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОЙ ВКЛАДКИ В ПРОТОКОЛАХ //
const getTab = (item, array) => function changeStyleTabs() {
  Array.from(array).forEach(e => applyInvisabilityOnElement(e, 'display', 'none'));
  if (item.id === 'archivedProtocols') {
    Array.from(array)[0].style = 'display: block';
  } else if (item.id === 'protocolsAction') {
    Array.from(array)[1].style = 'display: block';
  } else if (item.id === 'protocolsSittings') {
    Array.from(array)[2].style = 'display: block';
  }
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ СМЕНЫ ВКЛАДОК В ПРОТОКОЛАХ //
function getTabsInProtocols() {
  const panelOfArchiveProtocols = document.querySelector('.archived-protocols');
  const panelOfActionProtocols = document.querySelector('.protocols-action');
  const panelOfSittingsProtocols = document.querySelector('.protocols__sittings');
  const arrayOfProtocolPanels = [panelOfArchiveProtocols, panelOfActionProtocols, panelOfSittingsProtocols];
  const buttonsOfProtocolsNavigation = document.querySelectorAll('.protocols__navigations-button');
  Array.from(buttonsOfProtocolsNavigation).forEach(item => {
    item.addEventListener('click', getTab(item, arrayOfProtocolPanels));
  });
}

// import Dynamsoft from 'dwt';
/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
ФУНКЦИЯ - обычная функция;
ФУНКЦИЯ-СБОРЩИК - функция содержащая две или более функций для полной реализации одного события;
*/

//            //
// КОДНСТАНТЫ //
//            //

const levelAcceptOfUser = 1;

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //

//           //
//  ФУНКЦИИ  //
//           //

// НАСТРОЙКА //

// ПОМОЩЬ //

// АДМИНИСТРИРОВАНИЕ //

// ВЫХОД //

//                                          //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ  //
//                                          //

// ФУНКЦИЯ-СБОРЩИК ФОРМИРОВАНИЯ ИНТЕРФЕЙСА ДЛЯ РАБОТЫ С АРХИВОМ //
const getCreateInterfasForWorkWithArchive = () => {
  createInterfeisOfArchiver();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
  getTableElementFromArchiveDocuments();
  cutOutDocumentOfTable();
  putInElementInTable();
  openWindowForFilterOfDocument();
  getOpenedDocument();
  clearFilters();
  loadFolderParentInTable();
  openWindowForCreateFolder();
  deleteFolder();
  cutTheFolder();
  getDownInFolderLevelBelow();
  // goUpToTheFolderToTheTopLevel();
  // goUpToTheFolderToTheHigherLevel();
  updateTheTable();
  searchFolder();
};

// ФУНКЦИЯ-СБОРЩИК ФОРМИРОВАНИЯ ИНТЕРФЕЙСА ДЛЯ РАБОТЫ С ПАНЕЛЯМИ АДМИНИСТРАТОРА //
const getCreateInterfasForWorkWithAdminPanel = () => {
  getByttonList();
  changeTable();
  switchingBetweenAdminPanels();
  getTabsInProtocols();
};
//                                         //
//  УСЛОВИЯ ДЛЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСОВ   //
//                                         //

// ВНОСИМ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
if (levelAcceptOfUser === 1) {
  getCreateInterfasForWorkWithArchive();
  getCreateInterfasForWorkWithAdminPanel();
}