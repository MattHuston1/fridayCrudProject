const database = require('./database-connection')

module.exports = {
    list() {
        return database('classmates').select('*')
    },

    read(id) {
        return database('classmates').select('*').where('id', id).first()
    },

    create(classmate) {
        return database('classmates').insert(classmate).returning('*')
            .then(record => record[0])
    },

    update(id, classmate) {
        return database('classmates').update(classmate).where('id', id).returning('*')
            .then(record => record[0])
    },

    delete(id) {
        return database('classmates').delete().where('id', id)
    },
}