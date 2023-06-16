import {
  archivePageMaxLever
} from '../view/archive/archiveLevelsOfAccess/archive_page-max-lever.js';
import {
  getArchiveContainerOfCreateNewDocument
} from '../view/archive/archive__container-of-create-new-document.js';
import {
  getAchiveContainerFileSearch
} from '../view/archive/achive__container-file-search.js';
import {
  getArchiveContainerOfOpenedDocument
} from '../view/archive/archive__container-of-opened-document.js';
import {
  rowTableDocument
} from '../view/archive/archive_row-for-create-table-with-document.js';
import {
  data
} from '../modal/arrayOfArchive.js';

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.getElementById('p2');
const countElementOfDocument = 11;

//            //
// ПЕРЕМЕННЫЕ //
//            //
let cutteddOutElement = '';

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //
export const clearOfEventListenersList = (typeEvent, elementOfListening, functionElementOfListening) => {
  elementOfListening.removeEventListener(typeEvent, functionElementOfListening);
};

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ОТРИСОВКИ ИНТЕРФЕЙСА //
export const createInterfeisOfArchiver = () => {
  acrchivePage.innerHTML = archivePageMaxLever();
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
export const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: block;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
export const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
export function getCreateBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  const createChildElementInParent = () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
  };
  archiveButtonOfCraeteDoc.addEventListener('click', createChildElementInParent);
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
export function getCloseBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOutWithCreateNewDocument = document.querySelector('.archive__create-new-document-of-button-out');
  // функция для удаления дочернего элемента //
  const removeElementOfChild = (classOfChild) => {
    Array.from(archiveFile.children).forEach((item) => {
      if (item.classList.contains(classOfChild)) archiveFile.removeChild(item);
    });
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocument();
    putInElementInTable();
    openWindowForFilterOfDocument();
    getOpenedDocument();
  };
  archiveButtonOutWithCreateNewDocument.addEventListener('click', removeElementOfChild.bind(null, 'archive__container-of-create-new-document'));
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ДОКУМЕНТА ИЗ ТАБЛИЦЫ //
export function getTableElementFromArchiveDocuments() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const buttonDeleteOfElement = document.getElementById('archiveDeleteDoc');
  const onButtonDelete = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) elementArchiveTable.parentNode.remove();
    });
    // getCreateBlockForNewDocument();
  };
  buttonDeleteOfElement.addEventListener('click', onButtonDelete);
};

