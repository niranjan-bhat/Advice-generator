
adviceCount = 0;
adviceCountHtmlElement = document.querySelector('#advice-count');
adviceHtmlElement = document.querySelector('.advice');
btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceCountHtmlElement.innerHTML = ++adviceCount;
        adviceHtmlElement.innerHTML = data.slip.advice;

    });
});