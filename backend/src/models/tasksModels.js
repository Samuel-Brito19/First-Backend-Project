const conection = require('./conection')

const getAll = async () => {
    const tasks = await conection.execute('SELECT * FROM tasks')
    return tasks[0]

}

module.exports = {
    getAll,

}