function repeatWithFor(count) {
    for (let i = 0; i < count; i++) {
        console.log(i);
        
    }
    return true;
}

repeatWithFor(5); 

function repeatWithDoWhile(minValue) {
    let i = minValue;
    do {
        console.log( "value",i);
        i++;
    } while (i <= 3);
}

repeatWithDoWhile(2);