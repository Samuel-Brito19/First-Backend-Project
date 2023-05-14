const express = require('express')

const router = express.Router()

router.get('/taks', (req, res) => res.status(200).send('Botadogo campeão!'))

module.exports = router