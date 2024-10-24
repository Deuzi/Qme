// Nav button
const menuBtn = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  let menuList = document.getElementById('menu-list');

  menuList.style.display = 'flex';
  menuList.style.transition = '10s';
  console.log('menuListDisplay:', menuList);

  //Menu Collapse

  const closeBtn = document.getElementById('nav-collapse');

  closeBtn.addEventListener('click', () => {
    menuList.style = '.hidden';
  });
});
