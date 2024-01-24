// Ludo Game JS M-Gokulkrishna
// Global Variables-----!
const Dice=document.getElementById('dice');
const Dots=document.getElementsByClassName('dots');
const players_set1=document.querySelectorAll('.player1 >.dummy >.circle');
const players_set2=document.querySelectorAll('.player2 >.dummy >.circle');
const players_set3=document.querySelectorAll('.player3 >.dummy >.circle');
const players_set4=document.querySelectorAll('.player4 >.dummy >.circle');
const shells_set1=document.querySelectorAll('.box_set1 >.shell');
const shells_set2=document.querySelectorAll('.box_set2 >.shell');
const shells_set3=document.querySelectorAll('.box_set3 >.shell');
const shells_set4=document.querySelectorAll('.box_set4 >.shell');
const Final_box=document.querySelectorAll('.players_final_box');
const Refresh_button=document.getElementById('Refresh_btn');
const set1=document.querySelector('.player1');
const set2=document.querySelector('.player2');
const set3=document.querySelector('.player3');
const set4=document.querySelector('.player4');
const Crown=document.querySelectorAll('.Crown');
const Checkboxes=document.querySelectorAll('#Checkbox');
const Spans=document.querySelectorAll('.Spans');
const CssRootVar=document.querySelector(':root');
const Rootvar=getComputedStyle(CssRootVar);
const Flag_checker=document.querySelector('.flag_checkbox');
// Jumping speed
const Speed=400;
// Audio effects
const Dice_Rolling_AUD=new Audio();
const Players_jumping_AUD=new Audio();
const Capturing_hills_AUD=new Audio();
const Attack_players_AUD=new Audio();
const Winning_players_AUD=new Audio();
// Audio effects sources
Dice_Rolling_AUD.src='Audio_files/Dice_rolling_sound.mp3';
Players_jumping_AUD.src='Audio_files/Players_jump_sound.mp3';
Capturing_hills_AUD.src='Audio_files/Capturing_hills_sound.mp3';
Attack_players_AUD.src='Audio_files/Attack_players_sound.mp3';
Winning_players_AUD.src='Audio_files/Winning_players_sound.mp3';
// Random value generator variable for Dice
let Random_value;
// Getting each and every players in (HTML)
// set1
let player1_set1=document.getElementById('player1_set1');
let player2_set1=document.getElementById('player2_set1');
let player3_set1=document.getElementById('player3_set1');
let player4_set1=document.getElementById('player4_set1');
// set2
let player1_set2=document.getElementById('player1_set2');
let player2_set2=document.getElementById('player2_set2');
let player3_set2=document.getElementById('player3_set2');
let player4_set2=document.getElementById('player4_set2');
// set3
let player1_set3=document.getElementById('player1_set3');
let player2_set3=document.getElementById('player2_set3');
let player3_set3=document.getElementById('player3_set3');
let player4_set3=document.getElementById('player4_set3');
// set4
let player1_set4=document.getElementById('player1_set4');
let player2_set4=document.getElementById('player2_set4');
let player3_set4=document.getElementById('player3_set4');
let player4_set4=document.getElementById('player4_set4');
// Players_ways_variables-----!
// Way of Players in set1
let Way_players_set1=[shells_set4[12],shells_set4[9],shells_set4[6],shells_set4[3],shells_set4[0],shells_set1[17],shells_set1[16],shells_set1[15],shells_set1[14],shells_set1[13],shells_set1[12],
shells_set1[6],shells_set1[0],shells_set1[1],shells_set1[2],shells_set1[3],shells_set1[4],shells_set1[5],shells_set2[15],shells_set2[12],shells_set2[9],shells_set2[6],shells_set2[3],
shells_set2[0],shells_set2[1],shells_set2[2],shells_set2[5],shells_set2[8],shells_set2[11],shells_set2[14],shells_set2[17],shells_set3[0],shells_set3[1],shells_set3[2],shells_set3[3],
shells_set3[4],shells_set3[5],shells_set3[11],shells_set3[17],shells_set3[16],shells_set3[15],shells_set3[14],shells_set3[13],shells_set3[12],shells_set4[2],shells_set4[5],shells_set4[8],
shells_set4[11],shells_set4[14],shells_set4[17],shells_set4[16],shells_set4[13],shells_set4[10],shells_set4[7],shells_set4[4],shells_set4[1],Final_box[2]];
// Way of Players in set2
let Way_players_set2=[shells_set1[1],shells_set1[2],shells_set1[3],shells_set1[4],shells_set1[5],shells_set2[15],shells_set2[12],shells_set2[9],shells_set2[6],shells_set2[3],shells_set2[0],
shells_set2[1],shells_set2[2],shells_set2[5],shells_set2[8],shells_set2[11],shells_set2[14],shells_set2[17],shells_set3[0],shells_set3[1],shells_set3[2],shells_set3[3],shells_set3[4],
shells_set3[5],shells_set3[11],shells_set3[17],shells_set3[16],shells_set3[15],shells_set3[14],shells_set3[13],shells_set3[12],shells_set4[2],shells_set4[5],shells_set4[8],shells_set4[11],
shells_set4[14],shells_set4[17],shells_set4[16],shells_set4[15],shells_set4[12],shells_set4[9],shells_set4[6],shells_set4[3],shells_set4[0],shells_set1[17],shells_set1[16],shells_set1[15],
shells_set1[14],shells_set1[13],shells_set1[12],shells_set1[6],shells_set1[7],shells_set1[8],shells_set1[9],shells_set1[10],shells_set1[11],Final_box[1]];
// Way of Players in set3
let Way_players_set3=[shells_set2[5],shells_set2[8],shells_set2[11],shells_set2[14],shells_set2[17],shells_set3[0],shells_set3[1],shells_set3[2],shells_set3[3],shells_set3[4],shells_set3[5],
shells_set3[11],shells_set3[17],shells_set3[16],shells_set3[15],shells_set3[14],shells_set3[13],shells_set3[12],shells_set4[2],shells_set4[5],shells_set4[8],shells_set4[11],shells_set4[14],
shells_set4[17],shells_set4[16],shells_set4[15],shells_set4[12],shells_set4[9],shells_set4[6],shells_set4[3],shells_set4[0],shells_set1[17],shells_set1[16],shells_set1[15],shells_set1[14],
shells_set1[13],shells_set1[12],shells_set1[6],shells_set1[0],shells_set1[1],shells_set1[2],shells_set1[3],shells_set1[4],shells_set1[5],shells_set2[15],shells_set2[12],shells_set2[9],
shells_set2[6],shells_set2[3],shells_set2[0],shells_set2[1],shells_set2[4],shells_set2[7],shells_set2[10],shells_set2[13],shells_set2[16],Final_box[0]];
// Way of Players in set4
let Way_players_set4=[shells_set3[16],shells_set3[15],shells_set3[14],shells_set3[13],shells_set3[12],shells_set4[2],shells_set4[5],shells_set4[8],shells_set4[11],shells_set4[14],shells_set4[17],
shells_set4[16],shells_set4[15],shells_set4[12],shells_set4[9],shells_set4[6],shells_set4[3],shells_set4[0],shells_set1[17],shells_set1[16],shells_set1[15],shells_set1[14],shells_set1[13],
shells_set1[12],shells_set1[6],shells_set1[0],shells_set1[1],shells_set1[2],shells_set1[3],shells_set1[4],shells_set1[5],shells_set2[15],shells_set2[12],shells_set2[9],shells_set2[6],shells_set2[3],
shells_set2[0],shells_set2[1],shells_set2[2],shells_set2[5],shells_set2[8],shells_set2[11],shells_set2[14],shells_set2[17],shells_set3[0],shells_set3[1],shells_set3[2],shells_set3[3],shells_set3[4],
shells_set3[5],shells_set3[11],shells_set3[10],shells_set3[9],shells_set3[8],shells_set3[7],shells_set3[6],Final_box[3]];
// Common Way of all players
let Common_Way_array=[shells_set4[9],shells_set4[6],shells_set4[3],shells_set4[0],shells_set1[17],shells_set1[16],shells_set1[15],shells_set1[13],shells_set1[12],
shells_set1[6],shells_set1[0],shells_set1[2],shells_set1[3],shells_set1[4],shells_set1[5],shells_set2[15],shells_set2[12],shells_set2[9],shells_set2[3],
shells_set2[0],shells_set2[1],shells_set2[2],shells_set2[8],shells_set2[11],shells_set2[14],shells_set2[17],shells_set3[0],shells_set3[1],shells_set3[2],
shells_set3[4],shells_set3[5],shells_set3[11],shells_set3[17],shells_set3[15],shells_set3[14],shells_set3[13],shells_set3[12],shells_set4[2],shells_set4[5],shells_set4[8],
shells_set4[14],shells_set4[17],shells_set4[16],shells_set4[15]];
// unique way of all players in each set
let Unique_way_array=[shells_set4[13],shells_set4[10],shells_set4[7],shells_set4[4],shells_set4[1],Final_box[2],shells_set1[7],shells_set1[8],shells_set1[9],shells_set1[10],shells_set1[11],Final_box[1],
shells_set2[4],shells_set2[7],shells_set2[10],shells_set2[13],shells_set2[16],Final_box[0],shells_set3[10],shells_set3[9],shells_set3[8],shells_set3[7],shells_set3[6],Final_box[3]];
// A Custom Object for Reading and Writing the important Data
let Players_object={
    // Dice value(Dynamic)
    Dice_value : 0,
    // Dummy dice value
    Dummy : 0,
    // players chance
    Players_chance : 0,
    // which player is clicked
    Which_player : undefined,
    Which_set : 's1',
    // Place of all players in set1(Dynamic)
    Player1_set1 : 0,
    Player2_set1 : 0,
    Player3_set1 : 0,
    Player4_set1 : 0,
    // Place of all players in set2(Dynamic)
    Player1_set2 : 0,
    Player2_set2 : 0,
    Player3_set2 : 0,
    Player4_set2 : 0,
    // Place of all players in set3(Dynamic)
    Player1_set3 : 0,
    Player2_set3 : 0,
    Player3_set3 : 0,
    Player4_set3 : 0,
    // Place of all players in set4(Dynamic)
    Player1_set4 : 0,
    Player2_set4 : 0,
    Player3_set4 : 0,
    Player4_set4 : 0,
    // Winner flag
    Winner_flag : 0,
    /* feedback flag for after all players 
    enter into 51th shell to avoid the dice value---'6' */
    Feedback_set1 : 0,
    Feedback_set2 : 0,
    Feedback_set3 : 0,
    Feedback_set4 : 0,
    /* feedback flags for after all players in each sets 
    won the game at 56 position */
    Feedback_set1_won : 0,
    Feedback_set2_won : 0,
    Feedback_set3_won : 0,
    Feedback_set4_won : 0,
    // 
    Which_Mode : 'M4',
}
let Initial_Final_flags={
    // Initial Movement of players
    // set1
    P1_set1 : 0,
    P2_set1 : 0,
    P3_set1 : 0,
    P4_set1 : 0,
    // set2
    P1_set2 : 0,
    P2_set2 : 0,
    P3_set2 : 0,
    P4_set2 : 0,
    // set3
    P1_set3 : 0,
    P2_set3 : 0,
    P3_set3 : 0,
    P4_set3 : 0,
    // set4
    P1_set4 : 0,
    P2_set4 : 0,
    P3_set4 : 0,
    P4_set4 : 0,
    // final movement of players
    // set1
    P1_f_set1 : 0,
    P2_f_set1 : 0,
    P3_f_set1 : 0,
    P4_f_set1 : 0,
    // set2
    P1_f_set2 : 0,
    P2_f_set2 : 0,
    P3_f_set2 : 0,
    P4_f_set2 : 0,
    // set3
    P1_f_set3 : 0,
    P2_f_set3 : 0,
    P3_f_set3 : 0,
    P4_f_set3 : 0,
    // set4
    P1_f_set4 : 0,
    P2_f_set4 : 0,
    P3_f_set4 : 0,
    P4_f_set4 : 0,
    // Winner flags
    Winner_flag1 : 'set1_ON',
    Winner_flag2 : 'set2_ON',
    Winner_flag3 : 'set3_ON',
    Winner_flag4 : 'set4_ON',
    // 
}
// Shell_set Object-----!
let Shell_set_obj={
    // Which shell have to check 
    Which_shell : shells_set4[9],
}
// Mode_obj
let Mode_obj={
    Red : 0,
    Blue : 0,
    Yellow : 0,
    Green : 0,
}
// These below checkboxes for setting the Modes of 4P and 2P
Checkboxes[0].addEventListener('change',()=>{
    if(Checkboxes[0].checked){
        Mode_obj.Red=1;
    }
    else{
        Mode_obj.Red=0;
    }
})
Checkboxes[1].addEventListener('change',()=>{
    if(Checkboxes[1].checked){
        Mode_obj.Blue=1;
        
    }
    else{
        Mode_obj.Blue=0;
    }
})
Checkboxes[2].addEventListener('change',()=>{
    if(Checkboxes[2].checked){
        Mode_obj.Yellow=1;
        
    }
    else{
        Mode_obj.Yellow=0;
    }
})
Checkboxes[3].addEventListener('change',()=>{
    if(Checkboxes[3].checked){
        Mode_obj.Green=1;
    }
    else{
        Mode_obj.Green=0;
    }
})
Flag_checker.addEventListener('change',()=>{
    if(Flag_checker.checked){
        Blue_Green_2P();
    }
    else{
        Red_Yellow_2P();
    }
})
// Players_chance_indicator-----!
let chance_indicator=document.createElement('div');
chance_indicator.style.position='absolute';
chance_indicator.style.height='20px';
chance_indicator.style.width='20px';
chance_indicator.style.borderRadius='50%';
chance_indicator.style.backgroundColor='black';
// end-----!
// Some_Default_actions-----! 
function Default(){
    // default dice-----!
    Dots[0].style.visibility='hidden'
    Dots[1].style.visibility='hidden'
    Dots[2].style.visibility='hidden'
    Dots[3].style.visibility='visible'
    Dots[4].style.visibility='hidden'
    Dots[5].style.visibility='hidden'
    Dots[6].style.visibility='hidden'
    // Default color of players
    // set1
    players_set1.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='red'
    })
    // set2
    players_set2.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='blue'
    })
    // set3
    players_set3.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='gold'
    })
    // set4
    players_set4.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='lawngreen'
    })
    set1.appendChild(chance_indicator);
    // checkboxes
    Checkboxes[0].style.bottom='3px';
    Checkboxes[1].style.top='3px';
    Checkboxes[2].style.top='3px';
    Checkboxes[3].style.bottom='3px';
    // Spans
    Spans[0].style.transform='rotate(-90deg)';
    Spans[1].style.transform='rotate(0deg)';
    Spans[2].style.transform='rotate(90deg)';
    Spans[3].style.transform='rotate(-180deg)';
}
Default();
// players_btn function for Capturing the click event of every players(div) in HTML
function players_btn(value){
    // players in set1
    if(value=='p1_s1' && Players_object.Which_set=='s1'){
        Players_object.Which_player=player1_set1;
        Players_object.Which_set='s2';
        set1_action();
    }
    else if(value=='p2_s1' && Players_object.Which_set=='s1'){
        Players_object.Which_player=player2_set1;
        Players_object.Which_set='s2';
        set1_action();
    }
    else if(value=='p3_s1' && Players_object.Which_set=='s1'){
        Players_object.Which_player=player3_set1;
        Players_object.Which_set='s2';
        set1_action();
    }
    else if(value=='p4_s1' && Players_object.Which_set=='s1'){
        Players_object.Which_player=player4_set1;
        Players_object.Which_set='s2';
        set1_action();
    }
    // players in set2
    else if(value=='p1_s2' && Players_object.Which_set=='s2'){
        Players_object.Which_player=player1_set2;
        Players_object.Which_set='s3';
        set2_action();
    }
    else if(value=='p2_s2' && Players_object.Which_set=='s2'){
        Players_object.Which_player=player2_set2;
        Players_object.Which_set='s3';
        set2_action();
    }
    else if(value=='p3_s2' && Players_object.Which_set=='s2'){
        Players_object.Which_player=player3_set2;
        Players_object.Which_set='s3';
        set2_action();
    }
    else if(value=='p4_s2' && Players_object.Which_set=='s2'){
        Players_object.Which_player=player4_set2;
        Players_object.Which_set='s3';
        set2_action();
    }
    // players in set3
    else if(value=='p1_s3' && Players_object.Which_set=='s3'){
        Players_object.Which_player=player1_set3;
        Players_object.Which_set='s4';
        set3_action();
    }
    else if(value=='p2_s3' && Players_object.Which_set=='s3'){
        Players_object.Which_player=player2_set3;
        Players_object.Which_set='s4';
        set3_action();
    }
    else if(value=='p3_s3' && Players_object.Which_set=='s3'){
        Players_object.Which_player=player3_set3;
        Players_object.Which_set='s4';
        set3_action();
    }
    else if(value=='p4_s3' && Players_object.Which_set=='s3'){
        Players_object.Which_player=player4_set3;
        Players_object.Which_set='s4';
        set3_action();
    }
    // players in set4
    else if(value=='p1_s4' && Players_object.Which_set=='s4'){
        Players_object.Which_player=player1_set4;
        Players_object.Which_set='s1';
        set4_action();
    }
    else if(value=='p2_s4' && Players_object.Which_set=='s4'){
        Players_object.Which_player=player2_set4;
        Players_object.Which_set='s1';
        set4_action();
    }
    else if(value=='p3_s4' && Players_object.Which_set=='s4'){
        Players_object.Which_player=player3_set4;
        Players_object.Which_set='s1';
        set4_action();
    }
    else if(value=='p4_s4' && Players_object.Which_set=='s4'){
        Players_object.Which_player=player4_set4;
        Players_object.Which_set='s1';
        set4_action();
    }
}
players_btn();
// This is for refresh or New_Game button 
Refresh_button.addEventListener('click',()=>{
    window.location.reload();
})
// Players_set_chance_assigner-----!
function P1_Chance(){
    if(Players_object.Players_chance==1){
        Players_object.Which_set='s1';
        set2.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
function P2_Chance(){
    if(Players_object.Players_chance==2){
        Players_object.Which_set='s2';
        set3.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
function P3_Chance(){
    if(Players_object.Players_chance==3){
        Players_object.Which_set='s3';
        set4.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
function P4_Chance(){
    if(Players_object.Players_chance==4){
        Players_object.Which_set='s4';
        set1.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
function P1_Chance_2P(){
    if(Players_object.Players_chance==1){
        Players_object.Which_set='s1';
        set3.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
function P2_Chance_2P(){
    if(Players_object.Players_chance==2){
        Players_object.Which_set='s3';
        set1.appendChild(chance_indicator);
        Players_object.Dice_value=Random_value;
        players_btn();
    }
}
// Players_Modes---> 2P & 4P Modes
function Four_players_mode(){
    Players_object.Players_chance+=1;
    if(Players_object.Players_chance>=5){
        Players_object.Players_chance=1;
    }
    Winning();
    if(Players_object.Feedback_set1_won==1 && Players_object.Players_chance==4){
        Players_object.Players_chance=1;
    }
    if(Players_object.Feedback_set2_won==1 && Players_object.Players_chance==1){
        Players_object.Players_chance=2;
    }
    if(Players_object.Feedback_set3_won==1 && Players_object.Players_chance==2){
        Players_object.Players_chance=3;
    }
    if(Players_object.Feedback_set4_won==1 && Players_object.Players_chance==3){
        Players_object.Players_chance=4;
    }
    flag_function();
    P1_Chance();
    if(Players_object.Players_chance==1 && Random_value==6 && Players_object.Feedback_set1==0){
        Players_object.Players_chance=0;
        set1.appendChild(chance_indicator);
        P1_Chance();
    }
    P2_Chance();
    if(Players_object.Players_chance==2 && Random_value==6 && Players_object.Feedback_set2==0){
        Players_object.Players_chance=1;
        set2.appendChild(chance_indicator);
        P2_Chance();
    }
    P3_Chance();
    if(Players_object.Players_chance==3 && Random_value==6 && Players_object.Feedback_set3==0){
        Players_object.Players_chance=2;
        set3.appendChild(chance_indicator);
        P3_Chance();
    }
    P4_Chance();
    if(Players_object.Players_chance==4 && Random_value==6 && Players_object.Feedback_set4==0){
        Players_object.Players_chance=3;
        set4.appendChild(chance_indicator);
        P4_Chance();
    }
}
function Two_players_mode(){
    Players_object.Players_chance+=1;
    if(Players_object.Players_chance>=3){
        Players_object.Players_chance=1;
    }
    flag_function();
    P1_Chance_2P();
    if(Players_object.Players_chance==1 && Random_value==6 && Players_object.Feedback_set1==0){
        Players_object.Players_chance=0;
        set1.appendChild(chance_indicator);
        P1_Chance_2P();
    }
    P2_Chance_2P();
    if(Players_object.Players_chance==2 && Random_value==6 && Players_object.Feedback_set3==0){
        Players_object.Players_chance=1;
        set3.appendChild(chance_indicator);
        P2_Chance_2P();
    }
}
// Color Changing functions
function Blue_Green_2P(){
    CssRootVar.style.setProperty('--color1','blue');
    CssRootVar.style.setProperty('--color2','red');
    CssRootVar.style.setProperty('--color3','lawngreen');
    CssRootVar.style.setProperty('--color4','gold');
    // set1
    players_set1.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='Blue';
    })
    // set2
    players_set2.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='red';
    })
    // set3
    players_set3.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='lawngreen';
    })
    // set4
    players_set4.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='gold';
    })
}
function Red_Yellow_2P(){
    CssRootVar.style.setProperty('--color1','red');
    CssRootVar.style.setProperty('--color2','blue');
    CssRootVar.style.setProperty('--color3','gold');
    CssRootVar.style.setProperty('--color4','lawngreen');
    // set1
    players_set1.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='red';
    })
    // set2
    players_set2.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='blue';
    })
    // set3
    players_set3.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='gold';
    })
    // set4
    players_set4.forEach((elements1)=>{
        elements1.querySelector('div').style.backgroundColor='lawngreen';
    })
}
// Capturing the Dice is being clicked and generates the random value-----!
Dice.addEventListener('click',()=>{
    Random_value=Math.floor((Math.random()*6)+1);
    if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
        Four_players_mode();
    }
    else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
        Two_players_mode();
    }
    // Dice_value_display-----!
    if(Random_value==1){
        Dots[0].style.visibility='hidden'
        Dots[1].style.visibility='hidden'
        Dots[2].style.visibility='hidden'
        Dots[3].style.visibility='visible'
        Dots[4].style.visibility='hidden'
        Dots[5].style.visibility='hidden'
        Dots[6].style.visibility='hidden'
    }
    if(Random_value==2){
        Dots[0].style.visibility='hidden'
        Dots[1].style.visibility='hidden'
        Dots[2].style.visibility='visible'
        Dots[3].style.visibility='hidden'
        Dots[4].style.visibility='visible'
        Dots[5].style.visibility='hidden'
        Dots[6].style.visibility='hidden'
    }
    if(Random_value==3){
        Dots[0].style.visibility='hidden'
        Dots[1].style.visibility='visible'
        Dots[2].style.visibility='hidden'
        Dots[3].style.visibility='visible'
        Dots[4].style.visibility='hidden'
        Dots[5].style.visibility='visible'
        Dots[6].style.visibility='hidden'
    }
    if(Random_value==4){
        Dots[0].style.visibility='visible'
        Dots[1].style.visibility='visible'
        Dots[2].style.visibility='hidden'
        Dots[3].style.visibility='hidden'
        Dots[4].style.visibility='hidden'
        Dots[5].style.visibility='visible'
        Dots[6].style.visibility='visible'
    }
    if(Random_value==5){
        Dots[0].style.visibility='visible'
        Dots[1].style.visibility='visible'
        Dots[2].style.visibility='hidden'
        Dots[3].style.visibility='visible'
        Dots[4].style.visibility='hidden'
        Dots[5].style.visibility='visible'
        Dots[6].style.visibility='visible'
    }
    if(Random_value==6){
        Dots[0].style.visibility='visible'
        Dots[1].style.visibility='visible'
        Dots[2].style.visibility='visible'
        Dots[3].style.visibility='hidden'
        Dots[4].style.visibility='visible'
        Dots[5].style.visibility='visible'
        Dots[6].style.visibility='visible'
    }
})
// Initial Movements of All Players in each sets and calling Movements_players() function for further Movements-----! 
function set1_action(){
    /* Intial condition for each and every players enter into the Game */
    // This set1 players
    if(Players_object.Which_player==player1_set1 && Initial_Final_flags.P1_set1==0 && Players_object.Dice_value==6){
        shells_set4[12].appendChild(player1_set1);
        Initial_Final_flags.P1_set1=1;
        return;
    }
    else if(Players_object.Which_player==player2_set1 && Initial_Final_flags.P2_set1==0 && Players_object.Dice_value==6){
        shells_set4[12].appendChild(player2_set1);
        Initial_Final_flags.P2_set1=1;
        return;
    }
    else if(Players_object.Which_player==player3_set1 && Initial_Final_flags.P3_set1==0 && Players_object.Dice_value==6){
        shells_set4[12].appendChild(player3_set1);
        Initial_Final_flags.P3_set1=1;
        return;
    }
    else if(Players_object.Which_player==player4_set1 && Initial_Final_flags.P4_set1==0 && Players_object.Dice_value==6){
        shells_set4[12].appendChild(player4_set1);
        Initial_Final_flags.P4_set1=1;
        return;
    }
    // further Movement for each and every players in set1
    // player1 in set1
    if(Initial_Final_flags.P1_set1==1 && Players_object.Which_player==player1_set1){
        if((Players_object.Player1_set1+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set1[(Players_object.Player1_set1+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P1_S1');
    }
    // player2 in set1
    else if(Initial_Final_flags.P2_set1==1 && Players_object.Which_player==player2_set1){
        if((Players_object.Player2_set1+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set1[(Players_object.Player2_set1+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P2_S1');
    }
    // player3 in set1
    else if(Initial_Final_flags.P3_set1==1 && Players_object.Which_player==player3_set1){
        if((Players_object.Player3_set1+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set1[(Players_object.Player3_set1+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P3_S1');
    }
    // player4 in set1
    else if(Initial_Final_flags.P4_set1==1 && Players_object.Which_player==player4_set1){
        if((Players_object.Player4_set1+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set1[(Players_object.Player4_set1+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P4_S1');
    }
}
function set2_action(){
    /* Intial condition for each and every players enter into the Game */
    // This set2 players
    if(Players_object.Which_player==player1_set2 && Initial_Final_flags.P1_set2==0 && Players_object.Dice_value==6){
        shells_set1[1].appendChild(Players_object.Which_player);
        Initial_Final_flags.P1_set2=1;
        return;
    }
    else if(Players_object.Which_player==player2_set2 && Initial_Final_flags.P2_set2==0 && Players_object.Dice_value==6){
        shells_set1[1].appendChild(Players_object.Which_player);
        Initial_Final_flags.P2_set2=1;
        return;
    }
    else if(Players_object.Which_player==player3_set2 && Initial_Final_flags.P3_set2==0 && Players_object.Dice_value==6){
        shells_set1[1].appendChild(Players_object.Which_player);
        Initial_Final_flags.P3_set2=1;
        return;
    }
    else if(Players_object.Which_player==player4_set2 && Initial_Final_flags.P4_set2==0 && Players_object.Dice_value==6){
        shells_set1[1].appendChild(Players_object.Which_player);
        Initial_Final_flags.P4_set2=1;
        return;
    }
    // further Movement for each and every players in set2
    // player1 in set2
    if(Initial_Final_flags.P1_set2==1 && Players_object.Which_player==player1_set2){
        if((Players_object.Player1_set2+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set2[(Players_object.Player1_set2+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P1_S2');
    }
    // player2 in set2
    else if(Initial_Final_flags.P2_set2==1 && Players_object.Which_player==player2_set2){
        if((Players_object.Player2_set2+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set2[(Players_object.Player2_set2+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P2_S2');
    }
    // player3 in set2
    else if(Initial_Final_flags.P3_set2==1 && Players_object.Which_player==player3_set2){
        if((Players_object.Player3_set2+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set2[(Players_object.Player3_set2+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P3_S2');
    }
    // player4 in set2
    else if(Initial_Final_flags.P4_set2==1 && Players_object.Which_player==player4_set2){
        if((Players_object.Player4_set2+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set2[(Players_object.Player4_set2+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P4_S2');
    }
}
function set3_action(){
    /* Intial condition for each and every players enter into the Game */
    // This set3 players
    if(Players_object.Which_player==player1_set3 && Initial_Final_flags.P1_set3==0 && Players_object.Dice_value==6){
        shells_set2[5].appendChild(Players_object.Which_player);
        Initial_Final_flags.P1_set3=1;
        return;
    }
    else if(Players_object.Which_player==player2_set3 && Initial_Final_flags.P2_set3==0 && Players_object.Dice_value==6){
        shells_set2[5].appendChild(Players_object.Which_player);
        Initial_Final_flags.P2_set3=1;
        return;
    }
    else if(Players_object.Which_player==player3_set3 && Initial_Final_flags.P3_set3==0 && Players_object.Dice_value==6){
        shells_set2[5].appendChild(Players_object.Which_player);
        Initial_Final_flags.P3_set3=1;
        return;
    }
    else if(Players_object.Which_player==player4_set3 && Initial_Final_flags.P4_set3==0 && Players_object.Dice_value==6){
        shells_set2[5].appendChild(Players_object.Which_player);
        Initial_Final_flags.P4_set3=1;
        return;
    }
    // further Movement for each and every players in set3
    // player1 in set3
    if(Initial_Final_flags.P1_set3==1 && Players_object.Which_player==player1_set3){
        if((Players_object.Player1_set3+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set3[(Players_object.Player1_set3+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P1_S3');
    }
    // player2 in set3
    else if(Initial_Final_flags.P2_set3==1 && Players_object.Which_player==player2_set3){
        if((Players_object.Player2_set3+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set3[(Players_object.Player2_set3+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P2_S3');
    }
    // player3 in set3
    else if(Initial_Final_flags.P3_set3==1 && Players_object.Which_player==player3_set3){
        if((Players_object.Player3_set3+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set3[(Players_object.Player3_set3+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P3_S3');
    }
    // player4 in set3
    else if(Initial_Final_flags.P4_set3==1 && Players_object.Which_player==player4_set3){
        if((Players_object.Player4_set3+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set3[(Players_object.Player4_set3+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P4_S3');
    }
}
function set4_action(){
    /* Intial condition for each and every players enter into the Game */
    // This set4 players
    if(Players_object.Which_player==player1_set4 && Initial_Final_flags.P1_set4==0 && Players_object.Dice_value==6){
        shells_set3[16].appendChild(Players_object.Which_player);
        Initial_Final_flags.P1_set4=1;
        return;
    }
    else if(Players_object.Which_player==player2_set4 && Initial_Final_flags.P2_set4==0 && Players_object.Dice_value==6){
        shells_set3[16].appendChild(Players_object.Which_player);
        Initial_Final_flags.P2_set4=1;
        return;
    }
    else if(Players_object.Which_player==player3_set4 && Initial_Final_flags.P3_set4==0 && Players_object.Dice_value==6){
        shells_set3[16].appendChild(Players_object.Which_player);
        Initial_Final_flags.P3_set4=1;
        return;
    }
    else if(Players_object.Which_player==player4_set4 && Initial_Final_flags.P4_set4==0 && Players_object.Dice_value==6){
        shells_set3[16].appendChild(Players_object.Which_player);
        Initial_Final_flags.P4_set4=1;
        return;
    }
    // further Movement for each and every players in set4
    // player1 in set4
    if(Initial_Final_flags.P1_set4==1 && Players_object.Which_player==player1_set4){
        if((Players_object.Player1_set4+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set4[(Players_object.Player1_set4+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P1_S4');
    }
    // player2 in set4
    else if(Initial_Final_flags.P2_set4==1 && Players_object.Which_player==player2_set4){
        if((Players_object.Player2_set4+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set4[(Players_object.Player2_set4+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P2_S4')
    }
    // player3 in set4
    else if(Initial_Final_flags.P3_set4==1 && Players_object.Which_player==player3_set4){
        if((Players_object.Player3_set4+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set4[(Players_object.Player3_set4+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P3_S4');
    }
    // player4 in set4
    else if(Initial_Final_flags.P4_set4==1 && Players_object.Which_player==player4_set4){
        if((Players_object.Player4_set4+Players_object.Dice_value)>56){
            Players_object.Dummy=Players_object.Dice_value;
            Players_object.Dice_value=0;
        }
        // Way_players_set4[(Players_object.Player4_set4+Players_object.Dice_value)].appendChild(Players_object.Which_player);
        Movements_players('P4_S4');
    }
}
/* This below fun() is for checking How many children in corresponding shell ,when the length of shell's children >=2,
     it will call the Home_return_helper() function, because the first child of the shell who is attacked by the other set's players-----!*/
function Home_return(){
    if((Common_Way_array.indexOf(Shell_set_obj.Which_shell)!=-1) && (Shell_set_obj.Which_shell.children.length>=2)){
        Home_return_helper();
    }
    if((Common_Way_array.indexOf(Shell_set_obj.Which_shell)==-1)){
        if(Unique_way_array.indexOf(Shell_set_obj.Which_shell)==-1){
            Capturing_hills_AUD.play();
        }    
    }
    else{
        return;
    }
}
/* This below fun() is for helps to return back attacked player to their corresponding it's HomeSet,
    and also gives again chance for which set's player attacked that defeated player -----!*/
function Home_return_helper(){
    // set1
    if(((Shell_set_obj.Which_shell.children[0]==player1_set1) && (Shell_set_obj.Which_shell.children[1]!=player2_set1 && Shell_set_obj.Which_shell.children[1]!=player3_set1 && Shell_set_obj.Which_shell.children[1]!=player4_set1))){
        Attack_players_AUD.play();
        Players_object.Which_set='s1';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P1_set1=0;
        Players_object.Player1_set1=0;
        players_set1[0].appendChild(player1_set1);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player2_set1) && (Shell_set_obj.Which_shell.children[1]!=player1_set1 && Shell_set_obj.Which_shell.children[1]!=player3_set1 && Shell_set_obj.Which_shell.children[1]!=player4_set1))){
        Attack_players_AUD.play();
        Players_object.Which_set='s1';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P2_set1=0;
        Players_object.Player2_set1=0;
        players_set1[1].appendChild(player2_set1);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player3_set1) && (Shell_set_obj.Which_shell.children[1]!=player1_set1 && Shell_set_obj.Which_shell.children[1]!=player2_set1 && Shell_set_obj.Which_shell.children[1]!=player4_set1))){
        Attack_players_AUD.play();
        Players_object.Which_set='s1';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P3_set1=0;
        Players_object.Player3_set1=0;
        players_set1[2].appendChild(player3_set1);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }          
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player4_set1) && (Shell_set_obj.Which_shell.children[1]!=player1_set1 && Shell_set_obj.Which_shell.children[1]!=player2_set1 && Shell_set_obj.Which_shell.children[1]!=player3_set1))){
        Attack_players_AUD.play();
        Players_object.Which_set='s1';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P4_set1=0;
        Players_object.Player4_set1=0;
        players_set1[3].appendChild(player4_set1);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    // set2
    else if(((Shell_set_obj.Which_shell.children[0]==player1_set2) && (Shell_set_obj.Which_shell.children[1]!=player2_set2 && Shell_set_obj.Which_shell.children[1]!=player3_set2 && Shell_set_obj.Which_shell.children[1]!=player4_set2))){
        Attack_players_AUD.play();
        Players_object.Which_set='s2';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P1_set2=0;
        Players_object.Player1_set2=0;
        players_set2[0].appendChild(player1_set2);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player2_set2) && (Shell_set_obj.Which_shell.children[1]!=player1_set2 && Shell_set_obj.Which_shell.children[1]!=player3_set2 && Shell_set_obj.Which_shell.children[1]!=player4_set2))){
        Attack_players_AUD.play();
        Players_object.Which_set='s2';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P2_set2=0;
        Players_object.Player2_set2=0;
        players_set2[1].appendChild(player2_set2);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player3_set2) && (Shell_set_obj.Which_shell.children[1]!=player1_set2 && Shell_set_obj.Which_shell.children[1]!=player2_set2 && Shell_set_obj.Which_shell.children[1]!=player4_set2))){
        Attack_players_AUD.play();
        Players_object.Which_set='s2';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P3_set2=0;
        Players_object.Player3_set2=0;
        players_set2[2].appendChild(player3_set2);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player4_set2) && (Shell_set_obj.Which_shell.children[1]!=player1_set2 && Shell_set_obj.Which_shell.children[1]!=player2_set2 && Shell_set_obj.Which_shell.children[1]!=player3_set2))){
        Attack_players_AUD.play();
        Players_object.Which_set='s2';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P4_set2=0;
        Players_object.Player4_set2=0;
        players_set2[3].appendChild(player4_set2);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    // set3
    else if(((Shell_set_obj.Which_shell.children[0]==player1_set3) && (Shell_set_obj.Which_shell.children[1]!=player2_set3 && Shell_set_obj.Which_shell.children[1]!=player3_set3 && Shell_set_obj.Which_shell.children[1]!=player4_set3))){
        Attack_players_AUD.play();
        Players_object.Which_set='s3';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P1_set3=0;
        Players_object.Player1_set3=0;
        players_set3[0].appendChild(player1_set3);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player2_set3) && (Shell_set_obj.Which_shell.children[1]!=player1_set3 && Shell_set_obj.Which_shell.children[1]!=player3_set3 && Shell_set_obj.Which_shell.children[1]!=player4_set3))){
        Attack_players_AUD.play();
        Players_object.Which_set='s3';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P2_set3=0;
        Players_object.Player2_set3=0;
        players_set3[1].appendChild(player2_set3);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player3_set3) && (Shell_set_obj.Which_shell.children[1]!=player1_set3 && Shell_set_obj.Which_shell.children[1]!=player2_set3 && Shell_set_obj.Which_shell.children[1]!=player4_set3))){
        Attack_players_AUD.play();
        Players_object.Which_set='s3';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P3_set3=0;
        Players_object.Player3_set3=0;
        players_set3[2].appendChild(player3_set3);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player4_set3) && (Shell_set_obj.Which_shell.children[1]!=player1_set3 && Shell_set_obj.Which_shell.children[1]!=player2_set3 && Shell_set_obj.Which_shell.children[1]!=player3_set3))){
        Attack_players_AUD.play();
        Players_object.Which_set='s3';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P4_set3=0;
        Players_object.Player4_set3=0;
        players_set3[3].appendChild(player4_set3);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
        else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            whose_chance2();
        }
    }
    // set4
    else if(((Shell_set_obj.Which_shell.children[0]==player1_set4) && (Shell_set_obj.Which_shell.children[1]!=player2_set4 && Shell_set_obj.Which_shell.children[1]!=player3_set4 && Shell_set_obj.Which_shell.children[1]!=player4_set4))){
        Attack_players_AUD.play();
        Players_object.Which_set='s4';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P1_set4=0;
        Players_object.Player1_set4=0;
        players_set4[0].appendChild(player1_set4);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player2_set4) && (Shell_set_obj.Which_shell.children[1]!=player1_set4 && Shell_set_obj.Which_shell.children[1]!=player3_set4 && Shell_set_obj.Which_shell.children[1]!=player4_set4))){
        Attack_players_AUD.play();
        Players_object.Which_set='s4';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P2_set4=0;
        Players_object.Player2_set4=0;
        players_set4[1].appendChild(player2_set4);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player3_set4) && (Shell_set_obj.Which_shell.children[1]!=player1_set4 && Shell_set_obj.Which_shell.children[1]!=player2_set4 && Shell_set_obj.Which_shell.children[1]!=player4_set4))){
        Attack_players_AUD.play();
        Players_object.Which_set='s4';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P3_set4=0;
        Players_object.Player3_set4=0;
        players_set4[2].appendChild(player3_set4);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    else if(((Shell_set_obj.Which_shell.children[0]==player4_set4) && (Shell_set_obj.Which_shell.children[1]!=player1_set4 && Shell_set_obj.Which_shell.children[1]!=player2_set4 && Shell_set_obj.Which_shell.children[1]!=player3_set4))){
        Attack_players_AUD.play();
        Players_object.Which_set='s4';
        Players_object.Players_chance-=1;
        Initial_Final_flags.P4_set4=0;
        Players_object.Player4_set4=0;
        players_set4[3].appendChild(player4_set4);
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            whose_chance1();
        }
    }
    function whose_chance1(){
        if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
            if(Players_object.Players_chance<=0){
                Players_object.Players_chance=4;
            }       
        }
        if(Players_object.Players_chance==4){
            set1.appendChild(chance_indicator);
            P1_Chance();
        }
        else if(Players_object.Players_chance==1){
            set2.appendChild(chance_indicator);
            P2_Chance();
        }
        else if(Players_object.Players_chance==2){
            set3.appendChild(chance_indicator);
            P3_Chance();
        }
        else if(Players_object.Players_chance==3){
            set4.appendChild(chance_indicator);
            P4_Chance();
        }
    }
    function whose_chance2(){
        if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
            if(Players_object.Players_chance<=0){
                Players_object.Players_chance=2;
            }
        }
        if(Players_object.Players_chance==2){
            set1.appendChild(chance_indicator);
            P1_Chance_2P();
        }
        else if(Players_object.Players_chance==1){
            set3.appendChild(chance_indicator);
            P2_Chance_2P();
        }
    }
}
// This below function for control dice_value =>(6) after all players in each set to reached winning part of the shells
function flag_function(){
    if(Players_object.Player1_set1>=51 && Players_object.Player2_set1>=51 && Players_object.Player3_set1>=51 && Players_object.Player4_set1>=51){
        Players_object.Feedback_set1=1;
    }
    if(Players_object.Player1_set2>=51 && Players_object.Player2_set2>=51 && Players_object.Player3_set2>=51 && Players_object.Player4_set2>=51){
        Players_object.Feedback_set2=1;
    }
    if(Players_object.Player1_set3>=51 && Players_object.Player2_set3>=51 && Players_object.Player3_set3>=51 && Players_object.Player4_set3>=51){
        Players_object.Feedback_set3=1;
    }
    if(Players_object.Player1_set4>=51 && Players_object.Player2_set4>=51 && Players_object.Player3_set4>=51 && Players_object.Player4_set4>=51){
        Players_object.Feedback_set4=1;
    }
}
// This Function for Winning of each players in each set and it will give again chance for the corresponding set by controlling the Players_chance key's--value
function Inner_chance_set1(){
    if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
        Players_object.Which_set='s1';
        Players_object.Players_chance=4;
        set1.appendChild(chance_indicator);
        P1_Chance();
    }
    else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
        Players_object.Which_set='s1';
        Players_object.Players_chance=2;
        set1.appendChild(chance_indicator);
        P1_Chance_2P();
    }
}
function Inner_chance_set2(){
    if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
        Players_object.Which_set='s2';
        Players_object.Players_chance=1;
        set2.appendChild(chance_indicator);
        P2_Chance();
    }
}
function Inner_chance_set3(){
    if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
        Players_object.Which_set='s3';
        Players_object.Players_chance=2;
        set3.appendChild(chance_indicator);
        P3_Chance();
    }
    else if(Mode_obj.Red==1 && Mode_obj.Blue==0 && Mode_obj.Yellow==1 && Mode_obj.Green==0){
        Players_object.Which_set='s3';
        Players_object.Players_chance=1;
        set3.appendChild(chance_indicator);
        P2_Chance_2P();
    }
}
function Inner_chance_set4(){
    if(Mode_obj.Red==1 && Mode_obj.Blue==1 && Mode_obj.Yellow==1 && Mode_obj.Green==1){
        Players_object.Which_set='s4';
        Players_object.Players_chance=3;
        set4.appendChild(chance_indicator);
        P4_Chance();
    }
}
function Winning_set1(){
    // Each Players winning conditions
    // set1 players
    if(Players_object.Player1_set1==56 && Initial_Final_flags.P1_f_set1==0){
        Winning_players_AUD.play();
        Inner_chance_set1();
        Initial_Final_flags.P1_f_set1=1;
    }
    if(Players_object.Player2_set1==56 && Initial_Final_flags.P2_f_set1==0){
        Winning_players_AUD.play();
        Inner_chance_set1();
        Initial_Final_flags.P2_f_set1=1;
    }
    if(Players_object.Player3_set1==56 && Initial_Final_flags.P3_f_set1==0){
        Winning_players_AUD.play();
        Inner_chance_set1();
        Initial_Final_flags.P3_f_set1=1;
    }
    if(Players_object.Player4_set1==56 && Initial_Final_flags.P4_f_set1==0){
        Winning_players_AUD.play();
        Inner_chance_set1();
        Initial_Final_flags.P4_f_set1=1;
    }
}
function Winning_set2(){
    // set2 players
    if(Players_object.Player1_set2==56 && Initial_Final_flags.P1_f_set2==0){
        Winning_players_AUD.play();
        Inner_chance_set2();
        Initial_Final_flags.P1_f_set2=1;
    }
    if(Players_object.Player2_set2==56 && Initial_Final_flags.P2_f_set2==0){
        Winning_players_AUD.play();
        Inner_chance_set2();
        Initial_Final_flags.P2_f_set2=1;
    }
    if(Players_object.Player3_set2==56 && Initial_Final_flags.P3_f_set2==0){
        Winning_players_AUD.play();
        Inner_chance_set2();
        Initial_Final_flags.P3_f_set2=1;
    }
    if(Players_object.Player4_set2==56 && Initial_Final_flags.P4_f_set2==0){
        Winning_players_AUD.play();
        Inner_chance_set2();
        Initial_Final_flags.P4_f_set2=1;
    }
}
function Winning_set3(){
    // set3 players
    if(Players_object.Player1_set3==56 && Initial_Final_flags.P1_f_set3==0){
        Winning_players_AUD.play();
        Inner_chance_set3();
        Initial_Final_flags.P1_f_set3=1;
    }
    if(Players_object.Player2_set3==56 && Initial_Final_flags.P2_f_set3==0){
        Winning_players_AUD.play();
        Inner_chance_set3();
        Initial_Final_flags.P2_f_set3=1;
    }
    if(Players_object.Player3_set3==56 && Initial_Final_flags.P3_f_set3==0){
        Winning_players_AUD.play();
        Inner_chance_set3();
        Initial_Final_flags.P3_f_set3=1;
    }
    if(Players_object.Player4_set3==56 && Initial_Final_flags.P4_f_set3==0){
        Winning_players_AUD.play();
        Inner_chance_set3();
        Initial_Final_flags.P4_f_set3=1;
    }
}
function Winning_set4(){
    // set4 players
    if(Players_object.Player1_set4==56 && Initial_Final_flags.P1_f_set4==0){
        Winning_players_AUD.play();
        Inner_chance_set4();
        Initial_Final_flags.P1_f_set4=1;
    }
    if(Players_object.Player2_set4==56 && Initial_Final_flags.P2_f_set4==0){
        Winning_players_AUD.play();
        Inner_chance_set4();
        Initial_Final_flags.P2_f_set4=1;
    }
    if(Players_object.Player3_set4==56 && Initial_Final_flags.P3_f_set4==0){
        Winning_players_AUD.play();
        Inner_chance_set4();
        Initial_Final_flags.P3_f_set4=1;
    }
    if(Players_object.Player4_set4==56 && Initial_Final_flags.P4_f_set4==0){
        Winning_players_AUD.play();
        Inner_chance_set4();
        Initial_Final_flags.P4_f_set4=1;
    }
}
// collaborative Winning function and calling corresponding winning_helper() function to diplay the 1st,2nd or 3rd 
function Winning(){
    // Each set all Players won conditions
    if(Players_object.Player1_set1==56 && Players_object.Player2_set1==56 && Players_object.Player3_set1==56 && Players_object.Player4_set1==56 && Initial_Final_flags.Winner_flag1=='set1_ON'){
        Players_object.Feedback_set1_won=1;
        Players_object.Winner_flag+=1;
        Initial_Final_flags.Winner_flag1='Off';
        Winning_helper1();
    }
    if(Players_object.Player1_set2==56 && Players_object.Player2_set2==56 && Players_object.Player3_set2==56 && Players_object.Player4_set2==56 && Initial_Final_flags.Winner_flag2=='set2_ON'){
        Players_object.Feedback_set2_won=1;
        Players_object.Winner_flag+=1;
        Initial_Final_flags.Winner_flag2='Off';
        Winning_helper2();
    }
    if(Players_object.Player1_set3==56 && Players_object.Player2_set3==56 && Players_object.Player3_set3==56 && Players_object.Player4_set3==56 && Initial_Final_flags.Winner_flag3=='set3_ON'){
        Players_object.Feedback_set3_won=1;
        Players_object.Winner_flag+=1;
        Initial_Final_flags.Winner_flag3='Off';
        Winning_helper3();
    }
    if(Players_object.Player1_set4==56 && Players_object.Player2_set4==56 && Players_object.Player3_set4==56 && Players_object.Player4_set4==56 && Initial_Final_flags.Winner_flag4=='set4_ON'){
        Players_object.Feedback_set4_won=1;
        Players_object.Winner_flag+=1;
        Initial_Final_flags.Winner_flag4='Off';
        Winning_helper4();
    }
}
// Crown display function according to the winning position like displaying 1st,2nd,3rd like that
function Winning_helper1(){
    if(Initial_Final_flags.Winner_flag1=='Off'){
        if(Players_object.Winner_flag==1){
            Crown[0].style.visibility='visible';
            Crown[1].style.visibility='hidden';
            Crown[2].style.visibility='hidden';
            Crown[3].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==2){
            Crown[0].style.visibility='hidden';
            Crown[1].style.visibility='visible';
            Crown[2].style.visibility='hidden';
            Crown[3].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==3){
            Crown[0].style.visibility='hidden';
            Crown[1].style.visibility='hidden';
            Crown[2].style.visibility='visible';
            Crown[3].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==4){
            Crown[0].style.visibility='hidden';
            Crown[1].style.visibility='hidden';
            Crown[2].style.visibility='hidden';
            Crown[3].style.visibility='visible';
        }
    }
}
function Winning_helper2(){
    if(Initial_Final_flags.Winner_flag2=='Off'){
        if(Players_object.Winner_flag==1){
            Crown[4].style.visibility='visible';
            Crown[5].style.visibility='hidden';
            Crown[6].style.visibility='hidden';
            Crown[7].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==2){
            Crown[4].style.visibility='hidden';
            Crown[5].style.visibility='visible';
            Crown[6].style.visibility='hidden';
            Crown[7].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==3){
            Crown[4].style.visibility='hidden';
            Crown[5].style.visibility='hidden';
            Crown[6].style.visibility='visible';
            Crown[7].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==4){
            Crown[4].style.visibility='hidden';
            Crown[5].style.visibility='hidden';
            Crown[6].style.visibility='hidden';
            Crown[7].style.visibility='visible';
        }
    }
}
function Winning_helper3(){
    if(Initial_Final_flags.Winner_flag3=='Off'){
        if(Players_object.Winner_flag==1){
            Crown[8].style.visibility='visible';
            Crown[9].style.visibility='hidden';
            Crown[10].style.visibility='hidden';
            Crown[11].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==2){
            Crown[8].style.visibility='hidden';
            Crown[9].style.visibility='visible';
            Crown[10].style.visibility='hidden';
            Crown[11].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==3){
            Crown[8].style.visibility='hidden';
            Crown[9].style.visibility='hidden';
            Crown[10].style.visibility='visible';
            Crown[11].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==4){
            Crown[8].style.visibility='hidden';
            Crown[9].style.visibility='hidden';
            Crown[10].style.visibility='hidden';
            Crown[11].style.visibility='visible';
        }
    }
}
function Winning_helper4(){
    if(Initial_Final_flags.Winner_flag4=='Off'){
        if(Players_object.Winner_flag==1){
            Crown[12].style.visibility='visible';
            Crown[13].style.visibility='hidden';
            Crown[14].style.visibility='hidden';
            Crown[15].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==2){
            Crown[12].style.visibility='hidden';
            Crown[13].style.visibility='visible';
            Crown[14].style.visibility='hidden';
            Crown[15].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==3){
            Crown[12].style.visibility='hidden';
            Crown[13].style.visibility='hidden';
            Crown[14].style.visibility='visible';
            Crown[15].style.visibility='hidden';
        }
        else if(Players_object.Winner_flag==4){
            Crown[12].style.visibility='hidden';
            Crown[13].style.visibility='hidden';
            Crown[14].style.visibility='hidden';
            Crown[15].style.visibility='visible';
        }
    }
}
/* => These below 16 functions are used for further actions after the movement of players from Movements_players() function
    like storing the current (places or shells) of each players and calling home return() function,
    checking if the player is winning the game and over winning of the all players in ech sets*/ 
// set1

function P1_S1(){
    Players_object.Player1_set1+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s1';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set1[Players_object.Player1_set1];
    Home_return();
    if(Players_object.Player1_set1>=51){
        flag_function();
    }
    if(Players_object.Player1_set1>55){
        Winning_set1();
        Winning();
    }
    return;
}
function P2_S1(){
    Players_object.Player2_set1+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s1';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set1[Players_object.Player2_set1];
    Home_return();
    if(Players_object.Player2_set1>=51){
        flag_function();
    }
    if(Players_object.Player2_set1>55){
        Winning_set1();
        Winning();
    }
    return;
}
function P3_S1(){
    Players_object.Player3_set1+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s1';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set1[Players_object.Player3_set1];
    Home_return();
    if(Players_object.Player3_set1>=51){
        flag_function();
    }
    if(Players_object.Player3_set1>55){
        Winning_set1();
        Winning();
    }
    return;
}
function P4_S1(){
    Players_object.Player4_set1+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s1';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set1[Players_object.Player4_set1];
    Home_return();
    if(Players_object.Player4_set1>=51){
        flag_function();
    }
    if(Players_object.Player4_set1>55){
        Winning_set1();
        Winning();
    }
    return;
}
// set2
function P1_S2(){
    Players_object.Player1_set2+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s2';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set2[Players_object.Player1_set2];
    Home_return();
    if(Players_object.Player1_set2>=51){
        flag_function();
    }
    if(Players_object.Player1_set2>55){
        Winning_set2();
        Winning();
    }
    return;
}
function P2_S2(){
    Players_object.Player2_set2+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s2';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set2[Players_object.Player2_set2];
    Home_return();
    if(Players_object.Player2_set2>=51){
        flag_function();
    }
    if(Players_object.Player2_set2>55){
        Winning_set2();
        Winning();
    }
    return;
}
function P3_S2(){
    Players_object.Player3_set2+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s2';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set2[Players_object.Player3_set2];
    Home_return();
    if(Players_object.Player3_set2>=51){
        flag_function();
    }
    if(Players_object.Player3_set2>55){
        Winning_set2();
        Winning();
    }
    return;
}
function P4_S2(){
    Players_object.Player4_set2+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s2';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set2[Players_object.Player4_set2];
    Home_return();
    if(Players_object.Player4_set2>=51){
        flag_function();
    }
    if(Players_object.Player4_set2>55){
        Winning_set2();
        Winning();
    }
    return;
}
// set3
function P1_S3(){
    Players_object.Player1_set3+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s3';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set3[Players_object.Player1_set3];
    Home_return();
    if(Players_object.Player1_set3>=51){
        flag_function();
    }
    if(Players_object.Player1_set3>55){
        Winning_set3();
        Winning();
    }
    return;  
}
function P2_S3(){
    Players_object.Player2_set3+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s3';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set3[Players_object.Player2_set3];
    Home_return();
    if(Players_object.Player2_set3>=51){
        flag_function();
    }
    if(Players_object.Player2_set3>55){
        Winning_set3();
        Winning();
    }
    return;
}
function P3_S3(){
    Players_object.Player3_set3+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s3';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set3[Players_object.Player3_set3];
    Home_return();
    if(Players_object.Player3_set3>=51){
        flag_function();
    }
    if(Players_object.Player3_set3>55){
        Winning_set3();
        Winning();
    }
    return;
}
function P4_S3(){
    Players_object.Player4_set3+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s3';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set3[Players_object.Player4_set3];
    Home_return();
    if(Players_object.Player4_set3>=51){
        flag_function();
    }
    if(Players_object.Player4_set3>55){
        Winning_set3();
        Winning();
    }
    return;
}
// set4
function P1_S4(){
    Players_object.Player1_set4+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s4';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set4[Players_object.Player1_set4];
    Home_return();
    if(Players_object.Player1_set4>=51){
        flag_function();
    }
    if(Players_object.Player1_set4>55){
        Winning_set4();
        Winning();
    }
    return;
}
function P2_S4(){
    Players_object.Player2_set4+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s4';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set4[Players_object.Player2_set4];
    Home_return();
    if(Players_object.Player2_set4>=51){
        flag_function();
    }
    if(Players_object.Player2_set4>55){
        Winning_set4();
        Winning();
    }
    return;
}
function P3_S4(){
    Players_object.Player3_set4+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s4';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set4[Players_object.Player3_set4];
    Home_return();
    if(Players_object.Player3_set4>=51){
        flag_function();
    }
    if(Players_object.Player3_set4>55){
        Winning_set4();
        Winning();
    }
    return;
}
function P4_S4(){
    Players_object.Player4_set4+=Players_object.Dice_value;
    if(Players_object.Dice_value==0){
        Players_object.Which_set='s4';
        Players_object.Dice_value=Players_object.Dummy;
    }
    Shell_set_obj.Which_shell=Way_players_set4[Players_object.Player4_set4];
    Home_return();
    if(Players_object.Player4_set4>=51){
        flag_function();
    }
    if(Players_object.Player4_set4>55){
        Winning_set4();
        Winning();
    }
    return;
}
// This function for (step by step Movement or jumping) of each players in sets Players_Step_Movements
function Movements_players(which_set_player){
    for(let MOVS=1;MOVS<=Players_object.Dice_value;MOVS++){
        setTimeout(() => {
            Players_jumping_AUD.playbackRate=2;
            Players_jumping_AUD.play();
            // set1
            if(which_set_player=='P1_S1'){
                Way_players_set1[(Players_object.Player1_set1+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P1_S1();
                }
            }
            else if(which_set_player=='P2_S1'){
                Way_players_set1[(Players_object.Player2_set1+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P2_S1();
                }
            }
            else if(which_set_player=='P3_S1'){
                Way_players_set1[(Players_object.Player3_set1+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P3_S1();
                }
            }
            else if(which_set_player=='P4_S1'){
                Way_players_set1[(Players_object.Player4_set1+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P4_S1();
                }
            }
            // set2
            else if(which_set_player=='P1_S2'){
                Way_players_set2[(Players_object.Player1_set2+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P1_S2();
                }
            }
            else if(which_set_player=='P2_S2'){
                Way_players_set2[(Players_object.Player2_set2+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P2_S2();
                }
            }
            else if(which_set_player=='P3_S2'){
                Way_players_set2[(Players_object.Player3_set2+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P3_S2();
                }
            }
            else if(which_set_player=='P4_S2'){
                Way_players_set2[(Players_object.Player4_set2+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P4_S2();
                }
            }
            // set3
            else if(which_set_player=='P1_S3'){
                Way_players_set3[(Players_object.Player1_set3+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P1_S3();
                }
            }
            else if(which_set_player=='P2_S3'){
                Way_players_set3[(Players_object.Player2_set3+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P2_S3();
                }
            }
            else if(which_set_player=='P3_S3'){
                Way_players_set3[(Players_object.Player3_set3+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P3_S3();
                }
            }
            else if(which_set_player=='P4_S3'){
                Way_players_set3[(Players_object.Player4_set3+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P4_S3();
                }
            }
            // set4
            else if(which_set_player=='P1_S4'){
                Way_players_set4[(Players_object.Player1_set4+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P1_S4();
                }
            }
            else if(which_set_player=='P2_S4'){
                Way_players_set4[(Players_object.Player2_set4+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P2_S4();
                }
            }
            else if(which_set_player=='P3_S4'){
                Way_players_set4[(Players_object.Player3_set4+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P3_S4();
                }
            }
            else if(which_set_player=='P4_S4'){
                Way_players_set4[(Players_object.Player4_set4+MOVS)].appendChild(Players_object.Which_player);
                if(MOVS==Players_object.Dice_value){
                    P4_S4();
                }
            }
        }, MOVS*Speed);
    }
}
// end of code-----!