const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt"); // ✅ required!
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 7100;

app.use(cors());
app.use(express.json());

// const uri = "mongodb+srv://yaluraji24:yazhi_24@cluster0.3zyylfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb+srv://varsithaarun2409:arun@cluster0.ihp7wry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://varshita:arun@cluster0.ihp7wry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("handloom"); 
    const usersCollection = db.collection("users");

    // app.post("/upload", async (req, res) => {
    //   try {
    //     const { name, email, password } = req.body;
    //     console.log(name, email, password, " inside upload");

    //     if (!name || !email || !password) {
    //       return res.status(400).json({ success: false, message: "All fields are required" });
    //     }

    //     const existingUser = await usersCollection.findOne({ email });
    //     if (existingUser) {
    //       return res.status(409).json({ success: false, message: "User already exists" });
    //     }

    //     const hashedPassword = await bcrypt.hash(password, 10);

    //     const result = await usersCollection.insertOne({
    //       name,
    //       email,
    //       password: hashedPassword,
    //     });

    //     res.status(201).json({ success: true, message: "User registered", userId: result.insertedId });

    //   } catch (error) {
    //     console.error("Error in /upload:", error);
    //     res.status(500).json({ success: false, message: "Server error" });
    //   }
    // });

    // ✅ Start server
    
    // Login API

    //login
    app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const { password: pwd, ...userData } = user;
    res.status(200).json({ success: true, message: "Login successful", user: userData });

  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

//register 
app.post("/upload", async (req, res) => {
  try {
    const { name, email, password, phone, address, gender, agree } = req.body;

    console.log("📝 Registering user:", name, email);

    // Validate all required fields
    if (!name || !email || !password || !phone || !address || !gender) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!agree) {
      return res.status(400).json({
        success: false,
        message: "You must accept the terms and conditions",
      });
    }

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      gender,
      agree,
      createdAt: new Date()
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: result.insertedId
    });

  } catch (error) {
    console.error("❌ Error in /upload:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });

  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);