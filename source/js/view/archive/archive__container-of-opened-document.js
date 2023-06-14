export const getArchiveContainerOfOpenedDocument = () => `
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
