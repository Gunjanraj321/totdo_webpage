const Todo = require("../model/Todo");

const creatTodo = async (req, res) => {
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

module.exports = creatTodo ;
