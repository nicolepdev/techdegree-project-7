// autocomplete on user search

$(function() {
            var directory  =  [
               "Nicole Peery",
               "Victoria Chambers",
               "Dale Byrd",
               "Dan Oliver",
            ];
            $( "#uname" ).autocomplete({
               source: directory
            });
         });

// chart variables

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
var ctx1 = document.getElementById("traffic-chart").getContext('2d');
var ctx2 = document.getElementById("daily-traffic-chart").getContext('2d');
var ctx3 = document.getElementById("mobile-user-chart").getContext('2d');

// line chart for overall traffic

var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: "# of visitors",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [400, 1000, 150, 25, 500, 100, 500, 10, 1500, 2000, 2500],
        }]
    },

    // Configuration options go here
    options: {
      elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }
    }
});

// bar chart for daily traffic

var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(234, 223, 116)',
            borderColor: 'rgb(255, 99, 132)',
            data: [400, 1000, 150, 25, 500, 100, 300],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});

// doughnut chart for mobile users

var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of users',
            data: [1467, 2341, 789],
            backgroundColor: [
                'rgb(86, 197, 150)',
                'rgb(63, 148, 161)',
                'rgb(234, 223, 116)'
            ]

        }]
    },
    options: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
        }
      }
    }
});

// alert button fade in and hide

$('.alert').hide();
$('.alert').fadeIn(1000);

$('.x').click(function () {
  $('.alert').hide();
});
$('.x2').click(function () {
  $('.alert2').hide();
});
$('.x3').click(function () {
  $('.alert3').hide();
});

$('.alert2').hide();
$('.alert3').hide();

$('.bell').click(function () {
  $('.alert2').show();
  $('.alert3').show();
});
