const fs = require("fs")

const filename = process.argv[2]
const moment =require('moment')


// fs.readFile(filename, "utf8", (err, data) => {
    /*if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    */
   let plans ={
       musicSubscription:{
            free:{
                amountToPay:0,
                duration:1
            },
            personal:{
                amountToPay:100,
                duration:1
            },
            premium:{
                amountToPay:250,
                duration:3
            }
            
       },
       videoStreamingSubscription:{
        free:{
            amountToPay:0,
            duration:1
        },
        personal:{
            amountToPay:200,
            duration:1
        },
        premium:{
            amountToPay:500,
            duration:3
        }
    },
    podcastSubscription:{
        free:{
            amountToPay:0,
            duration:1
        },
        personal:{
            amountToPay:100,
            duration:1
        },
        premium:{
            amountToPay:300,
            duration:3
        }
    }
   }
   let top_Ups={
       fourDevices:{
        amountToPay:50,
           devicesAdded:4,
       },
       tenDevices:{
           amountToPay:100,
           devicesAdded:10
       }
 
   }
 

 data =fs.readFile(filename, "utf8", (err, data) => {
    // /*if (err) throw err
    function main (dataIn)
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    for(let i =0 ;i<inputLines.length;i++){
        if(inputLines){
            let input =inputLines[i].split(' ')
            switch(input[0]){
                case "START_SUBSCRIPTION": addDate(input[1].trim());
                break;
            }
        }
    }
    
})