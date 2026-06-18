const axios = require('axios');
const db = require('../db/connection');

function GetProfileByNameController(req, res){
     const { username } = req.params;

    db.execute(
        "SELECT * FROM profiles WHERE username = ?",
        [username],
        (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results[0]);
        }
    );
}


module.exports = GetProfileByNameController
