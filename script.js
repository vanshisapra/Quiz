const quizeDB= [ 
    {
      
        question : "Easy Level -> Q1: Which car manufacturer was the first to win 100 F1 races?",
        a : "Ferrari",
        b : "Nissan",
        c : "Ford",
        d : "Maruti",
        ans : "ans1"
    },
    {
      
        question : "Q2: We use our eyes to — see, hear, feel, eat?",
        a : "Hear",
        b : "Feel",
        c : "See",
        d : "Eat",
        ans : "ans3"
    },
    {
        question : "Q3: USB is which type of storage device?",
        a : "Tertiary",
        b : "Primary",
        c : "Auxillary",
        d : "Secondary",
        ans : "ans4"
    },
    {
        question : "Q4: The purest form of iron is?",
        a : "Steel",
        b : "Pig Iron",
        c : "Nickel Iron",
        d : "Wrou0ght Iron",
        ans : "ans4"
    },
    {
        question :  "Q5: Which of the following is a storage device?",
        a : "Hard Disk Drive",
        b : "Floppy Disk",
        c : "Optical Disk",
        d : "All of these",
        ans :  "ans4"
    },
    {
        question : "Medium Level-> Q1: Fathometer is used to measure?",
        a : "Earthquakes",
        b : "Rainfall",
        c : "Ocean Depth",
        d : "Sound Intesnity",
        ans : "ans3"
    },
    {
        question : "Q2: An email account includes a storage area, often called?",
        a : "Hyperlink",
        b : "Mailbox",
        c : "None of these",
        d : "IP Address",
        ans : "ans2"
    },
    {
        question : "Q3: Junk e-mail is also called?",
        a : "Spoof",
        b : "Sniffer script",
        c : "Spam",
        d : "Spool",
        ans : "ans3"
    },
    {
        question : "Q4: The main source of National Income in India is?",
        a : "Agriculture",
        b : "Industrial Sector",
        c : "Trade Sector",
        d : "Service Sector",
        ans : "ans4"
    },
    {
        question : "Q5: What is the full form of GDP?",
        a : "Global Domestic Ratio",
        b : "Gross depository revenue",
        c : "Global depository receipts",
        d : "Gross domestic product",
        ans : "ans4"
    },
    {
        question : "High Level-> Q1: The first Law Officer of the Government of India is the?",
        a : "Secreatary, Ministry of Law",
        b : "Union Law Minister",
        c : "Chief Justice of the Supreme Court",
        d : "Attorney-General for India",
        ans  : "ans4"
    },
    {
           question : "Q2: The paintings in the Ajanta and Ellora caves are indicative of the development of art under the?",
           a : "Rashtrakutas",
           b : "Pallavas",
           c : "Chalukyas",
           d : "Pandyas",
           ans : "ans3"
    },
    {
           question : "Q3: The Court language of the Mugha?",
           a : "Hindiv",
           b : "Arabic",
           c : "Persian",
           d : "Urdu",
           ans : "ans3"
    },
    {
           question : "Q4: The first newspaper published in India in 1780 was?",
           a : "The Calcutta Chronicle",
           b : "The Bengal Gazette or Calcutta General Advertiser",
           c : "The Bombay Herald",
           d : "The Madras Courier",
           ans : "ans2"
    },
    {
           question : "Q5: Name the first Indian businessman who found place in the cover story of Forbes magazine?",
           a: "Dr Reddy",
           b: "Narayan Murthy",
           c: "Anil Ambani",
           d: "Azim Hasham Premji",
           ans : "ans4"

    }];
    const question = document.querySelector('.question');
    //console.log(question.innerHTML);
    const option1 = document.querySelector("#opt1");
    const option2 = document.querySelector("#opt2");
    const option3 = document.querySelector("#opt3");
    const option4 = document.querySelector("#opt4");
    const submit = document.querySelector("#submit");
    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector("#showScore");
    const upper = document.querySelector("#upper")
    console.log(answers);
    let questionCount= 0;
   // console.log(questionCount);
    let score=0;
    
   const loadQuestion = ()=>{
    const questionList = quizeDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
  
   
   }
  const getCheckAnswer= ()=>{
       let answer;
       answers.forEach((curAnsElem) => {
           if(curAnsElem.checked){
               answer = curAnsElem.id;
           }
        });
        return answer;
  }
  const deselectAll= ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
  }
   submit.addEventListener('click', () =>{
    
        const checkedAnswer = getCheckAnswer();
        
        //console.log(score);
        if(checkedAnswer === quizeDB[questionCount].ans){
            score++;
        }
        deselectAll();
        questionCount++;
        if(questionCount < quizeDB.length ){
           
            loadQuestion();  
            
        }else{

            showScore.innerHTML = `
            <h3> your scored  ${score}/ ${quizeDB.length} </h3>
            <button class="btn" onclick = "location.reload()">Play Again</button>
            `;
            showScore.classList.remove('scoreArea');
            upper.classList.add('scoreArea');
        }

   });
 //  console.log(questionCount);
    loadQuestion();