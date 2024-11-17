postImage.src = "images/post1.jpg";

const likeButton = document.getElementById('likeButton');
const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');
const commentsSection = document.getElementById('commentsSection');
const addCommentButton = document.getElementById('addComment');

let isLiked = JSON.parse(localStorage.getItem('isLiked')) || false;
let likes = parseInt(localStorage.getItem('likeCount')) || 0;
updateLikeStatus();

function updateLikeStatus() {
    likeIcon.src = isLiked ? 'images/heart-filled.png' : 'images/heart-icon.png';
    likeCount.textContent = likes;
}

likeButton.addEventListener('click', () => {
    isLiked = !isLiked;
    likes = isLiked ? likes + 1 : likes - 1;
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
    localStorage.setItem('likeCount', likes);
    updateLikeStatus();
});

const commentsData = [
    { username: 'commenter1', text: 'Отличный пост!' },
    { username: 'commenter2', text: 'Классно!' }
];

commentsData.forEach(comment => addCommentToDOM(comment.username, comment.text));

function addCommentToDOM(username, text) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.textContent = `${username}: ${text}`;
    commentsSection.appendChild(commentDiv);
}

addCommentButton.addEventListener('click', () => {
    const userComment = prompt("Введите ваш комментарий:");
    if (userComment) {
        addCommentToDOM('nickname', userComment);
    }
});
