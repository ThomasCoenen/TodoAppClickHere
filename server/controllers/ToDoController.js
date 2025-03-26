const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    console.log("hittingGetTodo: ", req.body)
    const { userEmail } = req.body;
    console.log("userEmail: ", userEmail)
    const todosActual = await ToDoModel.find({ userEmail: userEmail });
    console.log("todosActuallllll: ", todosActual)
    res.send(todosActual);
}

module.exports.saveToDo = (req, res) => {
    console.log("hittingsaveToDo: ", req.body)
    const { text } = req.body;
    const { userEmail } = req.body;

    console.log("hittingsaveToDoTextttt: ", text)
    console.log("hittingsaveToDoUserEmail: ", userEmail)
    ToDoModel
        .create({ text, userEmail })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    console.log("hittingdeleteToDo")
    const { _id } = req.body;

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}