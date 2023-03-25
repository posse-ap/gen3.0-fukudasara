<?php
require_once "./dbconnect.php";

for($i = 1; $i <= 30 ; $i++){
  $day = sprintf('%02d', $i);
  $month = date('Y-m');
  $date = $month . '-' . $day;
$stmt = $db->prepare("SELECT SUM(study_hour) as sum from study_data GROUP BY study_date HAVING study_date = '$date' ");
$stmt->execute();
$barChartStudy = $stmt->fetch();
$barChartStudyHours[] = $barChartStudy["sum"] ?? 0;
}
echo $barChartStudyHours;
// var_dump((int)$barChartStudyHours[0]["SUM(study_hour)"]);

$stmt = $db->prepare("SELECT study_language_id , SUM(study_hour) as sum from study_data GROUP BY study_language_id ORDER BY study_language_id");
$stmt->execute();
$pieLanguageChartStudy = $stmt->fetchAll();


$stmt = $db->prepare("SELECT study_content_id , SUM(study_hour) as sum from study_data GROUP BY study_content_id ORDER BY study_content_id");
$stmt->execute();
$pieContentChartStudy = $stmt->fetchAll();


?>

<script>
  {
    ("use strict");
    // 以下棒グラフ
    {
      // const type = "bar"; //何グラフかの指定
      console.log("aaaaaaaaa");
      let data = {
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        datasets: [{
          label: "ラベル",
          data: [
            <?php foreach($barChartStudyHours as $barChartStudyHour) {
              echo $barChartStudyHour.
              ',';
              }
              ?>
          ],
          backgroundColor: "#0f72bc",
          borderRadius: 40,
        }, ],
      }; //データ
      let options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              // min:"2",
              // max:"31",
              stepSize: 2,
              callback: function(index, value) {
                if (value % 2 != 0 && value != 0) {
                  return value + 1;
                }
                minRotation: 0;
                maxRotation: 0;
                grid: false;
              },
            },

            grid: {
              display: false,
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
              callback: function(value, index, values) {
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

    // 以下学習言語ドーナツチャート
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
          data: [<?php foreach($pieLanguageChartStudy as $pieChart){
  echo $pieChart['sum'] . ',';
} ?>],
          backgroundColor: backgroundColor,
          hoverOffset: 4,
          borderWidth: 0,
        }]
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false
          },
          datalabels: {
            font: {
              size: 13,
            },
            color: 'white',
            formatter: function(value, context) {
              if (context.dataIndex < 3) {
                return value.toString() + '%';
              } else {
                return '';
              }
            }
          },
        },
      }

      const plugins = [
        ChartDataLabels,
      ]

      //色々な設定

      const ctx = document.getElementById("myDonutLangChart").getContext("2d"); //表示する場所取得

      //ここで今までの設定した値を出力
      const config = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options,
        plugins: plugins,
      });

      const getLegend = document.getElementById('js-donutLangLegend');

      for (let i = 0; i < labels.length; i++) {

        const createLi = document.createElement('li');
        createLi.classList.add('donutLegendSample');
        createLi.innerHTML = ` <span class="donutLegendIcon" style="background-color:${backgroundColor[i]} ;"></span> <p>${labels[i]}</p>`;
        getLegend.appendChild(createLi);

      }

      //   <li class="donutLegendSample" id="js-donutLegend">
      //   <span class="donutLegendIcon" style="background-color:red ;"></span>
      //   <p>JavaScript</p>
      // </li>
    }
    // ここまで学習言語ドーナツチャート

    // 以下学習コンテンツドーナツチャート
    {
      const labels = [
        'ドットインストール',
        'N予備校',
        'POSSE課題',
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
          data: [<?php foreach($pieContentChartStudy as $pieChart){
  echo $pieChart['sum'] . ',';
} ?>],
          backgroundColor: backgroundColor,
          hoverOffset: 4,
          borderWidth: 0,
        }]
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false
          },
          datalabels: {
            font: {
              size: 13,
            },
            color: 'white',
            formatter: function(value, context) {
              if (context.dataIndex < 3) {
                return value.toString() + '%';
              } else {
                return '';
              }
            }
          },
        },
      }

      const plugins = [
        ChartDataLabels,
      ]

      //色々な設定

      const ctx = document.getElementById("myDonutContentChart").getContext("2d"); //表示する場所取得

      //ここで今までの設定した値を出力
      const config = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options,
        plugins: plugins,
      });

      const getLegend = document.getElementById('js-donutContentLegend');

      for (let i = 0; i < labels.length; i++) {

        const createLi = document.createElement('li');
        createLi.classList.add('donutLegendSample');
        createLi.innerHTML = ` <span class="donutLegendIcon" style="background-color:${backgroundColor[i]} ;"></span> <p>${labels[i]}</p>`;
        getLegend.appendChild(createLi);

      }

    }
    // ここまで学習コンテンツドーナツチャート

  }
</script>