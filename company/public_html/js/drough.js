$(document).ready(function () {
$('#tab1').click(function(){
    $.getJSON("data.json",function(data){
        $('#home').append("Details:",data.drough[0].name,"<br>",data.drough[0].company,"<br>",data.drough[0].age);
    });
    });
   $('#tab2').click(function(){
    $.getJSON("data.json",function(data){
        $('#profile').append("Details:",data.drough[1].name,"<br>",data.drough[1].company,"<br>",data.drough[1].age);
    });
    });
    $('#tab3').click(function(){
    $.getJSON("data.json",function(data){
        $('#messages').append("Details:",data.drough[2].name,"<br>",data.drough[2].company,"<br>",data.drough[2].age);
    });
    });
    $('#tab4').click(function(){
    $.getJSON("data.json",function(data){
        $('#settings').append("Details:",data.drough[3].name,"<br>",data.drough[3].company,"<br>",data.drough[3].age);
    });
    });
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


