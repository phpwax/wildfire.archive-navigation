jQuery(document).ready(function(){
  
  jQuery(".archive_nav a.year").bind("click", function(e){
    jQuery(this).parent().toggleClass("open-nav").trigger("state_change.archive_nav").children("ul.nav:eq(0)").slideToggle();
    e.preventDefault();
  });
  jQuery(".archive_nav a.month").bind("click", function(e){
    jQuery(this).parent().toggleClass("open-nav").trigger("state_change.archive_nav").children("ul.nav:eq(0)").slideToggle();
    e.preventDefault();
  });
  
});