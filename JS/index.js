// console.log(jQuery);
// console.log($);
// let myBox=document.querySelector(".box");
// let $myBox=$(".box"); // returns it as an object consists of that element  

// let myBoxAll=document.querySelectorAll(".box");
// let $myBoxAll=$(".box"); // all elements , is is the default
// let $myBOX=$(myBox);// to convert from JS to jquery
// console.log(myBox); 
// console.log($myBox[2]);
// console.log($myBox[0]);
// // related to jquery selecting as JS
// $myBox.get[1];
// $myBox.eq[2];
// // take care you select the element jquery or JS , if with JS you will use methods of JS and vice versa

// // In JQUERY
// // $(".box").click(function(){ //all event methods can make it with this way
// //     console.log("ok");
// // })
// // $(".box").mouseenter(function(){ //all event methods can make it with this way
// //     console.log("ok");
// // })
// // $(".box").mouseleave(function(){ //all event methods can make it with this way
// //     console.log("ok");
// // })

// // $(".box").hover(function(){ //as mouseenter and mouseleave both of them
// //     console.log("ok");
// // },function(){
// //     console.log("no");
// // });
// // $(".box").on("click mouseenter",function(){
// //     console.log("clicked");
// // })

// // $(".box").one("click",function(){  //to be invoked 1 time
// //     console.log("clicked");
// // })

// // $(".box").one("click",function(){  //to be invoked 1 time
// //     console.log("clicked");
// // })
// // $(".box").on({          // if you want to make more than 1 event with different actions , treated as object with key and value
// //     'click':function (e){
// //         console.log("clicked");
// //     },
// //     'mouseenter' :function(){
// //         console.log("mouseenter")
// //     }
// // })

// // In Js
// // document.querySelectorAll(".box").forEach(function(box){
// //     box.addEventListener("click",function(){
// //         console.log("ok");
// //     });
// // })


// $("#Show").on("click", function(){
//     $(".box").show(1000);
// })
// $("#Hide").on("click", function(){
//     $(".box").hide(1000);
// })
// $("#Toggle").on("click", function(){
//     $(".box").toggle(1000);
// })


// $("#Show2").on("click",function(){
//     $(".box").fadeIn(1000);
// })
// $("#Hide2").on("click",function(){
//     $(".box").fadeOut(1000);
// })
// $("#Toggle2").on("click",function(){
//     $(".box").fadeToggle(1000);
// })
// $("#FadeTo").on("click",function(){
//     $(".box").fadeTo(1000,.5);
// })

 
// $("#SlideUp").on("click",function(){
//     $(".box").slideUp(1000);
// })
// $("#SlideDown").on("click",function(){
//     $(".box").slideDown(1000);
// })
// $("#SlideToggle").on("click",function(){
//     $(".box").slideToggle(1000);
// })

//     animation
// every animation with duration you have after the duration you can call back a function
// if you have to make the 2 effects on the same element the first one will finish after the duration ends the second will start 
// or you can cancel this and happen at the same time using the queue , this if they both apply on the same element , if they are on 2 
// different elements both will happen at the same time , you also can make the animation on the second element happens after the first by the call back function
// $("#AnimationButton").on("click",function (){
//     $(".boxAn").animate({
//         width: "400px" ,
//        height: "200px"
// },1000)
// })

// $("#AnimationButton").on("click",function (){
//     $(".boxAn").animate({
//         width: "400px"},1000)
//    $(".boxAn").animate({
//         height: "400px"},{
//             duration:1000,
//             queue:false
//         } 
// )})

// you must get the jquery ui (it is a plugin) cdn to apply the background color animation 
// $("#AnimationButton").on("click",function (){
//     $(".boxAn").animate({
//         width: "400px" ,
//        height: "200px",
//        backgroundColor:"#000",
// },3000)
// })
// $("#Stop").on("click",function (){
//     $(".boxAn").stop();
// })


// $(".btn").click(function(){
//     $(".box").html(` <p>hello </p>`)
// })
// $(".fire").click(function(){
//     // $(".box").html(`<p>hello</p>`); // removes the old and add new content replaces it
//     // console.log($(".box").html()); // it returns the content that is made by the js
//     // $(".box").text(`hello`);       // text content
//     // $(".box").text(`<p>hello</p>`); // as text
//     $(".box").append("hello2");  // to add content as a first child
//     // it has append ,prepend , before ,after
//     $(".box p").replaceWith("<p>helloP</p>"); // replaces with another element
//     $(".box p").remove();
//     $(".box p").empty();  // to empty the element
//     console.log($(".box h4").attr('data-name'));
//     $(".box h4").attr('data-name',"mohamed"); // to enter the value for the attribute
//     console.log($("input").prop('disabled')); // properties with boolean you use prop
//     $("input").prop('disabled',false); // takes a value
//     // $("input").val("hello"); // to enter text in the input when you click
// })

