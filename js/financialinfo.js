const labels = [
    '1분기',
    '2분기',
    '3분기',
    '4분기',
  ];
  let data2019 = {
      label: '2019',
      backgroundColor: 'rgb(72, 174, 239)',
      borderColor: 'rgb(255, 0, 0)',
      data: [3139, 3236, 3303, 4271],
  };

  let data2020 = {
      label: '2020',
      backgroundColor: 'rgb(0, 61, 148)',
      borderColor: 'rgb(0, 0, 255)',
      data: [3630, 3783, 2798, 4272],
    };
    let data2021 = {
        label: '2021',
        backgroundColor: 'rgb(154, 184, 226)',
        borderColor: 'rgb(0, 0, 255)',
        data: [3917, 4142, 4563, 5989],
        }; 
    let data2022 = {
        label: '2022',
        backgroundColor: 'rgb(0, 0, 230)',
        borderColor: 'rgb(0, 0, 255)',
        data: [5138],
        }; 

  const data = {
    labels: labels,
    datasets: [data2019,data2020,data2021,data2022]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio:false
    }
  };

const myChart = new Chart(
    document.getElementById('bar-chart'),
    config
  );// bar chart.js

  $( ".tab-wrapper" ).tabs({
    hide: { duration: 100 },
      show: { duration: 100 }
  });
  