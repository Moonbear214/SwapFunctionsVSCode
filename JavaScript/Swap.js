// Variable declarations
var inita = 5;
var initb = 7;
var recArrValues = [1, 2, 3, 4, 5];
var forArrValues = [1, 2, 3, 4, 5];

// for (let i = 0; i < 100000; i++) {
//     forArrValues.push(i);
// }

// ==========================================================================================
// Methods
// ==========================================================================================
var Printing = function(Msg, refObj) {
    console.log(Msg + ": a =", refObj.a, '| b =', refObj.b);
    console.log("");

    refObj.a = inita;
    refObj.b = initb;
}

var PrintingArr = function(Msg, recArrValues){
    console.log(Msg)

    for (let i = 0; i < recArrValues.length; i++) {
        const value = recArrValues[i];
        
        console.log(i, ":", value); // + (i + 1 != recArrValues.length ? ", " : ""))
    }

    console.log("")
}

var SwapValue = function(a, b) {
    var temp = a;
    a = b;
    b = temp;

    Printing("Temp", refObj = {a: a, b: b});
    a = refObj.a; b = refObj.b;

    a = a + b;
    b = a - b;
    a = a - b;

    Printing("Math", refObj = {a: a, b: b});
    a = refObj.a; b = refObj.b;

    [a, b] = [b, a];
    Printing("Supple", refObj = {a: a, b: b});
    a = refObj.a; b = refObj.b;

    a ^= b;
    b ^= a;
    a ^= b;

    Printing("XOR", refObj = {a: a, b: b});
    a = refObj.a; b = refObj.b;

}

var SwapRef = function(refObj) {
    refObj.a = refObj.a + refObj.b;
    refObj.b = refObj.a - refObj.b;
    refObj.a = refObj.a - refObj.b;

    console.log("Pass by reference Func" + ": a =", refObj.a, '| b =', refObj.b);
    console.log("");
}

var SwapRec = function(recArrValues, sP, eP){
    eP--;

    if (sP < eP) {
        recArrValues[sP] = recArrValues[sP] + recArrValues[eP];
        recArrValues[eP] = recArrValues[sP] - recArrValues[eP];
        recArrValues[sP] = recArrValues[sP] - recArrValues[eP];
   
        sP++; 
        return SwapRec(recArrValues, sP, eP)
    }

    return recArrValues;
}

var SwapFor = function(forArrValues){
    for (let i = 0; i < ((forArrValues.length -1) - i); i++) {
        forArrValues[i] = forArrValues[i] + forArrValues[(forArrValues.length - 1) - i];
        forArrValues[(forArrValues.length - 1) - i] = forArrValues[i] - forArrValues[(forArrValues.length - 1) - i];
        forArrValues[i] = forArrValues[i] - forArrValues[(forArrValues.length -1) - i];
    }
}

// ==========================================================================================
// Run Methods
// ==========================================================================================
Printing("Values Before", refObj = {a: inita, b: initb});

SwapValue(inita, initb);

Printing("Values After", refObj = {a: inita, b: initb})

console.log("========================================================================");
console.log("");

var refObj = {
    a: inita,
    b: initb 
}

Printing("Reference before", refObj)

SwapRef(refObj)

Printing("Reference After", refObj)

console.log("========================================================================");
console.log("");

PrintingArr("Swap Rec Array Before", recArrValues);

SwapRec(recArrValues, 0, recArrValues.length);

PrintingArr("Swap Rec Array After", recArrValues);

PrintingArr("Swap For Array Before", forArrValues);

SwapFor(forArrValues);

PrintingArr("Swap For Array After", forArrValues);
