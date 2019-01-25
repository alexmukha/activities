$(document).ready(function(){
    total = 0;
    var wins = 0;
    var losses = 0;
    $(".wins").text(wins);
    $(".losses").text(losses);
    var mathRandom = Math.floor(Math.random());

    //Returns a random number between min (inclusive) and max (exclusive)
    function randomNumF(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    };

    //sets randomNum value
    randomNumber = randomNumF(19,121);
    $(".randomNum").text(randomNumber);

    setJewelVal();
    
    //on click event for each jewel adds to total 
    $(".jewel1").on('click', function() {
        $("#totalJewels").text(total += jewel1);
        onClick();
     });
    $(".jewel2").on('click', function() {
        $("#totalJewels").text(total += jewel2);
        onClick();
    });
    $(".jewel3").on('click', function() {
        $("#totalJewels").text(total += jewel3);
        onClick();
    });
    $(".jewel4").on('click', function() {
        $("#totalJewels").text(total += jewel4);
        onClick();
    });
    
    //function checks if total = the randomNumber to trigger a win or loss function
    function onClick(){
        $(".wins").text(wins);
        if (total==randomNumber){
            wins+= 1;
            $(".wins").text(wins);
            reset();
        }
        else if (total>randomNumber){
            losses+= 1;
            $(".losses").text(losses);
            reset();
        } 
    }
    //sets random number to each jewel
    function setJewelVal(){
        jewel1 = randomNumF(1,13);
        jewel2 = randomNumF(1,13);
        jewel3 = randomNumF(1,13);
        jewel4 = randomNumF(1,13);
    }
        
    //reset total jewels and randomNumber
    function reset() {
        total=0;
        randomNumber = randomNumF(19,120);
        $(".randomNum").text(randomNumber);
        $("#totalJewels").text(total);
        setJewelVal();
    }
});