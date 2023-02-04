// Exercicios - Seletores de Elementos - Pt2

const changeHeaderColors = () => {
  const header = document.getElementById('header-container');
  header.style.backgroundColor = 'lightGreen';
  header.style.color = 'white';
};
changeHeaderColors();

const changeEmergencyColors = () => {
  const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];

  const emergencyBgColor = emergencyTasks.querySelectorAll('div');
  emergencyBgColor[0].style.backgroundColor = 'lightPink';
  emergencyBgColor[1].style.backgroundColor = 'lightPink';

  const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks div h3');
  emergencyTasksTitle[0].style.backgroundColor = 'purple';
  emergencyTasksTitle[0].style.color = 'white';
  emergencyTasksTitle[1].style.backgroundColor = 'purple';
  emergencyTasksTitle[1].style.color = 'white';
};
changeEmergencyColors();

const changeNoEmergencyColors = () => {
  const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];

  const noEmergencyBgColor = noEmergencyTasks.querySelectorAll('div');
  noEmergencyBgColor[0].style.backgroundColor = 'yellow';
  noEmergencyBgColor[1].style.backgroundColor = 'yellow';

  const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks div h3');
  noEmergencyTasksTitle[0].style.backgroundColor = 'black';
  noEmergencyTasksTitle[0].style.color = 'white';
  noEmergencyTasksTitle[1].style.backgroundColor = 'black';
  noEmergencyTasksTitle[1].style.color = 'white';
};
changeNoEmergencyColors();

const changeFooterColor = () => {
  const footer = document.getElementById('footer-container');
  footer.style.backgroundColor = 'darkGreen'
  footer.style.color = 'white';
  footer.style.marginTop = '40px';
};
changeFooterColor();
