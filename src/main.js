$(document).ready(function(){
  /*give the players event listeners that they move eight directions:
  left,right,up,down and they would go a skewey way when pressing
  two buttons together.*/
  let $stage=$('.container');
  let $redscore=$('.redscore');
  let $bluescore=$('.bluescore');
  let $banner=$('.banner');
  let $redGuy=$('#red');
  let $blueGuy=$('#blue');
  let $player=$('.player');
  let $redGoal=$('#redgoal');
  let $blueGoal=$('#bluegoal');
  let $ball=$('.ball');

//banner switch...
  const startGame=function(){
    let $bannerHTML=function(){
      $banner.html('3');
      setTimeout(function(){
        $banner.html('2');
      },1000);
      setTimeout(function(){
        $banner.html('1');
      },2000);
      setTimeout(function(){
        $banner.html('fight!!');
      },3000);
      setTimeout(function(){
        $banner.html('');
      },4000)
    }
    $bannerHTML();

//defining arrays related
    let keys=[];
    let keysEqual=[];

    $(document).keydown(function redMove(e){
//declare variables and calculate the center distance and see if there's a collision
      let $redTop=parseInt($redGuy.css('top'));
      let $redLeft=parseInt($redGuy.css('left'));
      let $blueTop=parseInt($blueGuy.css('top'));
      let $blueLeft=parseInt($blueGuy.css('left'));
      let $ballTop=parseInt($ball.css('top'));
      let $ballLeft=parseInt($ball.css('left'));
      let $redCenterDist=Math.sqrt(Math.pow((($redTop+25)-($ballTop+10)),2)+Math.pow((($redLeft+25)-($ballLeft+10)),2));
      let $blueCenterDist=Math.sqrt(Math.pow((($blueTop+25)-($ballTop+10)),2)+Math.pow((($blueLeft+25)-($ballLeft+10)),2));

  //give the ball a reaction that it gets the same style as the player
  // when touching the player.
      let collide=function(){
       if($redCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($redGuy);
         $ball.css({left:'10px',top:'10px'});
       }else if($blueCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($blueGuy);
         $ball.css({left:'10px',top:'10px'});
       }
      }
//redguy movement
      if ([87,68,83,65].includes(e.keyCode)&&!keys.includes(e.keyCode)){
       keys.push(e.keyCode);
      }else if(keys.includes(e.keyCode)){
       if(keys.includes(87)&&keys.includes(68)){
         $redGuy.animate({top:'-=20',left:'+=20'},0);
       }else if(keys.includes(68)&&keys.includes(83)){
         $redGuy.animate({left:'+=20',top:'+=20'},0);
       }else if(keys.includes(83)&&keys.includes(65)){
         $redGuy.animate({top:'+=20',left:'-=20'},0);
       }else if(keys.includes(65)&&keys.includes(87)){
         $redGuy.animate({left:'-=20',top:'-=20'},0);
       }else if(keys.includes(87)){
         $redGuy.animate({top:'-=20'},0)
       }else if(keys.includes(68)){
         $redGuy.animate({left:'+=20'},0)
       }else if(keys.includes(83)){
         $redGuy.animate({top:'+=20'},0)
       }else if(keys.includes(65)){
         $redGuy.animate({left:'-=20'},0);
       }
       collide();
      }
//ball shoot
      if (keys.includes(87)&&e.keyCode===88&&$redCenterDist<35) {
        $ball.removeAttr('style');
        $ball.addClass('ballBounceUp');
      }else if(keys.includes(68)&&e.keyCode===88&&$redCenterDist<35){
        $ball.removeAttr('style');
        $ball.addClass('ballBounceRight');
      }else if(keys.includes(83)&&e.keyCode===88&&$redCenterDist<35){
        $ball.removeAttr('style');
        $ball.addClass('ballBounceDown');
      }else if(keys.includes(65)&&e.keyCode===88&&$redCenterDist<35){
        console.log('ha')
        //$ball.insertAfter($goal);
        $ball.addClass('ballBounceLeft');
      }
    })
    $(document).keydown(function blueMove(e){
//declare variables and calculate the center distance and see if there's a collision
      let $redTop=parseInt($redGuy.css('top'));
      let $redLeft=parseInt($redGuy.css('left'));
      let $blueTop=parseInt($blueGuy.css('top'));
      let $blueLeft=parseInt($blueGuy.css('left'));
      let $ballTop=parseInt($ball.css('top'));
      let $ballLeft=parseInt($ball.css('left'));
      let $redCenterDist=Math.sqrt(Math.pow((($redTop+25)-($ballTop+10)),2)+Math.pow((($redLeft+25)-($ballLeft+10)),2));
      let $blueCenterDist=Math.sqrt(Math.pow((($blueTop+25)-($ballTop+10)),2)+Math.pow((($blueLeft+25)-($ballLeft+10)),2));

      let collide=function(){
       if($redCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($redGuy);
         $ball.css({left:'10px',top:'10px'});
       }else if($blueCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($blueGuy);
         $ball.css({left:'10px',top:'10px'});
       }
      }

//blueguy movement
      if ([73,76,75,74].includes(e.keyCode)&&!keys.includes(e.keyCode)){
       keys.push(e.keyCode);
      }else if(keys.includes(e.keyCode)){
       if(keys.includes(73)&&keys.includes(76)){
         $blueGuy.animate({top:'-=20',left:'+=20'},0);
       }else if(keys.includes(76)&&keys.includes(75)){
         $blueGuy.animate({left:'+=20',top:'+=20'},0);
       }else if(keys.includes(75)&&keys.includes(74)){
         $blueGuy.animate({top:'+=20',left:'-=20'},0);
       }else if(keys.includes(74)&&keys.includes(73)){
         $blueGuy.animate({left:'-=20',top:'-=20'},0);
       }else if(keys.includes(73)){
         $blueGuy.animate({top:'-=20'},0)
       }else if(keys.includes(76)){
         $blueGuy.animate({left:'+=20'},0)
       }else if(keys.includes(75)){
         $blueGuy.animate({top:'+=20'},0)
       }else if(keys.includes(74)){
         $blueGuy.animate({left:'-=20'},0);
       };
       collide();
     }
//ball shoot
     if (keys.includes(73)&&e.keyCode===77&&$blueCenterDist<35) {
        $ball.removeAttr('style');
        $ball.addClass('ballBounceUp');
      }else if(keys.includes(76)&&e.keyCode===77&&$blueCenterDist<35){
        $ball.removeAttr('style');
        $ball.addClass('ballBounceRight');
      }else if(keys.includes(75)&&e.keyCode===77&&$blueCenterDist<35){
        $ball.removeAttr('style');
        $ball.addClass('ballBounceDown');
      }else if(keys.includes(74)&&e.keyCode===77&&$blueCenterDist<35){
        $ball.removeAttr('style');
        $ball.addClass('ballBounceLeft');
      }
    })

//reactions when keys up
    $(document).keyup(function removeKey(e){
      keys.splice(keys.indexOf(e.keyCode),1);
    })

  }





  //give the ball a reaction that it bounces when touching the edge.


  /*give the goal a reaction that the ball would be hidden after
  touching it and change the innerHTML of the score with the same
  color.*/


  startGame()

});



