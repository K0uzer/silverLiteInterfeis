export const getContainerForCreateNewFolder = () => `
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
