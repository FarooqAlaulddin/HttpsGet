# Https Get Request Example.

This is a simple example to illustrate Get REQ using Https library. I used random API to return 1 unique object. 
The Request is called repeatedly untill the right value received.

```
function handler(number){
  console.log("Tries: ", number);
  request(number).then(function(value){
      value = JSON.parse(value);
      if(value.data.name == "tigerlily"){ // the value wanted.. idealy it will loop 5 times. might change according to the API
        //console.log("Google",value.data.name); // Success!
        document.getElementById('data').innerText = value.data.name;
      }
      else{
        handler(++number);
      }
  });

}
```
