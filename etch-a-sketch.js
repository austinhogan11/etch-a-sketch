const display = document.querySelector('.eas-display');
const row1 = document.createElement('div');
row1.classList.add('row');
const col1 = document.createElement('div');
col1.classList.add('col');
const content1 = document.createElement('div');
content1.textContent = "1";
col1.appendChild(content1);
row1.appendChild(col1);

const col2 = document.createElement('div');
col2.classList.add('col');
const content2 = document.createElement('div');
content2.textContent = "2";
col2.appendChild(content2);
row1.appendChild(col2);

display.appendChild(row1);

const row2 = document.createElement('div');
row2.classList.add('row');
const col3 = document.createElement('div');
col3.classList.add('col');
const content3 = document.createElement('div');
content3.textContent = "3";
col3.appendChild(content3);
row2.appendChild(col3);

const col4 = document.createElement('div');
col4.classList.add('col');
const content4 = document.createElement('div');
content4.textContent = "4";
col4.appendChild(content4);
row2.appendChild(col4);

display.appendChild(row2);


