 $(document).ready(function(){var pagecont=$('section[id]');$('span.rot').click(function(){for(var i=1;i<=$('span.rot').parent().length;i++){$('span.rot').parent().eq(i-1).delay(100).delay((i-1)*300).fadeOut(500).animate({top:'-230px'})};$('section.menu').delay(1100).fadeOut(100);pagecont.filter($(this).parent().attr("href")).delay(1200).fadeIn(500,function(){$('.block').jScrollPane({verticalDragMinHeight:100,verticalDragMaxHeight:100});$(".container").animate({marginTop:"-310px"},{duration:700,specialEasing:{marginTop:'easeOutExpo'}})});return false});$('a.close').click(function(){$(this).parents('section[id]').fadeOut(500,function(){$(".container").animate({marginTop:"-225px"},{duration:700,specialEasing:{marginTop:'easeOutExpo'}});$('section.menu').fadeIn(100,function(){for(var i=1;i<=$('span.rot').parent().length;i++){$('span.rot').parent().eq(i-1).delay(100).delay((i-1)*300).fadeIn(500).animate({top:0},{duration:200,easing:'easeOutExpo',complete:function(){}})}})});return false});$('ul.socicon li').hover(function(){$(this).find('a').animate({marginTop:5},{duration:100,easing:'easeOutExpo',complete:function(){}})},function(){$(this).find('a').animate({marginTop:0},{duration:100,easing:'easeOutExpo',complete:function(){}})});$('.tweets').relatedTweets({debug:true,from_users:'envato',status:1,realtime:0,n:20,show_avatar:0,show_author:0,image_width:32});if($.browser.msie){}else{$('a.close img').rotate({bind:{mouseover:function(){$(this).rotate({animateTo:360,easing:$.easing.easeInOutSine})},mouseout:function(){$(this).rotate({animateTo:0,easing:$.easing.easeInOutSine})}}})}$('span.rot img').rotate({bind:{mouseover:function(){$(this).rotate({animateTo:360,easing:$.easing.easeInOutSine})},mouseout:function(){$(this).rotate({animateTo:0,easing:$.easing.easeInOutSine})}}});$('span.rot img').trigger('mouseover');setTimeout(function(){$('span.rot img').trigger('mouseout')},1000);$('[name=tipsy]').tipsy({fade:true,gravity:'s'});$('#form [title]').tipsy({trigger:'focus',gravity:'w'});$('#nivo').nivoSlider({effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:200,pauseOnHover:true,directionNavHide:false,controlNav:false});$("a[rel^='prettyPhoto']").prettyPhoto();$('ul.portfolio li a').hover(function(){$(this).find('img').animate({width:"+=30px"},{duration:500,specialEasing:{width:'jswing'}})},function(){$(this).find('img').animate({width:"249px"},{duration:500,specialEasing:{width:'jswing'}});return false});$('ul.portfolio li a').hover(function(){cap=$(this).find('span');cap.stop().animate({bottom:-450},500,'easeInCubic',function(){})},function(){cap.stop().animate({bottom:0},500,'easeInCubic',function(){})});$('#submit').formValidator({scope:'#form'});var options={beforeSubmit:function(){$('.sending').show()},success:function(){$('.sending').hide();$('#form').hide();$(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>');$('.mess').delay(3000).fadeOut(function(){$('#form').clearForm();$('#form').delay(3500).show()})},url:'./php/contact.php'};$('#form').submit(function(){$(this).ajaxSubmit(options);return false})}); 