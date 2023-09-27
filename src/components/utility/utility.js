const getAllDonation = () => {
    const getDonate = localStorage.getItem('donation')
    if(getDonate){
        return JSON.parse(getDonate)
    }
    return []
}

const saveDonate = (id, toast) => {
    const idInt = parseInt(id)
    const donation = getAllDonation()
    const exists = donation.find(donateId => donateId == idInt)
    if(!exists){
        donation.push(idInt)
        localStorage.setItem('donation', JSON.stringify(donation))
        toast('Thanks For Donating')
    } else{
        toast('Already Donated It')
    }
}


const getSearchValue = (cards, setCard) =>{
    const searchField = document.getElementById('search')
    const searchValue = searchField.value.toLowerCase()
    const searchCategory = cards.filter(card => card.category.toLowerCase() == searchValue)
    
    if(searchCategory.length){
        setCard(searchCategory)
    }
}
export {getAllDonation, saveDonate, getSearchValue}