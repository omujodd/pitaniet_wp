;
(function() {
	'use strict';
    $=jQuery;
    // iPad and iPod detection	
    var isiPad = function() {
    	return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function() {
    	return (
    		(navigator.platform.indexOf("iPhone") != -1) ||
    		(navigator.platform.indexOf("iPod") != -1)
    		);
    };

    // Burger Menu
    var burgerMenu = function() {
    	$('body').on('click', '.js-fh5co-nav-toggle', function() {
    		if ($('#fh5co-navbar').is(':visible')) {
    			$(this).removeClass('active');
    		} else {
    			$(this).addClass('active');
    		}

    	});
    };


    // Animate Projects

    var animateBox = function() {
    	if ($('.animate-box').length > 0) {
    		$('.animate-box').waypoint(function(direction) {

    			if (direction === 'down' && !$(this.element).hasClass('animated')) {

    				$(this.element).addClass('fadeIn animated');

    			}
    		}, { offset: '80%' });
    	}
    };


    // Animate Leadership
    var animateTeam = function() {
    	if ($('#team').length > 0) {
    		$('#team .to-animate').each(function(k) {

    			var el = $(this);

    			setTimeout(function() {
    				console.log('yaya');
    				el.addClass('fadeInUp animated');
    			}, k * 200, 'easeInOutExpo');

    		});
    	}
    };
    var teamWayPoint = function() {
    	if ($('#team').length > 0) {
    		$('#team').waypoint(function(direction) {

    			if (direction === 'down' && !$(this.element).hasClass('animated')) {

    				setTimeout(animateTeam, 200);


    				$(this.element).addClass('animated');

    			}
    		}, { offset: '80%' });
    	}
    };


    // Animate Feature
    var animateFeatureIcons = function() {
    	if ($('#fh5co-services').length > 0) {
    		$('#fh5co-services .to-animate').each(function(k) {

    			var el = $(this);

    			setTimeout(function() {
    				el.addClass('bounceIn animated');
    			}, k * 200, 'easeInOutExpo');

    		});
    	}
    };
    var featureIconsWayPoint = function() {
    	if ($('#fh5co-services').length > 0) {
    		$('#fh5co-services').waypoint(function(direction) {

    			if (direction === 'down' && !$(this.element).hasClass('animated')) {




    				setTimeout(animateFeatureIcons, 200);


    				$(this.element).addClass('animated');

    			}
    		}, { offset: '80%' });
    	}
    };






    $(function() {
/*
        burgerMenu();
        animateBox();
        teamWayPoint();
        featureIconsWayPoint();*/



    });


}());


var myMap;

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);


    function setMarkerCenterM(m){
    	myMap.setCenter(m.geometry._coordinates);
    	myMap.setZoom(16);

    }
    function setMarkerCenter(e){
    	myMap.setCenter(e.get('target').geometry._coordinates)
    	myMap.setZoom(16);
    } 

    function init() {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {

        	center: [59.88, 30.34],
        	zoom: 11,
        	controls: ['zoomControl', 'fullscreenControl']
        }, {
        	searchControlProvider: 'yandex#search'
        });

        st1 = new ymaps.Placemark([59.923942, 30.383574], {
        	hintContent: 'Невский пр., д.  175  (Вместимость: 60 человек)',
/*            balloonContent: 'Инфа по клику'
*/        }, markerIcon);

        st2 = new ymaps.Placemark([59.925498, 30.379316], {
        	hintContent: 'Невский пр., д. 151  (Вместимость: 50 человек)',
/*            balloonContent: 'Инфа по клику'
*/        }, markerIcon);

        st3 = new ymaps.Placemark([59.924609, 30.286844], {
        	hintContent: 'Ул. Декабристов, д. 43  (120 человек)',
        	/*balloonContent: 'Инфа по клику'*/
        }, markerIcon);

        st4 = new ymaps.Placemark([59.832317, 30.339215], {
        	hintContent: 'Московское шоссе д. 7  (Торговый двор) (80 человек)',
        	/* balloonContent: 'Инфа по клику'*/
        }, markerIcon);

        st5 = new ymaps.Placemark([59.891011, 30.387679], {
        	hintContent: 'Ул. Салова д. 52  (Вместимость: 400 человек)',
        	/*balloonContent: 'Инфа по клику'*/
        }, markerIcon);

        st6 = new ymaps.Placemark([59.945089, 30.351224], {
        	hintContent: 'Ул. Фурштатская, д. 7  (Вместимость: 120 человек)',
        	/* balloonContent: 'Инфа по клику'*/
        }, markerIcon);

        markersObj = {
        	'st1':st1,'st2':st2,'st3':st3,'st4':st4,'st5':st5,'st6':st6
        }   
        myMap.geoObjects
        .add(st1)
        .add(st2)
        .add(st3)
        .add(st4)
        .add(st5)
        .add(st6)

        st1.events.add('click',setMarkerCenter)
        st2.events.add('click',setMarkerCenter)
        st3.events.add('click',setMarkerCenter)
        st4.events.add('click',setMarkerCenter)
        st5.events.add('click',setMarkerCenter)
        st6.events.add('click',setMarkerCenter)

    }
    jQuery(function($){
    	$('a.map-marker-highlight').on('click',function(e){
    		e.preventDefault();
    		var mrkrID = $(this).attr('data-marker');
    		setMarkerCenterM(markersObj[mrkrID]);
    		if($(this).hasClass('navigate-contacts')){
    			$('body,html').scrollTop($(contacts).offset().top);
    		}
    	})
    })

    $(function(){

    	if($(window).scrollTop()>100){
    		$('.navbar-header').addClass('moving');
    	}
    	else{
    		$('.navbar-header').removeClass('moving');
    	}


    	$('.navbar-collapse').on('click','a',function(e) {
    		if($('.navbar-collapse').hasClass('in')){
    			$('.navbar-header .js-fh5co-nav-toggle').trigger('click');
    		}

    	});
    	$('body').scrollspy({ target: '#fh5co-navbar' });
    	$('#contacts').on('click', function(event) {
    		$('#map').addClass('enable-pe');
    	});
    	$(window).on('scroll',function(event) {
    		if($(this).scrollTop()>100){
    			$('.navbar-header').addClass('moving');
    		}
    		else{
    			$('.navbar-header').removeClass('moving');
    		}
    	});
    	$('#fh5co-navbar ul li a').on('click', function(event) {
    		$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top},200);
    		/* Act on the event */
    	});
    	$('.magnific-popup').magnificPopup({
    		type:'image'
    	})
    });
