
// Auto-generated by AutoPilot on 24-07-2023 at 23:01:36

const router = require('express').Router();
const { query } = require('express');

// Route to get the cube of a number from query param
router.get('/test66', (req, res) => {
    const { number } = req.query;
    // Check if the query param is given
    if (number === undefined) {
        return res.status(400).send({
            error: 'Number not provided'
        });
    }
    // Calculate the cube of the number
    const cube = Math.pow(number, 3);
    // Return the response
    return res.status(200).send({
        result: cube
    });
});

module.exports = router;