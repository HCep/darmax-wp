<?php

?>

	</div><!-- #content -->
	</div><!-- .row -->
			</div>
	<footer class="site-footer" role="contentinfo">

			
				<div class="main-footer d-flex">
				<div class="container mx-auto">
					<?php get_sidebar('footer'); ?> 
					
</div>
				</div>
				
		<!-- prawa autorskie -->
		<div class="footer-bottom-row">
		<div class="container mx-auto">
			
						<div class="site-info d-flex">

						<?php get_sidebar('footer-two'); ?> 
						</div>
			
		</div>
		</div>
		
		

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/splide.min.js"></script>
<script>
<?php if(is_front_page()){ ?>
	new Splide( '#splide-all',{
	perPage: 4,
	arrowPath:'M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z',
	breakpoints: {
	992:{
		perPage: 3,
	},
    640: {
		perPage: 2,
    },
	500: {
		perPage: 1,
    },
  }} ).mount();

<?php } ?>
 
  new Splide( '#splide-mont',{
	perPage: 4,
	arrowPath:'M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z',
	breakpoints: {
	992:{
		perPage: 3,
	},
    640: {
		perPage: 2,
    },
	500: {
		perPage: 1,
    },
  }} ).mount();
</script>

</body>
</html>
