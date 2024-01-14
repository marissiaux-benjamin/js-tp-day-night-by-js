/*Au clic de l’élément .tumbler__wrapper vous devez ajouter les classes
body--night-mode à l'élément body
tumbler--night-mode à l’élément .tumbler
À tous les éléments .post la classe post--night-mode
Quand on clique une seconde fois il faut retirer les classes que vous venez d'ajouter*/

/*const  settings = {
    jsEnabledClass : 'js-enabled',
    bodyNightModeClass : 'body--night-mode',
    tumblerSelector : '.tumbler',
    tumblerNightClass : 'tumbler--night-mode',
    postNightClass : 'post--night-mode',
    postSelector : '.post'
};

document.documentElement.classList.add(settings.jsEnabledClass);
const buttonSelect = document.querySelector('.tumbler__wrapper');
buttonSelect.addEventListener('click', ()=>{
    document.body.classList.toggle(settings.bodyNightModeClass);
    buttonSelect.querySelector(settings.tumblerSelector).classList.toggle(settings.tumblerNightClass);
    for(const post of document.querySelectorAll(settings.postSelector)){
        post.classList.toggle(settings.postNightClass);
    }
});*/


const settings = {
    jsEnabledClass: 'js-enabled',
    tumblerSelector: '.tumbler',
    tumblerNightMode: 'tumbler--night-mode',
    btn: '.tumbler__wrapper',
    bodyNightMode: 'body--night-mode',
    articlePostNightMode: 'post--night-mode',
    postSelector : '.post'
}

const nightMode = {
    init(){
        document.querySelector('html').classList.add(settings.jsEnabledClass);
        this.addEventListeners();
    },
    addEventListeners(){
        document.querySelector(settings.btn).addEventListener('click', () => {
            document.body.classList.toggle(settings.bodyNightMode);
            document.querySelector(settings.tumblerSelector).classList.toggle(settings.tumblerNightMode);
            document.querySelectorAll(settings.postSelector).forEach(postElement => {
                postElement.classList.add(settings.articlePostNightMode);
            });
        });
    }
}

nightMode.init();


































