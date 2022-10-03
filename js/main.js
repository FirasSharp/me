const NavbarSetup = () => {
  const burgers = document.getElementById('BurgerButton');
  burgers.addEventListener('click', () => {
    const target = burgers.dataset.target;
    const $target = document.getElementById(target);
    burgers.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });
}

const InitializeChart = (config) => {
  let chart = document.getElementById('myChart'),
    ctx = chart.getContext('2d'),
    barStroke = ctx.createLinearGradient(700, 0, 120, 0),
    barFill = ctx.createLinearGradient(700, 0, 120, 0),
    barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
  if (chart) {
    barStroke.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
    barStroke.addColorStop(1, 'rgba(0, 205, 194, 0.6)');
    barFill.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
    barFill.addColorStop(1, 'rgba(0, 205, 194, 0.6)');
    barFillHover.addColorStop(0, 'rgba(0, 255, 188, 0.8)');
    barFillHover.addColorStop(1, 'rgba(0, 205, 194, 0.6)');
    new Chart(ctx, config);
  }
}

const InitNavToTopButton = () => {
  let TopNavButton = document.getElementById('TopNavButton');
  TopNavButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  return TopNavButton;
}

// ToDo, fix this method by getting the right position
const SetSelectedView = (x, y) => {
  const sections = document.getElementsByTagName("section");
  let currentX, currentY;
  for(let i = 0; i < sections.length; i++) {
    currentX = sections[i].getBoundingClientRect().x;
    currentY = sections[i].getBoundingClientRect().y;
    if(currentX >= x && currentY == y) {
      $(document.querySelector(`[data-id="${sections[i].id}"]`)).addClass(
        'selectedView'
      );
    }
  }
};

const SetNavToTopButtonStatus = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    TopNavButton.style.display = "block";
  } else {
    TopNavButton.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  NavbarSetup();
  $.getJSON('js/chart.json', (data) => {
    InitializeChart(data);
  });
  let TopNavButton = InitNavToTopButton();

  window.onscroll = (oEv) => {
    SetNavToTopButtonStatus();
   /* SetSelectedView(
      oEv.currentTarget.screenX,
      oEv.currentTarget.screenY,
    );*/
  }
});

