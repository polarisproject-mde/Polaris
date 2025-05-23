const form = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText) {
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
            commentInput.value = '';
        }
    });