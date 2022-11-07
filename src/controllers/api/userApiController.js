const db = require("../../database/models")

const userApiController = {
	all: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: req.url
                    },
                    data: users
                });
            })
    },
}

module.exports = userApiController;