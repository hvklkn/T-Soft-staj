const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    if(idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full'))
    {   idx--    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    const cupHeight = 330; // Büyük bardağın yüksekliği

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
        remained.style.height = `${cupHeight}px`; // Bardak boşsa tüm yükseklik kullanılacak
        liters.innerText = '2L'; // Başlangıçta 2 litre
    } else {
        percentage.style.visibility = 'visible';
        const filledHeight = (fullCups / totalCups) * cupHeight;
        percentage.style.height = `${filledHeight}px`; 
        percentage.innerText = `${Math.floor((fullCups / totalCups) * 100)}%`;

        const remainingHeight = cupHeight - filledHeight;
        remained.style.height = `${remainingHeight}px`; 
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`; // Kalan su miktarını güncelle
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible'; 
    }
}
