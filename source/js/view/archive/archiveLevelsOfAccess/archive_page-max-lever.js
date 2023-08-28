export const archivePageMaxLever = () => `<img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img" title="Открыть окно для работы с папками" alt="Бургер">
<section class="archive__folder">
  <div class="archive__filder-menu-container-img">
    <img src="./img/folder/icons8-верхнее-меню-24.png" class="archive__filder-menu-img--rotate" alt="Бургер">
    <span class="archive__filder-title">Текущая папка: Верхнего уровня</span>
  </div>
  <nav class="archive__folder-button-container">
    <img src="./img/folder/create-button.svg" class="archive__folder-button" id="createFolder" title="Создать папку" alt="">
    <img src="./img/folder/delete-button.svg" class="archive__folder-button" id="deleteFolder" title="Удалить папку" alt="">
    <img src="./img/folder/document-upload.svg" class="archive__folder-button" id="upLevelFolder" title="Папка на уровень выше" alt="">
    <img src="./img/folder/high-level-button.svg" class="archive__folder-button" id="upMaxLevelFolder" title="Папка верхнего уровня" alt="">
    <img src="./img/folder/insert-button.svg" class="archive__folder-button" id="putFolder" title="Вставить" alt="">
    <img src="./img/folder/refresh-button.svg" class="archive__folder-button" id="updateTableFolder" title="Обновить таблицу & сбросить поиск" alt="">
    <img src="./img/folder/scissor-button.svg" class="archive__folder-button" id="cutOutFolder" title="Вырезать" alt="">
  </nav>
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
  <nav class="archive__file-menu">
    <ul class="archive__file-nav-list" style="display: flex; justify-content: space-between; flex-direction: row; list-style-type: none;">
      <li class="archive__file-nav-item">
        <img src="./img/file/add-square.svg" class="archive__file-button" title="Создать документ" id="archiveCreateDoc" alt="">
      </li>
      <li class="archive__file-nav-item">
        <img src="./img/file/minus-square.svg" class="archive__file-button" title="Удалить документ" id="archiveDeleteDoc" alt="">
      </li>
      <li class="archive__file-nav-item">
        <img src="./img/file/scissor.svg" class="archive__file-button" title="Вырезать" id="archiveCutOut" alt="">
      </li>
      <li class="archive__file-nav-item">
        <img src="./img/file/direct-inbox.svg" class="archive__file-button" title="Вставить" id="archivePutIn" alt="">
      </li>
      <li class="archive__file-nav-item">
        <img src="./img/file/refresh.svg" class="archive__file-button" title="Обновить таблицу & Сбросить поиск" id="archiveUpdateTable" alt="">
      </li>
      <li class="archive__file-nav-item">
        <img src="./img/file/search-status.svg" class="archive__file-button" title="Поиск" id="archiveSearch" alt="">
      </li>
    </ul>
    <div class="archive__file-menu-under-line"></div>
  </nav>
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
