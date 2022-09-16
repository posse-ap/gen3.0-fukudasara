"use strict";

const quizArray = [
  {
    question_text:
      "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    option: ["28万人", "79万人", "183万人"],
    correctAnswer: 1,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz01.png",
    source:"経済産業省 2019年3月 － IT 人材需給に関する調査",
  },
  {
    question_text:
      "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    option: ["INTECH", "BIZZTECH", "X-TECH"],
    correctAnswer: 2,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz02.png",
    source:"",
  },
  {
    question_text: "IoTとは何の略でしょう？",
    option: ["Internet of Things", "Integrate into Technology", "Information on Tool"],
    correctAnswer: 0,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz03.png",
    source:"",
  },
  {
    question_text:
      "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
    option: ["Society 5.0", "CyPhy", "SDGs"],
    correctAnswer: 0,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz04.png",
    source:"Society5.0 - 科学技術政策 - 内閣府",

  },
  {
    question_text:
      "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    option: ["Web3.0", "NFT", "メタバース"],
    correctAnswer: 0,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz05.png",
    source:"",
  },
  {
    question_text:
      "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    option: ["約2倍", "約5倍", "約11倍"],
    correctAnswer: 1,
    question_img:"./assets-ph1-website-main/img/quiz/img-quiz06.png",
    source: "Accenture Technology Vision 2021",
  },
];

    // 以下問題と選択肢のシャッフル arrはただ名前をつけた引数？
function shuffle (arr) {
  for (let i = arr.length - 1; i >=0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j],arr[i] ];
  }
  return arr;
}

const shuffledQuestions = shuffle(quizArray);
console.log(shuffledQuestions);


for (let i = 0; i < 6; i++) {
  const answerNum = quizArray[i].correctAnswer;
  const answer = quizArray[i].option[answerNum];
    // この下は問題のシャッフル


const noteHtml = quizArray[i].source ? `
<div class="sourceOfTheAnswer">
  <img src="./assets-ph1-website-main/img/icon/icon-note.svg" alt="帽子マーク">
  <p>
    ${shuffledQuestions[i].source}
  </p>
</div>` : '';
    // console.log(quizArray[i].question_text);
    // この下は選択肢のシャッフル
    let shuffledOptions = shuffle(quizArray[i].option);
    console.log(shuffledOptions);

  const container = document.getElementById("quiz_text_container");
  const quizText = `  <div class="quiz_container">
<div class="quiz_question">
  <h3>Q${i + 1}</h3>
  <p>
  ${shuffledQuestions[i].question_text}
  </p>
  <img src="${shuffledQuestions[i].question_img}" alt="1問目の画像">
</div>
<h4>A</h4>
<ul id="Question_${i + 1}">
  <li  class="option_${i + 1} arrow" id="option_${i + 1}_1">
  ${shuffledOptions[0]}
  </li>
  <li class="option_${i + 1} arrow" id="option_${i + 1}_2">
  ${shuffledOptions[1]}
  </li>
  <li class="option_${i + 1} arrow" id="option_${i + 1}_3">
  ${shuffledOptions[2]}
  </li>
  </ul>
  
  <div class="showCorrect"  id="displayCorrectOfQ${i+1}">
    <h5>正解！</h5>
    <div class = "showCorrectSecondLine" >
      <h6> A </h6>
      <p class ="showCorrectF"> ${answer} </p>
    </div>
  </div>

  <div class="showWrong" id = "displayWrongOfQ${i+ 1}">
    <h5>不正解...</h5>
    <div class = "showWrongSecondLine" >
      <h6> A </h6>
      <p class ="showWrongF"> ${answer} </p>
    </div>
  </div>
${noteHtml}
</div>`;



  container.insertAdjacentHTML("beforeend", quizText);

  const options = document.querySelectorAll(`.option_${i + 1}`);
  
// 以下問題のシャッフル

const removeArrow = (answers) => {
  answers.forEach( answer => {
    answer.classList.remove('arrow')
  })  
}
  
  options.forEach(function (element) {
    
    element.addEventListener("click", function () {
      
      removeArrow(options);
      const optionList = document.getElementById(`Question_${i + 1}`);

      const clickedText = element.innerText;
      console.log(clickedText);
      console.log(answer);
      // ↓クリックした選択肢に青い枠線を付与
      element.classList.add('buttonBorder') ;
      
      // document.getElementsByClassName(`option_${i + 1}`)

      optionList.classList.add('buttonLock') ;
      // document.querySelectorAll(`.option_${i + 1}`).classList.add('buttonLock');
      
      const displayCorrectAnswer = document.getElementById(`displayCorrectOfQ${i+ 1}`)

      const displayWrongAnswer = document.getElementById(`displayWrongOfQ${i+ 1}`)

      console.log(element);
      if (clickedText === answer){
        // console.log('正解！')
        displayCorrectAnswer.classList.add('displayResult');
        // console.log(displayCorrectAnswer);
      }else{
        // console.log('不正解！')
        displayWrongAnswer.classList.add('displayResult');
      }
    });
  })



}
