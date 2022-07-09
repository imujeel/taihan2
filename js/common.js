        let header = $('header'),
            menu = header.find('.header_wrapper>nav>ul>li'),
            headerHeight = '70px',
            newHeight = 0,
            subMenu = menu.find('ul');
        let windowWidth = $(window).width();
            
            subMenu.each(function(){
                if($(this).outerHeight()>newHeight){
                    newHeight = headerHeight + $(this).outerHeight();
                }
                });//subMenu 높이 구하기
               
                header.hover(function(){
                    windowWidth = $(window).width();
                    
                    if(windowWidth>1023){
                        header.stop().animate({height:'340px'});
                        
                    }
                    if(windowWidth<768){
                        headerHeight = '60px';
                    }
                },
                function(){
                    windowWidth = $(window).width();
                    if(windowWidth>1023){
                    header.stop().animate({height:headerHeight});
                    }
                    
                }
                );//DropDownHeader
                $(window).resize(function(){
                    let downIcon = $('.my_mainslide .scroll_down img');
                        windowWidth = $(window).width();
                    if(windowWidth<768){
                        headerHeight = '50px';
                        header.css({height:headerHeight});
                    }else{
                        headerHeight = '70px';
                        header.css({height:headerHeight});
                    }
                    if(windowWidth>1023){
                        downIcon.attr('src','./images/scroll_down.svg');
                    }else{
                        downIcon.attr('src','./images/swipe_down.svg');
                    }
                })
                $(window).trigger('resize');
               
// let navMenu = $('header nav > ul > li'),
//     highLight = $('.menu_highlight');

//     navMenu.mouseover(function(e){
//     e.preventDefault();
//     let newLeft = $(this).position().left;
//     let newWidth = $(this).innerWidth();

//     highLight.animate({left:newLeft, width:newWidth},250);
    
//     }); //hight nav

let searchIcon = $('header .top_links .search'),
    searchField = $('body .search_field'),
    searchFieldExit = searchField.find('.search_exit');

    searchIcon.click(function(e){
    e.preventDefault();
    searchField.addClass('active');
    });
    searchFieldExit.click(function(e){
    e.preventDefault();
    searchField.removeClass('active');
    });//Search field


    let showListBtn = $('.sub_menu_area button');
        subMenList = $('.sub_menu_list');
    

        subMenList.hide();
        showListBtn.click(function(e){
            $(this).next('.sub_menu_list').slideToggle();
            $(this).find('span').text(function(i, text){
                return text === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down";
            })
    });
       
    

    if($('.banner').length){
        let subPageMenu = $('.banner .sub_menu'),
            subPageMenuOst = subPageMenu.offset().top;
    
            $(window).scroll(function(){
                let sct = $(this).scrollTop();
                if(sct > subPageMenuOst){
                    subPageMenu.addClass('sticky');
                    header.css({display:'none'});
    
                }else{
                    subPageMenu.removeClass('sticky');
                    header.css({display:'block'});
                }
        });//fixed submenu

    }
    

let mobileMenuOpen = $('.top_links li .mobile_menu_toggle'),
    mobileMenu = $('.header_wrapper nav'),
    mobileMenuClose  = $('.mobile_menu_close');
    console.log(mobileMenuOpen);

    mobileMenuOpen.click(function(){
        console.log('click');
        mobileMenu.addClass('active');
        $(body).css({overflow:'hidden'});
    });

    mobileMenuClose.click(function(){
        mobileMenu.removeClass('active');
        $(body).css({overflow:'auto'});
    });//mobile menu

let animateTarget = $('.animate__animated[data-effect]');

    $(window).scroll(function(){
        let $sct = $(this).scrollTop();

        animateTarget.each(function(){
            let targetOst = $(this).offset().top - 600;
            console.log($sct, targetOst);

            if($sct>targetOst){
                let targetClass = $(this).attr('data-effect');
                $(this).addClass(targetClass);
            }
        })
    });
    
    
        
