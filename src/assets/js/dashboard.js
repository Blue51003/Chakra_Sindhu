function fetchJSONData() {
  return fetch('../../src/data/data.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          return data;
      })
      .catch(error => {
          console.error('Error reading file:', error);
          throw error;
      });
}

$(function () {
  fetchJSONData()
  .then(series => {
  
  // =====================================
  // Time Series Wind Speed Main
  // =====================================

  var wind_speed_main = {
    series: [{
    data: series.wind_speed
  }],
    chart: {
    height: 350,
    type: 'line',
    id: 'areachart-2'
  },
  annotations: {
    yaxis: [{
      y: 1.3,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Cut-in',
      }
    },
    {
      y: 4.2,
      borderColor: 'blue',
      label: {
        borderColor: 'black',
        style: {
          color: '#fff',
          background: 'blue',
        },
        text: 'Rated',
      }
    },
    {
      y: 9.0,
      borderColor: 'red',
      label: {
        borderColor: 'black',
        style: {
          color: '#000',
          background: 'red',
        },
        text: 'Cut-out',
      }
    }],
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  labels: series.time,
  xaxis: {
    type: 'datetime',
  },
  };

  var chart = new ApexCharts(document.querySelector("#wind_speed_main"), wind_speed_main);
  chart.render();

  // =====================================
  // Time Series Wind Direction Main
  // =====================================

  var wind_dir_main = {
    series: [{
    data: series.wind_direction
  }],
    chart: {
    height: 350,
    type: 'line',
    id: 'areachart-2'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  labels: series.time,
  xaxis: {
    type: 'datetime',
  },
  };

  var chart = new ApexCharts(document.querySelector("#wind_dir_main"), wind_dir_main);
  chart.render();
      // Now you can use the 'series' variable in this function
      console.log(series); // Just to verify if the data is loaded correctly
      // Call any other function or perform operations with 'series' here
  })
  .catch(error => {
      // Handle errors here
      console.error('Error:', error);
  });

})

