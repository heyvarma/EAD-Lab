const mongoose = require("mongoose");
const User = require("./models/user");

async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb1");
    console.log("Connected to MongoDB");

    const existingUser = await User.findOne({ email: "ssver@gmail.com" });

    if (!existingUser) {
      const user = new User({
        name: "Shiva",
        email: "ssver@gmail.com",
        addresses: [
          { street: "123 Main St", city: "New York", country: "USA" },
          { street: "456 Elm St", city: "Boston", country: "USA" }
        ]
      });

      await user.save();
      console.log("User saved successfully!");
    } else {
      console.log("User already exists");
    }

    const users = await User.find().lean();
    console.log("All Users:", JSON.stringify(users, null, 2));

  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

run();