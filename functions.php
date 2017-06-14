<?php

/**
 * Enqueue scripts and styles
 */
function _tk_scripts() {

	// Import the necessary TK Bootstrap WP CSS additions

	// load bootstrap css

	// load Font Awesome css
	wp_enqueue_style( '_tk-style', get_stylesheet_uri() );

	wp_enqueue_style( '_tk-bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' );
	// load bootstrap js
	wp_enqueue_script('_tk-bootstrapjs', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery') );
	wp_enqueue_script('ya-mpaps', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU' );
	wp_enqueue_script('popup-js',  get_template_directory_uri().'/js/jquery.magnific-popup.min.js', array('jquery') );
	wp_enqueue_script('main-js',  get_template_directory_uri().'/js/main.js', array('jquery') );

	

	wp_enqueue_style( 'roboto-font', 'http://fonts.googleapis.com/css?family=Roboto:400,300,100,500' );
	wp_enqueue_style( 'roboto-font2', 'http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,500' );
	wp_enqueue_style( 'animate-style', get_template_directory_uri().'/css/animate.css' );
	wp_enqueue_style( 'icon-style', get_template_directory_uri().'/css/icomoon.css' );
	wp_enqueue_style( 'icon-style2', get_template_directory_uri().'/css/simple-line-icons.css' );
	wp_enqueue_style( 'icon-style3', get_template_directory_uri().'/css/magnific-popup.css' );

}
add_action( 'wp_enqueue_scripts', '_tk_scripts' );

function td(){
	echo get_template_directory_uri().'/';
}

function dc($pn){
	echo get_post_field('post_content',$pn);
}

function dt($pn){
	echo get_post_field('post_title',$pn);
}