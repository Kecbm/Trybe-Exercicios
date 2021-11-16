let cabecalho = document.getElementById('header-container');
cabecalho.style.cssText = 'color: white;' +
'padding: 20px';

let container = document.getElementById('container');
container.style.cssText = 'font-family: Verdana, Geneva, Tahoma, sans-serif;' +
'text-align: center';

let emergencia = document.getElementByClassName('emergency-tasks');
emergencia.style.cssText = 'display: inline-block;' +
'height: 400px;' +
'margin: 56px 0;' +
'width: 400px';

let emergenciaDiv = document.querySelectorAll('.emergency-tasks div');
emergenciaDiv.style.cssText =  'height: 198px';

let emergenciaH3 = document.querySelectorAll('.emergency-tasks h3');
emergenciaH3.style.cssText =  'color: white;' +
'margin-top: 10px;' +
'padding: 10px';