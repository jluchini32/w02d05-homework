//---- Global Variables
//first number
var firstNum = 0;
var firstNumResult = '';
var isFirstNum = true;
//operator
var op;
var isOp = true;
var isAdd = false;
var isMinus = false;
var isTimes = false;
var isDivide = false;
//Second Number
var secondNum = 0;
var secondNumResult = '';
var isSecondNum = true;
//total 
var total = 0;
var totalResult = '';
var isTotal = true;

//------ Function

function pickFirstNum(){

$('.number').on('click', function(){
if(isFirstNum) {

firstNum = $(this).attr('value');
firstNumResult += firstNum;
    //testing
    // console.log('Fist num is ' + firstNum);
    console.log('First num results is ' + firstNumResult);
    $('#first-number').text(firstNumResult);
    }
  });  
}


// $('#operator').appendfirstNumResult);

function pickOperator(){

$('.operator').on('click', function(){
  isFirstNum = false; //--- disables first num after opperator is used
 
  op = $(this).attr('value');
  $('#operator').text(op);

    if (op === 'plus'){
        isAdd = true;
        pickSecNum();
    console.log('plus'); 

    }if (op === 'minus'){
        isMinus = true;
        pickSecNum();
    console.log('minus'); 
    
    }if (op === 'times'){
      isTimes = true;
      pickSecNum();
    console.log('times');

    }if (op === 'divide'){
      isDivide = true;
      pickSecNum();
    console.log('divide');

    }
  });  
}


function pickSecNum(){
    $('.number').on('click', function() {

    secondNum = $(this).attr('value');
    secondNumResult += secondNum;
    $('#second-number').text(secondNumResult);
    //testing
    // console.log('second num is ' + secondNum);
    console.log('second num results is ' + secondNumResult);

    if(isFirstNum === false) {

    if(isAdd === true) {
    total = parseInt(firstNumResult) + parseInt(secondNumResult); // converts from strings ie 1+2+3 = 123 rather than 6
    console.log('total is ' + total);
    }

    else if(isMinus === true) {
    total = parseInt(firstNumResult) - parseInt(secondNumResult); // converts from strings ie 1+2+3 = 123 rather than 6
    console.log('total is ' + total);
    }

    else if(isTimes === true) {
    total = parseInt(firstNumResult) * parseInt(secondNumResult); // converts from strings ie 1+2+3 = 123 rather than 6
    console.log('total is ' + total);
    }

    else if(isDivide === true) {
    total = parseInt(firstNumResult) / parseInt(secondNumResult); // converts from strings ie 1+2+3 = 123 rather than 6
    console.log('total is ' + total);
      }
    
      
    }
});
}

function totalResult(){
$('#total').on('click', function(){

  total = $(this).attr('value');
  totalResult += total;
  $('#total').text(totalResult); //$('#operator').text(op);

    console.log('total is ' + total);

    });

}




//----
pickFirstNum();
pickOperator();
totalResult();

