const toggleButton = document.getElementById('dropdown-toggle')
const dropdownContainer = document.getElementById('dropdown-container')

toggleButton.addEventListener('click', ()=>{
   const isHidden =  dropdownContainer.classList.toggle('hidden')

   toggleButton.setAttribute('aria-expanded', !isHidden)
   dropdownContainer.setAttribute('aria-hidden', isHidden)
})
