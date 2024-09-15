const express = require('express');
const app = express()
const port =2000;
const userModel=require('./models/user')
const cors=require('cors')
app.use(cors())

const mongoose=require('mongoose')

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/user')
.then((res)=>{
    console.log('mongodb connected succesfully')
})
.catch((error)=>{
console.log(error);
    
})
//post request handler

app.post('/userpost',async(req,res)=>{
    try{
        const{name,email,age}=req.body;
        const newuser= await userModel.create({name,email,age});//await the create method
        res.status(201).json(newuser);//send a response with created user
    }catch(error){
        res.status(400).json({error:error.message});
    }
})
// get handler
app.get('/userget',async (req,res)=>{
    try{
        const users = await userModel.find();//fetch all users
        res.json(users);//send the list of users as a response
    }catch (error){
        res.status(500).json({error:error.message})
    }
})
app.get('/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// PUT route 
app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(id, { name, email, age }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
app.delete('/userdelete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await userModel.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
app.listen(port,()=>{
    console.log(`server is running on : ${port}`);

})
