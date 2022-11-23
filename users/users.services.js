const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = usersControllers.getAllUsers();
  res.status(200).json(data);
};

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;

  if(first_name && last_name && email && password && birthday) {
    const data = usersControllers.createNewUser({
      first_name,
      last_name,
      email,
      password,
      birthday
  });
    res.status(201).json(data);
  } else {
    res.status(400).json({
      message: "Invalid data",
      fields: {
        first_name: "Angel",
        last_name: "Carrasco",
        email: "acarracocesa@gmail.com",
        password: "academlo",
        birthday: "1988/08/24",
      },
    });
  }
};

const getUserById = (req, res) => {
  const id = req.params.id;

  const data = usersControllers.usersById(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Invalid User" });
  }
};

module.exports = {
  getAllUsers,
  postNewUser,
  getUserById,
};
