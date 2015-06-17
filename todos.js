var express = require('express');

var router = express.Router();


var Items = [
			{id: 1, desc: 'A item'},
			{id: 2, desc: 'B item'},
			{id: 3, desc: 'C item'},
];

// define routes
router.get('/', function(req, res) {
	res.render('index', {
		title: 'My Appliation', 
		items: Items
	});
});



router.post('/add', function (req, res) {
	var newItem = req.body.newItem;

	Items.push({
		id: Items.length + 1, 
		desc: newItem
	});

	res.redirect('/');
});

module.exports = router;

