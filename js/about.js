let animateTarget = $('.animate__animated[data-effect]'),
        excuted = false;

        $(window).scroll(function(){
            let sct = $(this).scrollTop();

            animateTarget.each(function(){
                let targetOst = $(this).offset().top - 800;

                if(sct>targetOst){
                    let targetClass = $(this).attr('data-effect');
                    $(this).addClass(targetClass);
                }
        });