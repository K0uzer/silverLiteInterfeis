export const getContainerForCreateNewFolder = () => `
<section class="archive__create-new-folder">
  <h1 class="archive__create-new-folder-preview">Новая папка</h1>
  <div class="archive__create-new-folder-of-form">
    <input class="archive__create-new-folder-of-input" type="text" id="number" class="number" placeholder="Номер договора">
    <input class="archive__create-new-folder-of-input" type="text" id="number" class="number" placeholder="Абоненткий номер">
    <input class="archive__create-new-folder-of-input" type="text" id="comment" class="text" placeholder="Комментарий">
    <button class="archive__create-new-folder-of-button-create" id="buttonSaveFolder">Создать</button>
    </div>
  </div>
  <img class="archive__create-new-folder-of-button-out" src="./img/file/out.svg" alt="Кпонка выхода">
</section>
`;
