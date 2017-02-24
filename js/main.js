    var list = [
"A Boy's Name",
"U.S. Cities",
"Things that are Cold",
"School Supplies",
"Pro Sports Teams",
"Insects",
"Breakfast Foods",
"Furniture",
"T.V. Shows",
"Things that are Found in the Ocean",
"Presidents",
"Product Names",
"Appliances",
"Types of Drink",
"Personality Traits",
"Articles of Clothing",
"Desserts",
"Car Parts",
"Things Found On a Map",
"Athletes",
"4-Letter Words",
"Items in a Refrigerator",
"Farm Animals",
"Street Names",
"Things On a Beach",
"Colors",
"Tools",
"a Girl'S Name",
"Villains/Monsters",
"Footwear",
"Something You'Re Afraid of",
"Terms of Measurement",
"Book Titles",
"Heroes",
"Gifts/Presents",
"Kinds of Dances",
"Things that are Black",
"Vehicles",
"Tropical Locations",
"College Majors",
"Dairy Products",
"Things in a Souvenir Shop",
"Items in Your Purse/Wallet",
"World Records",
"Famous Females",
"Medicine/Drugs",
"Things Made of Metal",
"Hobbies",
"People in Uniform",
"Things You Plug in",
"Animals",
"Languages",
"Names Used in the Bible",
"Junk Food",
"Things that Grow",
"Companies",
"Video Games",
"Electronic Gadgets",
"Board Games",
"Things that Use a Remote",
"Card Games",
"Internet Lingo",
"Offensive Words",
"Wireless Things",
"Computer Parts",
"Software",
"Websites",
"Game Terms",
"Things in a Grocery Store",
"Reasons to Quit Your Job",
"Things that Have Stripes",
"Tourist Attractions",
"Diet Foods",
"Things Found in a Hospital",
"Food/Drink that Is Green",
"Weekend Activities",
"Acronyms",
"Seafood",
"Christmas Songs",
"Words Ending in -N",
"Words With Double Letters",
"Childrens Books",
"Things Found at a Bar",
"Sports Played Indoors",
"Names Used in Songs",
"Foods You Eat Raw",
"Places in Europe",
"Olympic Events",
"Things You See at the Zoo",
"Math Terms",
"Animals in Books or Movies",
"Things to Do at a Party",
"Sandwiches",
"Items in a Catalog",
"World Leaders/Politicians",
"School Subjects",
"Excuses For Being Late",
"Ice Cream Flavors",
"Things that Jump/Bounce",
"Television Stars",
"Things in a Park",
"Foreign Cities",
"Stones/Gems",
"Musical Instruments",
"Nicknames",
"Things in the Sky",
"Pizza Toppings",
"Colleges/Universities",
"Fish",
"Countries",
"Things that Have Spots",
"Historical Figures",
"Something You're Afraid of",
"Terms of Endearment",
"Items in this Room",
"Fictional Characters",
"Menu Items",
"Magazines",
"Capitals",
"Kinds of Candy",
"Items You Save Up to Buy",
"Footware",
"Something You Keep Hidden",
"Items in a Suitcase",
"Things With Tails",
"Sports Equipment",
"Crimes",
"Things that are Sticky",
"Awards/Ceremonies",
"Cars",
"Spices/Herbs",
"Bad Habits",
"Cosmetics/Toiletries",
"Celebrities",
"Cooking Utensils",
"Reptiles/Amphibians",
"Parks",
"Leisure Activities",
"Things You're Allergic To",
"Restaurants",
"Notorious People",
"Fruits",
"Things in a Medicine Cabinet",
"Toys",
"Household Chores",
"Bodies of Water",
"Authors",
"Halloween Costumes",
"Weapons",
"Things that are Round",
"Words Associated With Exercise",
"Sports",
"Song Titles",
"Parts of the Body",
"Ethnic Foods",
"Things You Shout",
"Birds",
"Ways to Get From Here to There",
"Items in a Kitchen",
"Villians",
"Flowers",
"Things You Replace",
"Baby Foods",
"Famous Duos And Trios",
"Things Found in a Desk",
"Vacation Spots",
"Diseases",
"Words Associated With Money",
"Items in a Vending Machine",
"Movie Titles",
"Games",
"Things that You Wear",
"Beers",
"Things at a Circus",
"Vegetables",
"States",
"Things You Throw Away",
"Occupations",
"Appliances ",
"Cartoon Characters",
"Types of Drinks",
"Musical Groups",
"Store Names",
"Things at a Football Game",
"Trees",
"Personality Traits",
"KIndS of Soup",
"ThIngS found in New York",
"ThIngS You geT TIcKeTS for",
"ThIngS You do aT worK",
"foreIgn wordS uSed In engLISh",
"ThIngS You ShouLdn'T Touch",
"SpIcY foodS",
"ThIngS aT a carnIvaL",
"ThIngS You maKe",
"pLaceS To hang ouT",
"anImaL noISeS",
"compuTer programS",
"honeymoon SpoTS",
"ThIngS you buy for kIdS",
"ThIngS ThaT can kILL you",
"reaSonS To Take ouT a Loan",
"wordS aSSocIaTed wITh wInTer",
"ThIngS To do on a daTe",
"hISTorIc evenTS",
"ThIngS you STore ITemS In",
"ThIngS you do every day",
"ThIngS you geT In The maIL",
"ThIngS you Save up To buy",
"ThIngS you SIT In/on",
"reaSonS To make a phone caLL",
"Types of weather",
"TITLeS peopLe can have",
"ThIngS ThaT have buTTonS",
"ITemS you Take on a TrIp",
"ThIngS ThaT have wheeLS",
"reaSonS To caLL 911",
"ThIngS ThaT make you SmILe",
"wayS To kILL TIme",
"ThIngS ThaT can geT you fIred",
"hoLIday acTIvITIeS"
];
var clone = list.slice(0);
 $(document).foundation();
