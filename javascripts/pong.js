var DEBUG_MODE = true;
var PADDLE_START_POINT = 20;
var PADDLE_WIDTH = 20;
var PADDLE_HEIGHT = 200;
var PADDLE_END_POINT = 480;
var KEYCODE_W=119;
var KEYCODE_S=115;
var PLAYER1_DOWN_KEYCODE=KEYCODE_S;
var PLAYER1_UP_KEYCODE=KEYCODE_W;
var INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1=5;
var INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1=5;
var UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
var DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
var UPWARD_MOVE_ACCELARATION_PLAYER2=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
var DOWNWARD_MOVE_ACCELARATION_PLAYER2=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
var INITIAL_PLAYER1_UPWARD_DEACCELARATE = 1;
var INITIAL_PLAYER1_DOWNWARD_DEACCELARATE = 1;
var PLAYER1_UPWARD_DEACCELARATE = INITIAL_PLAYER1_UPWARD_DEACCELARATE;
var PLAYER1_DOWNWARD_DEACCELARATE = INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
var ACCELARATION_INVERTION = true;
var HIT_EDGE_FREEZE = true;
var OPOSITE_KEY_NOT_PRESSED = false;
var HIT_EDGE = false;
var CHANGED_KEY_AFTER_HIT_EDGE = false;
var KEY_CHANGE_STOP_PADDLE = false;
var KEY_CHANGE_REGISTERED = true;
var GAMEBALL_INITIAL_X_SPEED = 3;
var GAMEBALL_INITIAL_Y_SPEED = 5;
var PLAYER1_MOVEMENT_MODIFIERS = [
    "NORMAL",
    "ICY",
    "PHISICS",
    "RANDOM_NEGATIVE_ACCELARATION",
    "RANDOM_POSITIVE_ACCELARATION"
];
var CURRENT_STATE =0;
var PLAYER1_MOVEMENT_STATE = PLAYER1_MOVEMENT_MODIFIERS[CURRENT_STATE];
var REDERER_LOOP,LOGIC_LOOP,AI_LOOP;
var LOGIC_LOOP_READY = true,RENDER_LOOP_READY = true, AI_LOOP_READY = true;
var AI_DIFICULTYS = [
  "easy",
  "medium",
  "hard"
];
var CURRENT_AI_DIFICULTY = 0;
var AI_DIFICULTY = AI_DIFICULTYS[CURRENT_AI_DIFICULTY];
//Start Code
function startGame(){
    console.log("Starting Game");
    //Initialize game variables
    console.log("Initializing Game");
    initializeGame();
    //load game images and start game afterwards
    console.log("Loading Game Images");
    loadGameImages(beginEngine);
}
//Begin Logic and Render loop
function beginEngine(){
  console.log("Starting engine up");
  //start draw loop set how many drame persecond for game
  console.log("Starting Render Loop");
  renderLoop(100);
  //start draw loop set how many drame persecond for game
  console.log("Start Logic Loop");
  logicLoop(100);
  //start player2 AI
  console.log("Start player2 AI");
  aiLoop(AI_DIFICULTY,100);
}
function initializeGame(){
  initializePlayers();
  initializeBall();
  //initialize key keeper as either 1 for up or 0 for down
  window.CURRENT_KEY =0;
}
function  initializePlayers(){
  // Initialize player1
  console.log("Initializing Player1");
  window.player1={};
  player1.y=PADDLE_START_POINT;
  player1.dy=0;
  player1.width=PADDLE_WIDTH;
  player1.height=PADDLE_HEIGHT;
  player1.score=0;
  player1.x=0;
  // Initialize player2
  console.log("Initializing Player2");
  window.player2={};
  player2.y=PADDLE_START_POINT;
  player2.dy=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
  player2.x = canvas.width - PADDLE_WIDTH;
  player2.width=PADDLE_WIDTH;
  player2.height=PADDLE_HEIGHT;
  player2.score=0;
}
function  initializeBall(){
  // Initialize ball
  console.log("Initializing Ball1");
  var gameball={};
  gameball.x=30;
  gameball.dx=GAMEBALL_INITIAL_X_SPEED;
  gameball.y=30;
  gameball.dy=GAMEBALL_INITIAL_Y_SPEED;
  gameball.x1=35;
  gameball.y1=35;
  gameball.x2=40;
  gameball.y2=40;

  var gameball2={};
  gameball2.x=130;
  gameball2.dx=-GAMEBALL_INITIAL_X_SPEED;
  gameball2.y=130;
  gameball2.dy=-GAMEBALL_INITIAL_Y_SPEED;
  gameball2.x1=135;
  gameball2.y1=135;
  gameball2.x2=140;
  gameball2.y2=140;
  window.gameballs = [gameball,gameball2];
}
//Reset all vars for newed game
function resetVARS(){
  if(REDERER_LOOP===null||LOGIC_LOOP===null||AI_LOOP===null){
    console.log("Interval not created");
    LOGIC_LOOP_READY = true;
    RENDER_LOOP_READY= true;
    AI_LOOP_READY = true;
    return;
  }
  //Clear interval before attempting to restart loop
  console.log("Clear interval");
  clearInterval(REDERER_LOOP);
  clearInterval(LOGIC_LOOP);
  clearInterval(AI_LOOP);
  LOGIC_LOOP_READY = true;
  RENDER_LOOP_READY= true;
  AI_LOOP_READY = true;
}
function  loadGameImages(callback){
  //Horizontal walls load
  if(window.horizontal_wall!==null&&window.ball_shadow_2!==null&&window.ball_shadow&&ball!==null&&window.soccer!==null&&window.paddle!==null&&window.paddle_reversed!==null&&window.side_wall!==null){
      console.log("Images Already In Memory");
    callback();
  }
  window.horizontal_wall = new Image();
  horizontal_wall.src = "images/horizontal_wall.png";
  //Side walls load
  window.side_wall = new Image();
  side_wall.src = "images/side_wall.png";
  //Paddle walls load
  window.paddle = new Image();
  paddle.src = "images/paddle.png";
  //Paddle walls load
  window.paddle_reversed = new Image();
  paddle_reversed.src = "images/paddle_reversed.png";
  //Soccer walls load
  window.soccer = new Image();
  soccer.src = "images/soccer.png";
  //ball walls load
  window.ball = new Image();
  ball.src = "images/ball.png";
  //ball walls load
  window.ball_shadow = new Image();
  ball_shadow.src = "images/ball_shadow.png";
  //ball walls load
  window.ball_shadow_2 = new Image();
  ball_shadow_2.src = "images/ball_shadow_2.png";
  $(horizontal_wall).load(function() {
    $(side_wall).load(function() {
      $(paddle).load(function() {
        $(soccer).load(function() {
          $(ball).load(function() {
            $(ball_shadow).load(function() {
              $(ball_shadow_2).load(function() {
                $(paddle_reversed).load(function() {
                    //All game images are loaded
                    console.log("Loaded all Images");
                    try{
                      console.log("Calling callback");
                      callback();
                    }catch(e){}
                  });
              });
            });
          });
        });
      });
    });
  });
}
function movePlayer1Up(){
  console.log("Incrementing players acceleration upward");
  player1.dy-=UPWARD_MOVE_ACCELARATION_PLAYER1;
}
function movePlayer1Down(){
  console.log("Incrementing players acceleration downward");
  player1.dy+=DOWNWARD_MOVE_ACCELARATION_PLAYER1;
}
function  renderLoop(redrawTimeInSeconds){
    console.log("Setting up render loop every "+ redrawTimeInSeconds);
    //var id = Math.random()*250+250;
    //Handle deadlock
    while(!RENDER_LOOP_READY){
      resetVARS();
    }
    //redraw_frame
    RENDER_LOOP_READY= false;
    window.REDERER_LOOP = setInterval(function(){
      //console.log("Drawing frame / " +id );
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(soccer, 0, 0);
      ctx.drawImage(horizontal_wall, 0, 0);
      ctx.drawImage(horizontal_wall, 0, canvas.width-20);
      ctx.drawImage(side_wall, canvas.width/2-10, 20);
      ctx.drawImage(paddle_reversed, player2.x, player2.y,player2.width,player2.height);
      ctx.drawImage(paddle, player1.x, player1.y,player1.width,player1.height);
      gameballs.forEach(function(gameball){
            ctx.drawImage(ball_shadow_2, gameball.x2, gameball.y2,10,10);
            ctx.drawImage(ball_shadow, gameball.x1, gameball.y1,15,15);
            ctx.drawImage(ball, gameball.x, gameball.y);
      });
      if(DEBUG_MODE)
          render_vars();
    }, redrawTimeInSeconds);
}
function render_vars(){
  var targetYs = "";
  player2.targetYCordQueue.forEach(function(target){
        targetYs+=target+", ";
  });
  $('#myStats').html(
    "<br/>Press \'s\' and \'w\' to move the paddle down and up respectively. Press \'a\' to switch player1 paddle mode, press \'c\' to Increase player size and press \'b\' to decrese size."
    + "<br/>Player1 score =" + player1.score +", Player2 score =" + player2.score
    + "<br/>UPWARD_MOVE_ACCELARATION_PLAYER1 =" +UPWARD_MOVE_ACCELARATION_PLAYER1
    + "<br/>DOWNWARD_MOVE_ACCELARATION_PLAYER1 =" +DOWNWARD_MOVE_ACCELARATION_PLAYER1
    + "<br/>PLAYER1_UPWARD_DEACCELARATE =" +PLAYER1_UPWARD_DEACCELARATE
    + "<br/>PLAYER1_DOWNWARD_DEACCELARATE =" +PLAYER1_DOWNWARD_DEACCELARATE
    + "<br/>ACCELARATION_INVERTION =" +ACCELARATION_INVERTION
    + "<br/>HIT_EDGE_FREEZE =" +HIT_EDGE_FREEZE
    + "<br/>OPOSITE_KEY_NOT_PRESSED =" + OPOSITE_KEY_NOT_PRESSED
    + "<br/>CURRENT_KEY =" +  CURRENT_KEY
    + "<br/>player1.y =" +player1.y + ", player1.dy =" +player1.dy
    + "<br/>HIT_EDGE =" +HIT_EDGE
    + "<br/>CHANGED_KEY_AFTER_HIT_EDGE ="+CHANGED_KEY_AFTER_HIT_EDGE
    + "<br/>PLAYER1_MOVEMENT_STATE =" +PLAYER1_MOVEMENT_STATE
    + "<br/>targetYs =" +targetYs
    + "<br/>Current Target ="+player2.currentYTarget
    + "<br/>Player2.dy ="+player2.dy + ", player2.y ="+player2.y
    + "<br/>AI level ="+AI_DIFICULTY +" ai should be heading "+((gameballs[0].y-(player2.y+player2.height/2))>0?"down":"up")
  );

}
function  logicLoop(updateLogicTimeInSeconds){
  console.log("Updating game loop logic every "+updateLogicTimeInSeconds);
  //var id = Math.random()*250;
  //Handle deadlock
  while(!LOGIC_LOOP_READY){
    resetVARS();
  }
  //re-do Logic for game
  LOGIC_LOOP_READY = false;
  window.LOGIC_LOOP =  setInterval(function(){
    //Make sure state number and string are start
    PLAYER1_MOVEMENT_STATE = PLAYER1_MOVEMENT_MODIFIERS[CURRENT_STATE];
    AI_DIFICULTY = AI_DIFICULTYS[CURRENT_AI_DIFICULTY];
        //console.log("Updating player one position / " + id);
        gameballs.forEach(function(gameball){
          //Move ball and its shadow
          gameball.y+=gameball.dy;
          gameball.x+=gameball.dx;
          gameball.y1=gameball.y-5*(gameball.dy/Math.abs(gameball.dy));
          gameball.x1=gameball.x-5*(gameball.dx/Math.abs(gameball.dx));
          gameball.y2=gameball.y1-5*(gameball.dy/Math.abs(gameball.dy));
          gameball.x2=gameball.x1-5*(gameball.dx/Math.abs(gameball.dx));
          //BAll collision detection
          if(gameball.y <20){
            gameball.y = 20;
            gameball.dy*=-1;
          } else
          if(gameball.y >canvas.height-40){
            gameball.y = canvas.height-40;
            gameball.dy*=-1;
          } else
          if(gameball.x > player2.x && gameball.y >= player2.y &&gameball.y <= player2.y+player2.height ){
            gameball.x = canvas.width-player2.width-player1.width;
            gameball.dx*=-1;
          } else
          if(gameball.x < player1.width && gameball.y >= player1.y && gameball.y <= player1.y+player1.height){
            gameball.x = 20;
            gameball.dx*=-1;
          } else if(gameball.x < player1.width ) {
            gameball.x = canvas.width/2;
            gameball.x1 = canvas.width/2;
            gameball.x2 = canvas.width/2;
            gameball.dx*=-1;
            player2.score++;
          } else if(gameball.x > player2.x ) {
            gameball.x = canvas.width/2;
            gameball.x1 = canvas.width/2;
            gameball.x2 = canvas.width/2;
            gameball.dx*=-1;
            player1.score++;
          }
        });
        //Set configurations for controls
        switch(PLAYER1_MOVEMENT_STATE){
          case "ICY":
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=true;
                HIT_EDGE_FREEZE=true;
                KEY_CHANGE_STOP_PADDLE = false;
                break;
          case "PHISICS":
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=true;
                HIT_EDGE_FREEZE=false;
                KEY_CHANGE_STOP_PADDLE = false;
                break;
          case "RANDOM_POSITIVE_ACCELARATION"://TODO
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=false;
                HIT_EDGE_FREEZE=false;
                KEY_CHANGE_STOP_PADDLE = true;
                break;
          case "RANDOM_NEGATIVE_ACCELARATION"://TODO
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=false;
                HIT_EDGE_FREEZE=false;
                KEY_CHANGE_STOP_PADDLE = true;
                break;
          case "NORMAL":
          default:
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=false;
                HIT_EDGE_FREEZE=false;
                KEY_CHANGE_STOP_PADDLE = true;
        }
        if(!OPOSITE_KEY_NOT_PRESSED){
          KEY_CHANGE_REGISTERED=false;
        }
        if(KEY_CHANGE_STOP_PADDLE&&!KEY_CHANGE_REGISTERED){
          KEY_CHANGE_REGISTERED=true;
          player1.dy=0;
        }
        //Check if player hit edge
        if(player1.y<PADDLE_START_POINT){
          window.HIT_EDGE=true;
          player1.y=PADDLE_START_POINT;
          if(ACCELARATION_INVERTION)
            player1.dy*=-1;
          else
              player1.dy=0;
        }else if(player1.y>PADDLE_END_POINT-player1.height){
          window.HIT_EDGE=true;
          player1.y=PADDLE_END_POINT-player1.height;
          if(ACCELARATION_INVERTION)
            player1.dy*=-1;
          else
              player1.dy=0;
        } else {
          window.HIT_EDGE=false;
        }
        //check if key has changed after hitting edge
        CHANGED_KEY_AFTER_HIT_EDGE = HIT_EDGE?true:CHANGED_KEY_AFTER_HIT_EDGE;
        if(!OPOSITE_KEY_NOT_PRESSED){
          CHANGED_KEY_AFTER_HIT_EDGE=false;
        }
        //Apply velociry if can
        var paddle_frozen = HIT_EDGE_FREEZE && CHANGED_KEY_AFTER_HIT_EDGE;
        if(!paddle_frozen)
          player1.y+=player1.dy;
        //slow down paddle by applying de acceleration
        if(player1.dy!==0){
          if(player1.dy>PLAYER1_DOWNWARD_DEACCELARATE){
            player1.dy-=PLAYER1_DOWNWARD_DEACCELARATE;
          }else if(player1.dy<PLAYER1_DOWNWARD_DEACCELARATE){
            player1.dy+=PLAYER1_UPWARD_DEACCELARATE;
          } else if(player1.dy>0){
            player1.dy--;
          } else {
            player1.dy++;
          }
        }
    }, updateLogicTimeInSeconds);
}
function aiLoop(aiDificulty,updateAITimeInSeconds){
  console.log("Updating ai loop logic every "+updateAITimeInSeconds);
  //var id = Math.random()*250;
  //Handle deadlock
  while(!AI_LOOP_READY){
    resetVARS();
  }
  //re-do Logic for AI
  AI_LOOP_READY = false;
  //Set aid specific variables
  player2.targetYCordQueue = [];
  window.AI_LOOP =  setInterval(function(){
    switch (aiDificulty) {
      case "easy":
          //find closest ball, maximize problem
          var clossestGameball=gameballs[0];
          gameballs.forEach(function(gameball){
              if(gameball.x>clossestGameball.x){
                   clossestGameball=gameball;
              }
          });
          //set player boundaries
          if(player2.y>PADDLE_END_POINT-player2.height){
            player2.y = PADDLE_END_POINT-player2.height;
          }
          if(player2.y<PADDLE_START_POINT){
            player2.y=PADDLE_START_POINT;
          }
          //move paddle
          if(clossestGameball.y!==(player2.y+player2.height/2)){
                player2.dy=((clossestGameball.y-(player2.y+player2.height/2))>0?UPWARD_MOVE_ACCELARATION_PLAYER2:-1*DOWNWARD_MOVE_ACCELARATION_PLAYER2);
                player2.y+=player2.dy;
          }
        break;
      case "medium":
        gameballs.forEach(function(gameball){
          if(gameball.x>canvas.widht/2){
            gameball.hasBeenTargeted=true;
            var ytemp = (gameball.dy/gameball.dx)*(canvas.width-player2.width -gameball.x) + gameball.y;
            if(ytemp<0||ytemp>canvas.width){
              gameball.hasBeenTargeted=false;
              return;
            }
            player2.targetYCordQueue.unshift(ytemp);
          }
        });
        break;
      case "hard":
        break;
      default:

    }
  }, updateAITimeInSeconds);
}
$(document).ready(function() {
    console.log("Document Ready");
    //Draw menu screen
    window.canvas = document.getElementById("myCanvas");
    window.ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = "images/pong.png";
    $(image).load(function() {
         ctx.drawImage(image, 0, 0);
        // $('#myCanvas').on("click",startGame);
         $(document).on("keypress",function( e ) {
              var keycode=e.keyCode || e.which;
              if ( keycode == 13 ) {
                  startGame();
                  return;
              }
              //Check if game started
              if(player1){

                  //turn uppercase to lower case
                  if(keycode<90){
                    keycode+=32;
                  }
                  //Check if key pressed has changed
                  if ( keycode ==  PLAYER1_UP_KEYCODE ||  keycode ==  PLAYER1_DOWN_KEYCODE){
                    OPOSITE_KEY_NOT_PRESSED = CURRENT_KEY==keycode;
                    CURRENT_KEY=keycode;
                  }
                  //Check move up
                  if ( keycode ==  PLAYER1_UP_KEYCODE && player1.y > PADDLE_START_POINT) {
                      movePlayer1Up();
                      console.log("Moving UP Start");
                  }
                  //Check move down
                  if ( keycode ==  PLAYER1_DOWN_KEYCODE && player1.y <(PADDLE_END_POINT-player1.height)) {
                      movePlayer1Down();
                      console.log("Moving DOWN Start");
                  }
                  if ( keycode ==  97) {
                    CURRENT_STATE=(CURRENT_STATE+1)%PLAYER1_MOVEMENT_MODIFIERS.length;
                  }
                  if(keycode ==  98){
                    player1.height-=10;
                  }
                  if(keycode ==  99){
                    player1.height+=10;
                  }
                  if(keycode ==  100){
                    var gameball={};
                    var y = 200*Math.random()+30, x=200*Math.random()+30;
                    gameball.x=x;
                    gameball.dx=GAMEBALL_INITIAL_X_SPEED+20*Math.random();
                    gameball.y=y;
                    gameball.dy=GAMEBALL_INITIAL_Y_SPEED+20*Math.random();
                    gameball.x1=x+5;
                    gameball.y1=y+5;
                    gameball.x2=x+10;
                    gameball.y2=y+10;
                    window.gameballs.unshift(gameball);
                  }
            }
        });
    });
    console.log("Game Logic Loaded");
});
