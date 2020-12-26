const https = require('https');

async function request(number){
  let google = "";

  var p1 = await new Promise((resolve, reject) => {

      let req = https.get("https://reqres.in/api/products/"+number, (res) => {

        res.on('data', (d) => {
          google = google + d;
        });

        res.on('end',() => {
          //console.log("Inside: ",google);
          resolve(google);
        });

      });

      req.setHeader("Access-Control-Allow-Origin", "*");
      req.setHeader("Access-Control-Allow-Headers", "*");

      req.on('error', (e) => {
        reject(new Error("Error!"));
        //console.error(e);
      });


    });

    return p1;

}

function handler(number){
  console.log("Tries: ", number);
  request(number).then(function(value){
      value = JSON.parse(value);
      if(value.data.name == "tigerlily"){
        //console.log("Google",value.data.name); // Success!
        document.getElementById('data').innerText = value.data.name;
      }
      else{
        handler(++number);
      }
  });

}


handler(1);
