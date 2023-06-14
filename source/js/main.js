import {
  archivePageMaxLever
} from './view/archive/archiveLevelsOfAccess/archive_page-max-lever.js';
import {
  getArchiveContainerOfCreateNewDocument
} from './view/archive/archive__container-of-create-new-document.js';
import {
  getAchiveContainerFileSearch
} from './view/archive/achive__container-file-search.js';
import {
  getArchiveContainerOfOpenedDocument
} from './view/archive/archive__container-of-opened-document.js';

/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
*/

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.getElementById('p2');

//            //
// ПЕРЕМЕННЫЕ //
//            //
let cutteddOutElement = '';

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //
const levelAcceptOfUser = 1;

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //
const clearOfEventListenersList = (typeEvent, elementOfListening, functionElementOfListening) => {
  elementOfListening.removeEventListener(typeEvent, functionElementOfListening);
};

//            //
//  ФУНКЦИИ   //
//            //

/// АРХИВ ///

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getOpenBlokWithFolder = () => {
  const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
  const archiveFolder = document.querySelector('.archive__folder');
  buttonOfOpenBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: block;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
const getCloseBlokWithFolder = () => {
  const archiveFolder = document.querySelector('.archive__folder');
  const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
  buttonOfcloseBlockWithFolder.addEventListener('click', () => {
    archiveFolder.style = 'display: none;';
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
function getCreateBlockForNewDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  const createChildElementInParent = () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
  };
  archiveButtonOfCraeteDoc.addEventListener('click', createChildElementInParent);
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
function getCloseBlockForNewDocument() {
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
function getTableElementFromArchiveDocuments() {
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
function cutOutDocument() {
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
function putInElementInTable() {
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
function openWindowForFilterOfDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const buttonOfFilter = document.getElementById('archiveSearch');
  const getWindowOfFilter = () => {
    archiveFile.innerHTML += getAchiveContainerFileSearch();
    closeWindowForFilterOfDocument();
  };
  buttonOfFilter.addEventListener('click', getWindowOfFilter);
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА ФИЛЬТРАЦИИ ДОКУМЕНТОВ //
function closeWindowForFilterOfDocument() {
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

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ДОКУМЕНТА //
function getOpenedDocument() {
  const archiveFile = document.querySelector('.archive__file');
  const tableBodyDocumentsOfArchive = document.getElementById('fileTalbeBody');
  const openDocument = () => {
    archiveFile.innerHTML += getArchiveContainerOfOpenedDocument();
    editOfDocument();
    closeDocument();
  };
  Array.from(tableBodyDocumentsOfArchive.children).forEach((item) => {
    item.addEventListener('click', openDocument);
  });
};

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ДОКУМЕНТА //
function closeDocument() {
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
function editOfDocument() {
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
      if(item.textContent === 'Присоеденить') item.addEventListener('click', addFile);
      if(item.textContent === 'Показать') item.addEventListener('click', showFile);
      if(item.textContent === 'Удалить') item.addEventListener('click', deleteFile);
      if(item.textContent === 'Печать') item.addEventListener('click', printFile);
      if(item.textContent === 'Протоколы печати') item.addEventListener('click', showProtocols);
    });
    inputsOfDocument.forEach((item) => item.disabled = false);
    textAreaOfDocument.disabled = false;
    checkBoxOfDocument.disabled = false;
    editButton.removeEventListener('click', edit);
    editButton.addEventListener('click', saveFile);
  };
  editButton.addEventListener('click', edit);
}

// Создаем новый экземпляр MutationObserver
const observer = new MutationObserver((mutations) => {
  // Перебираем все мутации (изменения) в DOM-дереве
  mutations.forEach((mutation) => {
    // Перебираем все добавленные элементы в мутации
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Если добавленный элемент является нашим элементом, добавляем слушатель
        if (node.id === 'archiveCreateDoc') {
          node.addEventListener('click', handleClick);
        }
      }
    });

    // Перебираем все удаленные элементы в мутации
    mutation.removedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Если удаленный элемент является нашим элементом, удаляем слушатель
        if (node.id === 'archiveCreateDoc') node.removeEventListener('click', handleClick);
      }
    });
  });
});

// Запускаем отслеживание изменений в DOM-дереве
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Обработчик события клика
function handleClick() {
  console.log('Клик по элементу');
}

// НАСТРОЙКА //

// ПОМОЩЬ //

// АДМИНИСТРИРОВАНИЕ //

// ВЫХОД //

//                                           //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ   //
//                                           //

// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МАКСИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMaxLevelAccess = () => {
  acrchivePage.innerHTML = archivePageMaxLever();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
  getTableElementFromArchiveDocuments();
  cutOutDocument();
  putInElementInTable();
  openWindowForFilterOfDocument();
  getOpenedDocument();
};

// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МИНИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMinimLevelAccess = () => {

};

//                                         //
//  УСЛОВИЯ ДЛЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСОВ   //
//                                         //

// ВНОСИМ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
if (levelAcceptOfUser === 1) {
  getCreateInterfasForMaxLevelAccess();
};
