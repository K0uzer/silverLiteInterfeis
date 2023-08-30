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
export const arrayOfImmersionPath = [{
  'idFolder': -1,
  'idParent': -1,
  'numberAgreement': 'Верхнего уровня',
  'numberSubscriber': -1,
  'folderLevel': -1,
}];

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

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
export const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: none;';
  });
};

// ФУНУКЦИЯ ДЛЯ ЗАГРУЗКИ РОДИТЕЛЬСКИХ ПАПОК В ТАБЛИЦУ //
export function loadFolderParentInTable() {
  try {
    const folderTableBody = document.getElementById('folderTalbeBody');
    for (let i = 0; i < folderThree.length; i++) {
      folderTableBody.innerHTML += archiveFolderTableRow();
      if (folderThree[i].idFolder === i) {
        fillInRowOfFolderTalbe(folderTableBody, folderThree[i].numberSubscriber, folderThree[i].numberAgreement);
      }
    }
  } catch (error) {
    console.log(error)
  }
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА СОЗДАНИЯ ПАПКИ //
export function openWindowForCreateFolder() {
  try {
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
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ-СБОРЩИК ДЛЯ ПОГРУЖЕНИЯ В ПАПКУ CО ВТОРОГО УРОВНЯ И НИЖЕ //
const getDownInFolderNotTopLevel = (array, folder, folderTableBody, currentFolder) => function () {
  try {
    if (levelOfFolder !== 0) {
      const idElementFromOfFilteredArray = array.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
      submergence(event.target.parentNode.children[2].textContent, currentFolder, folderTableBody, idElementFromOfFilteredArray[0].idFolder);
    }
  } catch (error) {
    console.log(error)
  }
};

// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ОКНА СОЗДАНИЯ ПАПКИ ИЗ ДЕРЕВА //
const removeWindowForCreateFolder = () => function removeContainer() {
  const folderContentContainer = document.querySelector('.archive__folder-content-container');
  folderContentContainer.children[1].remove();
  if (levelOfFolder === 0) {
    getDownInFolderLevelBelow();
  }
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
  try {
    const currentFodler = document.querySelector('.archive__filder-title');
    const inputOfNumberAgreement = document.getElementById('numberAgreement');
    const inputOfNumberSubscriber = document.getElementById('numberSubscriber');
    const inputOfComment = document.getElementById('comment');
    const folderTableBody = document.getElementById('folderTalbeBody');
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
  } catch (error) {
    console.log(error)
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
  const listChildrenFolderNumberAgreement = ['проектно-техническая документация', 'учредительные и рег документы', 'акты ко', 'договор', 'письма-жалобы абонентов и ответы', 'служ записи, рапорты', 'прочие документы'];
  listChildrenFolderNumberAgreement.forEach((item) => {
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
  try {
    if (levelOfFolder === 0) {
      const currentFodler = document.querySelector('.archive__filder-title');
      const folderTableBody = document.getElementById('folderTalbeBody');
      const arrayChildrenOfTableBody = Array.from(folderTableBody.children);
      const getFolderLevelBelow = () => function getDown(event) {
        if (event.target.textContent === 'Абонентские дела' || event.target.parentNode.children[2].textContent === 'Абонентские дела') {
          submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 0);
        } else if (event.target.textContent === 'Проектно-техническая документация' || event.target.parentNode.children[2].textContent === 'Проектно-техническая документация') {
          submergence(event.target.parentNode.children[2].textContent, currentFodler, folderTableBody, 1);
        }
      };
      for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
        for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
          arrayChildrenOfTableBody[i].children[n].addEventListener('click', getFolderLevelBelow());
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ДЛЯ ПОГРУЖЕНИЯ //
function submergence(numberSubscriber, currentFodler, folderTableBody, idFolder, level) {
  try {
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
    createPathOfSubmergence(currentFodler);
    if (levelOfFolder !== 0) {
      for (let i = 0; i < arrayChildrenOfTableBody.length; i++) {
        for (let n = 1; n < (arrayChildrenOfTableBody[i].children).length; n++) {
          arrayChildrenOfTableBody[i].children[n].addEventListener('click', getDownInFolderNotTopLevel(filteredArrayOfChildrenFolder, event.target.parentNode.children[2].textContent, folderTableBody, currentFodler, level));
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ПУТИ ПОГРУЖЕНИЯ //
function createPathOfSubmergence(currentFodler) {
  try {
    if (levelOfFolder === 0) {
      const folderAktual = folderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
      arrayOfImmersionPath.push(folderAktual[0]);
    } else if (levelOfFolder > 0) {
      const folderAktual = arrayChildrenOfFolderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === currentFodler.textContent);
      arrayOfImmersionPath.push(folderAktual[0]);
    }
    console.log('ПРИБАВЛЯЮ ЗНАЧЕНИЕ УРОВЕНЯ ПАПКИ НА 1', levelOfFolder);
    levelOfFolder++;
    console.log('ПРИБАВЛЯЮ ЗНАЧЕНИЕ УРОВЕНЯ ПАПКИ НА 1', levelOfFolder);
    levelOfSubmerged++;
    return arrayOfImmersionPath;
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ФИЛЬТРАЦИИ МАССИВОВ ДОК.ОВ И ПАПОК, ДЛЯ НАХОЖДЕНИЯ ДОК.ОВ ПРИВЯЗАННЫХ К ПАПКЕ ДЛЯ ОТРИСОВКИ ФАЙЛОВ //
function getDocumentsFromFolder(event, level, idFolder) {
  try {
    let parentFolter;
    if (levelOfFolder !== 0) {
      parentFolter = folderThree.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
      if (folderThree.length !== 0) {
        const filteredArrayOfDocument = data.filter((item) => item.id_parent === idFolder);
        fillInInformations(filteredArrayOfDocument);
      }
    } else {
      parentFolter = folderThree.filter((item) => item.numberAgreement === event.target.parentNode.children[2].textContent);
    }
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
const moveToTheFolderAbove = (button, current, bodyFolder, buttonForRemoveListener, counterSub) => {
  try {
    const bodyDoc = document.querySelector('.scroll-table-body');
    button.removeEventListener('click', buttonForRemoveListener);
    bodyDoc.innerHTML = '';
    bodyFolder.innerHTML = '';
    if (levelOfFolder === 1) {
      current.textContent = 'Текущая папка: Верхнего уровня';
    } else {
      current.textContent = `Текущая папка: ${arrayOfImmersionPath[arrayOfImmersionPath.length - 2].numberAgreement}`;
    }
    if (levelOfFolder < 2) {
      levelOfFolder = 0;
      loadFolderParentInTable();
      getDownInFolderLevelBelow();

      console.log('< 2');
    } else if (levelOfFolder === 2) {
      const arrayWithCurrentFolder = folderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === current.textContent);
      console.log(arrayWithCurrentFolder);
      const arrayWithCurrentFolderChildren = arrayChildrenOfFolderThree.filter((item) => item.idParent === arrayWithCurrentFolder[0].idFolder);
      console.log(arrayWithCurrentFolderChildren, '=== 2');
      arrayOfImmersionPath.pop(arrayOfImmersionPath[arrayOfImmersionPath.length - 1]);
      // const arrayOfCurrentFodler = arrayChildrenOfFolderThree.filter((item) => console.log(`Текущая папка: ${item.numberAgreement}`) === current.textContent);
      // console.log(arrayOfCurrentFodler[0].idFolder)
      // const arrayFilteredOfDocuments = data.filter((item) => item.id_parent === arrayOfCurrentFodler[0].idFolder);
      // console.log(arrayFilteredOfDocuments)
      // fillInInformations();
      submergence(arrayOfImmersionPath[arrayOfImmersionPath.length - 1].numberSubscriber, current, bodyFolder, arrayOfImmersionPath[arrayOfImmersionPath.length - 1].idFolder, levelOfFolder);
      levelOfFolder--;
    } else if (levelOfFolder > 2) {
      const arrayWithCurrentFolder = arrayChildrenOfFolderThree.filter((item) => `Текущая папка: ${item.numberAgreement}` === current.textContent);
      const arrayWithCurrentFolderChildren = arrayChildrenOfFolderThree.filter((item) => item.idParent === arrayWithCurrentFolder[0].idFolder);
      console.log(arrayWithCurrentFolderChildren, '>2');
      arrayOfImmersionPath.pop(arrayOfImmersionPath[arrayOfImmersionPath.length - 1]);
      submergence(arrayOfImmersionPath[arrayOfImmersionPath.length - 1].numberSubscriber, current, bodyFolder, arrayOfImmersionPath[arrayOfImmersionPath.length - 1].idFolder, levelOfFolder);
      levelOfFolder--;
    }
  } catch (error) {
    console.log(error)
  }
};

// ФУНКЦИЯ ДЛЯ КОНТРОЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ НА УРОВЕНЬ ВЫШЕ //
export function goUpToTheFolderToTheHigherLevel() {
  try {
    const buttonOfLevelUp = document.getElementById('upLevelFolder');
    const goUpToTheFolder = () => {
      const folderTableBody = document.getElementById('folderTalbeBody');
      const currentFodler = document.querySelector('.archive__filder-title');
      if (counterSubmerged === 0) setTimeout(counterSubmerged++, 1000);
      else if(levelOfFolder !== 0) {
        moveToTheFolderAbove(buttonOfLevelUp, currentFodler, folderTableBody, goUpToTheFolder, counterSubmerged);
        counterSubmerged = 0;
      };
    };
    levelOfFolder === 0 ? buttonOfLevelUp.disabled = true : buttonOfLevelUp.disabled = false;
    buttonOfLevelUp.addEventListener('click', goUpToTheFolder);
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЯ В ПАПКУ МАКСИМАЛЬНОГО УРОВЕНЯ //
export function goUpToTheFolderToTheTopLevel() {
  try {
    const buttonOfUpOnFolderMaxLevel = document.getElementById('upMaxLevelFolder');
    const folderTableBody = document.getElementById('folderTalbeBody');
    const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
    const currentFodler = document.querySelector('.archive__filder-title');
    const climbToTheMaximumLevelFolder = () => {
      try {
        Array.from(folderTableBody.children).forEach((e) => e.remove());
        Array.from(tableBodyDocumentsOfArchive.children).forEach((e) => e.remove());
      } catch (error) {
        // folderTableBody.innerHTML = '';
        // tableBodyDocumentsOfArchive.innerHTML = '';
        console.log(error)
      }
      currentFodler.textContent = 'Текущая папка: Верхнего уровня';
      levelOfFolder = 0;
      while (arrayOfImmersionPath.length !== 0) arrayOfImmersionPath.pop();
      arrayOfImmersionPath.push({
        'idFolder': null,
        'idParent': null,
        'numberAgreement': 'Верхнего уровня',
        'numberSubscriber': null,
        'folderLevel': null,
      });
      loadFolderParentInTable();
      getDownInFolderLevelBelow();
    };
    buttonOfUpOnFolderMaxLevel.addEventListener('click', climbToTheMaximumLevelFolder);
  } catch (error) {
    console.log(error)
    const clearTables = () => {
      folderTableBody.innerHTML = '';
      tableBodyDocumentsOfArchive.innerHTML = '';
    };
    setTimeout(() => {
      clearTables();
    }, 100);
  }
}

// ФУНКЦИЯ ДЛЯ ВСТАВКИ ПАПКИ //
function insertFolder() {
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
    insertFolder();
  }
  buttonOfCutOutFolder.addEventListener('click', cutOutRow);
}

// ФУНКЦИЯ ДЛЯ ЗАПОЛНЕНИЯ ТАБЛИЦЫ ОТСОРТИРОВАННЫМ КОНТЕНТОМ //
function getContentOfFolder(tableBody, filteredArray) {
  try {
    const newArrayChildrenOfTableBody = Array.from(tableBody.children).map((element, id) => {
      element.children[1].textContent = filteredArray[id].numberSubscriber;
      element.children[2].textContent = filteredArray[id].numberAgreement;
    });
  } catch (error) {
    console.log(error)
  }
};

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ И СБРОСА ФИЛЬТРОВ //
export function updateTheTable() {
  try {
    const buttonOfUpdateTheTable = document.getElementById('updateTableFolder');
    const updateAndThrowDownOfTheTableContent = () => {
      const talbeBodyOfDocument = document.getElementById('fileTalbeBody');
      const talbeBodyOfFolder = document.getElementById('folderTalbeBody');
      Array.from(talbeBodyOfDocument.children).forEach((e) => e.remove());
      Array.from(talbeBodyOfFolder.children).forEach((e) => e.remove());
      levelOfFolder = 0;
      loadFolderParentInTable();
      getDownInFolderLevelBelow();
      goUpToTheFolderToTheTopLevel();
      goUpToTheFolderToTheHigherLevel();
      searchFolder();
    };
    buttonOfUpdateTheTable.addEventListener('click', updateAndThrowDownOfTheTableContent);
  } catch (error) {
    console.log(error)
  }
}

// ФУНКЦИЯ ПОИСКА ПАПКИ //
export function searchFolder() {
  const inputForTheSearchFolder = document.querySelector('.archive__folder-input');
  const checkboxForSearchOfNumber = document.getElementById('type-folder-search-of-number');
  const checkboxForSearchOfName = document.getElementById('type-folder-search-of-name');
  const buttonsForSearchToTheFolder = document.querySelectorAll('.archive__folder-icon-of-checkbox');
  const getListFolders = (item) => function getFolder() {
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
      const filteredArrayOfNumberAgreement = arrayChildrenOfFolderThree.filter((element) => element.numberAgreement === inputForTheSearchFolder.value);
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
