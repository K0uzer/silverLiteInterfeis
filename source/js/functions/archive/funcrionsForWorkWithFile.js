import {
  archiveCreateFileRowOfTable
} from '../../view/archive/archive__create-file-row-of-table.js';
import { nameUser } from './functionsForWorkWithDocument.js';
import {
  deleteFile
} from '../universalFunctions.js';

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ФАЙЛА //
export const addNewFile = (input, infoList, tableBody) => function addFile() {
  const fileList = input.files;
  if(fileList !== undefined) {
    const file = fileList[0];
    // ЗАЛИВАЕМ ГОТОВЫЙ HTML КОД ИЗ ФУНКЦИИ С ДОБАВЛЕНИЕМ ДАННЫХ ОБ ЗАГРУЖЕННОМ ФАЙЛЕ //
    tableBody.innerHTML += archiveCreateFileRowOfTable(file.name, `${file.size/8} кб`, nameUser, infoOfFolder);
  }
  deleteFileFromTable();
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ФАЙЛА ИЗ ТАБЛИЦЫ //
function deleteFileFromTable() {
  const buttonsOfDeleteFile = document.querySelectorAll('.archive__create-new-document-of-table-button-for-delete');
  // ВЕШАЕМ СЛУШАТЕЛИ СОБЫТИЙ НА ВСЕ КНОПКИ //
  buttonsOfDeleteFile.forEach((item) => item.addEventListener('click', deleteFile(item)));
};

