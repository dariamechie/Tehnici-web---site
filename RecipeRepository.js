const fs = require("fs");

// Reading function from db.json file
module.exports.readJSONFile = () => {
    return JSON.parse(fs.readFileSync("db.json"))["recipes"];
  }
  
  // Writing function from db.json file
  module.exports.writeJSONFile = (content) => {
    fs.writeFileSync(
      "db.json",
      JSON.stringify({ recipes: content }, null, 4),
      "utf8",
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  }