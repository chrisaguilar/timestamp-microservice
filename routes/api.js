const express = require('express');

const router = express.Router();

const re = /\D/g;

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

router.get('/:date', (req, res) => {
    const { date } = req.params;
    const parsedDate = re.test(date) ? new Date(date) : new Date(+date * 1000);
    res.json({
        unix: parsedDate.getTime() / 1000,
        natural: `${months[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
    });
});

module.exports = router;
