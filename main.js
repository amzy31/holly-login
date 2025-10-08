// main.js - simplified version for junior JavaScript level

function clearBody() {
  document.body.innerHTML = '';
  document.body.style.margin = '0';
  document.body.style.height = '100vh';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#00ffff';
  document.body.style.fontFamily = '"Inter", sans-serif';
}

function createDock(onLogin, onLogout) {
  var dock = document.createElement('div');
  dock.className = 'dock';

  var loginBtn = document.createElement('button');
  loginBtn.innerHTML = 'Login';
  loginBtn.onclick = onLogin;

  var logoutBtn = document.createElement('button');
  logoutBtn.innerHTML = 'Logout';
  logoutBtn.onclick = onLogout;

  dock.appendChild(loginBtn);
  dock.appendChild(logoutBtn);

  return dock;
}

function createGenZLogin() {
  var container = document.createElement('div');
  container.className = 'container genz';

  var title = document.createElement('h1');
  title.innerHTML = 'Holly Login for Gen Z';

  var form = document.createElement('form');

  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email address';

  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';

  var submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = 'Log in';

  form.appendChild(emailInput);
  form.appendChild(passwordInput);
  form.appendChild(submitBtn);

  container.appendChild(title);
  container.appendChild(form);

  return container;
}

function createHorrificLogin() {
  var container = document.createElement('div');
  container.className = 'container horrific';

  var title = document.createElement('h1');
  title.innerHTML = 'Holly Horrific Login';

  var form = document.createElement('form');

  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email address';

  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';

  var submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = 'Log in';

  form.appendChild(emailInput);
  form.appendChild(passwordInput);
  form.appendChild(submitBtn);

  container.appendChild(title);
  container.appendChild(form);

  return container;
}

function main() {
  clearBody();

  var contentContainer = document.createElement('div');
  document.body.appendChild(contentContainer);

  var dock = createDock(
    function() {
      contentContainer.innerHTML = '';
      contentContainer.appendChild(createGenZLogin());
    },
    function() {
      contentContainer.innerHTML = '';
      contentContainer.appendChild(createHorrificLogin());
    }
  );
  document.body.appendChild(dock);

  var badge = document.createElement('div');
  badge.className = 'badge';
  badge.innerHTML = 'Created By AMZY31';
  document.body.appendChild(badge);

  dock.children[0].click();
}

document.addEventListener('DOMContentLoaded', main);
