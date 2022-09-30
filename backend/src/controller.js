const pool = require('../db')
const queries = require('./queries')

const getNames = (req, res) => {
    pool.query(queries.getNames, (err, results) => {
        if (err) throw err
        res.status(200).json(results.rows)
    })
}

const getNamesById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const response = await pool.query(queries.getNamesById, [id])
        //tirando essa bosta do array e retornando o primeiro
        res.status(200).json(response.rows[0])
    } catch (e) {
        console.log(e)
        return res.status(500).json('Erro interno no servidor')
    }
}

const updateName = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body
    // try {
    //     const response = await pool.query(queries.updateName, [name, id])
    //     console.log(response)
    //     res.status(200).json('User foi atualizado com sucesso')
    // } catch (e) {
    //     console.log(e)
    //     return res.status(500).json('Erro interno no servidor')
    // }
    pool.query(queries.updateName, [name, id], (err, results) => {
        if (err)
            throw err
        res.status(204).send('estudante criado com sucesso')
    })


}

const addName = (req, res) => {
    const { name } = req.body
    pool.query(queries.checkName, [name], (err, results) => {
        // User está sendo adicionado mesmo se existir
        if (results.rows.length) {
            res.send('user ja existe')
        }
        pool.query(queries.addName, [name], (err, results) => {
            if (err) throw err
            res.status(201).json('User criado com sucesso')
            console.log('user criado :P')
        })
    })
}

const deleteName = async (req, res) => {
    const id = req.params.id
    try {
        const response = await pool.query(queries.deleteName, [id])
        console.log(response)
        res.json(`${id} deletado com sucesso`)
    } catch(e) {
        console.log(e)
        return res.status(500).json('Erro interno no servidor')
    }
    // pool.query(queries.deleteName, [id], (error, results) => {
    //     if(error) throw error
    //     res.status(200).send(`${id} deletado com sucesso`)
    // })
}

module.exports = {
    getNames,
    addName,
    getNamesById,
    updateName,
    deleteName
}