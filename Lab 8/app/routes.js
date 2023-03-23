// app/routes.js
// grab the nerd model we just created
var Sample = require("./models/sample");
// for encryption
var bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require("path");

module.exports = function (app) {
  // server routes
  // handle things like api calls
  // authentication routes
  // sample api route
// get data

  app.get("/api/show", async function (req, res) {
    try {
      if (Object.keys(req.body).length !== 0) {
        res.status(400).json({ message: 'Request body is not allowed in a GET request' });
        return;
      }
  
      const samples = await Sample.find();
      console.log("samples", samples);
      res.json(samples);
    } catch (err) {
      res.status(400).json({message: err.message});
    }
  });
  
  
// insert data

  app.post("/api/insert", async function (req, res) {
    const expectedParams = ['name', 'email', 'password'];

    // Check if any unexpected parameter is present in the request body
    const unexpectedParams = Object.keys(req.body).filter(param => !expectedParams.includes(param));
    if (unexpectedParams.length > 0) {
      return res.status(400).json({ message: `Unexpected parameters: ${unexpectedParams.join(', ')}` });
    }
    try {
      console.log(req.body);
      var regexEmail = /[a-z0-9]+@northeastern.edu/;
      var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
      var regExName = /^[a-zA-Z]+$/;
      var em = req.body.email;
      var pass = req.body.password;
      var name = req.body.name;
      var query = { email: req.body.email };
      if (!name.match(regExName)) {
        res.status(400).json({message: "Name is in invalid format"});
      } else if(!name){
        res.status(400).json({message:"Name is required"});
      } else if (!em.match(regexEmail)) {
        res.status(400).json({message: "Email is in invalid format, use northeastern.edu format"});
      } else if(!em){
        res.status(400).json({message:"Email is requied"});
      } else if (!pass.match(regexPwd)) {
        res.status(400).json({message: "Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters"});
      } else if(!pass){
        res.status(400).json({message:"Password is required"});
      } else {
        // Check if email already exists
        const count = await Sample.count(query);
        if (count === 1) {
          res.status(409).json({message:"Email Id already exists"});
        } else {
          const salt = await bcrypt.genSalt(saltRounds);
          const hash = await bcrypt.hash(req.body.password, salt);
          var record = new Sample({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          });
          const rec = await record.save();
          console.log("Saved " + rec);
          res.status(201).json({message:"User Created Successfully"});
        }
      }
    } catch (err) {
        res.status(500).json({message:"Internal Server Error"});
    }
  });
  
//update data
app.put('/api/update', async function (req, res) {
    console.log(req.body);
    const query = { email: req.query.email };
    const regexEmail = /[a-z0-9]+@northeastern.edu/;
    const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
    const regExName = /^[a-zA-Z]+$/;
    const em = req.query.email;
    const pass = req.body.password;
    const name = req.body.name;

    if (!name.match(regExName)) {
      res.status(400).json({message:"Name is not in valid format"});
    }
    else if (!pass.match(regexPwd)) {
        res.status(400).json({message:"Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters"});
    }
    else if ('email' in req.body) {
      res.status(400).json({message:"Email cannot be updated"});
    }
    else {
        try {
            const count = await Sample.findOne(query);
            if (count == 0) {
              res.status(404).json({message:"User doesn't exist"});
            }
            else {
                const salt = await bcrypt.genSalt(saltRounds);
                const hash = await bcrypt.hash(req.body.password, salt);
                const upd = { $set: { name: req.body.name, password: hash } };
                await Sample.updateOne(query, upd);
                res.status(200).json({message:"User Updated Successfully"});
            }
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
});


//delete data
app.delete('/api/delete', async function (req, res) {
  console.log(req.body);
  var regexEmail = /[a-z0-9]+@northeastern.edu/;
  var em = req.body.email;

  // Check if request body has only one parameter with key 'email'
  if (Object.keys(req.body).length !== 1 || !req.body.hasOwnProperty('email')) {
    res.status(400).json({ message: "Invalid request body. Only 'email' parameter is allowed." });
  } else if (!em.match(regexEmail)) {
    res.status(400).json({ message:"Email is in invalid format, only northeastern.edu domain is permitted" });
  } else {
    try {
      const count = await Sample.count({ email: em });
      if (count == 0) {
        res.status(404).json({ message:"User doesn't exist" });
      } else {
        const dc = await Sample.deleteOne({ email: em });
        res.status(200).json({ message:"User Deleted Successfully" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

  
  // app.get("/", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/views/index.html"));
  // });
};