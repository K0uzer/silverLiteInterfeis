export const getArchiveContainerOfCreateNewDocument = () => `
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
