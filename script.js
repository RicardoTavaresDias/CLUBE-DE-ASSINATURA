
// Sectio hero

const myHero = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){

      document.querySelector('.p').classList.add('color-p')
      document.querySelector('.p-1s').classList.add('color-p-1s')
      document.querySelector('.p-2s').classList.add('color-p-2s')

      document.querySelector('.strong').classList.add('color-strong')
      document.querySelector('.strong-1s').classList.add('color-strong-1s')
      document.querySelector('.strong-2s').classList.add('color-strong-2s')

      document.querySelector('.icon').classList.add('anime-icon')
      document.querySelector('.icon-1s').classList.add('anime-icon-1s')
      document.querySelector('.icon-2s').classList.add('anime-icon-2s')

      console.log('on')
      
    }else {

      // document.querySelector('.p').classList.remove('color-p')
      // document.querySelector('.p-1s').classList.remove('color-p-1s')
      // document.querySelector('.p-2s').classList.remove('color-p-2s')

      // document.querySelector('.strong').classList.remove('color-strong')
      // document.querySelector('.strong-1s').classList.remove('color-strong-1s')
      // document.querySelector('.strong-2s').classList.remove('color-strong-2s')

      // document.querySelector('.icon').classList.remove('anime-icon')
      // document.querySelector('.icon-1s').classList.remove('anime-icon-1s')
      // document.querySelector('.icon-2s').classList.remove('anime-icon-2s')
      
      console.log('off')
    }
  })
})

const sectiohero = document.querySelectorAll('.mystery')
sectiohero.forEach((element) => myHero.observe(element))


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

      // document.querySelector('.off-amarelo').classList.remove('amarelo')
      // document.querySelector('.off-roxo').classList.remove('roxo')
      // document.querySelector('.off-lata').classList.remove('lata')
      // document.querySelector('.off-seta-capa').classList.remove('seta-capa')
      // document.querySelector('.off-seta-broche').classList.remove('seta-broche')
      // document.querySelector('.off-seta-marca').classList.remove('seta-marca')

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

      // entry.target.classList.remove('show')
      // document.querySelector('.anime-1').classList.remove('animacao-card-1')
      // document.querySelector('.anime-3').classList.remove('animacao-card-3')
      

    }
  })
})

const sectioncard = document.querySelectorAll('.hidden')
sectioncard.forEach((element) => myCartas.observe(element))
