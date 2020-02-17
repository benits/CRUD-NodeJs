const users = [
  {
    id: 1,
    name: "Matheus Benites",
    email: "matheus@matheus.com.br"
  },
  {
    id: 2,
    name: "Ana Caroline",
    email: "ana@ana.com.br"
  }
];


function anyUser(name, email) {
  let index = users.findIndex(item => item.email == email);

  if (index < 0) {
    console.log("Usuario não existe");
    return true;
  } else {
    console.log("Usuario existe");
    return false;
  }
}

module.exports = {
  async index(req, res) {
    try {
      return res.json(users);
    } catch (ex) {
      res.status(500).json({ error: "Internal routes ERROR" });
      console.log(ex);
      throw ex;
    }
  },
  async indexById(req, res) {
    try {
      const { id } = req.params;

      let user = users.filter(item => {
        return item.id == id;
      });

      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    } catch (ex) {
      res.status(500).json({ error: "Internal server ERROR" });
      console.log(ex);
      throw ex;
    }
  },
  async create(req, res) {
    try {
      console.log(req.body);
      const { name, email } = req.body;
      let newID = 0;

      const { id } = users[users.length - 1];
      newID = id + 1;

      if (anyUser(name, email)) {
        if (users.length == 0) {
          users.push({
            id: newID,
            name,
            email
          });
        } else {
          users.push({
            id: newID,
            name,
            email
          });
        }

        res.status(201).json(users);
      } else {
        res
          .status(409)
          .json({ message: "Email already registered, use a new email" });
      }
    } catch (ex) {
      res.status(500).json({ error: "Internal server ERROR" });
      console.log(ex);
      throw ex;
    }
  },
  async update(req, res) {
    try {
      const { index } = req.params;
      const { name, email } = req.body;

      users[index].name = name;
      users[index].email = email;

      res.status(200).json(users);
    } catch (ex) {
      res.status(500).json({ error: "Internal server ERROR, " });
      console.log(ex);
      throw ex;
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      users.splice({
        id
      });

      return res.status(200).send();
    } catch (ex) {
      res.status(500).json({ error: "Internal server ERROR, " });
      console.log(ex);
      throw ex;
    }
  },
  checkUserExists(req, res, next) {
    if(!req.body.name) {
      return res.status(400).json({ error: "User name is required" })
    }
    if(!req.body.email) {
      return res.status(400).json({ error: "Email is required" })
    }
  
    return next();
  }
  
};
