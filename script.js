const myObserve = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
      document.querySelector('.anime-1').classList.add('animacao-card-1')
      document.querySelector('.anime-3').classList.add('animacao-card-3')
    }else {
      entry.target.classList.remove('show')
      document.querySelector('.anime-1').classList.remove('animacao-card-1')
      document.querySelector('.anime-3').classList.remove('animacao-card-3')
    }
  })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserve.observe(element))