const express = require('express')
const router = express.Router()
const { getUser, setUser, updateUser, deleteUser} = require('../controllers/userCountroller')


router.get('/', getUser)
router.post('/',setUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

// router.route('/').get(getUser).post(setUser)
// router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router