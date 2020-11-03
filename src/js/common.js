jQuery(document).ready(function($){
    $('.mobile-toggle').click(function (e){
        console.log(1);
        e.preventDefault();
        let target = $($(this).data('target'));
        target.toggleClass('active');
    });
});