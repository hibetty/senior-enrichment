'use strict';
const api = require('express').Router();
const db = require('../db/models');


api.get('/hello', (req, res) => res.send({hello: 'world'}));

/* --- GET REQUESTS --- */

api.get('/students', (req, res, next) => {
  db.Student.findAll({order: 'id'})
  .then(students => res.send(students))
  .catch(next);
});

api.get('/campuses', (req, res, next) => {
  db.Campus.findAll()
  .then(campuses => res.send(campuses))
  .catch(next);
});

api.get('/campus/:id', (req, res, next) => {
  let campus = req.params.id;
  let getCampus = db.Campus.findById(campus);
  let getStudents = db.Student.findAll({
    where: {
      campusId: campus
    }
  });

  Promise.all([getCampus, getStudents])
  .then(result => res.send(result))
  .catch(next);
});

api.get('/student/:id', (req, res, next) => {
  let id = req.params.id;
  db.Student.findOne({
    where: {
      id: id
    }, include: [db.Campus]
  })
  .then(student => res.send(student))
  .catch(next);
});


/* --- POST REQUESTS --- */

api.post('/students', (req, res, next) => {
  db.Student.create(req.body)
  .then(student => res.status(201).json(student))
  .catch(next);
});

api.post('/campuses', (req, res, next) => {
  db.Campus.create(req.body)
  .then(campus => res.status(201).json(campus))
  .catch(next);
});


/* --- PUT REQUESTS --- */

api.put('/student/:id', (req, res, next) => {
  let studentId = req.params.id;
  db.Student.update({
    //UPDATE STUFF HEREEEEEE
  }, {
    where: {
      id: studentId
    }
  })
  .then(student => res.json(student))
  .catch(next);
});

api.put('/campus/:id', (req, res, next) => {
  let campusId = req.params.id;
  db.Campus.update({
    //UPDATE STUFF HEREEEEEE
  }, {
    where: {
      id: campusId
    }
  })
  .then(campus => res.json(campus))
  .catch(next);
});


/* --- DELETE REQUESTS --- */

api.delete('/student/:id', (req, res, next) => {
  let studentId = req.params.id;
  db.Student.destroy({
    where: {
      id: studentId
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});

api.delete('/campus/:id', (req, res, next) => {
  let campusId = req.params.id;
  db.Campus.destroy({
    where: {
      id: campusId
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});


/* --- Error Handling --- */

api.use(function(err, req, res, next) {
  console.log(next);
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = api;
