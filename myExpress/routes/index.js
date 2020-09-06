var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tutorial Express with NodeJs' });
});

router.get('/list_books', function(req, res, next) {
  res.end('GET requested => list all books');
});

router.post('/add_book', function(req, res, next) {
  res.end('POST requested => add book');
});

router.put('/update_book', function(req, res, next) {
  res.end('PUT requested => update book');
});

router.delete('/delete_book', function(req, res, next) {
  res.end('DELETE requested => delete book');
});

module.exports = router;
