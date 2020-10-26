document.addEventListener('DOMContentLoaded', function(){
    const questionList = document.querySelector('.questions');
    const mainQuestion = document.querySelectorAll('.main-q');
    const answer = document.querySelectorAll('.answer');
    const icons = document.querySelectorAll('.icon');
    
    questionList.addEventListener("click", function(event){
        let x= event.target;
        if (x.classList.contains("question")){
            let mainQ = x.querySelector('.main-q');
            let arrowIcon =  x.querySelector('.icon');
            if(mainQ.classList.contains('selected')){
                resetPage();
                return;
            }
            resetPage();
            x.nextElementSibling.classList.toggle('show');
            mainQ.classList.add('selected');
            arrowIcon.classList.add('icon-flip');
        }
        else if(x.classList.contains("main-q")){
            if(x.classList.contains('selected')){
                resetPage();
                return;
            }
            resetPage();
            x.nextElementSibling.classList.add('icon-flip');
            x.classList.add('selected');
            x.parentElement.nextElementSibling.classList.toggle('show');
        }
        else if(x.classList.contains("icon")){
            if(x.previousElementSibling.classList.contains('selected')){
                resetPage();
                return;
            }
            resetPage();
            x.classList.add('icon-flip');
            x.previousElementSibling.classList.add('selected');
            x.parentElement.nextElementSibling.classList.toggle('show');
        }
    });
    
    function resetPage(){
        for(let i = 0; i<mainQuestion.length;i++){
            mainQuestion[i].classList.remove('selected');
        }
    
        for(let j = 0; j < answer.length ; j++){
            answer[j].classList.remove('show');
        }
        
        for(let k = 0; k < icons.length ; k++){
            icons[k].classList.remove('icon-flip');
        }
    }
});
