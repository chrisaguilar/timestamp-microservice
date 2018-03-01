const { join } = require('path');
const express = require('express');

const app = express();

const re = new RegExp('\D', 'g');

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

app.set('port', parseInt(process.env.PORT, 10));

app.get('/api/:date', (req, res) => {
    const { date } = req.params;
    const parsedDate = (re.test(date)) ? (new Date(date)) : (new Date(+date * 1000));
    res.json({
        unix: (parsedDate.getTime() / 1000),
        natural: `${ months[ parsedDate.getMonth() ] } ${ parsedDate.getDate() }, ${ parsedDate.getFullYear() }`
    });
});

app.get('*', (req, res) => res.sendFile(join(__dirname, 'index.html')));

if (process.env.SINGLE) {
    app.listen(app.get('port'), () => console.log(`/timestamp listening on ${app.get('port')}`));
} else {
    module.exports = app;
}
