(function(){
    $('.list-group-item').on('mouseover', function(event){
        $(this).addClass('animated pulse');
    });
    $('.list-group-item').on('mouseout', function(event){
        $(this).removeClass('animated pulse');
    });
})();