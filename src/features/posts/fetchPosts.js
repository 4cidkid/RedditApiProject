
export async function toShowPosts(category = 'ProgrammerHumor') {
    let response = await fetch(`https://www.reddit.com/r/${category}/new.json?limit=10`);
    let data = await response.json();
    let initialState = data.data.children.map((post) => {
      return {
        imgUrl: post.data.url,
        author: post.data.author,
        title: post.data.title,
        link: `https://www.reddit.com/${post.data.permalink}`,
        upVotes: post.data.ups,
        downVotes: post.data.downs,
        subReddit: post.data.subreddit,
        subRedditPrefix: post.data.subreddit_name_prefixed,
      };
    });
    return initialState;
  }



