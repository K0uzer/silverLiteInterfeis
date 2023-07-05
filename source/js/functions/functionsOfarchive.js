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
import {
  archiveFolderTableRow
} from '../view/archive/acrive__folder-talbe-row.js';
import {
  arrayChildrenOfFolderThree
} from '../modal/arrayOfFolderChidren.js';
import {
  folderThree
} from '../modal/arrayOfFolderTree.js';
import {
  getContainerForCreateNewFolder
} from '../view/archive/archive__create-new-folder.js';

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.getElementById('p2');
const countElementOfDocument = 11;
//            //
// ПЕРЕМЕННЫЕ //
//            //

let cutOutFolder = '';
let cutOutDocument = '';
const nameUser = 'Ганин А.В';
let levelOfFolder = 0;

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ВРЕМЕНИ //
const getCurrentTime = (item) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  item.value = `${formattedDate}T${formattedTime}`;
  item.disabled = 'true';
};


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
    archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
  });
};

// // ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
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
    createDocument();
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

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВОГО ФАЙЛА //
function addNewFile() {

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

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОКУМЕНТА //
function createDocument() {
  const arrayInputsOfCreateDocument = document.querySelectorAll('.archive__create-new-document-of-input');
  const nameUserOfCreatedDocument = document.getElementById('idNewDocument');
  const dateLastChangeDocument = document.getElementById('dateOfChangeDocument');
  const buttonOfAddDocument = document.querySelector('.archive__create-new-document-of-button-add-new-file');
  const buttonOfCreateDocument = document.querySelector('.archive__create-new-document-of-button-create');
  const doucmentId = document.querySelector('.archive__document-of-id');
  getCurrentTime(arrayInputsOfCreateDocument[1]);
  doucmentId.textContent = data[data.length - 1].id_subscriber + 1;
  dateLastChangeDocument.textContent = arrayInputsOfCreateDocument[1].value;
  nameUserOfCreatedDocument.textContent = nameUser;
  buttonOfAddDocument.addEventListener('click', addNewFile);
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

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
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

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
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

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ОТКРЫТОГО ДОКУМЕНТА ИНФОРМАЦИЕЙ //
const openDocument = (target) => function qq() {
  const archiveFile = document.querySelector('.archive__file');
  archiveFile.innerHTML += getArchiveContainerOfOpenedDocument();
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
    const el = document.querySelector('.archive__container-of-opened-document');
    console.log('Печать');
    window.print(el.innerHTML);
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
function createNewRowInTableForDocuments(indexChildren, iElement) {
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  tableBodyDocumentsOfArchive.innerHTML += rowTableDocument();
  tableBodyDocumentsOfArchive.children[iElement].id = indexChildren;
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

// ФУНУНКЦИЯ ДЛЯ ЗАГРУЗКИ РОДИТЕЛЬСКИХ ПАПОК В ТАБЛИЦУ //
export function loadFolderParentInTable() {
  const folderTableBody = document.getElementById('folderTalbeBody');
  for (let i = 0; i < folderThree.length; i++) {
    folderTableBody.innerHTML += archiveFolderTableRow();
    if (folderThree[i].idFolder === i) {
      fillInRowOfFolderTalbe(folderTableBody, folderThree[i].numberSubscriber, folderThree[i].numberAgreement);
    }
  }
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
export function openWindowForCreateFolder() {
  const buttonOfCreateFolder = document.getElementById('createFolder');

  function getWindowForCreateFolder() {
    const archiveFolderContentContainer = document.querySelector('.archive__folder-content-container');
    archiveFolderContentContainer.innerHTML += getContainerForCreateNewFolder();
    const buttonOfLeaveWindowForCreateFolder = document.querySelector('.archive__create-new-folder-of-button-out');
    const buttonForCreateNewFolder = document.getElementById('buttonSaveFolder');
    closeWindowForCreateFolder(buttonOfLeaveWindowForCreateFolder);
    createFolder(buttonForCreateNewFolder);
  }
  buttonOfCreateFolder.addEventListener('click', getWindowForCreateFolder);
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ОКНА СОЗДАНИЯ ПАПКИ ИЗ ДЕРЕВА //
const removeWindowForCreateFolder = () => function removeContainer() {
  const folderContentContainer = document.querySelector('.archive__folder-content-container');
  folderContentContainer.children[1].remove();
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
function closeWindowForCreateFolder(button) {
  button.addEventListener('click', removeWindowForCreateFolder());
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПАПКИ //
function createFolder(button) {
  button.addEventListener('click', createTableFolderRow);
};

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК //
function createTableFolderRow() {
  const inputOfNumberAgreement = document.getElementById('numberAgreement');
  const inputOfNumberSubscriber = document.getElementById('numberSubscriber');
  const inputOfComment = document.getElementById('comment');
  const folderTableBody = document.getElementById('folderTalbeBody');
  if (inputOfNumberAgreement.value !== '' && inputOfNumberSubscriber.value !== '' && inputOfComment.value !== '') {
    folderTableBody.innerHTML += archiveFolderTableRow();
    fillInRowOfFolderTalbe(folderTableBody, inputOfNumberAgreement.value, inputOfNumberSubscriber.value);
  } else {
    return alert('Ошибка создания папки');
  }
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ДОРОЖКИ ИНФОРМАЦИЕЙ ТАБЛИЦЫ ПАПОК //
function fillInRowOfFolderTalbe(table, inputOfNumberAgreement, inputOfNumberSubscriber) {
  const childrenElement = Array.from(table.children);
  childrenElement[childrenElement.length - 1].children[1].textContent = inputOfNumberAgreement;
  childrenElement[childrenElement.length - 1].children[2].textContent = inputOfNumberSubscriber;
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ПАПКИ //
export function deleteFolder() {
  const buttonForDeleteFolder = document.getElementById('deleteFolder');
  buttonForDeleteFolder.addEventListener('click', searchCheckedInputs);
}

// ФУНКЦИЯ ДЛЯ ПОИСКА ВЫБРАННЫХ ДОРОЖЕК //
function searchCheckedInputs() {
  const folderTableBody = document.getElementById('folderTalbeBody');
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  for (const element of arrayChildrenOfTableBody) {
    deleteCheckedRowInTableFolder(element);
  }
}

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ВЫБРАННОЙ ДОРОЖКИ ТАБЛИЦЫ //
function deleteCheckedRowInTableFolder(element) {
  const firstTdElement = element.children[0];
  if (firstTdElement.children[0].checked === true) {
    cutOutFolder += element.outerHTML;
    element.remove();
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ НА УРОВЕНЬ НИЖЕ //
export function getDownInFolderLevelBelow() {
  const currentFodler = document.querySelector('.archive__filder-title');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  const getFolderLevelBelow = () => function getDown(event) {
    if(event.target.textContent === 'Абонентские дела' || event.target.parentNode.children[2].textContent === 'Абонентские дела') {
      submergence('Абонентские дела', currentFodler, folderTableBody, 0);
    } else if(event.target.textContent === 'Проектно-техническая документация' || event.target.parentNode.children[2].textContent === 'Проектно-техническая документация') {
      submergence('Проектно-техническая документация', currentFodler, folderTableBody, 1);
    };
    goUpToTheFolderToTheTopLevel();
    goUpToTheFolderToTheHigherLevel();
  };
  for(let i = 0; i < arrayChildrenOfTableBody.length; i++) {
    for(let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
      arrayChildrenOfTableBody[i].children[n].addEventListener('click', getFolderLevelBelow());
    }
  }
}

// ФУНКЦИЯ ДЛЯ ПОГРУЖЕНИЯ //
function submergence(numberSubs, currentFodler, folderTableBody, numberRowInTable) {
  levelOfFolder++;
  if(event.target.textContent === numberSubs) {
    currentFodler.textContent = `Текущая папка: ${event.target.textContent}`;
  } else if(event.target.parentNode.children[2].textContent === numberSubs) {
    currentFodler.textContent = `Текущая папка: ${event.target.parentNode.children[2].textContent}`;
  }
  folderTableBody.innerHTML = '';
  const filteredArrayOfChilderFolder = arrayChildrenOfFolderThree.filter((item) => item.idParent === numberRowInTable);
  for(let i = 0; i < filteredArrayOfChilderFolder.length; i++) {
    folderTableBody.innerHTML += archiveFolderTableRow();
  }
  const newArrayChildrenOfTableBody = Array.from(folderTableBody.children).map((item) => item);
  for(let n = 0; n < filteredArrayOfChilderFolder.length; n++) {
    for(let i = 0; i < newArrayChildrenOfTableBody.length; i++) {
      newArrayChildrenOfTableBody[i].children[2].textContent = filteredArrayOfChilderFolder[n].numberAgreement;
      newArrayChildrenOfTableBody[i].children[1].textContent = filteredArrayOfChilderFolder[n].numberSubscriber;
    };
  };
  fillInInformations(data);
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
export function goUpToTheFolderToTheHigherLevel() {
  const buttonOfLevelUp = document.getElementById('upLevelFolder');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');
  function goUpToTheFolder() {
    levelOfFolder--;
    if(levelOfFolder === 0) {
      folderTableBody.innerHTML = '';
      tableBodyDocumentsOfArchive.innerHTML = '';
      currentFodler.textContent = 'Текущая папка: Верхнего уровня';
      loadFolderParentInTable();
    }
  };
  buttonOfLevelUp.addEventListener('click', goUpToTheFolder);
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ МАКСИМАЛЬНОГО УРОВЕНЯ //
export function goUpToTheFolderToTheTopLevel() {
  const buttonOfUpOnFolderMaxLevel = document.getElementById('upMaxLevelFolder');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');
  const climbToTheMaximumLevelFolder = () => {
    folderTableBody.innerHTML = '';
    tableBodyDocumentsOfArchive.innerHTML = '';
    currentFodler.textContent = 'Текущая папка: Верхнего уровня';
    levelOfFolder = 0;
    loadFolderParentInTable();
  };
  buttonOfUpOnFolderMaxLevel.addEventListener('click', climbToTheMaximumLevelFolder);
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ПАПКИ //
function insertAFolder() {
  const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
  const buttonPutInOfFolder = document.getElementById('putFolder');
  const putInElement = () => {
    if (cutOutFolder !== '') {
      talbeBodyOfFolder.insertAdjacentHTML('beforeend', cutOutFolder);
      cutOutFolder = '';
    }
  };
  buttonPutInOfFolder.addEventListener('click', putInElement);
}

// ФУНКЦИЯ ДЛЯ ВЫРЕЗАНИЯ ПАПКИ //
export function cutTheFolder() {
  const buttonOfCutOutFolder = document.getElementById('cutOutFolder');
  function cutOutRow() {
    searchCheckedInputs();
    insertAFolder();
  }
  buttonOfCutOutFolder.addEventListener('click', cutOutRow);
}

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ //
export function updateTheTable() {
  const buttonOfUpdateTheTable = document.getElementById('updateTableFolder');
  const updateAndThrowDownOfTheTableContent = () => {
    const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
    talbeBodyOfFolder.innerHTML = '';
    loadFolderParentInTable();
  };
  buttonOfUpdateTheTable.addEventListener('click', updateAndThrowDownOfTheTableContent);
}

// ФУНКЦИЯ ПОИСКА ПАПКИ //
export function searchFolderByNumber() {
  const inputForTheSearchFolder = document.querySelector('.archive__folder-input');
  const checkboxForSearchOfNumber = document.getElementById('type-folder-search-of-number');
  const checkboxForSearchOfName = document.getElementById('type-folder-search-of-name');
  const buttonsForTheSearchFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  const getListFolders = (item) => function getFolder() {
    if(item.title === 'Поиск по номеру' && inputForTheSearchFolder.value !== '') {
      console.log(arrayChildrenOfTableBody[0].children[1].textContent);
      // inputForTheSearchFolder.value
      console.log(item);
      checkboxForSearchOfNumber.checked === true;
      item.style = 'border: 1px solid black';
    } else if(item.title === 'Поиск по имени' && inputForTheSearchFolder.value !== '') {
      console.log(item);
      checkboxForSearchOfName.checked = true;
      item.style = 'border: 1px solid black';
    }
  };
  buttonsForTheSearchFolder.forEach((item) => {
    item.addEventListener('click', getListFolders(item));
  });
}
