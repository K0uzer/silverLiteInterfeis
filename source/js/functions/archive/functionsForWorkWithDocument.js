import {
  data
} from '../../modal/arrayOfArchive.js';
import {
  archivePageMaxLever
} from '../../view/archive/archiveLevelsOfAccess/archive_page-max-lever.js';
import {
  getArchiveContainerOfCreateNewDocument
} from '../../view/archive/archive__container-of-create-new-document.js';
import {
  getAchiveContainerFileSearch
} from '../../view/archive/achive__container-file-search.js';
import {
  getArchiveContainerOfOpenedDocument
} from '../../view/archive/archive__container-of-opened-document.js';
import {
  rowTableDocument
} from '../../view/archive/archive_row-for-create-table-with-document.js';
import {
  getCurrentTime
} from '../universalFunctions.js';
import {
  fillInInformations
} from '../universalFunctions.js';
import {
  addNewFile
} from './funcrionsForWorkWithFile.js';
import {
  protocolsOfPrint
} from '../../view/archive/archive__protocols-of-print.js';
// import {
//   Sane
// } from '/node_modules/sane/index.js';
//            //
// КОДНСТАНТЫ //
//            //

export const acrchivePage = document.getElementById('p2');
export const countElementOfDocument = 11;
export const nameUser = 'Ганин А.В';

//            //
// ПЕРЕМЕННЫЕ //
//            //

export let cutOutDocument = '';

