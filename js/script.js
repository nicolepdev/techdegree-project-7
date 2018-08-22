// chart variables

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
var ctx1 = document.getElementById("traffic-chart").getContext('2d');
// var ctx2 = document.getElementById("daily-traffic-chart").getContext('2d');
// var ctx3 = document.getElementById("mobile-user-chart").getContext('2d');

var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: "My First dataset",
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

// alert button fade in and hide

$('.alert').hide();
$('.alert').fadeIn(1000);

$('.x').click(function () {
  $('.alert').hide();
});
