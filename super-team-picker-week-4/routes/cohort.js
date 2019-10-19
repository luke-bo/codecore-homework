const express = require("express");
const router = express.Router();
const knex = require("../db/client");


// CREATE

router.get("/new", (req, res) => {
  res.render("cohorts/new");
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const members = req.body.members;
  const logoUrl = req.body.logoUrl;

  knex("cohorts")
    .insert({
      name: name,
      members: members,
      logoUrl: logoUrl,
    })
    .returning("*")
    .then(cohort => {
      cohortId = cohort[0].id 
      // res.render('cohorts/show', {cohort: cohort})
      // res.redirect('cohorts/cohort.id');
      res.redirect(`/cohorts/${cohortId}`); 
    });
})

// READ

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("cohorts")
    .then(cohorts => {
      res.render('cohorts/index', {cohorts});
    })
});

router.get("/:id", (req, res) => {
  const cohortId = req.params.id;
  
  // Team Generator
  const params = req.query;
  console.dir(req.body);
  const selectedMethod = params.methodSelect
  const quantity = params.quantity
  
  knex
    .select("*")
    .from("cohorts")
    .where("id", cohortId)
    .first()
    .then(cohort => {
      if(cohort) {
        res.render("cohorts/show", {
          cohort, 
          selectedMethod,
          quantity
        });
      } else {
        res.send(`Cannot find cohort with id ${cohortId}`);
      }
    });
});

// UPDATE

router.get("/:id/edit", (req, res) => {
  const cohortId = req.params.id;
  knex("cohorts")
    .where("id", cohortId)
    .first()
    .then(cohort => {
      res.render("cohorts/edit", {
        cohort: cohort,
      });
    })
});

router.patch("/:id", (req, res) => {
  const cohortId = req.params.id;
  knex("cohorts")
    .where("id", cohortId)
    .update({
      name: req.body.name,
      members: req.body.members,
      logoUrl: req.body.logoUrl
    })
    .then(data => {
      res.redirect(`${cohortId}`)
    })
})

// Destroy

router.delete("/:id", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .delete()
    .then(data => {
      console.log(data);
      res.redirect("/cohorts");
    })
})


module.exports = router;