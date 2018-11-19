var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Ca$hCo@localhost:5432/CashCoalition';

// Get Survey information functions



// Get Homepage
router.get('/', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', 'client', 'dist', 'index.html'));
});

router.get('/api/surveyQuestions/:survey_id', (req, res, next) => {
    const results = [];
    var survey_id = req.params.survey_id;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
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

router.get('/api/surveyOptions/:survey_id', (req, res, next) => {
    const results = [];
    var survey_id = req.params.survey_id;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        const query = client.query('SELECT DISTINCT options.option_id, options.option_text, options.option_is_active, options.question_id FROM surveys, options, architectures WHERE options.question_id = architectures.question_id AND architectures.survey_id = surveys.survey_id AND surveys.survey_id = ($1) ORDER BY options.question_id ASC', [survey_id]);
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

router.get('/api/surveyResponses/:survey_id', (req, res, next) => {
    const results = [];

    var survey_id = req.params.survey_id;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('SELECT DISTINCT responses.response_id, responses.survey_id, responses.question_id, responses.option_id, responses.response_text, responses.date_taken FROM responses, architectures, surveys WHERE responses.survey_id = architectures.survey_id AND architectures.survey_id = surveys.survey_id AND surveys.survey_id = ($1) ORDER BY response_id ASC', [survey_id]);
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

router.get('/api/surveys', (req, res, next) => {
    const results = [];

    
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('SELECT DISTINCT * FROM surveys');
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

router.get('/api/getQuestionLength', (req, res, next) => {
    const results = [];


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('SELECT * FROM questions ORDER BY question_id DESC LIMIT 1');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row.question_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});
router.get('/api/getSurveyLength', (req, res, next) => {
    const results = [];


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('SELECT * FROM surveys ORDER BY survey_id DESC LIMIT 1');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row.survey_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.get('/api/getOptionLength', (req, res, next) => {
    const results = [];


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('SELECT * FROM options ORDER BY option_id DESC LIMIT 1');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row.option_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});




router.post('/api/postSurveyResponse', (req, res, next) => {
    const results = [];

    const data = { survey_id: req.body.survey_id, question_id: req.body.question_id, option_id: req.body.option_id, response_text: req.body.response_text };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        const query = client.query('INSERT INTO responses (survey_id, question_id, option_id, response_text) VALUES ($1, $2, $3, $4)', [data.survey_id, data.question_id, data.option_id, data.response_text]);

        // Stream results back one row at a time

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});





router.put('/api/updateSurveyQuestion', (req, res, next) => {
    const results = [];

    const data = { question_id: req.body.question_id, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // SQL Query > Select Data
        const query = client.query('UPDATE questions set question_text = ($2), question_is_active = ($3), question_type = ($4) WHERE question_id = ($1)', [data.question_id, data.question_text, data.question_is_active, data.question_type]);


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

router.put('/api/updateSurveyOption', (req, res, next) => {
    const results = [];

    const data = { option_id: req.body.option_id, option_is_active: req.body.question_is_active };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // SQL Query > Select Data
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

router.post('/api/insertSurveyQuestions', (req, res, next) => {
    const results = [];

    const data = { question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        client.query('INSERT INTO questions (question_num, question_text, question_is_active, question_type) VALUES ($1, $2, $3, $4)', [data.question_num, data.question_text, data.question_is_active, data.question_type]);

        const query = client.query('SELECT * FROM questions ORDER BY question_id DESC');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
            //return row.question_id;
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);

        });
    });
});



router.put('/api/newSurvey', (req, res, next) => {
    const results = [];

    const data = { question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text, option_is_active: req.body.option_is_active };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        client.query('INSERT INTO questions (question_id, question_num, question_text, question_type) VALUES ($1, $2, $3, $4)', [data.question_id, data.question_num, data.question_text, data.question_type]);

        client.query('INSERT INTO options (option_num, option_text, option_is_active, question_id) VALUES ($1, $2, $3, $4)', [data.question_num, data.question_text, data.question_type, data.question_id]);

        client.query('INSERT INTO architectures(survey_id, question_id, option_id) VALUES ($1, $2, $3)'[data.survey_id, data.question_id, data.option_id]);

        const query = client.query('SELECT * FROM questions');
        // Stream results back one row at a time
        query.on('row', (row) => {
            newSurveyID.push(row.question_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.post('/api/postSurveyID', (req, res, next) => {
    const results = [];

    const data = { survey_name: req.body.survey_name };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        const query = client.query('INSERT INTO surveys (survey_name) VALUES ($1)', [data.survey_name]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});

router.get('/api/getSurveyID', (req, res, next) => {
    const results = [];
    var surveyID;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        const query = client.query('SELECT * FROM surveys ORDER BY survey_id DESC LIMIT 1');

        query.on('row', (row) => {
            results.push(row.survey_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.post('/api/postQuestionID', (req, res, next) => {
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

        // SQL Query > Select Data
        const query = client.query('INSERT INTO questions (question_text, question_type) VALUES($1, $2)', [data.question_text, data.question_type]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});


router.get('/api/getQuestionID', (req, res, next) => {
    const results = [];


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        const query = client.query('SELECT * FROM questions ORDER BY question_id DESC LIMIT 1');

        query.on('row', (row) => {
            results.push(row.question_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});



router.post('/api/postOptionID', (req, res, next) => {
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

        // SQL Query > Select Data
        const query = client.query('INSERT INTO options (option_text, question_id) VALUES($1, $2)', [data.option_text, data.question_id]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});
router.get('/api/getOptionID', (req, res, next) => {
    const results = [];


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        const query = client.query('SELECT * FROM options ORDER BY option_id DESC LIMIT 1');

        query.on('row', (row) => {
            results.push(row.option_id);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.post('/api/postArchitecutres', (req, res, next) => {
    const results = [];
    const data = { survey_id: req.body.survey_id, question_id: req.body.question_id, option_id: req.body.option_id }

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        const query = client.query('INSERT INTO architectures (survey_id, question_id, option_id) VALUES($1, $2, $3)', [data.survey_id, data.question_id, data.option_id]);

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
        });
    });
});






module.exports = router;