// $(".fire").click(function(){
// //    console.log($(".child").offset()); //prints the distance from the body
// //    console.log($(".child").position()); // the position from the parent
// //    $(".child").offset(
// //     {
// //         top:400,      // it the place according to the body not the parent , there is no thing as this to move according to parent
// //         left:100
// //     }
// //    )
// //$(".child").eq(0).wrap("<div class='div'></div>")  // to make the element inside another element element
// $(".child").eq(0).unwrap(".test"); // here in the parameter you put a condition as if the element is in a div with class .test it will remove it rather than this it will not remove it
// $(".child").css("width","300px");
// console.log($(".child3").css("width","300px")); // in jquery if it doesnt find the element it will not return error it will return object with no element
// // so when you call a method from it it will not return an error ,in the past the there is no in js  this (?) ,so it was made with if condition 
// $(".parent").eq(0).has(".test").css({ // has as the if condition will happen if it has class test in 1 of the child elements
//     'width':"500px",
//     "height":"400px"  // this if you want to pass more than 1 value you make an object
// });
// console.log($(".parent").eq(0).is(".test")); // returns true or false does the element has this class or no

// // the same also for the height
// console.log($(".box").width())
// console.log($(".box").innerWidth())  // it prints the width + padding  if the sizing box content box
// console.log($(".box").outerWidth()) // it prints the width + padding + border if the sizing box content box
// console.log($(".box").outerWidth(true)) // it prints the width + padding + border + margin if the sizing box content box
// })

// $(".box3").click(function(){
//     $(".box3").html(`<button class="btn btn-success">Go</button>`)
// })
// $(".box3").on("click",'button', function(){  // how to make an event on something doesnt created yet
//     console.log("ok")// this a way to make the event at a something already is found and the second parameter is as an if condition when the button is created the event will occur 
// })

$(".btn").click(function(){
    $(".box3").addClass("active");
});
$(".btn2").click(function(){
    $(".box3").removeClass("active");
     console.log($(".box3").hasClass("active"));
});
$(".toggle").click(function(){
    $(".box3").toggleClass("active");
});

console.log($(".parent .child").parent()); // to get the parent element
console.log($(".parent .child").parent().parent()); // to get the parent of the parent
console.log($(".parent .child").parents()); // it gets all the parents till the body
console.log($(".parent .child").parents('body')); // as the closest in JS
console.log($(".parent .child").parentsUntil('body')); // it gets all the parents until the parent you mentioned , it will not the parent you mentioned
console.log($(".parent").children()); //to get the all children 
console.log($(".parent").children().eq(2)); // to get a specific child
console.log($(".parent").children().get(2)); // will return the element itself not an object inside it
let myp=document.querySelector(".parent");
console.log($("myp"));
console.log($(".parent").find(".child2")); // if you want to search a thing in the parent
console.log($(".parent .child2").siblings()); //will return all the siblings before and after it
console.log($(".parent").next()); // all the siblings after it
console.log($(".parent").nextUntil(".test"));  // all the siblings without the one you mentioned
console.log($(".parent").nextAll(".test")); // all the elements next it and the sibling you mentioned

console.log($(".parent").prev()); // all the siblings after it
console.log($(".parent").prevUntil(".test"));  // all the siblings without the one you mentioned
console.log($(".parent").prevAll(".test")); // all the elements prev it and the sibling you mentioned

console.log($(".parent").children().first()); // the first child
console.log($(".parent").children().last());
console.log($(".parent").children().filter(".test"));
console.log($(".parent").children().not(".test"));

// if you want to make a method for the jquery
$.fn  // this is an object carries all the functions of the jquery
$.fn.changeColor=function(){  // an anonymous function
    console.log("ok");
    this.css("color", "red");
}
$(".child").changeColor();  // is only for 1 selected not the all because the function if you want it to be for all you should loop on all of them 
// that is the default in the jquery functions

//                                              sass(it is a language) (it is a css with more features)
//there is a problem in the css, that not every new feature we use it ,because of it isnt available in old version of browser
// it makes variables in html , make selectors shorter , make functions to minimize redundant code
// you text sass and it will be converted to css
// it stands for syntactically awesome stylesheet
// it is a css preprocessor (wich means thing process before the css) 
// browser cannot read sass directly , so sass must be compiled to css before being used in website
// any css valid code is a saas valid code
// sass is in 2 extensions (.scss(new , its syntax is more like the css syntax) , .sass) 
// why use sass (variables , nesting, mixins(is a function  returns block of code), functions ,control directives(if,for,each,etc), modules(can call another file) , inheritance and extend)


// in the past sass in implemented with ruby , now with dart(faster) the best way to install sass is with dart Sass
// sass is inside npm that is inside node.js