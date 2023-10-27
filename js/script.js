const menuToggle = document.getElementById('menuToggle')
const section = document.getElementById('sectionContainer01')
const body = document.getElementsByTagName('BODY')[0]
const menuList = document.getElementById('menuList')
document.addEventListener('click', () => {
  if(menuToggle.textContent === 'MENU') {
    body.style.background = '#111'
    menuToggle.textContent = 'Close'
    menuList.style.display = 'flex'
  } else {
    body.style.background = "url('../images/bg_section_mobile_01.png'), lightgray 50% / cover no-repeat"
    menuToggle.textContent = 'MENU'
    menuList.style.display = 'none'

  }
})