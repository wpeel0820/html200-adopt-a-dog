const blogPosts = [
    {
        title: "Traveling With Your Dog",
        image: "./images/blog-1.jpg",
        alt: "woman sitting with her dog at a beautiful canyon overlook",
        content: "Laoreet id donec ultrices tincidunt arcu non. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Duis at tellus at urna condimentum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Tellus elementum sagittis vitae et leo duis ut. Nibh tellus molestie nunc non. Odio tempor orci dapibus ultrices in."
    },

    {
        title: "How To Walk Multiple Dogs",
        image: "./images/blog-2.jpg",
        alt: "four large dogs sitting on outside with leashes attached",
        content: "Laoreet id donec ultrices tincidunt arcu non. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Duis at tellus at urna condimentum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Tellus elementum sagittis vitae et leo duis ut. Nibh tellus molestie nunc non. Odio tempor orci dapibus ultrices in."
    },

    {
        title: "Teaching Your Dog to Fetch!",
        image: "./images/blog-3.jpg",
        alt: "silhouette of a person and a sitting dog during a sunset",
        content: "Laoreet id donec ultrices tincidunt arcu non. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Duis at tellus at urna condimentum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Tellus elementum sagittis vitae et leo duis ut. Nibh tellus molestie nunc non. Odio tempor orci dapibus ultrices in."
    }
];

function generateBlogPost(post) {
    const article = document.createElement('article');
    article.classList.add('blog');

const img = document.createElement('img');
img.src = post.image;
img.alt = post.alt;

const title = document.createElement('h3');
title.textContent = post.title;

const content = document.createElement('p');
content.textContent = post.content;

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(content);

    const container = document.getElementById('blog-posts');
    container.appendChild(article);
}

function generateAllBlogPosts() {
    blogPosts.forEach(post => generateBlogPost(post));
}
generateAllBlogPosts();