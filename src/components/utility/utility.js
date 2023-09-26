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
export {getAllDonation, saveDonate}