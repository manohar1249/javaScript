var readline = require('readline');

var input = readline.createInterface({
    input: process.stdin
});

const userinput = [];

input.on('line',function(values){
    userinput.push(values);
})

input.on('close',function(){
    
    console.log(sum(userinput));
})




function sum(data){
    var num=0;
    var arr = data[0].split("");
    for(var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
        
        num=num+arr[i];
    }
    return num;
}