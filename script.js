const filterBtns = document.querySelectorAll('.filter-btn button')
const filterCard = document.querySelectorAll('.filterable_cards .card')

function activeBtn(e){
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    console.log(e.target)

    filterCard.forEach((card) => {
        card.classList.add('hide')

        if(card.dataset.name == e.target.dataset.name || e.target.dataset.name == 'all'){
            card.classList.remove('hide')
        }
    })
}


filterBtns.forEach((btn) => {
    btn.addEventListener('click', activeBtn)
})