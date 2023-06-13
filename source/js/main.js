import {
  archivePageMaxLever
} from './view/archive/archiveLevelsOfAccess/archive_page-max-lever.js';
import {
  getArchiveContainerOfCreateNewDocument
} from './view/archive/archive__container-of-create-new-document.js';

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

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //
const levelAcceptOfUser = 1;

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

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

// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
const getCloseBlockForNewDocument = () => {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOutWithCreateNewDocument = document.querySelector('.archive__create-new-document-of-button-out');
  archiveButtonOutWithCreateNewDocument.addEventListener('click', () => {
    Array.from(archiveFile.children).forEach((item) => {
      if(item.classList.contains('archive__container-of-create-new-document')) archiveFile.removeChild(item);
    });
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С СОЗДАНИЕМ ДОКУМЕНТА //
const getCreateBlockForNewDocument = () => {
  const archiveFile = document.querySelector('.archive__file');
  const archiveButtonOfCraeteDoc = document.getElementById('archiveCreateDoc');
  archiveButtonOfCraeteDoc.addEventListener('click', () => {
    archiveFile.innerHTML += getArchiveContainerOfCreateNewDocument();
    getCloseBlockForNewDocument();
  });
};

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
        if (node.id === 'archiveCreateDoc') {
          node.removeEventListener('click', handleClick);
        }
      }
    });
  });
});

// Запускаем отслеживание изменений в DOM-дереве
observer.observe(document.body, { childList: true, subtree: true });

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
