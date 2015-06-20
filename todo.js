var express = require('express');
var router = express.Router(); //router for node js

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);  //db name and table name

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

router.get('/contactlist', function(req, res) {
	db.contactlist.find(function(err, docs) {
		res.json(docs);
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

router.post('/contactlist', function (req, res) {
	db.contactlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});


router.delete('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
	console.log(id);
});


router.get('/contactlist/:id', function(req, res) {
	var id= req.params.id;
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});


router.put('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify(
		{query: 
			{_id: mongojs.ObjectId(id)},
			update: 
			{$set: 
				{name: req.body.name, email: req.body.email, number: req.body.number}
			},
		new: true
		}, 
		function (err, doc) {	
			res.json(doc);
		
	});
});









module.exports = router;

