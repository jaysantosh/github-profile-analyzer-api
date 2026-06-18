const axios = require('axios');
const db = require('../db/connection');

function GetAllProfilesController(req, res){
    
    const pageSize = 5;

    let page = Number(req.query.page) || 1;

    page = Math.max(1, page);

    let offset = (page - 1) * pageSize;

    // Allowed columns to sort by
    const allowedSortFields = [
        "username",
        "followers",
        "public_repos",
        "total_stars"
    ];

    let sort = req.query.sort || "username";

    let order = req.query.order || "asc";

    // Validation
    if (!allowedSortFields.includes(sort)) {
        sort = "username";
    }

    if (order.toLowerCase() !== "asc" &&
        order.toLowerCase() !== "desc") {

        order = "asc";
    }

    db.execute(

        "SELECT COUNT(*) AS total FROM profiles",

        (err, countResult) => {

            if (err) {

                return res.status(500).json({
                    error: err.message
                });

            }

            const totalRecords = countResult[0].total;

            const totalPages =
                Math.ceil(totalRecords / pageSize);

            const query = `
            SELECT *
            FROM profiles

            ORDER BY ${sort} ${order.toUpperCase()}

            LIMIT ${pageSize}

            OFFSET ${offset}
            `;

            db.execute(

                query,

                (err, results) => {

                    if (err) {

                        return res.status(500).json({
                            error: err.message
                        });

                    }

                    res.json({

                        page,

                        pageSize,

                        totalRecords,

                        totalPages,

                        sortBy: sort,

                        order,

                        data: results

                    });

                }

            );

        }

    );
}

module.exports = GetAllProfilesController