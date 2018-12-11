// These are all of the required packages
var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
// This string is what allows index.js to connect to the database. It is the name of the server://nameOfOwnerOfDatabase:password@host:portNumber/nameOfDatabase

//const connectionString = process.env.DATABASE_URL || 'postgres://enterprisedb:@lgozzine@localhost:5444/CashCoalition';

// stephens
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:battle@localhost:5444/CashCoalition';

// Brians
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:ident@localhost:5432/CashCoalition';

// Garys
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Ca$hCo@localhost:5432/CashCoalition';

//Christians
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:lina1968@localhost:5432/CashCoalition';

// Zachs
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:zachary510@localhost:5432/CashCoaltion';

/* 
    Get functions
*/

// Get Homepage
router.get('/', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', 'client', 'dist', 'index.html'));
 });
 
 // Route that gets all questions for a specified survey_id
 router.get('/api/activeSurveyQuestions/:survey_id', (req, res, next) => {
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
 
 // Route that gets all questions for a specified survey_id
 router.get('/api/allSurveyQuestions/:survey_id', (req, res, next) => {
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
         const query = client.query('SELECT DISTINCT questions.question_id, questions.question_text, questions.question_is_active, questions.question_type FROM questions, architectures, surveys WHERE surveys.survey_id = ($1) AND questions.question_id = architectures.question_id AND architectures.survey_id = surveys.survey_id ORDER BY questions.question_id ASC', [survey_id]);
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
 router.get('/api/activeSurveyOptions/:survey_id', (req, res, next) => {
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
 router.get('/api/allSurveyOptions/:survey_id', (req, res, next) => {
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
         const query = client.query('SELECT DISTINCT options.option_id, options.option_text, options.option_is_active, options.question_id FROM surveys, options, architectures WHERE options.question_id = architectures.question_id AND architectures.survey_id = surveys.survey_id AND surveys.survey_id = ($1) ORDER BY options.question_id, options.option_id ASC', [survey_id]);
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
 router.get('/api/allSurveys', (req, res, next) => {
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
         const query = client.query('SELECT * FROM surveys ORDER BY survey_id ASC');
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
 
 // Route that gets all survey info
 router.get('/api/allSurveyInfo', (req, res, next) => {
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
        // Created query that gets all survey info
        const query = client.query('SELECT s.survey_id, s.survey_name, s.date_created, s.survey_is_active, COUNT( DISTINCT r.survey_hash) as response_count FROM responses r INNER JOIN surveys s ON r.survey_id = s.survey_id GROUP BY s.survey_id');
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
 
 // Route that gets all submissions per date for the past 1 YEAR
 router.get('/api/surveySubmissionsOverTime', (req, res, next) => {
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
        // Created query that gets all survey info
        const query = client.query("SELECT survey_id, date_taken, COUNT( DISTINCT survey_hash ) FROM responses WHERE date_taken >= CURRENT_DATE - INTERVAL '1 year' GROUP BY date_taken, survey_id");
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

router.get('/api/userPassword/:user_name', (req, res, next) => {
    //Array to hold results from query
    const results = [];
    var username = req.params.user_name;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            results.push('-1');
            return results;
        }
        // Created query that gets all active surveys
        const query = client.query('SELECT user_password FROM users WHERE user_name = ($1)', [username]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row.user_password);
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
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
             
         var query;
         for (let i = 0; i < req.body.length; i++) {
             // Created query that inserts an individual response into the responses table 
             query = client.query('INSERT INTO responses (survey_id, question_id, option_id, response_text, survey_hash) VALUES ($1, $2, $3, $4, $5)', [req.body[i].survey_id, req.body[i].question_id, req.body[i].option_id, req.body[i].response_text, req.body[i].survey_hash]);
         }
 
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 // Route that will post a survey given a survey name. The survey_id and date_taken will be automatically given by the database
 router.post('/api/postNewSurvey', (req, res) => {
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // Created query that will insert a survey_name into the surveys table.
        const query = client.query('INSERT INTO surveys (survey_name) VALUES ($1)', [req.body.survey_name]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});
 
 // Route that will post a question given a question_text & question_type. The question_id and question_is_active will be automatically given by the database
 router.post('/api/postQuestion', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
        // Created query that will insert a question into the questions table given question_text & question_type
        const query = client.query('INSERT INTO questions (question_text, question_type) VALUES($1, $2)', [req.body.question_text, req.body.question_type]);
         
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 //Route that will post an option given a option_text & question_id. The option_id and option_is_active will be automatically given by the database
 router.post('/api/postOption', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
 
         // Created query that will insert an option into the options table given an option_text & a question_id
         const query = client.query('INSERT INTO options (option_text, question_id) VALUES($1, $2)', [req.body.option_text, req.body.question_id]);

         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 // Route that will assign a survey a question and that question an option
 router.post('/api/postArchitecture', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
         // Created query the will insert a specifc survey, question, option combination into the architectures table
         const query = client.query('INSERT INTO architectures (survey_id, question_id, option_id) VALUES($1, $2, $3)', [req.body.survey_id, req.body.question_id, req.body.option_id]);
 
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 /* 
     Put/Update functions
 */
 
 router.put('/api/updateSurveyActive', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
         // Created query that will update a specific question in the questions table given a question_id
         const query = client.query('UPDATE surveys set survey_is_active = ($2) WHERE survey_id = ($1)', [req.body.survey_id, req.body.survey_is_active]);
 
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 router.put('/api/updateSurveyQuestionActive', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
         // Created query that will update a specific question in the questions table given a question_id
         const query = client.query('UPDATE questions set question_is_active = ($2) WHERE question_id = ($1)', [req.body.question_id, req.body.question_is_active]);
 
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 router.put('/api/updateSurveyOptionActive', (req, res) => {
     // Get a Postgres client from the connection pool
     pg.connect(connectionString, (err, client, done) => {
         // Handle connection errors
         if (err) {
             done();
             console.log(err);
             return res.status(500).json({ success: false, data: err });
         }
         // // Created query that will update a specific option in the questions table given a option_id
         const query = client.query('UPDATE options set option_is_active = ($2) WHERE option_id = ($1)', [req.body.option_id, req.body.option_is_active]);
 
         // After all data is returned, close connection and return results
         query.on('end', () => {
             done();
         });
     });
 });
 
 // Exports all routes and allows them to be imported by other
 module.exports = router;