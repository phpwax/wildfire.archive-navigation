jQuery(document).ready(function(){
  
  jQuery(".archive_nav a.year").bind("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    jQuery(this).parent().children("ul.nav:eq(0)").slideToggle();    
  });
  jQuery(".archive_nav a.month").bind("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    jQuery(this).parent().children("ul.nav:eq(0)").slideToggle();    
  });
  
  jQuery(".archive_nav li:not(.in_stack) a.year, .archive_nav li:not(.in_stack) a.month").trigger("click");
});