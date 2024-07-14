const Todo = require("../model/Todo");

const createTodo = async (req, res) => {
  try {
    const { title, description, dateToComplete } = req.body;
    if(!title || !description || !dateToComplete){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const todo = await Todo.create({
        title,
        description,
        dateToComplete : new Date(dateToComplete),
        });
        res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Server Error : ', error})
  }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({ todos });
    }catch(error){
        console.log(error);
        return res.status(500).json({error: 'Server Error : ', error})
    }
}

module.exports = {createTodo, getTodos} ;
