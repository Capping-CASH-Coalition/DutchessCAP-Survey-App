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

router.get('/api/surveyQuestions/:survey_name', (req, res, next) => {
    const results = [];
    var survey_name = req.params.survey_name;
  
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }


      const query = client.query('SELECT DISTINCT architectures.question_id, questions.question_num, questions.question_text, questions.question_is_active, questions.question_type, options.option_id, options.option_num, options.option_text, options.option_is_active FROM surveys, architectures, questions, options WHERE architectures.survey_id = surveys.survey_id And surveys.survey_name = ($1) AND options.question_id = architectures.question_id AND questions.question_id = architectures.question_id ORDER BY question_id  ASC', [survey_name]);
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


router.post('/api/surveyResponses/:survey_name', (req, res, next) => {
  const results = [];

    var survey_name = req.params.survey_name
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }


    const query = client.query('SELECT DISTINCT architectures.question_id, questions.question_num, questions.question_text, questions.question_is_active, questions.question_type, responses.response_id, responses.option_id, responses.response_text, responses.date_taken FROM surveys, architectures, questions, responses WHERE architectures.survey_id = surveys.survey_id And surveys.survey_name = ($1) AND responses.question_id = architectures.question_id AND questions.question_id = architectures.question_id ORDER BY question_id  ASC', [survey_name]);
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





router.post('/api/postSurveyResponse', (req, res, next) => {
  const results = [];

  const data = {survey_id: req.body.survey_id, question_id: req.body.question_id, option_id: req.body.option_id, response_text: req.body.response_text};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('INSERT INTO responses (survey_id, question_id, option_id, response_text VALUES ($1, $2, $3, $4)',[data.survey_id, data.question_id, data.option_id, data.response_text] );

    const query = client.query('SELECT * FROM responses')

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





router.put('/api/updateSurveyQuestions', (req, res, next) => {
  const results = [];

  const data = {question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text, option_is_active: req.body.option_is_active};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('UPDATE questions set question_num = ($2), question_text = ($3), question_is_active = ($4), question_type = ($5) WHERE question_id = ($1)', [data.question_id, data.question_num, data.question_text, data.question_is_active, data.question_type] );

    const query = client.query('SELECT * FROM questions');
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

router.put('/api/insertSurveyQuestions', (req, res, next) => {
  const results = [];

  const data = {survey_id: survey_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('INSERT INTO questions (question_num, question_text, question_is_active, question_type VALUES ($1, $2, $3, $4)', [data.question_num, data.question_text, data.question_is_active, data.question_type] );

    const query = client.query('SELECT * FROM questions');
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

router.put('/api/updateSurveyOptions', (req, res, next) => {
  const results = [];

  const data = {survey_id: req.body.survey_id, question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text, option_is_active: req.body.option_is_active};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('UPDATE questions set question_num = ($2), question_text = ($3), question_is_active = ($4), question_type = ($5)', [data.question_num, data.question_text, data.question_is_active, data.question_type] );

    const query = client.query('SELECT * FROM questions');
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

router.put('/api/newSurvey', (req, res, next) => {
  const results = [];

  const data = {survey_id: req.body.survey_id, question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text, option_is_active: req.body.option_is_active};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('INSERT INTO questions (question_id, question_num, question_text, question_type) VALUES ($1, $2, $3, $4)', [data.question_id, data.question_num, data.question_text, data.question_type] );

    client.query('INSERT INTO options (option_num, option_text, option_is_active, question_id) VALUES ($1, $2, $3, $4)', [data.question_num, data.question_text, data.question_type, data.question_id]);

    client.query('INSERT INTO architectures(survey_id, question_id, option_id) VALUES ($1, $2, $3)' [data.survey_id, data.question_id, data.option_id]);

    const query = client.query('SELECT * FROM questions');
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

router.put('/api/updateSurvey', (req, res, next) => {
  const results = [];

  const data = {survey_id: req.body.survey_id, question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text, option_is_active: req.body.option_is_active};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('UPDATE questions set question_num = ($2), question_text = ($3), question_is_active = ($4), question_type = ($5)', [data.question_num, data.question_text, data.question_is_active, data.question_type] );

    const query = client.query('SELECT * FROM questions');
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

// Get options


// Get Responses


// Get Survey Form
router.post('/api/surveyID', (req, res, next) => {
    results = [];
    

  const data = {survey_name: req.body.survey_name};
  // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        // SQL Query > Select Data
        const query = client.query('SELECT surveys.survey_id FROM surveys WHERE surveys.survey_name = ($1)', [data.survey_name]);
        query.on('row', (row) => {
            results.push(row);
        });
        query.on('end', () => {
            done();
           res.json(results);
        });

     


  });
});

// Get Identification
router.get('/api/identification', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM identification ORDER BY personal_id ASC');
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

// Get Admin password
router.get('/api/user/:account_username', (req, res, next) => {
  const results = [];
  const username = req.params.account_username;
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Update Data
    client.query('SELECT account_password FROM admins WHERE account_username=($1)',
    [username]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM admins ORDER BY account_password ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

// Add/Post Survey information functions

/* Add question
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/

router.post('/api/questions', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, survey_version: req.body.survey_version, question_id: req.body.question_id, question_num: req.body.question_num, question_text: req.body.question_text, question_type: req.body.question_type};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO questions(survey_name, survey_version, question_id, question_num, question_text, question_type) values($1, $2, $3, $4, $5, $6)',
    [data.survey_name, data.survey_version, data.question_id, data.question_num, data.question_text, data.question_type]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM questions ORDER BY question_id ASC');
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

/* Add option
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/

router.post('/api/options', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, question_id: req.body.question_id, option_id: req.body.option_id, option_num: req.body.option_num, option_text: req.body.option_text};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO options(survey_name, question_id, option_id, option_num, option_text) values($1, $2, $3, $4, $5)',
    [data.survey_name, data.question_id, data.option_id, data.option_num, data.option_text]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM options ORDER BY question_id ASC');
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

/* Add Survey AKA new Survey Version
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/
router.post('/api/surveys', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, survey_id: req.body.survey_id};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO surveys(survey_name, survey_id) values($1, $2)',
    [data.survey_name, data.survey_id]);
    // SQL Query > Select Data
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

router.post('/api/versions', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, survey_version: req.body.survey_version, date_created: req.body.date_created};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO versions(survey_name, survey_version, date_created) values($1, $2, $3)',
    [data.survey_name, data.survey_version, data.date_created]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM versions ORDER BY survey_name, survey_version  ASC');
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

/* Add a person that took the survey
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/

router.post('/api/person', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, survey_version: req.body.survey_version, personal_id: req.body.personal_id, survey_taken_id: req.body.survey_taken_id, first_name: req.body.first_name, last_name: req.body.last_name, email_address: req.body.email_address, phone_number: req.body.phone_number};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO identification(survey_name, survey_version, personal_id, survey_taken_id, first_name, last_name, email_address, phone_number) values($1, $2, $3, $4, $5, $6, $7, $8)',
    [data.survey_name, data.survey_version, data.personal_id, data.survey_taken_id, data.first_name, data.last_name, data.email_address, data.phone_number]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM identification ORDER BY personal_id ASC');
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

/* Add a new User
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/

router.post('/api/user', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {account_username: req.body.account_username, account_password: req.body.account_password};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO admins(account_username, account_password) values($1, $2)',
    [data.account_username, data.account_password]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM admins ORDER BY account_username ASC');
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

/* Add a Survey taken / Respondant
  Test this by using curl --data "survey_version=1&question_id=20&question_num=20&question_text=testitsucka&question_type=radio" http://127.0.0.1:3000/api/question
*/

router.post('/api/respondant', (req, res, next) => {
  const results = [];
  // Grab data from http request
  const data = {survey_name: req.body.survey_name, survey_version: req.body.survey_version, survey_taken_id: req.body.survey_taken_id};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO forms(survey_name, survey_version, survey_taken_id) values($1, $2, $3)',
    [data.survey_name, data.survey_version, data.survey_taken_id]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM forms ORDER BY survey_name, survey_version ASC');
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



router.put('/api/user/:account_username', (req, res, next) => {
  const results = [];

  // Grab data from the URL parameters
  const username = req.params.account_username;
  const data = {account_password: req.body.account_password};

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Update Data
    client.query('UPDATE admins SET account_password=($1) WHERE account_username=($2)',
    [data.account_password, username]);
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM admins ORDER BY account_username ASC");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
