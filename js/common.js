
            let header = $('header'),
                menu = header.find('.header_wrapper>nav>ul>li'),
                headerHeight = header.outerHeight(),
                newHeight = 0,
                subMenu = menu.find('ul'),
                link = menu.find('a');
                let windowWidth = $(window).width();

                    /*
                    subMenu.each(function(){
                        if($(this).outerHeight()>newHeight){
                            newHeight = headerHeight + $(this).outerHeight();
                        }
                        menu.mouseover(function(){
                            if(windowWidth > 1023){
                                
                                header.stop().animate({height:newHeight});
                            }
                        });
                        menu.mouseout(function(){
                            let windowWidth = $(window).width();
                            if(windowWidth > 1023){
                                header.stop().animate({height:headerHeight});
                            }
                        });
                    });
                    */

                   
                    menu.hover(function(){
                        let windowWidth = $(window).width();
             
                        if(windowWidth > 1023){
                            let subMenuHeight = $(this).find('ul').outerHeight();
                            let newHeight = headerHeight + subMenuHeight;
                            header.stop().animate({height:newHeight});
                        }            
                    },
                    function(){
                        let windowWidth = $(window).width();            
                        if(windowWidth > 1023){
                            header.stop().animate({height:headerHeight});
                        }
                    });
                    

                //if(windowWidth > 1023){
                    /*
                    subMenu.each(function(){
                        if($(this).outerHeight()>newHeight){
                            newHeight = headerHeight + $(this).outerHeight();
                        }
                        });//subMenu 높이 구하기
                        menu.mouseover(function(){
                            if(windowWidth > 1023){
                                header.stop().animate({height:newHeight});
                            }
                        });
                        menu.mouseout(function(){
                            if(windowWidth > 1023){
                                header.stop().animate({height:headerHeight});
                            }
                        });
                        */

                        /*header.hover(function(){		
                            header.stop().animate({height:newHeight});
                        },
                        function(){
                            header.stop().animate({height:headerHeight});
                        }
                        );//DropDownHeader

                //}

       // }
        
        // header.mouseover(function(){
        //     let windowWidth = $(window).width();
        //         if(windowWidth > 1023){
        //             DropDownHeader();
        //         }
        // })
        
        

        
    
   /* $(window).resize(function(){
        let windowWidth = $(window).width();
        let downIcon = $('.my_mainslide .scroll_down img');
            if(windowWidth > 1023){
                DropDownHeader();
                downIcon.attr('src','./images/scroll_down.svg');
            }else{
                downIcon.attr('src','./images/swipe_down.svg');
            }
    });*/ //responsive js 



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
    });//dropDown subpage menu

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

let mobileMenuOpen = $('.tops_links mobile_menu_toggle'),
    mobileMenu = $('.header_wrapper nav');
    //mobileMenuClose  = document.querySelector('.mobile_menu_close');

    // mobileMenuOpen.addEventListener('click', ()=>{
    //     mobileMenu.classList.add('active');
    //     document.body.style.overflow = 'hidden';
    // });

    // mobileMenuClose.addEventListener('click', ()=>{
    //     mobileMenu.classList.remove('active');
    //     document.body.style.overflow = 'auto';
    // });

let animateTarget = $('animate__animated[data-effect]');

    $(window).scroll(function(){
        let $sct = $(this).scrollTop();

        animateTarget.each(function(){
            let targetOst = $(this).offset().top - 400;
            console.log($sct, targetOst);

            if($sct>targetOst){
                let targetClass = $(this).attr('data-effect');
                $(this).addClass(targetClass);
            }

    
        })
    });
    