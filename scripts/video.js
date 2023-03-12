let textarea = document.querySelector('.commentaries__text-area');
let submitButton = document.querySelector('.commentaries__submit');
let commentariesBlock = document.querySelector('.commentaries');
let input = document.querySelector('.commentaries__text-area');
let commentariesCounter = document.querySelector('.commentaries__count');
let commentariesCount = document.querySelectorAll('.commentaries__case').length

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

function madeCommentary(commentaryText) {
    if(commentaryText.length > 0) {
        let div = document.createElement('div');
        div.className = "commentaries__case";
        div.innerHTML = `<a href="#" class="commentaries__a"><img src="../images/user.png" alt="avatar" class="commentaries__avatar"></a>
                    <div class="commentaries__block">
                        <div class="commentaries__info">
                            <a href="#" class="commentaries__a"><p class="commentaries__nick">Гость</p></a>
                            <p class="commentaries__time">Только что</p>
                        </div>
                        <p class="commentaries__text">${commentaryText}</p>
                        <div class="commentaries__reputation">
                            <img src="../images/like.svg" alt="like" class="commentaries__like">
                            <img src="../images/dislike.svg" alt="dislike" class="commentaries__dislike">
                            <button class="commentaries__answer">Ответить</button>
                        </div>
                    </div>`;
        commentariesBlock.append(div);
        input.value = '';
        let commentariesCount = document.querySelectorAll('.commentaries__case').length

        commentariesCounter.innerHTML = `${commentariesCount} ${getNoun(commentariesCount, 'комментарий', 'комментария', 'комментариев')}`;
    }
}

commentariesCounter.innerHTML = `${commentariesCount} ${getNoun(commentariesCount, 'комментарий', 'комментария', 'комментариев')}`;

textarea.addEventListener('keydown', function () {
    this.style.cssText = 'height:auto; padding:9px';
    this.style.cssText = 'height:' + this.scrollHeight + 'px';
})

submitButton.addEventListener('click', () => {
    let commentaryText = input.value
    madeCommentary(commentaryText);
});