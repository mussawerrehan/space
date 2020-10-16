$(document).ready(function() {
    $('.js-like-article').on('click',function(e) {
        e.preventDefault();

        var $link = $(e.currentTarget);
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');
        console.log($link.attr('href'));
        $.ajax({
            method: 'POST',
            url: $link.attr('href')
        }).done(function(data) {
            // console.log(data);
            $('.js-like-article-count').html(data.hearts);
        });

    });
});