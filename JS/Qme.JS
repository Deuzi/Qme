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

const addSign = document.querySelectorAll('.cat-dropdown');
addSign.forEach((display) => {
  display.addEventListener('click', (event) => {
    const listItem = event.target.closest('li');

    display.classList.add('hidden');
    let catergorySub = listItem.querySelectorAll('.sub');
    catergorySub.forEach((sub) => {
      sub.classList.add('visible-sub');

      let removeSign = listItem.querySelectorAll('.remove-btn');
      removeSign.forEach((sign) => {
        sign.classList.replace('remove-btn', 'visibility');

        sign.addEventListener('click', () => {
          sign.classList.replace('visibility', 'remove-btn');
          console.log('signConvert:', sign);

          sub.classList.toggle('visible-sub');
          console.log('subWhenToggled:', sub);

          display.classList.remove('hidden');
          console.log('display:', display);
        });
      });
    });
  });
});

// if (display === 'click') {

//   let removeSign = document.querySelectorAll('.remove-btn');
//   removeSign.forEach((remove) => {
//     remove.addEventListener('click', () => {
//       sub.classList.remove('visibile-sub');
//     });
//   });
// }
