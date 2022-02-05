const one = (num_one, num_two) => {
    return num_one + num_two;
}

const two = (num_one, num_two) => {
    return num_one - num_two;
}

const three = {
    thisone : 'thisone',
    thistwo : 'thistwo',
    thisthree : 'thisthree' 
}

module.exports = {one, two, three};