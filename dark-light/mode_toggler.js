const Root = document.querySelector('html')
const Toggler = document.getElementById('mode_toggler')
/* const switchMode = () => {
  if (Toggler.checked) {
    Root.classList.add('dark')
  } else {
    Root.classList.remove('dark')
  }
  console.log(Toggler.checked)
} */
document.getElementById('default-toggle').addEventListener('change', () => {
  Root.classList.toggle('dark')
})