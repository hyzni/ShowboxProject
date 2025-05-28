$('.sub-menu .btn-wrap').click(function(){
  $(this).find('.btn-menu').toggleClass('on');
  $('.sub-menu .sm-gnb').toggleClass('show');
  $('#header .logo').toggleClass('hidden');
  $('html, body').toggleClass('no-scroll');
})




visualSlide = new Swiper('.sc-intro .swiper', {
  loop: true,
  effect:"fade",
    autoplay: {
        delay: 5000,
      }
})


/**
 * @인트로모션
 * 
 * 
 * 
 * 
 */


const introMotion = gsap.timeline({
  // defaults:{
  //   duration:1,
  // }
})

introMotion.to('#header .logo',1,{
  opacity:1,
  y:0
})
introMotion.to('#header .gnb-list .gnb-item',2,{
  opacity:1,
  y:0,
  stagger:0.1,
},'a')
introMotion.to('.sc-intro .inner .headline > *',2,{
  opacity:1,
  y:0,
  stagger:0.1,
},'a')







quoteSwiper = new Swiper('.sc-quote .swiper', {
    loop: true,
    effect:"fade",
    // autoplay: {
    //     delay: 2000,
    //   },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

       pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          num = (index < 10)?'0'+(index+1):index;

          // if (index < 10) {
          //   num = '0'+(index+1);
          // }else{
          //   num = index
          // }

          return '<span class="' + className + '">' + (num) + "</span>";
        },
      },


  
      on: {
        autoplayTimeLeft(s, time, progress) {
          gsap.to('body',{
            "--progress":1 - progress
          })
          // progressCircle.style.setProperty("--progress", 1 - progress);
          // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }

});


$('.sc-quote .swiper-slide .btn-more').click(function(){
  $('.sc-quote .swiper-slide .more-open').toggleClass('show')
})



ScrollTrigger.create({
  trigger:".sc-showbox",
  start:"0% 80%",
  endTrigger:"#footer",
  end:"100% 100%",
  toggleClass:{
    targets:"#header",
    className:"small"
  },
})

ScrollTrigger.create({
  trigger:".sc-showbox",
  start:"0% 40%",
  endTrigger:"#footer",
  end:"100% 100%",
  onUpdate:function(data){
    console.log();
    if (data.direction < 1) {
      $('#header').removeClass('hidden')
    }else{
      $('#header').addClass('hidden')
    }
  }
})




/**
 * 
 * @모든올라오는효과 [개별]
 * 
 * 
 */

$('[data-motion="up"]').each(function(i,item){
  gsap.from(item,{
    scrollTrigger:{
      trigger:item,
      start:"0% 80%",
      end:"100% 100%",
    },
    opacity:0,
    y:10,
  })
})

/**
 * 
 * 
 * @모든올라오는효과 [자식이있는경우]
 * 
 */
$('[data-motion="up-stagger"]').each(function(i,item){
  gsap.from($(this).find('>*'),{
    scrollTrigger:{
      trigger:item,
      start:"0% 80%",
      end:"100% 100%",
    },
    opacity:0,
    stagger:0.1,
    y:15,
  })
})


/**
 * 
 * 
 * @모든스케일호과 [자식이있는경우]
 * 
 */
$('[data-motion="scale"]').each(function(i,item){
  gsap.from($(this).find('>*'),{
    scrollTrigger:{
      trigger:item,
      start:"0% 80%",
      end:"100% 100%",
    },
    scale:1.2,
  })
  
})






$('.sc-service .service-item').each(function(i,item){
  gsap.to(item,{
    scrollTrigger:{
      trigger:item,
      start:"0% 80%",
      end:"100% 100%",
    },
   '--scaleY':1
  })
  
})



const splitLines = new SplitType('.sc-mission .content .text', {
  types: 'lines'
});

Mssion = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-mission',
    start:"0% 60%",
    end:"100% 100%",
  },
})

Mssion.from('.sc-mission .headline',{
  opacity:0,
  y:10,
})
Mssion.from('.sc-mission .content .arrow svg',{
  opacity:0,
})
Mssion.from('.sc-mission .content .text .line',{
  delay:0.3,
  opacity:0,
  stagger:0.1,
  y:10,
})
  

$(window).resize(function(){
  const splitLines = new SplitType('.sc-mission .content .text', {types: 'lines'});
})







$('#header .gnb-list .gnb-item').click(function (e) {
    e.preventDefault();

    subList = $(this).find('.sub-list');

    if (subList.hasClass('show')) {
        $('#header .gnb-item .sub-list').removeClass('show').css('height', 0);
        $('#header .gnb-item .text.has-sub').removeClass('show');
    } else {
        $('#header .gnb-item .sub-list').removeClass('show').css('height', 0);
        $('#header .gnb-item .text.has-sub').removeClass('show');

        subList.addClass('show').css('height', subList.get(0).scrollHeight + 'px');
        $(this).find('.text.has-sub').addClass('show');
    }
});


$('#footer .group-top .gnb-item').click(function (e) {
    e.preventDefault();

    subList = $(this).find('.sub-list');

    if (subList.hasClass('show')) {
        $('#footer .group-top .gnb-item .sub-list').removeClass('show').css('height', 0);
        $('#footer .group-top .gnb-item .text.has-sub').removeClass('show');
    } else {
        $('#footer .group-top .gnb-item .sub-list').removeClass('show').css('height', 0);
        $('#footer .group-top .gnb-item .text.has-sub').removeClass('show');

        subList.addClass('show').css('height', subList.get(0).scrollHeight + 'px');
        $(this).find('.text.has-sub').addClass('show');
    }
});
