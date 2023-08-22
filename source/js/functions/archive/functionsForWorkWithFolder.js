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
export let levelOfSubmerged = 0;
export let counterSubmerged = 0;

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
    console.log('ОТКРЫТИЕ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ');
    archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
export const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    console.log('ЗАКРЫТИЕ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ');
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
      console.log('ЗАГРУЗКИ РОДИТЕЛЬСКОЙ ПАПОК В ТАБЛИЦУ');
    }
  }
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
export function openWindowForCreateFolder() {
  const buttonOfCreateFolder = document.getElementById('createFolder');

  function getWindowForCreateFolder() {
    console.log('ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ');
    const archiveFolderContentContainer = document.querySelector('.archive__folder-content-container');
    archiveFolderContentContainer.innerHTML += getContainerForCreateNewFolder();
    const buttonOfLeaveWindowForCreateFolder = document.querySelector('.archive__create-new-folder-of-button-out');
    const buttonForCreateNewFolder = document.getElementById('buttonSaveFolder');
    closeWindowForCreateFolder(buttonOfLeaveWindowForCreateFolder);
    createFolder(buttonForCreateNewFolder);
  }
  buttonOfCreateFolder.addEventListener('click', getWindowForCreateFolder);
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ //
const getDownInFolderNotTopLevel = (array, folder, folderTableBody, currentFodler) => function () {
  if (levelOfFolder !== 0) {
    console.log('ПОГРУЖЕНИЕ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ');
    const idElementFromOfFilteredArray = array.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
    console.log('ВЫЗОВ ФУНКЦИИ ПОГРУЖЕНИЯ');
    submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, idElementFromOfFilteredArray[0].idFolder);
  }
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ОКНА СОЗДАНИЯ ПАПКИ ИЗ ДЕРЕВА //
const removeWindowForCreateFolder = () => function removeContainer() {
  const folderContentContainer = document.querySelector('.archive__folder-content-container');
  folderContentContainer.children[1].remove();
  console.log('ЗАКРЫТИЕ ОКНА СОЗДАНИЯ ПАПКИ');
  if (levelOfFolder === 0) {
    getDownInFolderLevelBelow();
  }
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
function closeWindowForCreateFolder(button) {
  button.addEventListener('click', removeWindowForCreateFolder());
  console.log('СОЗДАНИЯ ПАПКИ');
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПАПКИ //
function createFolder(button) {
  button.addEventListener('click', createTableFolderRow);
};

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК //
function createTableFolderRow() {
  const currentFodler = document.querySelector('.archive__filder-title');
  const inputOfNumberAgreement = document.getElementById('numberAgreement');
  const inputOfNumberSubscriber = document.getElementById('numberSubscriber');
  const inputOfComment = document.getElementById('comment');
  const folderTableBody = document.getElementById('folderTalbeBody');
  console.log('СОЗДАНИЕ ДОРОЖКИ В ТАБЛИЦЕ ПАПОК');
  if (levelOfFolder !== 0 && inputOfNumberAgreement.value !== '' && inputOfNumberSubscriber.value !== '' && inputOfComment.value !== '') {
    if (levelOfFolder === 1) {
      createNewFolder(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, inputOfNumberAgreement.value, folderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent)[0].idFolder);
    } else if (levelOfFolder > 1) {
      createNewFolder(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, inputOfNumberAgreement.value, arrayChildrenOfFolderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent)[0].idFolder);
    }
    createChildrenFolderList(arrayChildrenOfFolderThree, inputOfNumberSubscriber.value, arrayChildrenOfFolderThree.length - 1);
    submergence(inputOfNumberSubscriber.value, currentFodler, folderTableBody, arrayChildrenOfFolderThree.length + 1, levelOfFolder);
    folderTableBody.innerHTML += archiveFolderTableRow();
    fillInRowOfFolderTalbe(folderTableBody, inputOfNumberAgreement.value, inputOfNumberSubscriber.value);
  } else if (levelOfFolder === 0) {
    return alert('Запрещено создание папок при нахождении в корневой папке');
  } else {
    return alert('Ошибка создания папки');
  }
}

// ФУНКЦИЯ ДЛЯ ЗАНЕСЕНИЯ НОВОЙ ПАПКИ В МАССИВ //
function createNewFolder(array, numberSubscriber, numberAgreement, idParent) {
  array.push({
    'idFolder': array.length,
    'idParent': idParent,
    'numberAgreement': numberAgreement,
    'numberSubscriber': numberSubscriber,
    'folderLevel': levelOfFolder,
    'comments': '',
  });
};

// ФУНКЦИЯ ДЛЯ ЗАНЕСЕНИЯ СПИСКА ТРЕБУЕМЫХ ДОЧЕРНИХ ПАПОК В МАССИВ //
function createChildrenFolderList(array, numberSubscriber, idParent) {
  const listChidrenFolderNumberAgreement = ['проектно-техническая документация', 'учредительные и рег документы', 'акты ко', 'договор', 'письма-жалобы абонентов и ответы', 'служ записи, рапорты', 'прочие документы'];
  listChidrenFolderNumberAgreement.forEach((item) => {
    array.push({
      'idFolder': arrayChildrenOfFolderThree.length,
      'idParent': idParent,
      'numberAgreement': item,
      'numberSubscriber': numberSubscriber,
      'folderLevel': levelOfFolder,
      'comments': '',
    });
  });
};

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ДОРОЖКИ ИНФОРМАЦИЕЙ ТАБЛИЦЫ ПАПОК //
function fillInRowOfFolderTalbe(table, inputOfNumberAgreement, inputOfNumberSubscriber) {
  console.log('ЗАПОЛНЕНИЯ ДОРОЖКИ ИНФОРМАЦИЕЙ ТАБЛИЦЫ ПАПОК');
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
  console.log('УДАЛЕНИЕ ВЫБРАННОЙ ДОРОЖКИ ТАБЛИЦЫ');
  const firstTdElement = element.children[0];
  if (firstTdElement.children[0].checked === true) {
    cutOutFolder += element.outerHTML;
    element.remove();
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ C ВЕРХНЕЙ НА УРОВЕНЬ НИЖЕ //
export function getDownInFolderLevelBelow() {
  if (levelOfFolder === 0) {
    const currentFodler = document.querySelector('.archive__filder-title');
    const folderTableBody = document.getElementById('folderTalbeBody');
    const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
    const getFolderLevelBelow = () => function getDown(event) {
      console.log('ПОГРУЖЕНИЕ В ПАПКУ C ВЕРХНЕЙ НА УРОВЕНЬ НИЖЕ');
      if (event.target.textContent === 'Абонентские дела' || event.target.parentNode.children[2].textContent === 'Абонентские дела') {
        submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 0);
      } else if (event.target.textContent === 'Проектно-техническая документация' || event.target.parentNode.children[2].textContent === 'Проектно-техническая документация') {
        submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 1);
      }
      console.log(levelOfFolder);
    };
    for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
      for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
        arrayChildrenOfTableBody[i].children[n].addEventListener('click', getFolderLevelBelow());
      }
    }
  }
}

