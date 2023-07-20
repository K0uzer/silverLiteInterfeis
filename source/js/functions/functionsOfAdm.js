
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

// ФУНКЦИЯ ДЛЯ СМЕНЫ ТАБЛИЦ В "employees-company"  //
function changeTable() {
  
}

// ФУНКЦИЯ ДЛЯ ВЫВОДА НОВОГО БЛОКА КОГДА И СКРЫТИЯ СТАРОГО  //
function showNewBlock() {

};