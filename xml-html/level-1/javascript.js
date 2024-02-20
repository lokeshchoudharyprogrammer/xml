const postsDiv = document.getElementById('posts');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


xhr.onload = (() => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const posts = JSON.parse(xhr.responseText);
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.textContent = post.title;
            postsDiv.appendChild(postElement);
        });
    } else {
        console.error('Failed');
    }
})


xhr.send();