// ФУНКЦИЯ ДЛЯ ПОГРУЖЕНИЯ //
function submergence(numberSubscriber, currentFodler, folderTableBody, idFolder, level) {
  levelOfSubmerged++;
  console.log('РАБОТА ГЛАВНОЙ ФУНКЦИИ ПОГРУЖЕНИЯ');
  levelOfFolder++;
  console.log('ПРИБАВЛЯЮ ЗНАЧЕНИЕ УРОВЕНЯ ПАПКИ НА 1', levelOfFolder);
  if (event.target.textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.textContent}`;
  } else if (event.target.parentNode.children[2].textContent === numberSubscriber) {
    currentFodler.textContent = `Текущая папка: ${event.target.parentNode.children[2].textContent}`;
  }
  folderTableBody.innerHTML = '';
  const newTableBodyOfDocuemnt = document.querySelector('.scroll-table-body');
  newTableBodyOfDocuemnt.innerHTML += '';
  const filteredArrayOfChildrenFolder = arrayChildrenOfFolderThree.filter((item) => item.idParent === idFolder);
  createRow(folderTableBody, filteredArrayOfChildrenFolder, archiveFolderTableRow);
  getContentOfFolder(folderTableBody, filteredArrayOfChildrenFolder);
  getDocumentsFromFolder(event, levelOfFolder, idFolder);
  const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
  goUpToTheFolderToTheTopLevel();
  goUpToTheFolderToTheHigherLevel();
  if (levelOfFolder !== 0) {
    for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
      for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
        arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder, event.target.parentNode.children[2].textContent, folderTableBody, currentFodler, level));
      }
    }
  }
}

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВОВ ДОК.ОВ И ПАПОК, ДЛЯ НАХОЖДЕНИЯ ДОК.ОВ ПРИВЯЗАННЫХ К ПАПКЕ ДЛЯ ОТРИСОВКИ ФАЙЛОВ //
function getDocumentsFromFolder(event, level, idFolder) {
  let parentFolter;
  if (level !== 0) {
    parentFolter = folderThree.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
    if (folderThree.length !== 0) {
      console.log('ПОЛУЧЕНИЕ ФИЛЬТРОВАННОГО МАССИВА ПАПОК', parentFolter)
      const filteredArrayOfDocument = data.filter((item) => item.id_parent === idFolder);
      console.log('ФИЛЬТРОВАННЫЙ МАССИВ ПАПОК', parentFolter)
      console.log('ЗАГРУЗКА ДОКУМЕНТОВ В ТАБЛИЦУ ПО-ФИЛЬТРОВАННОМУ МАССИВУ')
      fillInInformations(filteredArrayOfDocument);
    }
  } else {
    parentFolter = folderThree.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
  }
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
const moveToTheFolderAbove = (button, arrayFoldersOfMain, arrayFoldersOfSecondary, current, body, level, buttonForRemoveListener) => {
  button.removeEventListener('click', buttonForRemoveListener);
  
  const oldCurrentFodler = current.textContent;
  const oldFolderFromArrayChildrenOfFolderThree = arrayFoldersOfSecondary.filter((item) => `Текущая папка: ${item.numberAgreement}` === oldCurrentFodler);
  const newFolderFromArrayChildrenOfFolderThree = arrayFoldersOfMain.filter((item) => oldFolderFromArrayChildrenOfFolderThree[0].idParent === item.idFolder);
  submergence(newFolderFromArrayChildrenOfFolderThree[0].numberSubscriber, current, body, newFolderFromArrayChildrenOfFolderThree[0].idFolder, level);
  current.textContent = `Текущая папка: ${newFolderFromArrayChildrenOfFolderThree[0].numberAgreement}`;
};

// ФУНКЦИЯ ДЛЯ КОНТРОЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
export function goUpToTheFolderToTheHigherLevel() {
  const buttonOfLevelUp = document.getElementById('upLevelFolder');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const folderTableBody = document.getElementById('folderTalbeBody');
  const currentFodler = document.querySelector('.archive__filder-title');

  const goUpToTheFolder = (event) => {
    if (counterSubmerged === 0) setTimeout(counterSubmerged++, 1);
    else {
      if (levelOfFolder === 1) {
        buttonOfLevelUp.removeEventListener('click', goUpToTheFolder);
        console.log(levelOfFolder, 'Уровень папки перед поднятием')
        levelOfFolder = 0;
        Array.from(folderTableBody.children).forEach((e) => e.remove());
        Array.from(tableBodyDocumentsOfArchive.children).forEach((e) => e.remove());
        currentFodler.textContent = 'Текущая папка: Верхнего уровня';
        loadFolderParentInTable();
        getDownInFolderLevelBelow();
        console.log(`Перемещение в папку уровня ${levelOfFolder}`);
        return event;
      } else if (levelOfFolder === 2) {
        moveToTheFolderAbove(buttonOfLevelUp, folderThree, arrayChildrenOfFolderThree, currentFodler, folderTableBody, levelOfFolder, goUpToTheFolder);
      } else if (levelOfFolder === 3) {
        moveToTheFolderAbove(buttonOfLevelUp, folderThree, arrayChildrenOfFolderThree, currentFodler, folderTableBody, levelOfFolder, goUpToTheFolder);
      } else if (levelOfFolder === 4) {
        buttonOfLevelUp.removeEventListener('click', goUpToTheFolder);
        levelOfFolder = 3;
        const oldCurrentFodler = currentFodler.textContent;
        currentFodler.textContent = 'Текущая папка: Верхнего уровня';
        console.log(oldCurrentFodler)
        console.log(`Перемещение в папку уровня ${levelOfFolder}`);
        return event;
      } else {
        return event;
        alert('Error in raising a folder to the level of its parent');
      }
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
    console.log('Перемещение папки на максивальный верхний уровень')
    Array.from(folderTableBody.children).forEach((e) => e.remove());
    Array.from(tableBodyDocumentsOfArchive.children).forEach((e) => e.remove());
    currentFodler.textContent = 'Текущая папка: Верхнего уровня';
    levelOfFolder = 0;
    loadFolderParentInTable();
    getDownInFolderLevelBelow();
  };
  buttonOfUpOnFolderMaxLevel.addEventListener('click', climbToTheMaximumLevelFolder);
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ПАПКИ //
function insertFolder() {
  const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
  const buttonPutInOfFolder = document.getElementById('putFolder');
  const putInElement = () => {
    console.log('ВСТАВКА ПАПКИ')
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
    console.log('ВЫРЕЗАНИЯ ПАПКИ')
    searchCheckedInputs();
    insertFolder();
  }
  buttonOfCutOutFolder.addEventListener('click', cutOutRow);
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ //
function getContentOfFolder(tableBody, filteredArray) {
  console.log('ЗАПОЛНЕНИЕ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ')
  const newArrayChildrenOfTableBody = Array.from(tableBody.children).map((element, id) => {
    element.children[1].textContent = filteredArray[id].numberSubscriber;
    element.children[2].textContent = filteredArray[id].numberAgreement;
  });
};

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ //
export function updateTheTable() {
  const buttonOfUpdateTheTable = document.getElementById('updateTableFolder');
  const currentFodler = document.querySelector('.archive__filder-title');
  const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
  const updateAndThrowDownOfTheTableContent = () => {
    console.log('ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ')
    console.log(levelOfFolder, 'Уровень погружения')
    if (levelOfFolder !== 0) {
      if (levelOfFolder === 1) {
        console.log(1, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ')
        folderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
        const filteredArrayOfFolder = arrayChildrenOfFolderThree.filter((item) => item.idParent === folderThree[0].idFolder);
        createRow(talbeBodyOfFolder, filteredArrayOfFolder, archiveFolderTableRow);
        getContentOfFolder(talbeBodyOfFolder, filteredArrayOfFolder);
        getDocumentsFromFolder(event, levelOfFolder, folderThree[0].idFolder);
        submergence(folderThree[0].numberSubscriber, currentFodler, talbeBodyOfFolder, folderThree[0].idFolder, levelOfFolder);
      } else {
        console.log(2, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ')
        arrayChildrenOfFolderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
        const filteredArrayOfChildren = arrayChildrenOfFolderThree.filter((item) => item.idParent === arrayChildrenOfFolderThree[0].idFolder);
        createRow(talbeBodyOfFolder, filteredArrayOfChildren, archiveFolderTableRow);
        getContentOfFolder(talbeBodyOfFolder, filteredArrayOfChildren);
        getDocumentsFromFolder(event, levelOfFolder, arrayChildrenOfFolderThree[0].idFolder);
      }
    } else {
      console.log(3, 'ОБНОВЛЕНИЯ ТАБЛИЦЫ')
      Array.from(talbeBodyOfFolder.children).forEach((e) => e.remove());
      levelOfFolder = 0;
      loadFolderParentInTable();
      getDownInFolderLevelBelow();
    }
    goUpToTheFolderToTheTopLevel();
    goUpToTheFolderToTheHigherLevel();
    searchFolder();
  };
  buttonOfUpdateTheTable.addEventListener('click', updateAndThrowDownOfTheTableContent);
}

// ФУНКЦИЯ ПОИСКА ПАПКИ //
export function searchFolder() {
  const inputForTheSearchFolder = document.querySelector('.archive__folder-input');
  const checkboxForSearchOfNumber = document.getElementById('type-folder-search-of-number');
  const checkboxForSearchOfName = document.getElementById('type-folder-search-of-name');
  const buttonsForSearchToTheFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
  const getListFolders = (item) => function getFolder() {
    console.log('ПОИСК ПАПКИ')
    resetFolderEffects();
    sortingOfFolder(item);
    updateTheTable();
    // for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
    //   for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
    //     arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder, event.target.parentNode.children[2].textContent, folderTableBody, currentFodler, level));
    //   }
    // }
  };

  // ФУНКЦИЯ-СБОРЩИК ДЛЯ СОРТИРОВКИ //
  function sortingOfFolder(item) {
    const folderTableBody = document.getElementById('folderTalbeBody');
    const fileTalbeBody = document.getElementById('fileTalbeBody');
    if (item.title === 'Поиск по номеру' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberSubscriber = arrayChildrenOfFolderThree.filter((element) => Number(element.numberSubscriber) === Number(inputForTheSearchFolder.value));
      settingUpButtonsOfFolder(checkboxForSearchOfNumber, item);
      Array.from(fileTalbeBody.children).forEach((e) => e.remove());
      Array.from(folderTableBody.children).forEach((e) => e.remove());
      createRow(folderTableBody, filteredArrayOfNumberSubscriber, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberSubscriber);
      clearOfInputForSearch(inputForTheSearchFolder);
    } else if (item.title === 'Поиск по имени' && inputForTheSearchFolder.value !== '') {
      const filteredArrayOfNumberAgreement = arrayChildrenOfFolderThree.filter((element) => element.numberAgreement == inputForTheSearchFolder.value);
      settingUpButtonsOfFolder(checkboxForSearchOfName, item);
      Array.from(fileTalbeBody.children).forEach((e) => e.remove());
      Array.from(folderTableBody.children).forEach((e) => e.remove());
      createRow(folderTableBody, filteredArrayOfNumberAgreement, archiveFolderTableRow);
      getContentOfFolder(folderTableBody, filteredArrayOfNumberAgreement);
      clearOfInputForSearch(inputForTheSearchFolder);
    }
  };

  // ФУНКЦИЯ ДЛЯ ОТЧИСТКИ INPUT //
  function clearOfInputForSearch(input) {
    console.log('ОТЧИСТКА INPUT')
    input.value = '';
  }

  // ФУНКЦИЯ ДЛЯ СБРОСА ЭФФЕКТОВ НА КНОПКАХ ПОИСКА //
  function resetFolderEffects() {
    console.log('СБРОС ЭФФЕКТОВ НА КНОПКАХ ПОИСКА')
    const buttonsOfSettingFilterFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
    buttonsOfSettingFilterFolder.forEach((element) => element.style = 'border: none');
    checkboxForSearchOfName.checked === false;
  }
  // ФУНКЦИЯ ДЛЯ НАСТРОЙКИ КПОНОК //
  function settingUpButtonsOfFolder(checkbox, item) {
    console.log('НАСТРОЙКИ КПОНОК ПОИСКА')
    checkbox.checked === true;
    item.style = 'border: 1px solid black';
  }

  buttonsForSearchToTheFolder.forEach((item) => {
    item.addEventListener('click', getListFolders(item));
  });
};