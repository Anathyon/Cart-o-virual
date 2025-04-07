"use strict";
const btn_modo = document.querySelector("#btn_modo");
const html = document.documentElement;
const img = document.querySelector("#perfil");
const user_insta = document.querySelector("#user_insta");
const f_pag = document.querySelector("#f_pag");
const alternar_modo = document.querySelector("#alternar_modo");
const ne_elem_bt = document.createElement("button");
const ne_elem_span = document.createElement("span");
ne_elem_bt.setAttribute("id", "btn_modo");
ne_elem_span.setAttribute("id", "sp_simu");
alternar_modo.append(ne_elem_bt, ne_elem_span);
ne_elem_bt.addEventListener("click", () => {
    html.classList.toggle("claro");
    if (html.classList.contains("claro")) {
        img.setAttribute("src", "avatar-c.png");
    }
    else {
        img.setAttribute("src", "avatar-e.png");
    }
});
user_insta.innerHTML = "@anathyon";
f_pag.innerHTML = "Entre em contato!";
