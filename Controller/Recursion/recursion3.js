// const myModel3 = require('../../Models/myModel3Schema')
const request = require("request");
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=100',
  };

thirdPartyRecursive = async(req, res) => {
    try{
        axios
    .request(options)
    .then(function (response) {
       
        const result = response.data.results
        const next = response.data.next
        const prev = response.data.previous
        console.log(next)
        console.log(prev)
        res.status(200).send(result)
    })
    .catch(function (error) {
      res.send(error.message);
      console.error(error.message);
    });
    }catch(err){
        console.log(err.message);
    }
  
};

module.exports = thirdPartyRecursive;
