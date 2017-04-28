var express = require('express');
var Groups = require('../models/groups');

const router = express.Router();

/*
  /boards -- GET/POST
  /boards/:id -- GET/DELETE
              -- PATCH --> currently only works for patching the name of the board
*/

router.post('/', function(req, res) {
	var newGroup = new Groups({
		title: req.body.title,
		startDate: req.body.startDate,
		endDate: req.body.endDate,
		link: req.body.link,
		calendar: req.body.calendar,
	});

	newGroup.save(function(err) {
		if (err) res.status(500).json({ error: err });
		else {
			console.log('Saved Group!');
			res.status(200).json(newGroup);
		}
	});
});

router.get('/:id', function(req, res) {
	Groups.findOne({ _id: req.params.id }, function(err, group) {
		if (err) res.status(500).json({ error: err });
		else {
			res.status(200).json(group);
		}
	});
});


module.exports = router;
