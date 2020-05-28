const db = require('../data/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClassById,
  getClassType,
  getClass,
  getIntensity,
  getByLocation,
  getByDuration,
  getByInstructor,
  addFavorite
};

function addUser(user) {
  return db
    .select('*')
    .from('user')
    .insert(user);
}

function getUsers() {
  return db.select('*').from('user');
}

function findBy(user) {
  return db
    .select('*')
    .from('user')
    .where(user);
}

function getClass() {
  return db.select('*').from('class');
}

function getClassById(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .first();
}

function getClassType(type) {
  return db
    .select('*')
    .from('class')
    .where('class.type', '=', `${type}`);
}

function getIntensity(intensity) {
  return db
    .select('*')
    .from('class')
    .where({intensity});
}

function getByLocation(location) {
  return db
    .select('*')
    .from('class')
    .where({location});
}

function getByDuration(duration) {
  return db
    .select('*')
    .from('class')
    .where({duration});
}

function getByInstructor(instructor_name) {
  return db
    .select('*')
    .from('class')
    .where({instructor_name});
}

function addFavorite(id) {
  return db
    .select('*')
    .from('class as c')
    .join('favorite as f ', 'f.class_id', 'c.id')
    .join('user as u', 'u.id', 'f.id')
    .where('u.id', '=', `${id}`, 'c.signedUp', '=', true);
}
