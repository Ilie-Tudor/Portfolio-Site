// The quotes object


quotesObject = {
    q1: {t: "Computer science is no more about computers than astronomy is about telescopes.", a: "Edsger W. Dijkstra"},
    q2: {t: "The computer was born to solve problems that did not exist before.", a: "Bill Gates"},
    q3: {t: "It’s hardware that makes a machine fast.  It’s software that makes a fast machine slow.", a: "Craig Bruce"},
    q4: {t: "Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.", a: "Donald E. Knuth"},
    q5: {t: "Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.", a: "Albert Einstein"}
};






// Quote box code

let quote = document.getElementById("QuoteText");
let author = document.getElementById("QuoteAuthor");


let quotesArray = new Array;
quotesArray = Object.entries(quotesObject);

const timer = ms => new Promise(res => setTimeout(res, ms))

let i=0;
async function load () { 
    while(i<quotesArray.length){
        quote.style.animation = 'none';
        author.style.animation = 'none';
        quote.innerHTML = quotesArray[i][1].t;
        author.innerHTML = '—'+quotesArray[i][1].a;
        quote.offsetHeight;
        author.offsetHeight;
        quote.style.animation = null;
        author.style.animation = null;

        if(i==quotesArray.length-1){
            i=-1;
        }
        i++
        await timer(15000);
    }
}


let doneOnce=false;
function scrollHandler(){
    if(!doneOnce && quote.getBoundingClientRect().top-window.innerHeight<5){
        load();
        doneOnce=true;
    }
    
}
window.addEventListener("scroll", scrollHandler);




