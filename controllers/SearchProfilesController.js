const axios = require('axios');
const db = require('../db/connection');

function SearchProfilesController(req, res){

    const {
        username,
        language,
        minFollowers,
        sort,
        order
    } = req.query;

    let query = "SELECT * FROM profiles WHERE 1=1";

    let values = [];

    if (username) {

        query += " AND username LIKE ?";

        values.push(`%${username}%`);

    }

    if (language) {

        query += " AND most_used_language = ?";

        values.push(language);

    }

    if (minFollowers) {

        query += " AND followers >= ?";

        values.push(minFollowers);

    }

    // Sorting

    const allowedSortFields = [

        "followers",

        "public_repos",

        "total_stars",

        "username"

    ];

    let sortField = sort;

    let sortOrder = order || "asc";

    if (allowedSortFields.includes(sortField)) {

        if (

            sortOrder !== "asc" &&

            sortOrder !== "desc"

        ) {

            sortOrder = "asc";

        }

        query += ` ORDER BY ${sortField} ${sortOrder.toUpperCase()}`;

    }

    db.execute(

        query,

        values,

        (err, results) => {

            if (err) {

                return res.status(500).json({

                    error: err.message

                });

            }

            res.json(results);

        }

    );

}

module.exports = SearchProfilesController