let animateTarget = $('.animate__animated[data-effect]');

        $(window).scroll(function(){
            let sct = $(this).scrollTop();

            animateTarget.each(function(){
                let targetOst = $(this).offset().top - 700;

                if(sct>targetOst){
                    let targetClass = $(this).attr('data-effect');
                    $(this).addClass(targetClass);
                }
        });