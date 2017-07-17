$(document).ready(function(){
  /*give the players event listeners that they move eight directions:
  left,right,up,down and they would go a skewey way when pressing
  two buttons together.*/
  let $container=$('.container');
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


    $(document).keydown(function redMove(e){

    console.log($ball.offset().top)

//declare variables and calculate the center distance and see if there's a collision
      let $redTop=parseInt($redGuy.offset().top);
      let $redLeft=parseInt($redGuy.offset().left);
      let $blueTop=parseInt($blueGuy.offset().top);
      let $blueLeft=parseInt($blueGuy.offset().left);
      let $ballTop=parseInt($ball.offset().top);
      let $ballLeft=parseInt($ball.offset().left);
      let $redCenterDist=Math.sqrt(Math.pow((($redTop+25)-($ballTop+10)),2)+Math.pow((($redLeft+25)-($ballLeft+10)),2));
      let $blueCenterDist=Math.sqrt(Math.pow((($blueTop+25)-($ballTop+10)),2)+Math.pow((($blueLeft+25)-($ballLeft+10)),2));
      let $redBlueDist=Math.sqrt(Math.pow((($redTop+25)-($blueTop+25)),2)+Math.pow((($redLeft+25)-($blueLeft+25)),2));


  //give the ball a reaction that it gets the same style as the player
  // when touching the player.
      let collide=function(){
       if($redCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($redGuy);
         $ball.css({top:'10px',left:'10px'});
       }else if($blueCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($blueGuy);
         $ball.css({top:'10px',left:'10px'});
       }
      }
//redguy movement
      let redGuyBack=function(){
       if(keys.includes(87)&&keys.includes(68)){
         $redGuy.animate({top:'-=40',left:'+=40'},2);
       }else if(keys.includes(68)&&keys.includes(83)){
         $redGuy.animate({left:'+=40',top:'+=40'},2);
       }else if(keys.includes(83)&&keys.includes(65)){
         $redGuy.animate({top:'+=40',left:'-=40'},2);
       }else if(keys.includes(65)&&keys.includes(87)){
         $redGuy.animate({left:'-=40',top:'-=40'},2);
       }else if(keys.includes(87)){
         $redGuy.animate({top:'-=40'},2);
       }else if(keys.includes(68)){
         $redGuy.animate({left:'+=40'},2);
       }else if(keys.includes(83)){
         $redGuy.animate({top:'+=40'},2);
       }else if(keys.includes(65)){
         $redGuy.animate({left:'-=40'},2);
       }
      }
       collide();
//redguy move and bounce
     if ([87,68,83,65].includes(e.keyCode)&&!keys.includes(e.keyCode)){
       keys.push(e.keyCode);
      }else if(keys.includes(e.keyCode)&&$redBlueDist<=80&&$redCenterDist<5){
        $redGuy.parent().append($ball);
        $ball.offset({left:$redLeft+50,top:$redTop-50});
        if($blueLeft<$redLeft&&$blueTop>=$redTop-40&&$blueTop<$redTop+40){
          $redGuy.addClass('ballBounceRight');
          setTimeout(function(){
            $redGuy.removeClass('ballBounceRight');
            $redGuy.offset({left:$redLeft+560,top:$redTop});
          },2000);
        }else if($blueLeft>=$redLeft&&$blueTop>=$redTop-40&&$blueTop<$redTop+40){
          $redGuy.addClass('ballBounceLeft');
          setTimeout(function(){
            $redGuy.removeClass('ballBounceLeft');
            $redGuy.offset({left:$redLeft-560,top:$redTop});
          },2000);
        }else if($blueTop<$redTop&&$blueLeft>$redLeft-40&&$blueLeft<$redLeft+40){
          $redGuy.addClass('ballBounceDown');
          setTimeout(function(){
            $redGuy.removeClass('ballBounceDown');
            $redGuy.offset({left:$redLeft,top:$redTop+560});
          },2000);
        }else if($blueTop>=$redTop&&$blueLeft>=$redLeft-40&&$blueLeft<=$redLeft+40){
          $redGuy.addClass('ballBounceUp');
          setTimeout(function(){
            $redGuy.removeClass('ballBounceUp');
            $redGuy.offset({left:$redLeft,top:$redTop-560});
          },2000);

      }
      }else if(keys.includes(e.keyCode)){
        redGuyBack();
    }

//ball shoot
      if (keys.includes(87)&&e.keyCode===88&&$redCenterDist<5) {
        $redGuy.parent().append($ball);
        $ball.offset({left:$redLeft+10,top:$redTop-20});
        $ball.addClass('ballBounceUp');
      }else if(keys.includes(68)&&e.keyCode===88&&$redCenterDist<5){
        $redGuy.parent().append($ball);
        $ball.offset({left:$redLeft+50,top:$redTop+10});
        $ball.addClass('ballBounceRight');
      }else if(keys.includes(83)&&e.keyCode===88&&$redCenterDist<5){
        $redGuy.parent().append($ball);
        $ball.offset({left:$redLeft+10,top:$redTop+50});
        $ball.addClass('ballBounceDown');
      }else if(keys.includes(65)&&e.keyCode===88&&$redCenterDist<5){
        $redGuy.parent().append($ball);
        $ball.offset({left:$redLeft-20,top:$redTop+10});
        $ball.addClass('ballBounceLeft');
      }
    })
    $(document).keydown(function blueMove(e){
//declare variables and calculate the center distance and see if there's a collision
      let $redTop=parseInt($redGuy.offset().top);
      let $redLeft=parseInt($redGuy.offset().left);
      let $blueTop=parseInt($blueGuy.offset().top);
      let $blueLeft=parseInt($blueGuy.offset().left);
      let $ballTop=parseInt($ball.offset().top);
      let $ballLeft=parseInt($ball.offset().left);
      let $redCenterDist=Math.sqrt(Math.pow((($redTop+25)-($ballTop+10)),2)+Math.pow((($redLeft+25)-($ballLeft+10)),2));
      let $blueCenterDist=Math.sqrt(Math.pow((($blueTop+25)-($ballTop+10)),2)+Math.pow((($blueLeft+25)-($ballLeft+10)),2));
      let $redBlueDist=Math.sqrt(Math.pow((($redTop+25)-($blueTop+25)),2)+Math.pow((($redLeft+25)-($blueLeft+25)),2));

      let collide=function(){
       if($redCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($redGuy);
         $ball.css({top:'10px',left:'10px'});
       }else if($blueCenterDist<35){
         $ball.removeClass('ballBounceUp');
         $ball.removeClass('ballBounceRight');
         $ball.removeClass('ballBounceDown');
         $ball.removeClass('ballBounceLeft');
         $ball.appendTo($blueGuy);
         $ball.css({top:'10px',left:'10px'});
       }
      }

//blueguy movement
     let blueGuyBack=function(){
       if(keys.includes(73)&&keys.includes(76)){
         $blueGuy.animate({top:'-=40',left:'+=40'},2);
       }else if(keys.includes(76)&&keys.includes(75)){
         $blueGuy.animate({left:'+=40',top:'+=40'},2);
       }else if(keys.includes(75)&&keys.includes(74)){
         $blueGuy.animate({top:'+=40',left:'-=40'},2);
       }else if(keys.includes(74)&&keys.includes(73)){
         $blueGuy.animate({left:'-=40',top:'-=40'},2);
       }else if(keys.includes(73)){
         $blueGuy.animate({top:'-=40'},2);
       }else if(keys.includes(76)){
         $blueGuy.animate({left:'+=40'},2);
       }else if(keys.includes(75)){
         $blueGuy.animate({top:'+=40'},2);
       }else if(keys.includes(74)){
         $blueGuy.animate({left:'-=40'},2);
       };
     }
       collide();
//blueguy move and bounce
    if ([73,76,75,74].includes(e.keyCode)&&!keys.includes(e.keyCode)){
      keys.push(e.keyCode);

     }else if(keys.includes(e.keyCode)&&$redBlueDist<=80&&$blueCenterDist<5){
      $blueGuy.parent().append($ball);
      $ball.offset({left:$blueLeft+50,top:$blueTop-50});

      if($redLeft<$blueLeft&&$redTop>=$blueTop-40&&$redTop<$blueTop+40){
        $blueGuy.addClass('ballBounceRight');
        setTimeout(function(){
          $blueGuy.removeClass('ballBounceRight');
          $blueGuy.offset({left:$blueLeft+560,top:$blueTop});
        },2000);
      }else if($redLeft>=$blueLeft&&$redTop>=$blueTop-40&&$redTop<$blueTop+40){
        $blueGuy.addClass('ballBounceLeft');
        setTimeout(function(){
          $blueGuy.removeClass('ballBounceLeft');
          $blueGuy.offset({left:$blueLeft-560,top:$blueTop});
        },2000);
      }else if($redTop<$blueTop&&$redLeft>$blueLeft-40&&$redLeft<$blueLeft+40){
        $blueGuy.addClass('ballBounceDown');
        setTimeout(function(){
          $blueGuy.removeClass('ballBounceDown');
          $blueGuy.offset({left:$blueLeft,top:$blueTop+560});
        },2000);
      }else if($redTop>=$blueTop&&$redLeft>=$blueLeft-40&&$redLeft<=$blueLeft+40){
        $blueGuy.addClass('ballBounceUp');
        setTimeout(function(){
          $blueGuy.removeClass('ballBounceUp');
          $blueGuy.offset({left:$blueLeft,top:$blueTop-560});
        },2000);
      }

     }else if(keys.includes(e.keyCode)){
      blueGuyBack();
     }

//ball shoot
     if (keys.includes(73)&&e.keyCode===77&&$blueCenterDist<5) {
        $blueGuy.parent().append($ball);
        $ball.offset({left:$blueLeft+10,top:$blueTop-20});
        $ball.addClass('ballBounceUp');
      }else if(keys.includes(76)&&e.keyCode===77&&$blueCenterDist<5){
        $blueGuy.parent().append($ball);
        $ball.offset({left:$blueLeft+50,top:$blueTop+10});
        $ball.addClass('ballBounceRight');
      }else if(keys.includes(75)&&e.keyCode===77&&$blueCenterDist<5){
        $blueGuy.parent().append($ball);
        $ball.offset({left:$blueLeft+10,top:$blueTop+50});
        $ball.addClass('ballBounceDown');
      }else if(keys.includes(74)&&e.keyCode===77&&$blueCenterDist<5){
        $blueGuy.parent().append($ball);
        $ball.offset({left:$blueLeft-20,top:$blueTop+10});
        $ball.addClass('ballBounceLeft');
      }
    })

//reactions when keys up
    $(document).keyup(function removeKey(e){
      keys.splice(keys.indexOf(e.keyCode),1);
     if($ball.offset().top<=60){
      console.log('ha')

     }

    })

  }





  //give the ball a reaction that it bounces when touching the edge.


  /*give the goal a reaction that the ball would be hidden after
  touching it and change the innerHTML of the score with the same
  color.*/


  startGame()

});



