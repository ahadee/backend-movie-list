const { Movie } = require("../../models")

module.exports = {
    getAll: async (req, res) => {
        try {
            const movies = await Movie.find({})
            res.status(200).json({ message: "Get All Users", data: movies })
        } catch (error) {
            console.log(error);

        }
    },
    create: async (req, res) => {
        try {
            const { userid, title, description, release, duration, IMDB } = req.body
            const movies = await Movie.create({
                userid,
                title,
                description,
                release,
                duration,
                IMDB,
            })
            res.status(200).json({ message: "Create a new Movie list", data: movies })
        } catch (error) {
            console.log(error);

        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { userid, title, description, release, duration, IMDB } = req.body
            const result = await Movie.findByIdAndUpdate(id, {
                $set: {
                    userid,
                    title,
                    description,
                    release,
                    duration,
                    IMDB
                }
            })
            res.status(200).json({ message: `Edit movie id : ${id} is successfully`, data: result })
        } catch (error) {
            console.log(error);
        }
    },
    deleteByIDMovie: async (req, res) => {
        try {
            const { id } = req.params
            const result = await Movie.findByIdAndRemove(id)

            res.status(200).json({
                message: `Movie with id : ${id} is successfully deleted`, data: result
            })
        } catch (error) {

        }
    },
    findID: async (req, res) => {
        console.log(req.params);
        // const { userid } = req.params
        const { userid } = req.body

        // const filteredID = todos.filter((element) => {
        //     // console.log(element);

        //     return element.userid == userid
        // })
        const filteredID = await Movie.findOne(userid)

        res.status(200).json({
            message: "Get Data Filter By ID",
            data: filteredID
        })
    },
}