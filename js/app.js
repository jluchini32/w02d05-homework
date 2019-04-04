
//---- Global Variables
//first number
var firstNum = 0;
var firstNumResult = '';
var isFirstNum = true;
//operator
var op;
var isOp = true;
var isAdd = false;
//Second Number
var secondNum = 0;
var secondNumResult = '';
var isSecondNum = true;
//total 
var total = 0;
var isTotal = true;

//------ Function

function pickFirstNum(){

$('.number').on('click', function(){
if(isFirstNum) {

firstNum = $(this).attr('value');
firstNumResult += firstNum;
    //testing
    console.log('Fist num is ' + firstNum);
    console.log('Fist num results is ' + firstNumResult);
    }
  });  
}



function pickOperator(){

$('.operator').on('click', function(){
  isFirstNum = false; //--- disables first num after opperator is used
  op = $(this).attr('value');
    if (op === 'plus'){
        isAdd = true;
        pickSecNum();
    //testing
    console.log('plus'); 
    }
  });  
}

function pickSecNum(){
    $('.number').on('click', function() {

    secondNum = $(this).attr('value');
    secondNumResult += secondNum;

    //testing
    console.log('second num is ' + secondNum);
    console.log('second num results is ' + secondNumResult);

    if(isFirstNum === false) {
    if(isAdd = true) {
    total = parseInt(firstNumResult) + parseInt(secondNumResult); // converts from strings ie 1+2+3 = 123 rather than 6
    console.log('total is ' + total);
    }
    }
});
}


function totalResult(){
$('.total').on('click', function(){

    console.log('total is ' + total);
    totalResult();
    });
}





//----
pickFirstNum();
pickOperator();
