const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

let postsEl = document.getElementById("posts-el")

function render() {
    for(let i=0;i<posts.length;i++) {
        postsEl.innerHTML+=

        `<section id="user-details">
                <img id="posts-avatar" src=${posts[i].avatar}>
                <div id="container">
                    <p id="posts-name">${posts[i].name}</p>
                    <p id="posts-location">${posts[i].location}</p>
                </div>
            </section>
            <section>
                <div id="img-container">
                    <img id="posts-image" src=${posts[i].post}>
                </div>
            </section>
                <div id="icons-container">
                    <img class="post-interaction-icon" src="${posts[i].liked ? "images/red-heart-icon.png" : "images/icon-heart.png"}" alt="heart icon" onclick="likePost(${i})">

                    <img class="icon comm" src="images/icon-comment.png" alt="icon">
                    <img class="icon msg" src="images/icon-dm.png" alt="dm">
                </div>
                <p id="posts-likes">${posts[i].likes} likes</p>
            <div id="comments-container">
                <p id="posts-username">${posts[i].username}</p>
                <p id="posts-comment">${posts[i].comment}</p>
            </div>`
    }
}

render()

function refreshPosts() {
    postsEl.innerHTML = "";
    render();
}

function likePost(postIndex) {
    if (!posts[postIndex].liked) {
        posts[postIndex].likes++;
        posts[postIndex].liked = true;

    }
    else {
        posts[postIndex].likes--;
        posts[postIndex].liked = false;
    }

    refreshPosts();
}
