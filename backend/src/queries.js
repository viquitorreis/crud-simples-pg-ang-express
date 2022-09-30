const getNames = 'select * from names'
const getNamesById = 'select * from names where id = $1'
const checkName = 'select s from names s where s.name = $1'
const updateName = 'update names set name = $1 where id = $2'
const addName = 'insert into names (name) values ($1)'
const deleteName = 'delete from names where id = $1'

module.exports = {
    getNames,
    getNamesById,
    checkName,
    updateName,
    addName,
    deleteName
}