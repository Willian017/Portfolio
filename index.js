function ativado(id1,id2)
{   
    var link = document.querySelector(id1);
    var p = document.querySelector(id2);
    link.style.opacity = '1';
    link.style.filter = 'drop-shadow(0px 0px 1px white)';
    p.style.width = '6vw';

    document.body.addEventListener('mouseover', e => {
    var link = e.target.closest(id1);
    var p = document.querySelector(id2);
    if (!link) { return; }
    link.style.opacity = '1';
    link.style.filter = 'drop-shadow(0px 0px 1px white)';
    p.style.width = '6vw';
    });

   document.body.addEventListener('mouseout', e => {
    var link = e.target.closest(id1);
    var p = document.querySelector(id2);
    if (!link) { return; }
    link.style.opacity = '1';
    link.style.filter = 'none';
    p.style.width = '6vw';
    });
}

function desativado(id1,id2)
{   
    var link = document.querySelector(id1);
    var p = document.querySelector(id2);
    link.style.opacity = '0.6';
    link.style.filter = 'none';
    p.style.width = '3vw';
}

function hover(id1,id2)
{
    document.body.addEventListener('mouseover', e => {
    var link = e.target.closest(id1);
    var p = document.querySelector(id2);
    if (!link) { return; }
    link.style.opacity = '1';
    link.style.filter = 'drop-shadow(0px 0px 1px white)';
    p.style.width = '6vw';
    });

    document.body.addEventListener('mouseout', e => {
    var link = e.target.closest(id1);
    var p = document.querySelector(id2);
    if (!link) { return; }
    link.style.opacity = '0.6';
    link.style.filter = 'none';
    p.style.width = '3vw';
    });
}

var scrollTop = window.pageYOffset;

if(scrollTop == 0)
{
    ativado("#sobre-link","#p-sobre");

    hover("#exp-link","#p-exp");
    desativado("#exp-link","#p-exp");

    hover("#pro-link","#p-pro");
    desativado("#pro-link","#p-pro");

    hover("#qual-link","#p-qual");
    desativado("#qual-link","#p-qual");
}

var altura_sobre = document.querySelector("#sobre").clientHeight - 120;

var altura_experiencias = document.querySelector("#experiencias").clientHeight + altura_sobre - 100;

var altura_projetos = document.querySelector("#projetos").clientHeight + altura_experiencias - 50;

var altura_qualificacoes= document.querySelector("#experiencias").clientHeight + altura_projetos;


window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset;

    if(scrollTop <= altura_sobre)
    {
        ativado("#sobre-link","#p-sobre");

        hover("#exp-link","#p-exp");
        desativado("#exp-link","#p-exp");

        hover("#pro-link","#p-pro");
        desativado("#pro-link","#p-pro");

        hover("#qual-link","#p-qual");
        desativado("#qual-link","#p-qual");
    }
    else if(scrollTop <= altura_experiencias)
    {
        ativado("#exp-link","#p-exp");

        hover("#sobre-link","#p-sobre");
        desativado("#sobre-link","#p-sobre");

        hover("#pro-link","#p-pro");
        desativado("#pro-link","#p-pro");

        hover("#qual-link","#p-qual");
        desativado("#qual-link","#p-qual");
    }
    else if(scrollTop <= altura_projetos)
    {
        ativado("#pro-link","#p-pro");

        hover("#sobre-link","#p-sobre");
        desativado("#sobre-link","#p-sobre");

        hover("#exp-link","#p-exp");
        desativado("#exp-link","#p-exp");

        hover("#qual-link","#p-qual");
        desativado("#qual-link","#p-qual");
    }
    else if(scrollTop <= altura_qualificacoes)
    {
        ativado("#qual-link","#p-qual");

        hover("#sobre-link","#p-sobre");
        desativado("#sobre-link","#p-sobre");

        hover("#exp-link","#p-exp");
        desativado("#exp-link","#p-exp");

        hover("#pro-link","#p-pro");
        desativado("#pro-link","#p-pro");
    }
})