export const getAchiveContainerFileSearch = () => `<section class="achive__container-file-search">
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
    <div class="archive__container-file-search-of-element-wrapper">
      <span class="archive__container-file-search-of-element-text">C</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
      <span class="archive__container-file-search-of-element-text">По</span><input type="date" class="archive__container-file-search-of-element-input archive__container-file-search-of-element-input-date">
    </div>
  </div>
  <button class="archive__container-file-search-of-element-button">Поиск</button>
  <img class="archive__container-file-search-of-element-button-out" src="./img/file/out.svg" alt="" srcset="">
</section>`;
