const form = document.getElementById("form")
const space = document.querySelectorAll("#required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const burgerBtn = document.querySelector('.burger-btn');
const navLinks = document.querySelector('ul');
const traceBtn = document.querySelectorAll('#trace-btn')
const roleElement = document.getElementById("span-two-text");

const iconMoon = document.querySelector('#icon-moon');
const iconSun = document.querySelector('#icon-sun');
const circleChange = document.querySelector('.circleChange');
const alignCircleChange = document.querySelector('.alignCircleChange');

const $body = document.querySelector('body');

let LightMode = true;

//alert("Olá tudo bem, a função Light Mode está sendo desenvolvida, mas fique a vontade para ver como está ficando^^")
circleChange.addEventListener('click', () => {
  if (LightMode) {
    circleChange.style.transform = 'translateX(-1.5rem)'; 
    iconMoon.style.opacity = '0'; 
    iconSun.style.opacity = '1'; 
    $body.classList.remove('darkMode');
    $body.classList.add('lightMode');
    circleChange.style.backgroundColor = 'white';
    alignCircleChange.style.backgroundColor = 'rgb(255, 174, 0)';
  } else {
    circleChange.style.transform = 'translateX(0)'; 
    iconMoon.style.opacity = '1';
    iconSun.style.opacity = '0';
    $body.classList.remove('lightMode');
    $body.classList.add('darkMode');
    circleChange.style.backgroundColor = 'rgb(255, 174, 0)';
    alignCircleChange.style.backgroundColor = 'white';
  }

  LightMode = !LightMode; 
});

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerBtn.classList.toggle('toggle');

    if (burgerBtn.classList.contains('toggle')) {
      burgerBtn.style.backgroundColor = 'white'; 
      traceBtn.forEach(function(element){
        element.style.backgroundColor = "#ffae00"
      })
  } else {
      burgerBtn.style.backgroundColor = '';
      traceBtn.forEach(function(element){
        element.style.backgroundColor = "white"
      })
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Game Developer", "Desenvolvedor Full-Stack", "Ilustrador", "Designer Gráfico", "Vídeo Maker"];
  let currentIndex = 0;

  function typeEffect(text, callback) {
      roleElement.textContent = '';
      let i = 0;
      const interval = setInterval(() => {
          if (i < text.length) {
              roleElement.textContent += text.charAt(i);
              i++;
          } else {
              clearInterval(interval);
              if (callback) callback();
          }
      }, 100);
  }

  function deleteEffect(callback) {
      let text = roleElement.textContent;
      let i = text.length;
      const interval = setInterval(() => {
          if (i > 0) {
              text = text.substring(0, i - 1);
              roleElement.textContent = text;
              i--;
          } else {
              clearInterval(interval);
              if (callback) callback();
          }
      }, 50);
  }

  function updateRole() {
      currentIndex = (currentIndex + 1) % roles.length;
      typeEffect(roles[currentIndex], () => {
          setTimeout(() => {
              deleteEffect(updateRole);
          }, 2000); //2 segundos
      });
  }

  updateRole();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  surNameValidate();
  numberValidate();
  emailValidate();
  textAreaValidate();
  if (space[0].value.length < 3 || space[1].value.length < 3 || space[2].value.length < 15 ||space[3].value.length < 1 || space[4].value.length < 4){
    error();
  } else {
    formSubmit.init();
  }
});

function setError(index) {
  space[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}

function removeError(index) {
  space[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (space[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function surNameValidate() {
  if (space[1].value.length < 3) {
    setError(1);
  } else {
    removeError(1);
  }
}

function numberValidate() {
  if (space[2].value.length < 15) {
    setError(2);
  } else {
    removeError(2);
  }
}

function emailValidate() {
  if (!emailRegex.test(space[3].value)) {
    setError(3);
  } else {
    removeError(3);
  }
}

function textAreaValidate() {
  if (space[4].value.length < 21) {
    setError(4);
  } else {
    removeError(4);
  }
}

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
