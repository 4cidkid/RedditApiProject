import React from 'react'


export function Header(){
    return(
        <header>
            <div id='appLogo'>
                <img src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" alt="Reddit Logo" />
                <h1>RedditClient</h1>
            </div>
            <form>
                <input type="text" name='search' id='search' placeholder="Search" />
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}