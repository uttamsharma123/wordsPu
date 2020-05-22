
var words="";
var Awords=[];
var toMatch="";
var clickedApha=[]
for(var i=0;i<10;i++)
{
  Awords.push(document.querySelectorAll(".animalsName")[i].innerHTML);
}
console.log(typeof(Awords))
$("td.animalsLetter").click(function(){
      var clicked=$(this).attr("id");
      
      $("#"+clicked).css("color","red");
       clickedApha.push(clicked)
     
      words=words+$("#"+clicked).html()
     
      $(".showChar").text(words);
      if(words=="CAMEL")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
              
             
       }
       if(words=="TIGER")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="LEOPARD")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="BUFFALO")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="DEER")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
             
       }
       if(words=="COW")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="DONKEY")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="LION")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
             
       }
       if(words=="ELEPHANT")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
       if(words=="BEAR")
       {
              console.log("matched");
              $("#"+words).css("color","black") 
              words="";
              changeColor(clickedApha)
             
       }
      

})

function changeColor(clickedApha)
{
      window.setTimeout(function(){

            for(var i=0;i<clickedApha.length;i++)
            {
      
            $("#"+clickedApha[i]).css("color","black");  
             }
      },500);
}


/*
var animalsName={Tiger:"Tiger".toUpperCase(),Elephant:"Elephant".toUpperCase(),Lion:"Lion".toUpperCase(),Bear:"Bear".toUpperCase(),Leopard:"Leopard".toUpperCase(),Buffalo:"Buffalo".toUpperCase()":"".toUpperCase(),Dea
:"Deer".toUpperCase(),Cow:"Cow".toUpperCase(),Donkey:"Donkey".toUpperCase()}

*/
























