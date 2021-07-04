const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



router.get('/count/:id', (req, res ,next) => {
    const id = req.params.id

    mysql.getConnection(function(err, connection) {
        sqlVotes = "SELECT * FROM `votes` where `participant_key` = ?;"
        sqlVotesParams = id
        connection.query(sqlVotes, sqlVotesParams, function(error, results, fields) {
            res.status(200).send({
                id: id,
                count: results.length
            });
        });
        connection.release();
    });
});

router.post('/vote', function(req, res, next) {
    const id = req.body.id;
    var sql = "INSERT INTO `votes` (`participant_key`) VALUES (?);"
    var params = [];
    params.push(id);
    
    mysql.getConnection(function(err, connection) {
        connection.query(sql, params, function(error, results, fields) {
            if (error) {
                return res.status(404).send({
                    id: id,
                    message: "not found"
                });
            }

            sqlVotes = "SELECT * FROM `votes` where `participant_key` = ?;"
            sqlVotesParams = id
            connection.query(sqlVotes, sqlVotesParams, function(error, results, fields) {
                res.status(200).send({
                    id: id,
                    count: results.length
                });
            });
            
        });
        connection.release();
    });
});

module.exports = router;