const Promise = require('bluebird');

const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const data = {
  campuses: [
    {
      name: 'Luna',
      image: 'https://spaceholder.cc/250x250'
    },
    {
      name: 'Terra',
      image: 'https://spaceholder.cc/250x250'
    },
    {
      name: 'Mars',
      image: 'https://spaceholder.cc/250x250'
    },
    {
      name: 'Titan',
      image: 'https://spaceholder.cc/250x250'
    }
  ],
  students: [
    {name: 'Katherine Johnson', email: 'kathy@nasa.gov', campusId: '1'},
    {name: 'Grace Hopper', email: 'grace@navy.mil', campusId: '1'},
    {name: 'Ada Lovelace', email: 'ada@babbage.net', campusId: '2'},
    {name: 'Mae Jemison', email: 'mjemison@nasa.gov', campusId: '2'},
    {name: 'Allie Fauer', email: 'allie@mhacademy.edu', campusId: '3'},
    {name: 'Stella Chung', email: 'stella@mhacademy.edu', campusId: '3'},
    {name: 'Nyota Uhura', email: 'uhura@mhacademy.edu', campusId: '4'},
    {name: 'River Tam', email: 'river@mhacademy.edu', campusId: '4'}
  ]
};

const seed = () => {
  const creatingCampuses = data.campuses.map(function (campus) {
    return Campus.create(campus);
  });
  const creatingStudents = data.students.map(function (student) {
    return Student.create(student);
  });

  return Promise.all([creatingCampuses, creatingStudents]);
};


console.log('syncing database!');

db.sync({force: true})
.then(() => {
  console.log('seeding db');
  return seed();
})
.then(() => {
  console.log('seeding successful! ctrl+c to exit');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
