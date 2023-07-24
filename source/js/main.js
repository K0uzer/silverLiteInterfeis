import {
  createInterfeisOfArchiver,
  getOpenBlokWithFolder,
  getCloseBlokWithFolder,
  getCreateBlockForNewDocument,
  getTableElementFromArchiveDocuments,
  cutOutDocumentOfTable,
  putInElementInTable,
  openWindowForFilterOfDocument,
  getOpenedDocument,
  clearFilters,
  openWindowForCreateFolder,
  deleteFolder,
  cutTheFolder,
  getDownInFolderLevelBelow,
  loadFolderParentInTable,
  goUpToTheFolderToTheTopLevel,
  goUpToTheFolderToTheHigherLevel,
  updateTheTable,
  searchFolder
} from './functions/functionsOfarchive.js';
import {
  getByttonList,
  changeTable,
  switchingBetweenAdminPanels
} from './functions/functionsOfAdm.js';
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

//                                         //
//  ОБЩИЕ ФУНКЦИИ ДЛЯ СОЗДАНИЯ ИНТЕРФЕЙСОВ   //
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
  goUpToTheFolderToTheHigherLevel();
  updateTheTable();
  searchFolder();
};

// ФУНКЦИЯ-СБОРЩИК ФОРМИРОВАНИЯ ИНТЕРФЕЙСА ДЛЯ РАБОТЫ С ПАНЕЛЯМИ АДМИНИСТРАТОРА //
const getCreateInterfasForWorkWithAdminPanel = () => {
  getByttonList();
  changeTable();
  switchingBetweenAdminPanels();
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
