const houses = require('./db.json')
let house_id = 4

module.exports = {
    getHouse: (req, res) => {
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        const index = houses.findIndex(house => house.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body

        let newHouse = {
            id: house_id,
            address,
            price: +price,
            imageURL
        }

        houses.push(newHouse)
        house_id++
        res.status(200).send(houses)
    },

    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body

        let index = houses.findIndex(house => house.id === +id)

    
        if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        } 
    }
}