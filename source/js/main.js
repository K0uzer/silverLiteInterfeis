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
  fillInInformations,
  clearFilters,
  openWindowForCreateFolder,
  deleteFolder,
  cutTheFolder,
  getDownInFolderLevelBelow,
  loadFolderParentInTable
} from './functions/functionsOfarchive.js';
import {
  data
} from './modal/arrayOfArchive.js';

/*
ОСНОВНЫЕ ЭЛЕМЕНТЫ
файл < документ < папка.
таблица < окно.
кнопка.
*/

//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //
const levelAcceptOfUser = 1;

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

// ФУНКЦИЯ ФОРМИРОВАНИЯ ИНТЕРФЕЙСА МАКСИМАЛЬНОГО ДОСТУПА //
const getCreateInterfasForMaxLevelAccess = () => {
  createInterfeisOfArchiver();
  getOpenBlokWithFolder();
  getCloseBlokWithFolder();
  getCreateBlockForNewDocument();
  getTableElementFromArchiveDocuments();
  cutOutDocumentOfTable();
  putInElementInTable();
  openWindowForFilterOfDocument();
  getOpenedDocument();
  fillInInformations(data);
  clearFilters();
  loadFolderParentInTable();
  openWindowForCreateFolder();
  deleteFolder();
  cutTheFolder();
  getDownInFolderLevelBelow();
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
