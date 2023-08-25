import {
  applyInvisabilityOnElement
} from '../universalFunctions.js';

//            //
// КОДНСТАНТЫ //
//            //

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННЫХ //

// ФУНКЦИЯ ДЛЯ ПЕРЕНОСА ПЕРЕМЕННЫХ //

//            //
//  ФУНКЦИИ   //
//            //

// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ПАНЕЛИ АДМИНА //
const getAdminPanels = (item, array) => function getPanel() {
  Array.from(array).forEach((e) => applyInvisabilityOnElement(e, 'display', 'none'));
  if(item.id === 'panelAdminOfEmployeesCompany') {
    Array.from(array)[0].style = 'display: block';
  } else if(item.id === 'panelAdminOfGroupAccess') {
    Array.from(array)[1].style = 'display: block';
  } else if(item.id === 'panelAdminOffileStorage') {
    Array.from(array)[2].style = 'display: block';
  } else if(item.id === 'panelAdminOfProtocols') {
    Array.from(array)[3].style = 'display: block';
  }
};

// ФУНКЦИЯ ДЛЯ ПЕРЕМЕЩЕНИЕМ МЕЖДУ ПАНЕЛЯМИ АДМИНИСТРАТОРА //
export function switchingBetweenAdminPanels() {
  const panelAdminOfEmployeesCompany = document.querySelector('.employees-company');
  const panelAdminOfGroupAccess = document.querySelector('.group-access');
  const panelAdminOfFileStorage = document.querySelector('.file-storage');
  const panelAdminOfProtocols = document.querySelector('.protocols');
  const arrayOfAdminPanels = [panelAdminOfEmployeesCompany, panelAdminOfGroupAccess, panelAdminOfFileStorage, panelAdminOfProtocols];
  const buttonsOfSwitchingAndminsPanels = document.querySelectorAll('.page__element-button');
  Array.from(buttonsOfSwitchingAndminsPanels).forEach((item) => {
    item.addEventListener('click', getAdminPanels(item, arrayOfAdminPanels));
  });
};

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ВСПЛЫВАЮЩЕГО МЕНЮ //
export function getByttonList() {
  const buttonOfOpenMenu = document.querySelector('.page__admin-button-open-menu');
  const menuBlock = document.querySelector('.page__admin-menu');
  const openMenu = () => {
    menuBlock.classList.toggle('page__admin-menu--open');
    buttonOfOpenMenu.classList.toggle('page__admin-button-open-menu--cliked');
  };
  buttonOfOpenMenu.addEventListener('click', openMenu);
};

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОГО БЛОКА КОГДА И СКРЫТИЯ СТАРОГО  //
const showNewBlock = (item, array) => function getBlock() {
  Array.from(array).forEach((e) => applyInvisabilityOnElement(e, 'display', 'none'));
  if(item.id === 'employeesCompany') {
    Array.from(array)[0].style = 'display: block';
  } else if(item.id === 'worckingEmloyees') {
    Array.from(array)[1].style = 'display: block';
  } else if(item.id === 'sittingsUsers') {
    Array.from(array)[2].style = 'display: block';
  }
};

// ФУНКЦИЯ ДЛЯ СМЕНЫ ТАБЛИЦ В "employees-company"  //
export function changeTable() {
  const employeesCompany = document.querySelector('.employees-company__wrapper-content');
  const worckingEmloyees = document.querySelector('.worcking-emloyees');
  const sittingsUsers = document.querySelector('.sittings-of-users');
  const arrayOfTables = [employeesCompany, worckingEmloyees, sittingsUsers];
  const listButtonsOfGetTable = document.querySelectorAll('.employees-company__navigation-table');
  Array.from(listButtonsOfGetTable).forEach((item) => {
    item.addEventListener('click', showNewBlock(item, arrayOfTables));
  });
}

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОЙ ВКЛАДКИ В ПРОТОКОЛАХ //
const getTab = (item, array) => function changeStyleTabs() {
  Array.from(array).forEach((e) => applyInvisabilityOnElement(e, 'display', 'none'));
  if(item.id === 'archivedProtocols') {
    Array.from(array)[0].style = 'display: block';
  } else if(item.id === 'protocolsAction') {
    Array.from(array)[1].style = 'display: block';
  } else if(item.id === 'protocolsSittings') {
    Array.from(array)[2].style = 'display: block';
  }
};

// ФУНКЦИЯ-СБОРЩИК ДЛЯ СМЕНЫ ВКЛАДОК В ПРОТОКОЛАХ //
export function getTabsInProtocols() {
  const panelOfArchiveProtocols = document.querySelector('.archived-protocols');
  const panelOfActionProtocols = document.querySelector('.protocols-action');
  const panelOfSittingsProtocols = document.querySelector('.protocols__sittings');
  const arrayOfProtocolPanels = [panelOfArchiveProtocols, panelOfActionProtocols, panelOfSittingsProtocols];
  const buttonsOfProtocolsNavigation = document.querySelectorAll('.protocols__navigations-button');
  Array.from(buttonsOfProtocolsNavigation).forEach((item) => {
    item.addEventListener('click', getTab(item, arrayOfProtocolPanels));
  });
};