// ФУНКЦИЯ ОТРИСОВКИ ИНТЕРФЕЙСА //
export const createInterfeisOfArchiver = () => {
  acrchivePage.innerHTML = archivePageMaxLever();
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
export function getCreateBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  const createChildElementInParent = () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
    createDocument();
  };
  archiveButtonOfCraeteDoc.addEventListener('click', createChildElementInParent);
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
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
    cutOutDocumentOfTable();
    putInElementInTable();
    openWindowForFilterOfDocument();
    getOpenedDocument();
    clearFilters();
  };
  archiveButtonOutWithCreateNewDocument.addEventListener('click', removeElementOfChild.bind(null, 'archive__container-of-create-new-document'));
};

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ДОКУМЕНТА В ТАБЛИЦУ //
const addDocumentInTable = (arrayInputs) => function arrayInputsOfCreateDocument() {
  const arrayForNewElementOfTalbe = [{}];
  fillInInformations(arrayForNewElementOfTalbe);
  const textAreaOfCreateDocument = document.querySelector('.archive__create-new-document-of-textarea');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  addElementInArrayOfDocument(arrayInputs);
};

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ЭЛЕМЕНТА В ГЛАВНЫЙ МАССИВ ДОКУМЕТНОВ //
function addElementInArrayOfDocument(arrayInputs) {
  console.log(arrayInputs);
  for (let i = 0; i < arrayInputs.length; i++) {
    console.log(arrayInputs[i].value);
  };
  const newDocuemnt = {
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
    'id_parent': 0,
  };
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ СОЗДАНИЯ ДОКУМЕНТА //
function createDocument() {
  const arrayInputsOfCreateDocument = document.querySelectorAll('.archive__create-new-document-of-input');
  const nameUserOfCreatedDocument = document.getElementById('idNewDocument');
  const dateLastChangeDocument = document.getElementById('dateOfChangeDocument');
  const buttonOfAddDocument = document.querySelector('.archive__create-new-document-of-button-add-new-file');
  const buttonOfCreateDocument = document.querySelector('.archive__create-new-document-of-button-create');
  const doucmentId = document.querySelector('.archive__document-of-id');
  const inputInWindowCreateDocument = document.querySelector('.archive__create-new-document-of-input-file');
  const infoListElements = document.querySelectorAll('.archive__create-new-document-element-of-info');
  const tableBodyOfTableFiles = document.querySelector('.archive__create-new-document-of-table-body');
  getCurrentTime(arrayInputsOfCreateDocument[1]);
  doucmentId.textContent = data[data.length - 1].id_subscriber + 1;
  dateLastChangeDocument.textContent = arrayInputsOfCreateDocument[1].value;
  nameUserOfCreatedDocument.textContent = nameUser;
  buttonOfAddDocument.addEventListener('click', addNewFile(inputInWindowCreateDocument, infoListElements[3].textContent, tableBodyOfTableFiles));
  buttonOfCreateDocument.addEventListener('click', addDocumentInTable(arrayInputsOfCreateDocument));
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
export function cutOutDocumentOfTable() {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const bittonOfCutOutDocument = document.getElementById('archiveCutOut');
  const cutOutElement = () => {
    Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
      const elementArchiveTable = item.children[0];
      if (elementArchiveTable.children[0].checked) {
        cutOutDocument += item.outerHTML;
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
    if (cutOutDocument !== '') {
      rowInTalbeBodyOfFile.insertAdjacentHTML('beforeend', cutOutDocument);
      cutOutDocument = '';
    }
  };
  putInButton.addEventListener('click', putInElement);
};

// ФУНКЦИЯ ДЛЯ СБРОСА ФИЛЬТРОВ //
export function clearFilters() {
  const buttonOfUpdateTable = document.getElementById('archiveUpdateTable');
  const getOldTalbe = () => {
    const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
    Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => item.remove());
    fillInInformations(data);
  };
  buttonOfUpdateTable.addEventListener('click', getOldTalbe);
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ОТКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
export function openWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOfFilter = document.getElementById('archiveSearch');
  const getWindowOfFilter = () => {
    archiveFile.innerHTML += getAchiveContainerFileSearch();
    closeWindowForFilterOfDocument();
    getFilteredDocuments(data);
  };
  buttonOfFilter.addEventListener('click', getWindowOfFilter);
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
export function closeWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOutForWindowFilterDocument = document.querySelector('.archive__container-file-search-of-element-button-out');
  const removeWindowOfFilter = () => {
    archiveFile.children[2].remove();
    openWindowForFilterOfDocument();
    getCreateBlockForNewDocument();
    getTableElementFromArchiveDocuments();
    cutOutDocumentOfTable();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutForWindowFilterDocument.addEventListener('click', removeWindowOfFilter);
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ЗАПОЛНЕНИЯ ОТКРЫТОГО ДОКУМЕНТА ИНФОРМАЦИЕЙ //
const openDocument = (target) => function getDoc() {
  const archiveFile = document.querySelector('.archive__file');
  archiveFile.innerHTML += getArchiveContainerOfOpenedDocument(nameUser, '10.01.2022', 'Абонентские дела');
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
    cutOutDocumentOfTable();
    putInElementInTable();
    getOpenedDocument();
    clearFilters();
  };
  buttonOutWithOpenedDocument.addEventListener('click', outWithOpenedDocument);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ РЕДАКТИРОВАНИЕ ДОКУМЕНТА //
export function editOfDocument() {
  const editButton = document.querySelector('.archive__opened-document-of-button-create');
  const buttonsOfControlsDocument = document.querySelectorAll('.archive__opened-document-of-button-add-new-file');
  const inputsOfDocument = document.querySelectorAll('.archive__opened-document-of-input');
  const textAreaOfDocument = document.querySelector('.archive__opened-document-of-textarea');
  const checkBoxOfDocument = document.querySelector('.archive__opened-document-of-table-button-for-delete');
  const tableWithTheFile = document.querySelector('.archive__opened-document-of-table');
  const inputOfTheTableFile = document.querySelector('.archive__opened-document-of-table-button-for-delete');
  const infoListCreatedElements = document.querySelectorAll('.archive__opened-document-element-of-info');
  const inputOfOpendDocument = document.querySelector('.archive__opened-document-of-input-add-new-file');

  // Функция для добавления файла //
  const addFile = () => buttonsOfControlsDocument[0].addEventListener('click', addNewFile(inputOfOpendDocument, infoListCreatedElements[3].textContent, tableWithTheFile.children[1]));

  // Функция-сборщик для просмотр файлов //
  const showFile = () => {
    // Функция для просмотр файлов (НЕ PDF) //
    // createWindowForPrintFile();
    // Функция для просмотра файла (PDF) //
    showPDFFile();
    console.log('Показать');
  };

  // Функция для просмотра файла (PDF) //
  function showPDFFile() {
    // const { Sane } = window;
    // const scanner = new Sane();
    // scanner.getDevices().then((devices) => {
    //   console.log('Доступные устройства сканирования:', devices);
    // }).catch((err) => {
    //   console.error('Ошибка при получении списка устройств:', err);
    // });
  }

  // функция для удаления выбранного файла //
  const deleteFile = () => {
    Array.from(tableWithTheFile.children).forEach((tableElement) => {
      tableElement.children[0].contains(inputOfTheTableFile) && inputOfTheTableFile.checked ? tableElement.children[0].remove() : console.log('Элемент не подлежит удалению ' + tableElement.children[0]);
    });
  };

  // Функция для создания окна печати //
  function createWindowForPrintFile() {
    const windowForPrint = document.createElement('section');
    const containerForImg = document.createElement('div');
    const imgForPrint = document.createElement('img');
    document.body.append(windowForPrint);
    windowForPrint.append(containerForImg);
    containerForImg.append(imgForPrint);
    windowForPrint.classList.add('container-for-print-file');
    imgForPrint.onload = function() {
      imgForPrint.style = 'display: block; width: 200px; height: auto;';
      imgForPrint.src = '/photo_2023-05-23_10-20-03.jpg';
    }();
    windowForPrint.style = 'display: flex; position: absolute; justify-content: center; align-items: center; z-index: 5; width: 100%; height: 100%; background-color: white;';
    windowForPrint.children.style = 'display: block; width: 70%; height: 70%;';
    const containerForPrint = document.querySelector('.container-for-print-file');
    closeWindowForPrint(containerForPrint);
  }

  // Функция для печати файла //
  const printFile = () => {
    createWindowForPrintFile();
    const el = document.querySelector('.container-for-print-file');
    console.log('Печать');
    window.print(el.innerHTML);
  };

  // Функция для вывода требуемого изображения //
  // addImageProcess(src){
  //   return new Promise((resolve, reject) => {
  //     let img = new Image()
  //     img.onload = () => resolve(img.height)
  //     img.onerror = reject
  //     img.src = src
  //   })
  // }

  // ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА С ДОКУМЕНТОМ //
  function closeWindowForPrint(container) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        container.remove();
      }
    });
  };

  // Функция закрытия окна протоколов печати //
  const closeWindowProtocolsOfPrint = (parent) => function removeWindowProtocols() {
    parent.children[3].remove();
  };

  // Функция для вывода протоколов печати //
  const showProtocols = () => {
    const archiveFile = document.querySelector('.archive__file');
    archiveFile.innerHTML += protocolsOfPrint();
    const buttonCloseWindowProtocolsOfPrint = document.querySelector('.protocols-of-print__button-close');
    buttonCloseWindowProtocolsOfPrint.addEventListener('click', closeWindowProtocolsOfPrint(archiveFile));
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
    editButton.type = '';
    buttonsOfControlsDocument.forEach((item) => {
      item.disabled = false;
      if (item.textContent === 'Присоеденить') item.addEventListener('click', addFile());
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

// ФУНЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ ДОРОЖКИ В ТАБЛИЦЕ //
export function createNewRowInTableForDocuments(indexChildren, iElement) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  tableBodyDocumentsOfArchive.innerHTML += rowTableDocument();
  tableBodyDocumentsOfArchive.children[iElement].id = indexChildren;
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛЕНИЯ ИНФОРМАЦИЕЙ ДОРОЖКИ ИЗ ТАБЛИЦЫ //
export function getInformationsForTable(array) {
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
    } catch (error) {
      console.log('Ошибка при заполнении данными таблицы');
    }
  });
  getOpenedDocument();
};

// ФУНКЦИЯ СЛУШАТЕЛЬ СОБЫТИЙ ДЛЯ ФИЛЬТРАЦИИ ТАБЛИЦЫ ДОКУМЕТОВ //
function getFilteredDocuments(array) {
  const buttonFilter = document.querySelector('.archive__container-file-search-of-element-button');
  buttonFilter.addEventListener('click', () => filterOfArray(array));
};

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВА //
function filterOfArray(array) {
  const inputsSearch = document.querySelectorAll('.archive__container-file-search-of-element-input');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => item.remove());
  const filteredArray = array.filter((item) => {
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
};
