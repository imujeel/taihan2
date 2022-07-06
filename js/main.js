	let g_interval;
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		slidesNavigation:true,
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5thPage'],
		menu: '#menu',
		// fixedElements:'#header',
		controlArrowsHTML:['<div class="material-symbols-rounded controls prev">arrow_back_ios</div>',
		'<div class="material-symbols-rounded controls next">arrow_forward_ios</div>'],
		afterLoad: function (origin, destination, direction) {
			clearInterval(g_interval);
			const lapse = 6000;
			
			if(destination.item.querySelectorAll('.fp-slides').length){
			  g_interval = setInterval(function () {
				fullpage_api.moveSlideRight();
			  }, lapse);
			}
		  
			//fixed header
			if(destination.index != 0){
				$('header').addClass('active');
			}else{
				$('header').removeClass('active'); 
			}

			if(destination.index = 1){
				numAnimation();
			};
		}
	});//fullPage

	$('.fp-slidesNav').append(
		'<div class="play_controls_btn">'+
			'<img src="images/play.svg" alt="play button" class="play_btn play_controls_btn">' +
			'<img src="images/pause.svg" alt="pause button" class="pause_btn play_controls_btn">'+
			'</div>'
		);
	
	let controlsBtn =$('.fp-slidesNav .play_controls_btn'),
		pauseBtn = $('.pause_btn'),
		playBtn = $('.play_btn');			
		pauseBtn.addClass('active');

		controlsBtn.click(function(){
			$(this).toggleClass('active');
			if($(this).hasClass('active')){
				clearInterval(g_interval);
			}else{
				setInterval(function(){
					$.fn.fullpage.moveSlideRight();
				}, 6000);
				
			}
		}); // mainslide play btn 

	
	let showHideToggleBtn = $('.show_hide_btn'),
		showBtn = showHideToggleBtn.find('.show'),
		hideBtn = showHideToggleBtn.find('.hide'),
		newsContainer = $('.my_mainslide .small_wrapper'),
		mainslidePager = $('.fp-slidesNav');

		hideBtn.addClass('active');
		showHideToggleBtn.click(function(){
			if(hideBtn.hasClass('active') == true){
				newsContainer.stop().animate({
					bottom:'-180px',
				},400);
				mainslidePager.stop().animate({
					bottom:'60px'
				},400);
				hideBtn.removeClass('active');
				showBtn.addClass('active');
			}else{
				newsContainer.stop().animate({
					bottom:'0px',
				},400);
				mainslidePager.stop().animate({
					bottom:'240px'
				},400);
				hideBtn.addClass('active');
				showBtn.removeClass('active');
			}
		});//smallNews toggle btn
		
function numAnimation(){
	let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
		$('#years').animateNumber({number: 81,numberStep:comma_separator_number_step},{easing: 'swing',duration: 1700});
		$('#group').animateNumber({number: 843,numberStep:comma_separator_number_step},{easing: 'swing',duration: 1700});
		$('#public').animateNumber({number: 100,numberStep:comma_separator_number_step},{easing: 'swing',duration: 1700});
		$('#sales').animateNumber({number: 1596842, numberStep:comma_separator_number_step},{easing: 'swing',duration: 1000});
}// Number animation

		let miniPager = $('.pagers_small a'),
			currentIdx = 0,
			slides = $('.whats_new .content_wrapper ul li');
			
		miniPager.click(function(e){
			e.preventDefault();
			miniPager.removeClass('active');
			let $this = $(this);
			$this.addClass('active');

			let targetIdx = $this.index();
			moveSlide(targetIdx);
		});
		function moveSlide(i){
			let currentSlide = slides.eq(currentIdx);
			let nextSlide = slides.eq(i);
	
			currentSlide.css({left:0}).stop().animate({left:'-100%'});
			nextSlide.css({left:'100%'}).stop().animate({left:0});
			currentIdx = i;
		}// what's new mini slide
		
	
		let popup = document.querySelector('.popup');
        let popupCheckBox = document.querySelector('#popup');
        let popupClose = popup.querySelector('#close');

        //쿠키 생성 함수
        function setCookie(name,value,day){
            let date = new Date();
            date.setDate(date.getDate() + day);

            let cookieContent = '';
            cookieContent += `${name}=${value};`;
            cookieContent += `Expires=${date.toUTCString()}`;            

            document.cookie = cookieContent;
        }
        
        //쿠키 확인 함수
        function getCookie(name){
            let visited = false;
            let cookies = document.cookie.split(';'); //문자열 ; 구분해서 배열 생성

            for(let cookie of cookies){
                if(cookie.indexOf(name) > -1){
                    visited = true;
                }
            }
            if(visited){
                popup.style.display = 'none'; //재방문
            }else{
                popup.style.display = 'block'; //첫방문, 안보기 체크안하고 닫기,
            }
        }        
        getCookie('ABC');

        //쿠키 삭제 함수
        function delCookie(name,value){           

            let date = new Date();
            date.setDate(date.getDate() - 1);

            let cookieContent = '';
            cookieContent += `${name}=${value};`;
            cookieContent += `Expires=${date.toUTCString()}`;            

            document.cookie = cookieContent;
        }            

        popupClose.addEventListener('click', ()=>{
            popup.style.display = 'none';
            if(popupCheckBox.checked){ //체크되었다면, 팝업을 다시 안보겠다, 쿠키생성
                setCookie('ABC','Main Page',1);
            }else{//체크x, 팝업을 다시 보겠다, 쿠키제거
                delCookie('ABC','Main Page');
            }
        });