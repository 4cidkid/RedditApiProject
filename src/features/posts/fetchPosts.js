


export async function toShowPosts(category = 'ProgrammerHumor'){
    let response = await fetch(`https://www.reddit.com/r/${category}/new.json?limit=1`)
    response = await response.json()
    return response.data
}

