// These are all of the required packages
var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
// This string is what allows index.js to connect to the database. It is the name of the server://nameOfOwnerOfDatabase:password@host:portNumber/nameOfDatabase
//const connectionString = process.env.DATABASE_URL || 'postgres://enterprisedb:@lgozzine@localhost:5444/CashCoalition';
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:battle@localhost:5444/CashCoalition';
// Change postgres url to full server. current url is for local on Gary's
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Ca$hCo@localhost:5432/CashCoalition';

/* 
    Get functions
*/

// Get Homepage
router.get('/', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', 'client', 'dist', 'index.html'));
});

// Route that gets all questions for a specified survey_id
router.get('/api/surveyQuestions/:survey_id', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Creates a variable for the passed parameter -- survey_id
    var survey_id = req.params.survey_id;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that gets all questions for a specific survey_id. Links architectures, questions, & surveys tables
        const query = client.query('SELECT DISTINCT questions.question_id, questions.question_text, questions.question_is_active, questions.question_type FROM questions, architectures, surveys WHERE surveys.survey_id = ($1) AND questions.question_is_active = true AND questions.question_id = architectures.question_id AND architectures.survey_id = surveys.survey_id ORDER BY questions.question_id ASC', [survey_id]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

// Route that gets all options for a specified survey_id
router.get('/api/surveyOptions/:survey_id', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Creates a variable for the passed parameter -- survey_id
    var survey_id = req.params.survey_id;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that returns all options for a specified survey_id. Links options, architectures, and surveys tables.
        const query = client.query('SELECT DISTINCT options.option_id, options.option_text, options.option_is_active, options.question_id FROM surveys, options, architectures WHERE options.option_is_active = true AND options.question_id = architectures.question_id AND architectures.survey_id = surveys.survey_id AND surveys.survey_id = ($1) ORDER BY options.question_id, options.option_id ASC', [survey_id]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

// Route that gets all options for a specified survey_id
router.get('/api/surveyResponses/:survey_id', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Creates a variable for the passed parameter -- survey_id
    var survey_id = req.params.survey_id;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that gets all responses for a specified survey_id
        const query = client.query('SELECT DISTINCT responses.response_id, responses.survey_id, responses.question_id, responses.option_id, responses.response_text, responses.date_taken, responses.survey_hash FROM responses, architectures, surveys WHERE responses.survey_id = architectures.survey_id AND architectures.survey_id = surveys.survey_id AND surveys.survey_id = ($1) ORDER BY response_id ASC', [survey_id]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

// Route that gets all surveys 
router.get('/api/surveys', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that gets all active surveys
        const query = client.query('SELECT * FROM surveys');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

// Route that gets all active surveys 
router.get('/api/activeSurveys', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that gets all active surveys
        const query = client.query('SELECT DISTINCT * FROM surveys WHERE survey_is_active = true');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

/* 
    Post functions
*/

router.post('/api/postSurveyResponse', (req, res) => {
    //Array to hold results from query
    const results = req.body;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
            
        let query;
        for (let i = 0; i < results.length; i++) {
            let result = results[i];
            // Created query that inserts an individual response into the responses table 
            query = client.query('INSERT INTO responses (survey_id, question_id, option_id, response_text, survey_hash) VALUES ($1, $2, $3, $4, $5)', [result.survey_id, result.question_id, result.option_id, result.response_text, result.survey_hash]);
        }

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});
/*
// Route that will post a survey given a survey name. The survey_id and date_taken will be automatically given by the database
router.post('/api/postSurvey', (req, res, next) => {
    // Created array that will hold the data to be passed to the sql function
    const results = req.body;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        let query;
        // Created query that will insert a survey_name into the surveys table.
        query = client.query('INSERT INTO surveys (survey_name) VALUES ($1)', [data.survey_name]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});
*/
// Route that will post a survey given a survey name. The survey_id and date_taken will be automatically given by the database
router.post('/api/postSurvey', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Created array that will hold the data to be passed to the sql function
    const data = { survey_name: req.body.survey_name };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // Created query that will insert a survey_name into the surveys table.
        const query = client.query('INSERT INTO surveys (survey_name) VALUES ($1)', [data.survey_name]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});



// Route that will post a question given a question_text & question_type. The question_id and question_is_active will be automatically given by the database
router.post('/api/postQuestion', (req, res, next) => {
    //Array to hold results from query
    const results = [];

    const data = { question_text: req.body.question_text, question_type: req.body.question_type };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // Created query that will insert a question into the questions table given question_text & question_type
        const query = client.query('INSERT INTO questions (question_text, question_type) VALUES($1, $2)', [data.question_text, data.question_type]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});

//Route that will post an option given a option_text & question_id. The option_id and option_is_active will be automatically given by the database
router.post('/api/postOption', (req, res, next) => {
    //Array to hold results from query
    const results = [];

    const data = { option_text: req.body.option_text, question_id: req.body.question_id };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // Created query that will insert an option into the options table given an option_text & a question_id
        const query = client.query('INSERT INTO options (option_text, question_id) VALUES($1, $2)', [data.option_text, data.question_id]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});

// Route that will assign a survey a question and that question an option
router.post('/api/postArchitecture', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    const data = { 
        survey_id: req.body.survey_id, 
        question_id: req.body.question_id, 
        option_id: req.body.option_id };

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query the will insert a specifc survey, question, option combination into the architectures table
        const query = client.query('INSERT INTO architectures (survey_id, question_id, option_id) VALUES($1, $2, $3)', [data.survey_id, data.question_id, data.option_id]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});

/* 
    Put/Update functions
*/

router.put('/api/updateSurveyQuestionActive', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Created array that will hold the data to be passed to the sql function
    const data = { question_id: req.body.question_id, question_is_active: req.body.question_is_active };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // Created query that will update a specific question in the questions table given a question_id
        const query = client.query('UPDATE questions set question_is_active = ($2) WHERE question_id = ($1)', [data.question_id, data.question_is_active]);


        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.put('/api/updateSurveyOptionActive', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    // Created array that will hold the data to be passed to the sql function
    const data = { option_id: req.body.option_id, option_is_active: req.body.question_is_active };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // // Created query that will update a specific option in the questions table given a option_id
        const query = client.query('UPDATE options set option_is_active = ($2), WHERE option_id = ($1)', [data.option_id, data.option_is_active]);


        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

// Exports all routes and allows them to be imported by other
module.exports = router;