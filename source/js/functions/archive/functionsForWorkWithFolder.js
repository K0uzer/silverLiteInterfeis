import {
  data
} from '../../modal/arrayOfArchive.js';
import {
  archiveFolderTableRow
} from '../../view/archive/acrive__folder-talbe-row.js';
import {
  arrayChildrenOfFolderThree
} from '../../modal/arrayOfFolderChidren.js';
import {
  folderThree
} from '../../modal/arrayOfFolderTree.js';
import {
  getContainerForCreateNewFolder
} from '../../view/archive/archive__create-new-folder.js';
import {
  createRow
} from '../universalFunctions.js';
import {
  fillInInformations
} from '../universalFunctions.js';
//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //

export let cutOutFolder = '';
export let levelOfFolder = 0;

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
export const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
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

// ФУНУКЦИЯ ДЛЯ ЗАГРУЗКИ РОДИТЕЛЬСКИХ ПАПОК В ТАБЛИЦУ //
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

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ C ВЕРХНЕЙ НА УРОВЕНЬ НИЖЕ //
export function getDownInFolderLevelBelow() {
  const currentFodler = document.querySelector('.archive__filder-title');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  const getFolderLevelBelow = () => function getDown(event) {
    if (event.target.textContent === 'Абонентские дела' || event.target.parentNode.children[2].textContent === 'Абонентские дела') {
      submergence('Абонентские дела', currentFodler, folderTableBody, 0);
    } else if (event.target.textContent === 'Проектно-техническая документация' || event.target.parentNode.children[2].textContent === 'Проектно-техническая документация') {
      submergence('Проектно-техническая документация', currentFodler, folderTableBody, 1);
    }
    goUpToTheFolderToTheTopLevel();
    goUpToTheFolderToTheHigherLevel();
  };
  for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
    for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
      arrayChildrenOfTableBody[i].children[n].addEventListener('click', getFolderLevelBelow());
    }
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ //
const getDownInFolderNotTopLevel = (array) => function () {
  console.log(array.filter((item) => item.idParent === idFolder));
  levelOfFolder++;
};

// ФУНКЦИЯ ДЛЯ ПОГРУЖЕНИЯ //
function submergence(numberSubscriber, currentFodler, folderTableBody, idFolder) {
  levelOfFolder++;
  if (event.target.textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.textContent}`;
  } else if (event.target.parentNode.children[2].textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.parentNode.children[2].textContent}`;
  }
  folderTableBody.innerHTML = '';
  const filteredArrayOfChildrenFolder = arrayChildrenOfFolderThree.filter((item) => item.idParent === idFolder);
  createRow(folderTableBody, filteredArrayOfChildrenFolder, archiveFolderTableRow);
  getContentOfFolder(folderTableBody, filteredArrayOfChildrenFolder);
  fillInInformations(data);
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  if(arrayChildrenOfTableBody.length > 1) {
    for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
      for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
        arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder));
      }
    }
  }
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
export function goUpToTheFolderToTheHigherLevel() {
  const buttonOfLevelUp = document.getElementById('upLevelFolder');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');

  function goUpToTheFolder() {
    levelOfFolder--;
    if (levelOfFolder === 0) {
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

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ //
function getContentOfFolder(tableBody, filteredArray) {
  const newArrayChildrenOfTableBody = Array.from(tableBody.children).map((element, id) => {
    element.children[1].textContent = filteredArray[id].numberSubscriber;
    element.children[2].textContent = filteredArray[id].numberAgreement;
  });
};

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
export function searchFolder() {
  const inputForTheSearchFolder = document.querySelector('.archive__folder-input');
  const checkboxForSearchOfNumber = document.getElementById('type-folder-search-of-number');
  const checkboxForSearchOfName = document.getElementById('type-folder-search-of-name');
  const buttonsForSearchToTheFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const getListFolders = (item) => function getFolder() {
    resetFolderEffects();
    sortingOfFolder(item);
  };

  // ФУНКЦИЯ-СБОРЩИК ДЛЯ СОРТИРОВКИ //
  function sortingOfFolder(item) {
    if (item.title === 'Поиск по номеру' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberSubscriber = arrayChildrenOfFolderThree.filter((element) => Number(element.numberSubscriber) === Number(inputForTheSearchFolder.value));
      settingUpButtonsOfFolder(checkboxForSearchOfNumber, item);
      folderTableBody.innerHTML = '';
      createRow(folderTableBody, filteredArrayOfNumberSubscriber, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberSubscriber);
      clearOfInputForSearch(inputForTheSearchFolder);
    } else if (item.title === 'Поиск по имени' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberAgreement = arrayChildrenOfFolderThree.filter((element) => element.numberAgreement == inputForTheSearchFolder.value);
      settingUpButtonsOfFolder(checkboxForSearchOfName, item);
      folderTableBody.innerHTML = '';
      createRow(folderTableBody, filteredArrayOfNumberAgreement, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberAgreement);
      clearOfInputForSearch(inputForTheSearchFolder);
    }
  };

  // ФУНКЦИЯ ДЛЯ ОТЧИСТКИ INPUT //
  function clearOfInputForSearch(input) {
    input.value = '';
  }

  // ФУНКЦИЯ ДЛЯ СБРОСА ЭФФЕКТОВ НА КНОПКАХ ПОИСКА //
  function resetFolderEffects() {
    const buttonsOfSettingFilterFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
    buttonsOfSettingFilterFolder.forEach((element) => element.style = 'border: none');
    checkboxForSearchOfName.checked === false;
  }

  // ФУНКЦИЯ ДЛЯ НАСТРОЙКИ КПОНОК //
  function settingUpButtonsOfFolder(checkbox, item) {
    checkbox.checked === true;
    item.style = 'border: 1px solid black';
  }

  buttonsForSearchToTheFolder.forEach((item) => {
    item.addEventListener('click', getListFolders(item));
  });
};

// ФУНКЦИЯ ДЛЯ ВЫВОДА ДОКУМЕНТОВ ПРИВЯЗАННЫХ К ВЫБРАННОЙ ПАПКЕ //
function getListDocumentsLinkedToFolder() {

  getFolderLoverLever();
}

//  //
function getFolderLoverLever() {
  const currentFodler = document.querySelector('.archive__filder-title');
  const folderTableBody = document.getElementById('folderTalbeBody');
  submergence(`${data[3].numberSubscriber}`, currentFodler, folderTableBody, 3);
  console.log(event.target);
  console.log(data.filter((item) => console.log(item)));
};
