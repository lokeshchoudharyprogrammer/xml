const postsDiv = document.getElementById('posts');
const postForm = document.getElementById('postForm');
const successMessage = document.getElementById('successMessage');

postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(postForm);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = (() => {
        if (xhr.status >= 200 && xhr.status < 300) {
            successMessage.style.display = 'block';
            postForm.reset();
        } else {
            console.error('Failed to add post');
        }
    })

    xhr.send(JSON.stringify({
        title: formData.get('title'),
        body: formData.get('body'),
        userId: 1
    }));
});