// 1.3 NodeJS Posting

function fetchUserData(t) {
  return new Promise((r, e) => {
    setTimeout(() => {
      t ? r({ id: t, name: "User " + t }) : e("Invalid userId");
    }, 1e3);
  });
}
function fetchUserPosts(t) {
  return new Promise((r, e) => {
    setTimeout(() => {
      t
        ? r(["Post 1", "Post 2", "Post 3"])
        : e("Error fetching posts for userId: " + t);
    }, 1e3);
  });
}
function fetchPostComments(t) {
  return new Promise((r, e) => {
    setTimeout(() => {
      t
        ? r(["Comment 1", "Comment 2"])
        : e("Error fetching comments for postId: " + t);
    }, 1e3);
  });
}
fetchUserData(1)
  .then((t) => {
    console.log("User:", t),
      fetchUserPosts(t.id)
        .then((t) => {
          console.log("Posts: ", t),
            fetchPostComments(t[0])
              .then((t) => {
                console.log("Comments: ", t);
              })
              .catch((t) => {
                console.error("Error fetching comments: ", t);
              });
        })
        .catch((t) => {
          console.error("Error fetching posts: ", t);
        });
  })
  .catch((t) => {
    console.error("Error fetching user: ", t);
  });
