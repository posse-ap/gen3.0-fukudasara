"use strict";

const quizArray = [
  {
    question_text:
      "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    option: ["28万人", "79万人", "183万人"],
    correctAnswer: 1,
  },
  {
    question_text:
      "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    option: ["INTECH", "BIZZTECH", "X-TECH"],
    correctAnswer: 2,
  },
  {
    question_text: "IoTとは何の略でしょう？",
    option: ["Internet of Things", "Integrate into Technology", "Information on Tool"],
    correctAnswer: 0,
  },
  {
    question_text:
      "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
    option: ["Society 5.0", "CyPhy", "SDGs"],
    correctAnswer: 0,
  },
  {
    question_text:
      "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    option: ["Web3.0", "NFT", "メタバース"],
    correctAnswer: 0,
  },
  {
    question_text:
      "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    option: ["約2倍", "約5倍", "約11倍"],
    correctAnswer: 1,
  },
];
for (let i = 0; i < 6; i++) {
  const container = document.getElementById("quiz_text_container");
  const quizText = `  <div class="quiz_container">
<div class="quiz_question">
  <h3>Q${i + 1}</h3>
  <p>
  ${quizArray[i].question_text}
  </p>
  <img src="./assets-ph1-website-main/img/quiz/img-quiz0${
    i + 1
  }.png" alt="1問目の画像">
</div>
<h4>A</h4>
<ul id="Question_${i + 1}">
 <li  class="option_${i + 1}" id="option_${i + 1}_1">
  ${quizArray[i].option[0]}
  </li>
  <li class="option_${i + 1}" id="option_${i + 1}_2">
  ${quizArray[i].option[1]}
  </li>
  <li class="option_${i + 1}" id="option_${i + 1}_3">
  ${quizArray[i].option[2]}
  </li>
</ul>



<div class="sourceOfTheAnswer">
  <img src="./assets-ph1-website-main/img/icon/icon-note.svg" alt="帽子マーク">
  <p>
    経済産業省 2019年3月 － IT 人材需給に関する調査
  </p>
</div>
</div>`;

  container.insertAdjacentHTML("beforeend", quizText);

  const options = document.querySelectorAll(`.option_${i + 1}`);
  

  options.forEach(function (element) {

    element.addEventListener("click", function () {

      console.log(options);
      const answerNum = quizArray[i].correctAnswer;
      const answer = quizArray[i].option[answerNum];
      const clickedText = element.innerText;
      console.log(clickedText);
      console.log(answer);
      // ↓クリックした選択肢に青い枠線を付与
      element.classList.add('buttonBorder');

      document.getElementsByClassName(`option_${i + 1}`).classList.add('buttonLock');
      // document.querySelectorAll(`.option_${i + 1}`).classList.add('buttonLock');
      

      console.log(element);
      if (clickedText === answer){
        console.log('正解！')
      }else{console.log('不正解！')}
    });
  })



}
