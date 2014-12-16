// JavaScript Document

var microphone;
var headphones;
 
$(document).ready(function () {
    

});

$(window).load(function () {
    
   
    var notConnected=document.querySelector("#hp");
    var HP = notConnected.contentDocument;
    var state3 = HP.querySelector("#not_connected");
    var state2= HP.querySelector("#off_1_");
    var state1= HP.querySelector("#On");
    
    var notConnected2=document.querySelector("#mp");
    var MP = notConnected2.contentDocument;
    var mpState3 =MP.querySelector("#not_connected");
    var mpState2 =MP.querySelector("#off");
    var mpState1 =MP.querySelector("#on");
    
    ///////////////click HP
    
       state1.addEventListener('click', function(){
                                                   
             $(this).fadeOut(400, function(){});  
                          
                                  
     });
    
       state2.addEventListener('click', function(){
                                  
         $(this).fadeOut(400, function(){});                   
                                  
                                  
     });
    
      state3.addEventListener('click', function(){
                                  
         $(state1).fadeIn(400, function(){});
          $(state2).fadeIn(400, function(){});
                                  
      /////////////hover HP                            
     });
    
       state1.addEventListener("mouseover", function(){
                                                   
             $(this).fadeOut(1000, function(){});  
                          
                                  
     });
    
       state2.addEventListener("mouseover", function(){
                                  
         $(this).fadeOut(1000, function(){});                   
                                  
                                  
     });
    
      state3.addEventListener("mouseover", function(){
                                  
         $(state1).fadeIn(1000, function(){});
          $(state2).fadeIn(1000, function(){});
                                  
                                  
     });
    
    
 /////////////////click MP   
    
     mpState1.addEventListener('click', function(){
                            

                $(this).fadeOut(1000, function(){}); 
       });
     
    
    
        mpState2.addEventListener('click', function(){
            
          $(this).fadeOut(800, function(){}); 
     }); 
    
        mpState3.addEventListener('click', function(){
                                                   
           $(mpState1).fadeIn(1000, function(){});
          $(mpState2).fadeIn(1000, function(){});
     }); 
    
    
/////////////hover MP
    
         mpState1.addEventListener('mouseover', function(){
                              

                $(this).fadeOut(1000, function(){}); 
       });
     
    
    
        mpState2.addEventListener('mouseover', function(){
            
          $(this).fadeOut(800, function(){}); 
     }); 
    
        mpState3.addEventListener('mouseover', function(){
                                                   
           $(mpState1).fadeIn(2000, function(){});
          $(mpState2).fadeIn(2000, function(){});
     }); 
    
    
    
		
	})
