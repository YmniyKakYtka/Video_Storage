let textarea = document.querySelector('.commentaries__text-area');

textarea.addEventListener('keydown', function () {
    this.style.cssText = 'height:auto; padding:9px';
    this.style.cssText = 'height:' + this.scrollHeight + 'px';
})

let submitButton = document.querySelector('.commentaries__submit');
let commentariesBlock = document.querySelector('.commentaries');
let input = document.querySelector('.commentaries__text-area');

submitButton.addEventListener('click', () => {
    let commentaryText = input.value

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
    }
});