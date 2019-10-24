const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { heroe } = req.query;

        const spots = await Spot.find({ heroes: heroe });

        return res.json(spots);
    },

    async store(req, res) {
        const { heroes } = req.body;

        const spot = await Spot.create({
            heroes: heroes.split(',').map(heroe => heroe.trim()),
        })

            return res.json(spot)
    }
};