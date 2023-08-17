import {
  createInterfeisOfArchiver,
  getCreateBlockForNewDocument,
  getTableElementFromArchiveDocuments,
  cutOutDocumentOfTable,
  putInElementInTable,
  clearFilters,
  openWindowForFilterOfDocument,
  getOpenedDocument
} from './functions/archive/functionsForWorkWithDocument.js';
import {
  getOpenBlokWithFolder,
  getCloseBlokWithFolder,
  openWindowForCreateFolder,
  deleteFolder,
  cutTheFolder,
  getDownInFolderLevelBelow,
  loadFolderParentInTable,
  goUpToTheFolderToTheTopLevel,
  goUpToTheFolderToTheHigherLevel,
  updateTheTable,
  searchFolder
} from './functions/archive/functionsForWorkWithFolder.js';
import {
  getByttonList,
  changeTable,
  switchingBetweenAdminPanels,
  getTabsInProtocols
} from './functions/administration/workWithAdminPanels.js';
// import Dynamsoft from 'dwt';
/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
ФУНКЦИЯ - обычная функция;
ФУНКЦИЯ-СБОРЩИК - функция содержащая две или более функций для полной реализации одного события;
*/

//            //
// КОДНСТАНТЫ //
//            //

const levelAcceptOfUser = 1;

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //



//           //
//  ФУНКЦИИ  //
//           //

// НАСТРОЙКА //

// ПОМОЩЬ //

// АДМИНИСТРИРОВАНИЕ //

// ВЫХОД //

//                                          //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ  //
//                                          //

// ФУНКЦИЯ-СБОРЩИК ФОРМИРОВАНИЯ ИНТЕРФЕЙСА ДЛЯ РАБОТЫ С АРХИВОМ //
const getCreateInterfasForWorkWithArchive = () => {
  createInterfeisOfArchiver();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
  getTableElementFromArchiveDocuments();
  cutOutDocumentOfTable();
  putInElementInTable();
  openWindowForFilterOfDocument();
  getOpenedDocument();
  clearFilters();
  loadFolderParentInTable();
  openWindowForCreateFolder();
  deleteFolder();
  cutTheFolder();
  getDownInFolderLevelBelow();
  goUpToTheFolderToTheTopLevel();
  // goUpToTheFolderToTheHigherLevel();
  updateTheTable();
  searchFolder();
};

// ФУНКЦИЯ-СБОРЩИК ФОРМИРОВАНИЯ ИНТЕРФЕЙСА ДЛЯ РАБОТЫ С ПАНЕЛЯМИ АДМИНИСТРАТОРА //
const getCreateInterfasForWorkWithAdminPanel = () => {
  getByttonList();
  changeTable();
  switchingBetweenAdminPanels();
  getTabsInProtocols();
};
// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МИНИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMinimLevelAccess = () => {

};

//                                         //
//  УСЛОВИЯ ДЛЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСОВ   //
//                                         //

// ВНОСИМ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
if (levelAcceptOfUser === 1) {
  getCreateInterfasForWorkWithArchive();
  getCreateInterfasForWorkWithAdminPanel();
};
