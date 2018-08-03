
exports.up = function (knex, Promise) {
  return knex.schema.createTable('classmates', classmates => {
    classmates.increments()
    classmates.text("firstName")
    classmates.text("lastName")
    classmates.string("photo")
    classmates.text("hometownLat")
    classmates.text("hometownLong")
    classmates.text("prevOccupation")
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('classmates')

};