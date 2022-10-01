<?php
get_header(); ?>
<?php if(!is_front_page()): ?>
<header class="page-banner">
    <h1 class="page-title"> 
        <?php echo the_title(); ?>
    </h1>
</header>
<?php endif; ?>
<main>
    <div class="container-fluid page px-0 mx-0">
        <?php the_content(); ?>

			





	</div>
</main>

<?php get_footer(); ?>
