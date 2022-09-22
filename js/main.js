document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );
  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
});

var ctx = document.getElementById('myChart').getContext('2d');

var barStroke = ctx.createLinearGradient(700, 0, 120, 0);
barStroke.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
barStroke.addColorStop(1, 'rgba(0, 205, 194, 0.6)');

var barFill = ctx.createLinearGradient(700, 0, 120, 0);
barFill.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
barFill.addColorStop(1, 'rgba(0, 205, 194, 0.6)');

var barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
barFillHover.addColorStop(0, 'rgba(0, 255, 188, 0.8)');
barFillHover.addColorStop(1, 'rgba(0, 205, 194, 0.6)');

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['HTML&CSS', 'JavaScript', 'bash', 'C#', 'Java', 'Python', 'SAP'],
    datasets: [
      {
        label: 'Data',
        borderColor: barStroke,
        borderWidth: 1,
        fill: true,
        backgroundColor: barFill,
        hoverBackgroundColor: barFillHover,
        data: [95, 98, 35, 20, 60, 50, 85],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    animation: {
      easing: 'easeOutQuart',
    },
    legend: {
      position: 'bottom',
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: '#fafafa',
            fontStyle: 'bold',
            beginAtZero: true,
            padding: 15,
          },
          gridLines: {
            drawTicks: false,
            display: false,
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 15,
            beginAtZero: true,
            fontColor: '#fafafa',
            fontStyle: 'bold',
            maxTicksLimit: 20,
          },
        },
      ],
    },
  },
});
