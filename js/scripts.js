$(document).ready(function(){
    $("#query form").submit(function(event){
        var arrays=['name','email','question'];
        arrays.forEach(function(array){
            
            var userInput=$("input#"+array).val();
            //alert(userInput);
            $("."+array).text(userInput);
            //alert(userInput);

        });
        $("#story").show();
        event.preventDefault();

    });

});