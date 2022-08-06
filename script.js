var proceed_button=document.getElementById("proceed");
var box=document.getElementById("box");
var head=document.getElementsByTagName("head");
var name_input=document.main_form.inputName;
var level_input=document.main_form.level;
var subject_input=document.main_form.subject;
var time_check_input=document.getElementById("time_check");
var name,level,subject,time_check,bar,width,id,quizOver=0,score=0,submit_button;
var list,current,choices,answer_box,len,next_elem,clear_elem,total;
const num_choices=4;
function loadQuiz(sub,difficulty){
  if((sub==="General Knowledge")&&(difficulty==="medium")){
    list=[
      {
          question: "Where is Taj Mahal Located?",
          choices: ["Mumbai", "Agra","New Delhi","None of these"],
          correct: 2,
          desc: "Common Fact",
          image: "./images/taj.jpeg"
      },
      {
          question: "Who won the IPL title 4 times?",
          choices: ["Mumbai Indians", "Chennai Super Kings","Sunrisers Hyderabad","Kolkata Knight Riders"],
          correct: 1,
          desc: "Mumbai Indians won IPL in 2013,2015,2017 and 2019.",
          image: "None"    
      },
      {
          question: "Where is statue of Ahinsa located?",
          choices: ["Mysooree", "Patna","Nashik","Thiruvananthapuram"],
          correct: 3,
          desc: "The Statue of Ahimsa (121 feet tall), depicts the first Jain Tirthankara, Rishabhanatha, is located at Mangi-Tungi, near Nashik in the Indian state of Maharashtra.",
          image: "./images/statue.jpg"    
      },
      {
          question: "Which of the following is called 'City of Lakes' ?",
          choices: ["New Delhi", "Mount Abu","Nainital","Udaipur"],
          correct: 4,
          desc: "Set around a series of artificial lakes, Udaipur is also known for its lavish royal residences",
          image: "None"    
      },
      {
          question: "Which is the first smart city in world?",
          choices: ["New Jersey", "Seoul","Vatican City","California"],
          correct: 2,
          desc: "Seoul has been immersed in smart technology for years, having been named the world's first smart city back in 2014.",
          image: "./images/seoul.jpeg"    
      }
      ];
  }
  else if((sub==="General Knowledge")&&(difficulty==="easy")){
    list=[
      {
          question: "Where is Gateway of India Located?",
          choices: ["Mumbai", "Chennai","New Delhi","Hyderabad"],
          correct: 1,
          desc: "Common Fact",
          image: "./images/gateway.jpeg"
      },
      {
          question: "Which team won the IPL in 2019?",
          choices: ["Mumbai Indians", "Chennai Super Kings","Sunrisers Hyderabad","Kolkata Knight Riders"],
          correct: 1,
          desc: "Mumbai Indians won IPL in 2019, defeating Chennai Super Kings in the finals.",
          image: "None"    
      },
      {
          question: "Which is the tallest waterfalls in the world ?",
          choices: ["Jog Falls", "Tugela Falls","Angel Falls","Victoria Falls"],
          correct: 3,
          desc: " Angel Falls (Salto Ángel) in Venezuela is the highest waterfall in the world. The falls are 3230 feet in height.",
          image: "./images/fall.jpeg"    
      },
      {
          question: "Which of the following is called 'the Land of Rising Sun' ?",
          choices: ["India", "China","U.S.A","Japan"],
          correct: 4,
          desc: "According to the words of the Japanese envoy himself, that name was chosen because the country was so close to where the sun rises. In any event, the name stuck, and for the last 1400 years or so, the world has referred to Japan as Nippon, the land of the rising sun.",
          image: "None"    
      },
      {
          question: "Which is the southernmost point of India?",
          choices: ["Siachin", "Indira Point","Thiruvananthapuram","Kanyakumari"],
          correct: 2,
          desc: "The southernmost point of the Indian territory is Indira Point in the Andaman & Nicobar Islands. It's Cape Comorin or Kanyakumari that is the southernmost point in mainland India.",
          image: "None"    
      }
      ];
  }
  else if((sub==="JavaScript")&&(difficulty==="easy")){
    list=[
      {
          question: "Which of the following functions treats its arguement string as if it had actually been coded at that point in the program?",
          choices: ["bind()", "apply()","eval()","with()"],
          correct: 3,
          desc: "eval() is a function used to cheat lexical scope. For eg. eval('var a=2')",
          image: "None"
      },
      {
          question: "What would be the output of following code?<br><samp>console.log(Number([]))</samp>",
          choices: ["NaN", "0","'0'","'NaN'"],
          correct: 2,
          desc: "Common Fact",
          image: "None"    
      },
      {
          question: "Which of the following is not an <em>ES6</em> feature ?",
          choices: ["let statement", "Promises","arrow functions","Strict Equality(===)"],
          correct: 4,
          desc: "The Strict Equality feature was also in the older versions of Javascript. However, other features had been introduced in ES6 (2015) .",
          image: "None"    
      },
      {
          question: "What is the output of below given code snippet? <br><samp>var obj={a:42,b:'hello'};<br>var b='a'; <br>console.log(obj[b]+obj.b);</samp><br>",
          choices: ["42hello", "hello42","84","hellohello"],
          correct: 1,
          desc: "When[] is used to access property, the property name should be in double quotes or single quotes. Also, when '+' is used with a string, it is used as 'concatenation operator'",
          image: "None"    
      },
      {
          question: "Which of the following brands invented 'JavaScript'?",
          choices: ["Mozilla", "Netscape","Opera","Google"],
          correct: 2,
          desc: "Netscape is a brand name associated with the development of the Netscape web browser. It created the JavaScript programming language, the most widely used language for client-side scripting of web pages, to be used in its Netscape browser, at first.",
          image: "./images/browser.jpg"    
      }
      ];
  }
  else if((sub==="JavaScript")&&(difficulty==="medium")){
    list=[
      {
          question: "What is the output of below given code snippet? <br><samp>var a=[1,2,3];<br>var b=[1,2,3]; <br>var c='1,2,3'<br>console.log(a==c)<br>console.log(b==c)<br>console.log(a==b)<br></samp><br>",
          choices: ["true, true, false", "false, false, true","true, true, true","false, false, false"],
          correct: 1,
          desc: "On comparing objects in JS (Arrays are also built-in objects in JS), values are actually held by references. So, only references are compared, not values. Arrays are by default, coerced to all values with comma, in a string, when compared with a string. For eg. [1,2,3] becomes '1,2,3'",
          image: "None"
      },
      {
          question: "If x!==x in JavaScript, find the value of x?",
          choices: ["undefined", "NaN","null","window object"],
          correct: 2,
          desc: "NaN is not equal to NaN. This concept is used to polyfil the function for isNaN() for older browsers.",
          image: "None"    
      },
      {
          question: "What would parseInt(1/0,19) return ?",
          choices: ["Infinity", "NaN","19","18"],
          correct: 4,
          desc: "The second arguement of parseInt() is the radix value. When 1/0 is performed, it returns 'Infinity', the radix value being 19 (means symbols from 0-9 and a-i used), it returns 'i', so output is equivalent to decimal value of '18' ",
          image: "None"    
      },
      {
          question: "Who developed JavaScript?",
          choices: ["Brendan Eich", "Guido van Rossum","James Gosling","Bjarne Stroustrup"],
          correct: 1,
          desc: "Brendan Eich, a Netscape Communications Corporation programmer, created JavaScript in September 1995. ",
          image: "./images/js_dev.jpeg"    
      },
      {
          question: "What is the output of below given code snippet? <br><samp>for(var i=1;i<=5;i++){<br>setTimeout(function timer(){ <br> console.log(i); <br>},i*1000);<br>}</samp><br>",
          choices: ["12345", "1234","66666","55555"],
          correct: 3,
          desc: "In javaScipt, there are Scope Closures i.e. a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. Here, due to asynchronous behaviour of JavaScript, first the for loop will run quickly and i will become '6' at the end of for loop. Now, the events of setTimeout() will be fired after every second and value of i i.e. 6 is printed, thus 5 times, in all.",
          image: "None"    
      }
      ];
  }
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function result() {
    clearInterval(id);
    save();
    check();
    if(score>total) score=total;
    if(quizOver===1){
      alert("\tYour quiz is already over."); 
    }
    quizOver=1;
    if(score<(total/2)){
      alert("\t \tSorry " +name+", you could only score  "+score+ " / " +total+"\n\tBetter Luck next time.."); 
    }
    else{
      alert("\t \tCongrats " +name+", you have scored  "+score+ " / " +total); 
    }
    renderQuestion(current);
}

function frame() {
    if (width >= 100) {
      clearInterval(id);
      check();
      quizOver=1;
      if(score<(total/2)){
        alert("\t \t Time Over!!\nSorry " +name+", you could only score  "+score+ " / " +total+"\nBetter Luck next time.."); 
      }
      else{
        alert("\t \t Time Over!!\nCongrats " +name+", you have scored  "+score+ " / " +total); 
      }
       
    } else {
      width++;
      bar.innerHTML=(100-width)+" secs left";
      bar.style.width = width + '%';
    }
  }

  function renderQuestion(i){
  current=i;
  document.getElementById("question").innerHTML=(i+1)+'. '+list[i].question;
  let flag=0;
  for(let j=0; j<num_choices; j++)
  {
    document.getElementById("lab"+j).innerHTML=(list[i].choices)[j];
    if(choices[i]==(j+1))
    {
      document.getElementById("op"+(j)).checked=true;
      flag=1;
    }
    else if(quizOver===1){
      document.getElementById("op"+(j)).disabled=true;
    }
    if(quizOver===1){
        if((choices[i]===(list[i].correct))&&((j+1)===(list[i].correct)))
        {
        document.getElementById("lab"+j).innerHTML+='<i class="fa fa-check text-success" aria-hidden="true"></i>';
        }
        else if((choices[i]!==(list[i].correct)))
        {
         if((choices[i]!==0))
         {
          if(((j+1)===choices[i]))
          {
          document.getElementById("lab"+j).innerHTML+='<i class="fa fa-times text-danger" aria-hidden="true"></i>';
          }
          else if((j+1)===list[i].correct)
          {
          document.getElementById("lab"+j).innerHTML+='<i class="fa fa-check text-success" aria-hidden="true"></i>';
          }
         }
        else if((j+1)===(list[i].correct)){
          document.getElementById("lab"+j).innerHTML+='<i class="fa fa-check text-info" aria-hidden="true"></i>';
        }
        }
        document.querySelector('.alert').innerHTML=list[i].desc;
    } 
  }
  if(flag==0)
  {
      clear();
  }
  if(list[i].image!=="None"){
    document.querySelector(".quest-img").setAttribute('src',list[i].image);
  }
  else{
    document.querySelector(".quest-img").setAttribute('src',"");
  }
  }
  
  function save(){
    let selected=0,flag=0;
    if(quizOver==0){
    for(let i=0; i<num_choices; i++){
      if(document.getElementById("op"+(i)).checked==true){
        choices[current]=i+1;
        flag=1;
        break;
      }
    }
    if(flag==0){
      choices[current]=0;
    }
  }
  }

  function next(){
    // Save the choice and move to next
    save();
    if(current<(len-1))
    {
      current++;
      renderQuestion(current);
    }
    else{
      alert("This was the last question of the quiz.");
    }    
  }

  function clear(){
    for(let i=0; i<num_choices; i++){
      if(document.getElementById("op"+(i)).checked==true){
        document.getElementById("op"+(i)).checked=false;
        break;
      }
    }
  }
  

  function check(){
    if(quizOver===0){

    for(let i=0; i<len; i++){
      if(choices[i]===(list[i].correct)){
        score+=5;
      }
      else if(choices[i]!=0){
        score-=2;
      }
    }
    }
  }

function submit(){
    name=name_input.value.trim();
    level=level_input.value;
    subject=subject_input.value;
    time_check=time_check_input.checked;

  if(name!=null&&name!="") 
    {
    loadQuiz(subject,level);
    alert('Welcome '+name+" !!\nGet ready for the quiz... \nDon't try to reload the page during the quiz\
 otherwise, it may result in loss of data \n\t\tRules:-\n\t(+5) for correct answer\n\t(-2) for wrong answer");
   
  if(time_check==true)
    {
    box.innerHTML="<div class=\"boundary\"><h4 align=\"center\"> Timer</h4><div class=\"progress\"> <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" id=\"bar\"></div> </div><br></div>"+box.innerHTML;
    bar=document.getElementById("bar");
    width=0;
    id=setInterval(frame, 1000);
    }
else{
    
    }
    removeElement("main_form");
    let body=document.querySelector('.card-body');
    document.querySelector('.card-header').innerHTML=subject+" Quiz - ("+level+")";
    body.classList.add('text-center');
    body.innerHTML='<div class="btn-group mr-2" id="Scroll" role="group" aria-label="Scroll"></div>';
    body.innerHTML+='<br><br><div class="row text-center"><img class="rounded quest-img mx-auto d-block"></div>';
    body.innerHTML+='<br><p align="center" id="question"></p>';
    for(i=0; i<num_choices; i++)
    {
      body.innerHTML+='<div class="form-check"><input class="form-check-input" type="radio" name="option" id="op'+i+ '"value="op'+i+'"><label class="form-check-label" for="op'+i+'" id="lab'+i+'"></label></div>';
    }
    body.innerHTML+='<br><div class="alert alert-info" role="alert">Best of Luck</div><br><div class="row justify-content-center"><button id="clear" class="btn btn-danger">Clear Response</button>&nbsp;&nbsp;<button id="next" class="btn btn-primary">Save & Next</button>&nbsp;&nbsp;<button type="submit" id="done" class="btn btn-primary">Submit</button></div>';
    next_elem=document.getElementById("next");
    clear_elem=document.getElementById("clear");
    submit_button=document.getElementById("done");
    submit_button.addEventListener('click',result);
    next_elem.addEventListener('click',next);
    clear_elem.addEventListener('click',clear);
    len=list.length;
    total=len*5;
    choices=new Array(len);
    for(let i=0; i<len; i++){
        addElement("Scroll","button","quest"+i,String(i+1));
        let elem=document.getElementById('quest'+i);
        elem.setAttribute('type','button');
        elem.setAttribute('class','btn btn-warning');
        elem.addEventListener('click',()=>{current=i; renderQuestion(i)});
        choices[i]=0;
    }
    renderQuestion(0);
    }

  }
proceed_button.addEventListener("click",submit);