var seconds = timerLength;
var l;
var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        $('.timer').html(sec);
    },
    onstart : function() {
        console.log('timer started');
    }
});

timer.on('end', function () {
    $('.scatlist').css("-webkit-filter","blur(4px)");
    $('.timer').html(0);
    alert("Time's up!");
    $('.scatlist').css("-webkit-filter","blur(0px)");
});


$('.start_button').on('click',function() {
    $(".timer-form").fadeOut();
    $(".categories-form").fadeOut();
    if($(this).children('i').hasClass("fa-pause")){
        $('.scatlist').css("-webkit-filter","blur(20px)");
        timer.pause();
    }else {
        $('.scatlist').css("-webkit-filter","blur(0px)");
        timer.start(seconds);
    }
        $(this).children('i').toggleClass("fa-pause");
        $(this).children('i').toggleClass("fa-play");
});

$('.rightbutton').on('click',function() {
    restart();
});
$('.medbutton').on('click',function() {
    restart();
});

$(document).ready(function() {
    $('.scatlist').css("-webkit-filter","blur(20px)");
    populate();

    getLetter();
        config();
});
$(window).resize(function(){
    config();
});


function config() {
    if ($(window).width() >= 649) {
        var marg = ($('.main').height() - $('.leftside').height())/2;
        var mainmarg = ($(document).height() - $('.submit').height() - $('.main').height())/2 - $('.headbar').height() ;
        $('.leftside').css("margin-top",marg);
        $('.main').css("padding-top", mainmarg);
    } else {
        $('.leftside').css("margin-top",0);
        $('.main').css("padding-top", 0);

    }
}
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "W"];

 function getRandom(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; /*random number between min (inclusive) and max (inclusive) */
}

function getLetter() {
    $('.actualletter').empty();
    if (letters.length < 1) {
        letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "W"];
    }
    var minIndex = 0;
    var maxIndex = letters.length - 1;
    getRandom(minIndex, maxIndex);
    letter = letters[randomNumber];
    letters.splice(randomNumber, 1);
    $('.actualletter').html(letter);
}

function populate() {
    $('.scatlist').empty();
    if(clone.length < 12) clone = list;
    var i;
    var j;
    var cat;
    for(i = 0; i < 12; i++) {
        j = Math.floor((Math.random() * (clone.length)-1) + 1);
        cat = clone[j];
        console.log(j);
        cat = cat.toLowerCase();
        cat = cat.toTitleCase();
        if(cat.indexOf('/')>=0) {
            cat = cat.split('/');
            cat[1] = cat[1].charAt(0).toUpperCase() + cat[1].slice(1);
            cat = cat.join('/');
        }

        $('.scatlist').append('<div class="row listrow">'
        +'<div class="number text-right small-2 columns">'+(i+1)+'.</div>'
        +'<div class="cat text-left  small-10 columns">'+cat+'</div>'
        +'</div>');
        clone.splice(j, 1);
    }

    if (userList.length > 0){
        var iterations;
        // var childNumbers = [];
        if (userList.length == 1){
            iterations = 1;
        } else if (userList.length > 0 && userList.length < 6){
            iterations = Math.floor(Math.random() * 2) + 1;
        } else if (userList.length >= 6 && userList.length <= 15){
            iterations = Math.floor(Math.random() * 2) + 2;
        } else if (userList.length > 15){
            iterations = Math.floor(Math.random() * 2) + 3;
        }
        for (i=1; i <= iterations; i++){
            getRandom(0, userList.length - 1);
            userCategory = userList[randomNumber];
            userList.splice(randomNumber, 1);
            list.push(userCategory);
            getRandom(1, 12);
            // var insert = true;
            // var j = 0;
            // while (j < childNumbers.length && insert == true ){
            //     if randomNumber == childNumbers[j]{
            //         insert = false;
            //     }
            //     j++;
            // }
            $('.scatlist .listrow:nth-child('+randomNumber+') .cat').empty().append(userCategory);
            // childNumbers.push(randomNumber);
        }
    }

            //Make sure userCategory doesn't overwrite itself in the same child-row
        
            
}

function restart() {
    $('.start_button').children('i').removeClass("fa-pause");
    $('.start_button').children('i').addClass("fa-play");
    timer.stop();
    $('.timer').html(seconds);
    $('.scatlist').css("-webkit-filter","blur(20px)");
    getLetter();
    setTimeout(populate,500);
    config();
}