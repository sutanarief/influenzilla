const menuToggle = document.getElementById('menuToggle')
const section1 = document.getElementById('sectionContainer01')
const section2 = document.getElementById('sectionContainer02')
const body = document.getElementsByTagName('BODY')[0]
const menuList = document.getElementById('menuList')
menuToggle.addEventListener('click', () => {
  if(menuToggle.textContent.includes('MENU')) {
    body.style.background = '#111'
    menuToggle.textContent = 'Close'
    menuList.style.display = 'flex'
    section1.style.display = 'none'
    section2.style.display = 'none'
  } else {
    body.style.background = "url('../images/bg_section_mobile_01.png'), lightgray 50% / cover no-repeat"
    menuToggle.textContent = 'MENU'
    menuList.style.display = 'none'
    section1.style.display = 'flex'
    section2.style.display = 'flex'
  }
})