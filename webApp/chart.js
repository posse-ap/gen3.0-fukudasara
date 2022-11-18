{
  ("use strict");
  // 以下棒グラフ
  {
    // const type = "bar"; //何グラフかの指定
    let data = {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      datasets: [
        {
          label: "ラベル",
          data: [
            2.2, 4.2, 1, 3.6, 3.6, 6.0, 7.0, 1.2, 4.0, 2.0, 5.8, 6.8, 8.2, 5.7,
            4.3, 0.2, 0.2, 0.6, 4.0, 2.7, 5.5, 1.7, 5.8, 8.0, 8.0, 2.0, 0.4,
            4.3, 1.1, 2.4,
          ],
          backgroundColor: "#0f72bc",
          borderRadius: 40,
        },
      ],
    }; //データ
    let options = {
      plugins:{
        title: {
          display:true,
          text:'学習言語',


        },

      },
      scales: {
        x: {
          ticks: {
            // min:"2",
            // max:"31",
            stepSize: 2,
            callback: function (index, value) {
              if (value % 2 != 0 && value != 0) {
                return value + 1;
              }
              minRotation: 0;
              maxRotation: 0;
              grid:false;
            },
          },

          grid:{
            display:false,
          }

        },
        y: {
          ticks: {
            //この範囲より大きいデータが入ったらはみ出てしまう
            // min: 0,
            // max: 400,
            suggestedMin: 0,
            suggestedMax: 8.0,
            stepSize: 2.0,
            callback: function (value, index, values) {
              //value: index番目の値
              //index: 何番目か
              //values: 全ての値
              return value + "h";
            },

          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    };
    //色々な設定

    const ctx = document.getElementById("myChart").getContext("2d"); //表示する場所取得

    //ここで今までの設定した値を出力
    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }
// ここまで棒グラフ

// 以下ドーナツチャート
  {
    const labels = [
      'JavaScript',
      'CSS',
      'PHP',
      'HTML',
      'Laravel',
      'SQL',
      'SHELL',
      '情報システム基礎知識(その他)',
    ]

    const backgroundColor = [
      '#0645ec',
      '#0f71bd',
      '#21bdde',
      '#3ccefe',
      '#b29ef3',
      '#6d46ec',
      '#4a17ef',
      '#3105c0',
    ]

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [42, 18, 10,9,9,7,5,4],
        backgroundColor: backgroundColor,
        hoverOffset: 4,
        borderWidth: 0,
      }]
    };
    const options = {
      title:{
        display: true,
        text: '学習言語'
      },
      plugins:{
        legend:{
          display: false,
        }
      }

    }
        //色々な設定

    const ctx = document.getElementById("myDonutLangChart").getContext("2d");//表示する場所取得

    //ここで今までの設定した値を出力
    const config = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });

const getLegend = document.getElementById('js-donutLegend');

for ( let i = 0; i < labels.length; i++) {

  const createLi = document.createElement('li');
  createLi.classList.add('donutLegendSample');
  createLi.innerHTML =` <span class="donutLegendIcon" style="background-color:${backgroundColor[i]} ;"></span> <p>${labels[i]}</p>`;
  getLegend.appendChild(createLi);

}

      //   <li class="donutLegendSample" id="js-donutLegend">
      //   <span class="donutLegendIcon" style="background-color:red ;"></span>
      //   <p>JavaScript</p>
      // </li>
  }
  // ここまでドーナツチャート


}
