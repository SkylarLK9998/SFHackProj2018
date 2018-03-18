/*10 sample memes for demo purposes*/
var meme1 = {id: 1, tag1:"toothpaste", tag2:"vegetarian", tag3:"meat", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/1.jpg"};
var meme2 = {id: 2, tag1:"traffic", tag2:"driving", tag3:"sunglasses", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/2.jpg"};
var meme3 = {id: 3, tag1:"sex", tag2:"bug", tag3:"death", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/3.jpg"};
var meme4 = {id: 4, tag1:"Trump", tag2:"bullying", tag3:"twitter", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/4.png"};
var meme5 = {id: 5, tag1:"wizard", tag2:"swearing", tag3:"playstation", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/5.jpg"};
var meme6 = {id: 6, tag1:"Computer Science", tag2:"Christmas", tag3:"single forever", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/6.jpg"};
var meme7 = {id: 7, tag1:"wizard", tag2:"cursive", tag3:"demon", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/7.jpg"};
var meme8 = {id: 8, tag1:"wizard", tag2:"Voldemort", tag3:"scar", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/8.jpg"};
var meme9 = {id: 9, tag1:"stove", tag2:"food", tag3:"twitter", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/9.jpg"};
var meme10 = {id: 10, tag1:"Trump", tag2:"twitter", tag3:"death", img:"/Users/skylarkrieger/SFHackProj2018/Source\ Files/demoMemes/10.jpg"};

//memes is an array of unfiltered meme objects
var memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10];

//triggers is an array of trigger strings
var triggers = [];

//showThese is an array of filtered meme objects
var showThese = [];

//for loading purposes
var loaded = false;

//index of meme currently being shown
var curMeme;

function getMemes(){
    if(triggers.length===0){
        showThese=memes;
    }else{
        for (i = 0; i<memes.length; i++) { 
            for(j=0; j<triggers.length; j++)
            {
                if(triggers[j]===memes[i].tag1){
                    j=triggers.length;
                }else if(triggers[j]===memes[i].tag2){
                    j=triggers.length;
                }else if(triggers[j]===memes[i].tag3){
                    j=triggers.length;
                }else{
                    if(j===(triggers.length-1)){
                        showThese.push(memes[i]);
                    }
                }
            }
        }
    }
}

function rightClick(){
    if(curMeme===((showThese.length)-1)){
        curMeme=0;
    }else{
        curMeme++;
    }
    displaymemes();
}

function leftClick(){
    if(curMeme===0){
        curMeme=((showThese.length)-1);
    }else{
        curMeme--;
    }
    displaymemes();
}

function displaymemes(){
    if(loaded===false){
        getMemes();
        loaded=true;
        curMeme=0;
    }
    var showThis = showThese[curMeme];
    document.getElementById("currmeme").src = showThis.img;
    var tags = [showThis.tag1, showThis.tag2, showThis.tag3];
    document.getElementById("tags").value= tags.toString();
    
}

function addTrigger(){
    var trig = document.getElementById("newTrig").value;
    triggers.push(trig);
    fillTriggerList();
}

function removeTrigger(){
    var trig = document.getElementById("oldTrig").value;
    for(i=0;i<triggers.length;i++){
        if(trig===triggers[i]){
            triggers.splice(i,1);
        }
    }
    fillTriggerList();
}

//updates trigger list text area box on triggers.html
function fillTriggerList(){
    var tl = triggers.toString();
    document.getElementById("triggerList").value=tl;
}
window.onload = function() {
    if(localStorage.getItem("Triggers")!==null){
        triggers = JSON.parse(localStorage.getItem("Triggers"));
    }else{
        triggers = [];
    }
};

window.onunload = function() {
    localStorage.setItem("Triggers", JSON.stringify(triggers));
};
