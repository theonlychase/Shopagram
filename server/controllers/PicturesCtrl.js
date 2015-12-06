var Picture = require('../models/pictures');

module.exports = {

  read: function(req, res) {
    Picture.find({}, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  create: function(req, res) {
    var newPicture = new Picture(req.body);
    newPicture.save(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    Picture.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        Picture.find({}, function(err, result) {
          if (err) return res.status(500).send(err);
          res.send(result);
        });
      }
    });
  }

};
