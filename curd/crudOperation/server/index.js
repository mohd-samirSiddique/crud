const express = require('express')
const app = express()
const port = 7000;
const Config = require('./src/config')
const Form = require('./src/model/form')
const cors = require('cors')
// const Registration = require('./src/model/registration');
const { emit } = require('nodemon');

//starting of middleware 

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// ending of middleware

// app.get('/', (req, res) => {
//     console.log('ji')
//     res.send('hi')
// })

app.post('/formdata', async (req, res) => {
    let data = Form(req.body)
    console.log(data)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.get('/formData', async (req, res) => {
    let result = await Form.find(req.body)
    console.log(result)
    res.send(result)
})
// delete api using node js correct this code

app.delete('/formDelete/:id', async (req, res) => {
    // let a = await req.params.id 
    // console.log(a)

    try {
        let result = await Form.deleteOne({ _id: req.params.id })
        res.send(result)
    } catch (error) {
        res.status(500).send({ message: "Error deleting data", error })
    }
});


app.get('/updateForm/:id', async (req, res) => {
    try {
        let result = await Form.findOne({ _id: req.params.id });
        if (!result) {
            return res.status(404).send('Form not found');
        }
        console.log({ id: req.params.id });
        res.send({ data: result });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        let result = await Form.updateOne({ _id: id }, { $set: updatedData });
        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'Data updated successfully' });
        } else {
            res.status(404).json({ message: 'Data not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating data' });
    }
});




app.listen(port, () => {
    console.log(`listening port number ${port}`)
})