
//section Livro

const myLivro = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){

      document.querySelector('.off-amarelo').classList.add('amarelo')
      document.querySelector('.off-roxo').classList.add('roxo')
      document.querySelector('.off-lata').classList.add('lata')
      document.querySelector('.off-seta-capa').classList.add('seta-capa')
      document.querySelector('.off-seta-broche').classList.add('seta-broche')
      document.querySelector('.off-seta-marca').classList.add('seta-marca')
      
    }else {

      document.querySelector('.off-amarelo').classList.remove('amarelo')
      document.querySelector('.off-roxo').classList.remove('roxo')
      document.querySelector('.off-lata').classList.remove('lata')
      document.querySelector('.off-seta-capa').classList.remove('seta-capa')
      document.querySelector('.off-seta-broche').classList.remove('seta-broche')
      document.querySelector('.off-seta-marca').classList.remove('seta-marca')

    }
  })
})

const sectionlivro = document.querySelectorAll('.livro-java')
sectionlivro.forEach((element) => myLivro.observe(element))


//Section cards

const myCartas = new IntersectionObserver((entries) => {
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

const sectioncard = document.querySelectorAll('.hidden')
sectioncard.forEach((element) => myCartas.observe(element))
