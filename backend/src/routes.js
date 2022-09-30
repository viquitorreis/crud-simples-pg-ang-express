const {Router} = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getNames)
router.get('/:id', controller.getNamesById)
router.put('/:id', controller.updateName)
router.post('/', controller.addName)
router.delete('/:id', controller.deleteName)

module.exports = router