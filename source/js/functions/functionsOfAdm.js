export function getByttonList() {
  const buttonOfOpenMenu = document.querySelector('.page__button-open-menu');
  const menuBlock = document.querySelector('.page__menu');
  function openMenu() {

  }
  buttonOfOpenMenu.addEventListener('click', openMenu);
};


// // ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
// export const getOpenBlokWithFolder = () => {
//   const buttonOfOpenBlockWithFolder = document.querySelector('.archive__filder-menu-img');
//   const archiveFolder = document.querySelector('.archive__folder');
//   buttonOfOpenBlockWithFolder.addEventListener('click', () => {
//     archiveFolder ? archiveFolder.style = 'display: block;' : archiveFolder.style = 'display: none;';
//   });
// };

// // // ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ БЛОКА ИНТЕРФЕЙСА С ПАПКАМИ //
// export const getCloseBlokWithFolder = () => {
//   const archiveFolder = document.querySelector('.archive__folder');
//   const buttonOfcloseBlockWithFolder = document.querySelector('.archive__filder-menu-img--rotate');
//   buttonOfcloseBlockWithFolder.addEventListener('click', () => {
//     archiveFolder.style = 'display: none;';
//   });
// };