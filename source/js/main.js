import {
  archivePageMaxLever
} from './view/archive/archiveLevelsOfAccess/archive_page-max-lever.js';

//            //
// КОДНСТАНТЫ //
//            //
const acrchivePage = document.querySelector('.archive');

//            //
// ПЕРЕМЕННЫЕ //
//            //

// УРОВЕНЬ ПОЛЬЗОВАТЕЛЯ //
const levelAcceptOfUser = 1;

acrchivePage.innerHTML = archivePageMaxLever();

// ВНОСИМ КОД ОТ УРОВНЯ ДОСТУПА ПОЛЬЗОВАТЕЛЯ //
switch (levelAcceptOfUser) {
  case '1':
};

// ПРОВЕРЯЕМ ТЕКУЩЕЕ МЕСТОПОЛОЖЕНИЕ ПОЛЬЗОВАТЕЛЯ //
switch (window.location.href) {
  case 'http://localhost:3000/index.html':
    console.log(1);
    break;
  case 'http://localhost:3000/authorization.html':
    console.log(2);
    break;
};
