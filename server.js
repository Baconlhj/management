const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
            {
            'id': 1,
            'img': 'https://placeimg.com/64/64/1',
            'name': '홍귈동',
            'birth': '950503',
            'gender': '남자',
            'job': '대학생'},
            {
            'id': 2,
            'img': 'https://placeimg.com/64/64/2',
            'name': '고길동',
            'birth': '610205',
            'gender': '남자',
            'job': '백수'},
            {
              'id': 3,
              'img': 'https://placeimg.com/64/64/3',
              'name': '이정민',
              'birth': '960122',
              'gender': '남자',
              'job': '휴학생'}
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));