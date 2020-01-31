let router = require("express").Router();
let Concert = require("../db").import("../models/concerts");
const validateSession = require("../middleware/validateSession");

router.get("/mine", validateSession, (req, res) => {
  Concert.findAll({
    where: { owner: req.user.id }
  })
    .then(concert => res.status(200).json(concert))
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/review", validateSession, (req, res) => {
  let concertReview = {
    owner: req.user.id,
    city: req.body.city,
    venue: req.body.venue,
    artist: req.body.artist,
    date: req.body.date,
    rating: req.body.rating,
    review: req.body.review
  };
  Concert.create(concertReview)
    .then(concert => res.status(200).json(concert))
    .catch(err => res.json(err.message));
});

router.get("/:id", (req, res) => {
  Concert.findOne({ where: { id: req.params.id, owner: req.user.id } })
    .then(concert => res.status(200).json(concert))
    .catch(err => res.status(500).json({ error: err }));
});

router.put("/:id", validateSession, (req, res) => {
  Concert.update(req.body, {
    where: { id: req.params.id, owner: req.user.id }
  })
    .then(
      (updateSuccess = concert => {
        res.json({
          concert: concert,
          message: "Updated"
        });
      })
    )
    .catch(err => res.status(500).json({ error: err }));
});

router.delete("/:id", validateSession, (req, res) => {
  let userid = req.user.id;
  let data = req.params.id;
  Concert.destroy({
    where: { owner: userid, id: data }
  }).then(
    (deleteConcert = concertReview => {
      res.send("Review has been removed");
    }),
    (deleteError = err => {
      res.send(500, err.message);
    })
  );
});

module.exports = router;
