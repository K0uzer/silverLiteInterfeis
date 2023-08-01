import {
  archiveCreateFileRowOfTable
} from '../../view/archive/archive__create-file-row-of-table.js';
import { nameUser } from './functionsForWorkWithDocument.js';

// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ЗАГРУЖЕННОМ ФАЙЛЕ В INPUT //
const getInfoFromFileInInput = (input) => {
  const infoListElement = document.querySelectorAll('.archive__create-new-document-element-of-info');
  const fileList = input.files;
  const tableBodyOfTableFiles = document.querySelector('.archive__create-new-document-of-table-body');
  if(fileList !== undefined) {
    const file = fileList[0];
    // ЗАЛИВАЕМ ГОТОВЫЙ HTML КОД ИЗ ФУНКЦИИ С ДОБАВЛЕНИЕМ ДАННЫХ ОБ ЗАГРУЖЕННОМ ФАЙЛЕ //
    tableBodyOfTableFiles.innerHTML += archiveCreateFileRowOfTable(file.name, `${file.size/8} кб`, nameUser, infoListElement[3].textContent);
  }
  deleteFileFromTable();
};

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ФАЙЛА //
export function addNewFile() {
  const inputInWindowCreateDocument = document.querySelector('.archive__create-new-document-of-input-file');
  getInfoFromFileInInput(inputInWindowCreateDocument);
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ДОРОЖКИ ТАБЛИЦЫ //
const deleteFile = (item) => function getProsessOfRemove() {
  const parentElement = item.parentNode;
  const mainParent = parentElement.parentNode;
  console.log(mainParent.remove());
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ФАЙЛА ИЗ ТАБЛИЦЫ //
function deleteFileFromTable() {
  const buttonsOfDeleteFile = document.querySelectorAll('.archive__create-new-document-of-table-button-for-delete');
  // ВЕШАЕМ СЛУШАТЕЛИ СОБЫТИЙ НА ВСЕ КНОПКИ //
  buttonsOfDeleteFile.forEach((item) => item.addEventListener('click', deleteFile(item)));
};

