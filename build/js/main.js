"use strict";

const archivePageMaxLever = () => `<img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img" title="Открыть окно для работы с папками" alt="Бургер">
<section class="archive__folder">
  <div class="archive__filder-menu-container-img">
    <img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img--rotate" alt="Бургер">
    <span class="archive__filder-title">Тукущая папка: Верхняя</span>
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
const getArchiveContainerOfOpenedDocument = () => `
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
        <input class="archive__opened-document-of-input" disabled type="text" name="" id="">
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
          <td>4123124</td>
          <td>4124</td>
          <td>4124</td>
          <td>124</td>
          <td>1527</td>
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
    </div>
    <div class="archive__opened-document-wrapper-of-info">
      <div class="archive__opened-document-element-of-info">
        <span class="archive__opened-document-element-of-text">Создатель документа:</span>
        <span class="archive__opened-document-element-of-info" id="idNewDocument"></span>
      </div>
      <div class="archive__opened-document-element-of-info">
        <span class="archive__opened-document-element-of-text">Дата последнего изменения:</span>
        <span class="archive__opened-document-element-of-info" id="dateOfChangeDocument"></span>
      </div>
      <div class="archive__opened-document-element-of-info">
        <span class="archive__opened-document-element-of-text">Папка:</span>
        <span class="archive__opened-document-element-of-info" id="folderOfDocument"></span>
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

// JSON как объект //
const data = [{
  'id': 341,
  'number_register': 4,
  'id_subscriber': 4,
  'type_document': 'Правовые документы',
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
  'id_parent': 0
}
// {
//   'id': 342,
//   'number_register': 3,
//   'id_subscriber': 3,
//   'type_document': 'Баланс водопотребления и водоотведения',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [2],
//   'id_parent': 0,
// },
// {
//   'id': 343,
//   'number_register': 2,
//   'id_subscriber': 2,
//   'type_document': 'Служебные записи, рапорты',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [1],
//   'id_parent': 1,
// },
// {
//   'id': 344,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 345,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 346,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 347,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 348,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 349,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 350,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 351,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 352,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 353,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 354,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 355,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 356,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
// {
//   'id': 357,
//   'number_register': 1,
//   'id_subscriber': 1,
//   'type_document': 'Проектно-техническая документация',
//   'comments': 'Заявление на опломбирование ',
//   'number__agreement': 12,
//   'name_object': 'Силенко И.П',
//   'date_registration': '2025-02-01',
//   'name_sity': 'Ростов-На-Дону',
//   'name_street': 'Льва Толстого',
//   'number_home': 5,
//   'number_body': 5,
//   'number_flat': 5,
//   'id_documents': [],
//   'id_parent': 2,
// },
];

const getContainerForCreateNewFolder = () => `
<section class="archive__create-new-folder">
  <h3 class="archive__create-new-folder-preview">Новая папка</h3>
  <div class="archive__create-new-folder-of-form">
    <input class="archive__create-new-folder-of-input" type="text" id="number" class="number" placeholder="Номер договора">
    <input class="archive__create-new-folder-of-input" type="text" id="number" class="number" placeholder="Абоненткий номер">
    <input class="archive__create-new-folder-of-input" type="text" id="comment" class="text" placeholder="Комментарий">
    <button class="archive__create-new-folder-of-button-create" id="buttonSaveFolder">Создать</button>
    <img class="archive__create-new-folder-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
    </div>
  </div>
</section>
`;

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.getElementById('p2');
const countElementOfDocument = 11;
//            //
// ПЕРЕМЕННЫЕ //
//            //
let cutteddOutElement = '';
let nameUser = 'Ганин А.В';

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

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
  item.value = `${formattedDate}T${formattedTime}`;
  item.disabled = 'true';
};

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ОТРИСОВКИ ИНТЕРФЕЙСА //
const createInterfeisOfArchiver = () => {
  acrchivePage.innerHTML = archivePageMaxLever();
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
  });
};

// // ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
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

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
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
    cutOutDocument();
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

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ФАЙЛА //
function addNewFile() {}

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ЭЛЕМЕНТА В ГЛАВНЫЙ МАССИВ ДОКУМЕТНОВ //
function addElementInArrayOfDocument(arrayInputs) {
  console.log(arrayInputs);
  for (let i = 0; i < arrayInputs.length; i++) {
    console.log(arrayInputs[i].value);
  }
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОКУМЕНТА //
function createDocument() {
  const arrayInputsOfCreateDocument = document.querySelectorAll('.archive__create-new-document-of-input');
  const nameUserOfCreatedDocument = document.getElementById('idNewDocument');
  const dateLastChangeDocument = document.getElementById('dateOfChangeDocument');
  const buttonOfAddDocument = document.querySelector('.archive__create-new-document-of-button-add-new-file');
  const buttonOfCreateDocument = document.querySelector('.archive__create-new-document-of-button-create');
  const doucmentId = document.querySelector('.archive__document-of-id');
  getCurrentTime(arrayInputsOfCreateDocument[1]);
  doucmentId.textContent = data[data.length - 1].id_subscriber + 1;
  dateLastChangeDocument.textContent = arrayInputsOfCreateDocument[1].value;
  nameUserOfCreatedDocument.textContent = nameUser;
  buttonOfAddDocument.addEventListener('click', addNewFile);
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
function cutOutDocument() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const bittonOfCutOutDocument = document.getElementById('archiveCutOut');
  const cutOutElement = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach(item => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) {
        cutteddOutElement += item.outerHTML;
        elementArchiveTable.parentNode.remove();
      }
    });
  };
  bittonOfCutOutDocument.addEventListener('click', cutOutElement);
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ВЫРЕЗАННОГО ЭЛЕМЕНТА В ТАБЛИЦУ //
function putInElementInTable() {
  const rowInTalbeBodyOfFile = document.getElementById('fileTalbeBody');
  const putInButton = document.getElementById('archivePutIn');
  const putInElement = () => {
    if (cutteddOutElement !== '') {
      rowInTalbeBodyOfFile.insertAdjacentHTML('beforeend', cutteddOutElement);
      cutteddOutElement = '';
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

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
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

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
function closeWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOutForWindowFilterDocument = document.querySelector('.archive__container-file-search-of-element-button-out');
  const removeWindowOfFilter = () => {
    archiveFile.children[2].remove();
    openWindowForFilterOfDocument();
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocument();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutForWindowFilterDocument.addEventListener('click', removeWindowOfFilter);
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ОТКРЫТОГО ДОКУМЕНТА ИНФОРМАЦИЕЙ //
const openDocument = target => function qq() {
  const archiveFile = document.querySelector('.archive__file');
  archiveFile.innerHTML += getArchiveContainerOfOpenedDocument();
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
    cutOutDocument();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutWithOpenedDocument.addEventListener('click', outWithOpenedDocument);
}

// ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЕ ДОКУМЕНТА //
function editOfDocument() {
  const editButton = document.querySelector('.archive__opened-document-of-button-create');
  const buttonsOfControlsDocument = document.querySelectorAll('.archive__opened-document-of-button-add-new-file');
  const inputsOfDocument = document.querySelectorAll('.archive__opened-document-of-input');
  const textAreaOfDocument = document.querySelector('.archive__opened-document-of-textarea');
  const checkBoxOfDocument = document.querySelector('.archive__opened-document-of-table-button-for-delete');
  const tableWithTheFile = document.querySelector('.archive__opened-document-of-table');
  const inputOfTheTableFile = document.querySelector('.archive__opened-document-of-table-button-for-delete');

  // Функция для добавления файла //
  const addFile = () => {
    console.log('Присоеденить');
  };

  // функция для просмотр файлов //
  const showFile = () => {
    console.log('Показать');
  };

  // функция для удаления выбранного файла //
  const deleteFile = () => {
    Array.from(tableWithTheFile.children).forEach(tableElement => {
      tableElement.children[0].contains(inputOfTheTableFile) && inputOfTheTableFile.checked ? tableElement.children[0].remove() : console.log('Элемент не подлежит удалению ' + tableElement.children[0]);
    });
  };

  // Функция для печати файла //
  const printFile = () => {
    const el = document.querySelector('.archive__container-of-opened-document');
    console.log('Печать');
    window.print(el.innerHTML);
  };

  // Функция для вывода протоколов печати //
  const showProtocols = () => {
    console.log('Протоколы печати');
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
    editButton.type = 'submit';
    buttonsOfControlsDocument.forEach(item => {
      item.disabled = false;
      if (item.textContent === 'Присоеденить') item.addEventListener('click', addFile);
      if (item.textContent === 'Показать') item.addEventListener('click', showFile);
      if (item.textContent === 'Удалить') item.addEventListener('click', deleteFile);
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

// ФУНЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ ДОРОЖКИ В ТАБЛИЦЕ ДОКУМЕНТОВ //
function createNewRowInTableForDocuments(indexChildren, iElement) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  tableBodyDocumentsOfArchive.innerHTML += rowTableDocument();
  tableBodyDocumentsOfArchive.children[iElement].id = indexChildren;
}

// ФУНЦИЯ ДЛЯ ЗАПОЛНЕНИЯ КОЛИЧЕСТВОМ ТРЕБУЕМЫХ ДОРОЖЕК В ТАБЛИЦУ К ЧИСЛУ ЭЛЕМЕНТОВ СФОРМИРОВАННОГО МАССИВА //
function fillInInformations(array) {
  for (let i = 0; array.length > i; i++) {
    createNewRowInTableForDocuments(array[i].id, i);
  }
  getInformationsForTable(array);
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛЕНИЯ ИНФОРМАЦИЕЙ ДОРОЖКИ ИЗ ТАБЛИЦЫ ДОКУМЕНТОВ //
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

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПАПКИ //
function createFolder() {
  const buttonOfCreateFolder = document.getElementById('createFolder');
  buttonOfCreateFolder.addEventListener('click', createTableFolderRow);
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК //
function createTableFolderRow() {
  const archiveFolderContentContainer = document.querySelector('.archive__folder-content-container');
  archiveFolderContentContainer.innerHTML += getContainerForCreateNewFolder();
}

/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
*/

//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //
const levelAcceptOfUser = 1;

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

//                                         //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ   //
//                                          //

// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МАКСИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMaxLevelAccess = () => {
  createInterfeisOfArchiver();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
  getTableElementFromArchiveDocuments();
  cutOutDocument();
  putInElementInTable();
  openWindowForFilterOfDocument();
  getOpenedDocument();
  fillInInformations(data);
  clearFilters();
  createFolder();
};

//                                         //
//  УСЛОВИЯ ДЛЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСОВ   //
//                                         //

// ВНОСИМ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
if (levelAcceptOfUser === 1) {
  getCreateInterfasForMaxLevelAccess();
}