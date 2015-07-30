var DEBUG_MODE = true;
var PADDLE_START_POINT = 20;
var PADDLE_WIDTH = 20;
var PADDLE_HEIGHT = 100;
var PADDLE_END_POINT = 380;
var KEYCODE_W=119;
var KEYCODE_S=115;
var PLAYER1_DOWN_KEYCODE=KEYCODE_S;
var PLAYER1_UP_KEYCODE=KEYCODE_W;
var INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1=1;
var INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1=1;
var UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
var DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
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
var PLAYER1_MOVEMENT_STATE = PLAYER1_MOVEMENT_MODIFIERS[0];
var REDERER_LOOP,LOGIC_LOOP;
var LOGIC_LOOP_READY = true,RENDER_LOOP_READY = true;
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
//Reset all vars for newed game
function resetVARS(){
  if(REDERER_LOOP===null||LOGIC_LOOP===null){
    console.log("Interval not created");
    LOGIC_LOOP_READY = true;
    RENDER_LOOP_READY= true;
    return;
  }
  //Clear interval before attempting to restart loop
  console.log("Clear interval");
  clearInterval(REDERER_LOOP);
  clearInterval(LOGIC_LOOP);
  LOGIC_LOOP_READY = true;
  RENDER_LOOP_READY= true;
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
}
function  initializeBall(){
  // Initialize ball
  console.log("Initializing Ball1");
  window.gameball={};
  gameball.x=30;
  gameball.dx=GAMEBALL_INITIAL_X_SPEED;
  gameball.y=30;
  gameball.dy=GAMEBALL_INITIAL_Y_SPEED;
  gameball.x1=35;
  gameball.dx1=gameball.dx;
  gameball.y1=35;
  gameball.dy1=gameball.dy;
  gameball.x2=40;
  gameball.dx2=gameball.dx1;
  gameball.y2=40;
  gameball.dy2=gameball.dy1;
}
function  loadGameImages(callback){
  //Horizontal walls load
  if(window.horizontal_wall!==null&&window.ball_shadow_2!==null&&window.ball_shadow&&ball!==null&&window.soccer!==null&&window.paddle!==null&&window.side_wall!==null){
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
    while(!RENDER_LOOP_READY){
      resetVARS();
    }
    //redraw_frame
    RENDER_LOOP_READY= false;
    window.REDERER_LOOP = setInterval(function(){
      //console.log("Drawing frame / " +id );
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(soccer, 0, 0);
      ctx.drawImage(horizontal_wall, 0, 0);
      ctx.drawImage(horizontal_wall, 0, 480);
      ctx.drawImage(side_wall, 240, 20);
      ctx.drawImage(side_wall, 485, 20);
      ctx.drawImage(paddle, 0, player1.y,player1.width,player1.height);
      ctx.drawImage(ball_shadow_2, gameball.x2, gameball.y2);
      ctx.drawImage(ball_shadow, gameball.x1, gameball.y1);
      ctx.drawImage(ball, gameball.x, gameball.y);
      if(DEBUG_MODE)
          render_vars();
    }, redrawTimeInSeconds);
}
function render_vars(){
  $('#myStats').html(
    "<br/>UPWARD_MOVE_ACCELARATION_PLAYER1 =" +UPWARD_MOVE_ACCELARATION_PLAYER1
    + "<br/>DOWNWARD_MOVE_ACCELARATION_PLAYER1 =" +DOWNWARD_MOVE_ACCELARATION_PLAYER1
    + "<br/>PLAYER1_UPWARD_DEACCELARATE =" +PLAYER1_UPWARD_DEACCELARATE
    + "<br/>PLAYER1_DOWNWARD_DEACCELARATE =" +PLAYER1_DOWNWARD_DEACCELARATE
    + "<br/>ACCELARATION_INVERTION =" +ACCELARATION_INVERTION
    + "<br/>HIT_EDGE_FREEZE =" +HIT_EDGE_FREEZE
    + "<br/>OPOSITE_KEY_NOT_PRESSED =" + OPOSITE_KEY_NOT_PRESSED
    + "<br/>CURRENT_KEY =" +  CURRENT_KEY
    + "<br/>player1.y =" +player1.y
    + "<br/>player1.dy =" +player1.dy
    + "<br/>HIT_EDGE =" +HIT_EDGE
    + "<br/>CHANGED_KEY_AFTER_HIT_EDGE ="+CHANGED_KEY_AFTER_HIT_EDGE
    + "<br/>PLAYER1_MOVEMENT_STATE =" +PLAYER1_MOVEMENT_STATE
  );
}
function  logicLoop(updateLogicTimeInSeconds){
  console.log("Updating game loop logic every "+updateLogicTimeInSeconds);
  //var id = Math.random()*250;
  while(!LOGIC_LOOP_READY){
    resetVARS();
  }
  //re-do Logic for game
  LOGIC_LOOP_READY = false;
  window.LOGIC_LOOP =  setInterval(function(){
        //console.log("Updating player one position / " + id);
        //Move ball and its shadow
        gameball.y+=gameball.dy;
        gameball.x+=gameball.dx;
        gameball.y1+=gameball.dy1;
        gameball.x1+=gameball.dx1;
        gameball.y2+=gameball.dy2;
        gameball.x2+=gameball.dx2;
        gameball.dy1=gameball.dy;
        gameball.dx1=gameball.dx;
        gameball.dy2=gameball.dy1;
        gameball.dx2=gameball.dx1;
        //BAll collision detection
        if(gameball.y <20){
          gameball.y = 20;
          gameball.dy*=-1;
        } else
        if(gameball.y >460){
          gameball.y = 460;
          gameball.dy*=-1;
        } else
        if(gameball.x > 460){
          gameball.x = 460;
          gameball.dx*=-1;
        } else
        if(gameball.x < player1.width && gameball.y >= player1.y && gameball.y <= player1.y+player1.height){
          gameball.x = 20;
          gameball.dx*=-1;
        } else if(gameball.x < player1.width ) {
          gameball.x = 250;
          gameball.x1 = 250;
          gameball.x2 = 250;
          gameball.dx*=-1;
        }
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
          case "RANDOM_POSITIVE_ACCELARATION":
                UPWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_UPWARD_MOVE_ACCELARATION_PLAYER1;
                DOWNWARD_MOVE_ACCELARATION_PLAYER1=INITIAL_DOWNWARD_MOVE_ACCELARATION_PLAYER1;
                PLAYER1_UPWARD_DEACCELARATE=INITIAL_PLAYER1_DOWNWARD_DEACCELARATE;
                PLAYER1_DOWNWARD_DEACCELARATE=INITIAL_PLAYER1_UPWARD_DEACCELARATE;
                ACCELARATION_INVERTION=false;
                HIT_EDGE_FREEZE=false;
                KEY_CHANGE_STOP_PADDLE = true;
                break;
          case "RANDOM_NEGATIVE_ACCELARATION":
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
        }else if(player1.y>PADDLE_END_POINT){
          window.HIT_EDGE=true;
          player1.y=PADDLE_END_POINT;
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
$(document).ready(function() {
    console.log("Document Ready");
    //Draw menu screen
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
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
                  if ( keycode ==  PLAYER1_DOWN_KEYCODE && player1.y <PADDLE_END_POINT) {
                      movePlayer1Down();
                      console.log("Moving DOWN Start");
                  }
            }
        });
    });
    console.log("Game Logic Loaded");
});
