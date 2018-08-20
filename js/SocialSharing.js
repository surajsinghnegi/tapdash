function fbShare(){
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 null /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                 "https://pointdeveloper.com/" /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
   window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                 'http://twitter.com/', 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
   window.plugins.socialsharing.share('Insanely addictive game-play! Do not say we did not warn you.\n Download Now! \nhttps://play.google.com/store/apps/details?id=com.devsun.tapdash', null, null, null);
  };

 function storyShare(){ 
   var data = $('.text-flow').text();
   window.plugins.socialsharing.share('Download app for more hindi stories \n https://play.google.com/store/apps/details?id=com.devsun.tapdash \n\n'+data, null, null, null);
  };