// ФУНКЦИЯ ДЛЯ ВЫРЕЗАНИЯ ДОКУМЕНТА //
export function cutOutDocument() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const bittonOfCutOutDocument = document.getElementById('archiveCutOut');
  const cutOutElement = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) {
        cutteddOutElement += item.outerHTML;
        elementArchiveTable.parentNode.remove();
      };
    });
  };
  bittonOfCutOutDocument.addEventListener('click', cutOutElement);
};

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ВЫРЕЗАННОГО ЭЛЕМЕНТА В ТАБЛИЦУ //
export function putInElementInTable() {
  const rowInTalbeBodyOfFile = document.getElementById('fileTalbeBody');
  const putInButton = document.getElementById('archivePutIn');
  const putInElement = () => {
    if (cutteddOutElement !== '') {
      rowInTalbeBodyOfFile.insertAdjacentHTML('beforeend', cutteddOutElement);
      cutteddOutElement = '';
    }
  };
  putInButton.addEventListener('click', putInElement);
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
export function openWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOfFilter = document.getElementById('archiveSearch');
  const getWindowOfFilter = () => {
    archiveFile.innerHTML += getAchiveContainerFileSearch();
    getFilteredDocuments(data);
    closeWindowForFilterOfDocument();
  };
  buttonOfFilter.addEventListener('click', getWindowOfFilter);
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
export function closeWindowForFilterOfDocument() {
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
  };
  buttonOutForWindowFilterDocument.addEventListener('click', removeWindowOfFilter);
};

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ОТКРЫТОГО ДОКУМЕНТА ИНФОРМАЦИЕЙ //
const openDocument = (target) => function qq() {
  const archiveFile = document.querySelector('.archive__file');
  archiveFile.innerHTML += getArchiveContainerOfOpenedDocument();
  const documentIdSubscriber = document.querySelector('.archive__document-of-id');
  const documentInputs = document.querySelectorAll('.archive__opened-document-of-input');
  const documentTextArea = document.querySelector('.archive__opened-document-of-textarea');
  const documentTableOfFiles = document.querySelector('.archive__opened-document-of-table');
  for (let i = 0; i < data.length; i++) {
    if(Number(target.id) === Number(data[i].id)) {
      for(let n = 0; n < countElementOfDocument; n++) {
        documentInputs[0].value = data[i].number_register;
        documentInputs[1].value = data[i].data_registration;
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
export function getOpenedDocument() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
    item.addEventListener('click', openDocument(item));
  });
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ДОКУМЕНТА //
export function closeDocument() {
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
  };
  buttonOutWithOpenedDocument.addEventListener('click', outWithOpenedDocument);
}

// ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЕ ДОКУМЕНТА //
export function editOfDocument() {
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
    Array.from(tableWithTheFile.children).forEach((tableElement) => {
      tableElement.children[0].contains(inputOfTheTableFile) && inputOfTheTableFile.checked ? tableElement.children[0].remove() : console.log('Элемент не подлежит удалению ' + tableElement.children[0]);
    });
  };

  // Функция для печати файла //
  const printFile = () => {
    console.log('Печать');
  };

  // Функция для вывода протоколов печати //
  const showProtocols = () => {
    console.log('Протоколы печати');
  };

  // Функция для сохранения изменений в документе //
  const saveFile = () => {
    console.log('Изменения в документе сохранены');
    editButton.textContent = 'Редактировать';
    inputsOfDocument.forEach((item) => item.disabled = true);
    textAreaOfDocument.disabled = true;
    checkBoxOfDocument.disabled = true;
    editButton.removeEventListener('click', saveFile);
    editButton.addEventListener('click', edit);
  };

  // Функция-сборщик для работы с данными документа и его редактированием //
  function edit() {
    editButton.textContent = 'Сохранить';
    editButton.type = 'submit';
    buttonsOfControlsDocument.forEach((item) => {
      item.disabled = false;
      if (item.textContent === 'Присоеденить') item.addEventListener('click', addFile);
      if (item.textContent === 'Показать') item.addEventListener('click', showFile);
      if (item.textContent === 'Удалить') item.addEventListener('click', deleteFile);
      if (item.textContent === 'Печать') item.addEventListener('click', printFile);
      if (item.textContent === 'Протоколы печати') item.addEventListener('click', showProtocols);
    });
    inputsOfDocument.forEach((item) => item.disabled = false);
    textAreaOfDocument.disabled = false;
    checkBoxOfDocument.disabled = false;
    editButton.removeEventListener('click', edit);
    editButton.addEventListener('click', saveFile);
  };
  editButton.addEventListener('click', edit);
}


// ФУНЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ ДОРОЖКИ В ТАБЛИЦЕ ДОКУМЕНТОВ //
function createNewRowInTableForDocuments(indexChildrenm, elemI) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  tableBodyDocumentsOfArchive.innerHTML += rowTableDocument();
  tableBodyDocumentsOfArchive.children[elemI].id = indexChildrenm;
  getOpenedDocument();
}

// ФУНЦИЯ ДЛЯ ЗАПОЛНЕНИЯ КОЛИЧЕСТВОМ ТРЕБУЕМЫХ ДОРОЖЕК В ТАБЛИЦУ К ЧИСЛУ ЭЛЕМЕНТОВ СФОРМИРОВАННОГО МАССИВА //
export function fillInInformations(array) {
  for (let i = 0; array.length > i; i++) {
    createNewRowInTableForDocuments(array[i].id, i);
  };
  getInformationsForTable(array);
};

// ФУНКЦИЯ ДЛЯ ЗАПОЛЕНИЯ ИНФОРМАЦИЕЙ ДОРОЖКИ ИЗ ТАБЛИЦЫ ДОКУМЕНТОВ //
function getInformationsForTable(array) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
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
    } catch (error) { console.log('Ошибка при заполнении данными таблицы'); }
  });
};

// ФУНКЦИЯ ФИЛЬТРАЦИИ ТАБЛИЦЫ ДОКУМЕТОВ //
function getFilteredDocuments(dataOfArray) {
  const inputsSearch = document.querySelectorAll('.archive__container-file-search-of-element-input');
  const buttonFilter = document.querySelector('.archive__container-file-search-of-element-button');
  buttonFilter.addEventListener('click', () => {
    const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
    Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => item.remove());
    const filteredArray = dataOfArray.filter((item) => {
      for(let i = 0; i < inputsSearch.length; i++) {
        if(item.number_register !== Number(inputsSearch[i].value)) {
          item.remove;
        } else {
          return item;
        }
      }
    });
    fillInInformations(filteredArray);
  });
};

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВА //
function filterOfArray() {
  
};