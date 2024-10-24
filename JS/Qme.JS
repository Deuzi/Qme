// Nav button
const menuBtn = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  let menuList = document.getElementById('nav-bar');

  menuList.style.position = 'fixed';
  menuList.style.display = 'flex';
  console.log('menuListDisplay:', menuList);

  //Menu Collapse

  const closeBtn = document.getElementById('nav-collapse');

  closeBtn.addEventListener('click', () => {
    menuList.style = '.hidden';
  });
});

//SUB CATEGROIES DISPLAY

const categories = document.getElementById('categories');

categories.addEventListener('click', () => {
  const subCategory = document.getElementById('sub-cat');
  subCategory.style.display = 'contents';
});
