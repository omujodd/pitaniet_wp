<?php 
/*
Template name: Root Template
*/
get_header();
 ?>


	<header id="fh5co-header" role="banner">
		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="navbar-header"> 
							<!-- Mobile Toggle Menu Button -->
							<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle visible-xs-block" data-toggle="collapse" data-target="#fh5co-navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
							<a class="navbar-brand" href="#"><img class="img-responsive" src="<?php echo get_template_directory_uri();?>/images/logo.png" alt=""></a>
						</div>
						<div id="fh5co-navbar" class="navbar-collapse collapse">
							<ul class="nav navbar-nav navbar-right">
								<li><a href="#about-us"><span>О нас</span></a></li>
								<li><a href="#our-menu"><span>Меню</span></a></li>
								<li><a href="#team"><span>Команда</span></a></li>
								<li><a href="#diners"><span>Столовые</span></a></li>
								<li><a href="#corporate"><span>Корпоративное питание</span></a></li>
								<li><a href="#contacts"><span>Контакты</span></a></li>
								<li><a href="#for-touragents"><span>Турагенствам</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<!-- END .header -->
	<div id="fh5co-main">
	<?php get_template_part( 'intro','block'); ?>
	<?php get_template_part( 'about','us'); ?>
	<?php get_template_part( 'form','reply'); ?>
	<?php get_template_part( 'our','menu'); ?>
	<?php get_template_part( 'team','block'); ?>
	<?php get_template_part( 'diners','block'); ?>
	<?php get_template_part( 'corporate','block'); ?>
	<?php get_template_part( 'contact','block'); ?>
	<?php get_template_part( 'for','touragents'); ?>

<?php
get_footer();
?>