var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://enterprisedb:@lgozzine@localhost:5444/CashCoalition';

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

router.get('/api/surveyResponses/:survey_name', (req, res, next) => {
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
    const query = client.query('INSERT INTO responses (survey_id, question_id, option_id, response_text) VALUES ($1, $2, $3, $4)',[data.survey_id, data.question_id, data.option_id, data.response_text] );

    // Stream results back one row at a time
    
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

router.post('/api/insertSurveyQuestions', (req, res, next) => {
  const results = [];

  const data = {question_num: req.body.question_num, question_text: req.body.question_text, question_is_active: req.body.question_is_active, question_type: req.body.question_type};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    // SQL Query > Select Data
    client.query('INSERT INTO questions (question_num, question_text, question_is_active, question_type) VALUES ($1, $2, $3, $4)', [data.question_num, data.question_text, data.question_is_active, data.question_type] );

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



module.exports = router;
