const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function (request, response) {
    let nums = (request.query.nums.split(','))
    let li = []
    let mean = 0
    for (num of nums)
        li.push(parseInt(num))
    for (num of li)
        mean = mean + num
    mean = mean / li.length
    console.log(mean)
    return response.json({operation:'mean', value:mean})
})

app.get('/median', function (request, response) {
    let nums = (request.query.nums.split(','))
    let li = []
    let median = 0
    let half = 2
    for (num of nums)
        li.push(parseInt(num))
    for (num of li)
        median = median + num
    median = (median / half)
    console.log(median / 2)
    return response.json({operation:'median', value:median})
})
app.get('/mode', function (request, response) {
    let nums = (request.query.nums.split(','))
    let li = []
    let mode = {}
    let highest = 0
    for (num of nums)
        li.push(parseInt(num))
    li.forEach(num => {
        if (!mode[num]) {
            mode[num] = 1
        } else {
            mode[num]++
        }
    })

    for (let key in mode) {
        if (mode[key] > highest) {
            highest = key
        }
    }

    console.log(highest)
    return response.json({operation:'mode', value:highest})
})


app.listen(3000, function () {
    console.log('App on port 3000');
})