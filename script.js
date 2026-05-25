// MENU MOBILE
const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ANIMAÇÃO AO ROLAR
const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
});

elementos.forEach((el) => observer.observe(el));

// CONTADOR ANIMADO
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }else{
            counter.innerText = target;
        }

    };

    updateCounter();

});

// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// VALIDAÇÃO DO FORMULÁRIO
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos!");

    }else{

        alert("Mensagem enviada com sucesso!");
        formulario.reset();

    }

});