# Genify
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

<a href="https://genify-18f212542b9b.herokuapp.com/">Genify</a> is a dynamic single-page application crafted with React and integrated with Spotify’s Web API powered by Apollo server. Designed to enhance user experience, the application efficiently processes user inputs and preferences to generate personalized, randomized playlists directly accessible through their Spotify accounts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Future Development](#future-development)
- [How To Contribute](#how-to-contribute)
- [Creators](#creators)
- [Credits](#credits)
- [License](#license)

## Installation

No installation necessary!

## Usage

#### Account Creation and Homepage

Get started by creating a Genify account on the Sign Up page. Upon successful registration, you will be logged in and brought to the Home page. Here, you have two options: 
- explore your existing Genify playlists
- initiate the creation of a new playlist.

![Genify Entrance Screenshot](/client/src/assets/sc/entrance-sc.png)
![Genify Sign Up Screenshot](/client/src/assets/sc/signup-sc.png)
![Genify Login Screenshot](/client/src/assets/sc/login-sc.png)

#### Link your Spotify Account
Before moving forward you MUST link your spotify account. Simply select "Continue with Spotify" to be securely redirected to Spotify's OAuth login and agreement page. Once linked, you'll seamlessly return to Genify's home page. 

![Genify Home - Continue to Spotify Screenshot](/client/src/assets/sc/home-link-sc.png)
![Genify OOPS Alert Screenshot](/client/src/assets/sc/OOPS-alert.png)
![Genify Home - Unlink Spotify Screenshot](/client/src/assets/sc/home-unlink-sc.png)

#### Creating a Playlist
Initiating playlist creation is effortless. Select "Generate Playlist" to kickstart the process. Users have the flexibility to choose up to 5 interests spanning genres and artists. A convenient countdown feature ensures users can easily track their progress across pages.

Specify the desired number of songs for the playlist (ranging from 5 to 100) and give your new playlist a name. Upon confirming your selections by clicking "Generate Playlist," you'll be redirected to the Generate Playlist page, which provides insightful information used in crafting the playlist, alongside a preview icon.

Upon revisiting your Spotify account, you'll discover the curated playlist waiting for you, perfectly tailored to your preferences.

![Genify Create Playlist Instructions Screenshot](/client/src/assets/sc/create-playlist-instructions.png)
![Genify Select Genres Screenshot](/client/src/assets/sc/SelectGenre-sc.png)
![Genify Select Artists Screenshot](/client/src/assets/sc/SelectArtists-sc.png)
![Genify Select Song Count Screenshot](/client/src/assets/sc/song-count-sc.png)
![Genify Name Playlist Screenshot](/client/src/assets/sc/name-playlist-sc.png)
![Genify Generated Playlist Screenshot](/client/src/assets/sc/generated-playlist-sc.png)
![Genify View Playlists Screenshot](/client/src/assets/sc/view-playlists-sc.png)

**Mobile View**
<br>

![Genify Login Mobile View Screenshot](/client/src/assets/sc/login-mobile-view-sc.png)
![Genify Home Mobile View Screenshot](/client/src/assets/sc/home-mobile-view-sc.png)
![Genify Generated Playlist Mobile View Screenshot](/client/src/assets/sc/generated-playlist-mobile-view-sc.png)

## Features
- **Genre and Artists Selection:** Utilizes the Spotify Web API to showcase genres and artists options.
- **Song Range:** Customize the song amount included in generated playlists, allowing users to control the duration and depth of their listening experience.
- **Custom Playlist Naming:** Enable users to name their generated playlists, adding a personal touch within their music library.
- **Interests Countdown:** Tracks the amount of interests the user has left to select per creation.
- **Spotify OAuth:** Link generated playlists to Spotify, enabling users to effortlessly access and enjoy their curated music collections directly within the Spotify platform.

## Future Development
**Integration of Cover Images:** Enhance user experience by enabling the addition of custom cover images to generated playlists, adding a personalized touch to the listening experience.

**MongoDB Integration for Playlist Management:** Implement MongoDB integration to store each generated playlist, enabling efficient management and retrieval of playlist data. Additionally, the View Playlist page will showcase only the curated "Genify" playlist.

## How to Contribute
If you are to come across any problems while using <a href="https://genify-18f212542b9b.herokuapp.com/">Genify</a>, feel free to open a new issue or submit a pull request through this repository. Your feedback and contributions are welcomed.

Please don't hesitate to reach out regarding any concerns, propose improvements, or share suggestions.

## Creators

**Samantha Rose** <a href="https://github.com/samanthashleyrose">GitHub Portfolio</a>

## Credits

#### Knowledge Assistance From:
<li>Lee Warrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>

#### Technologies Used:
<li><a href="https://chat.openai.com/">ChatGPT</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.mongodb.com/">MongoDB Compass</a></li>
<li><a href="https://react.dev/">React.js</a></li>
<li><a href="https://heroku.com">Heroku</a></li>
<li><a href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Inline&family=Chango&family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Supermercado+One&display=swap">Google Fonts</a></li>
<li><a href="https://www.npmjs.com/package/bcrypt">NPM - bcrypt</a></li>
<li><a href="https://www.npmjs.com/package/express">NPM - express</a></li>
<li><a href="https://www.npmjs.com/package/react-spotify-auth?activeTab=readmE">NPM - react-spotify-auth</a></li>

#### Documentation Used:
<li><a href="./client/src/assets/imgs/wireframe.png">Excalidraw</a></li>
<li><a href="https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit#slide=id.p">Presentation Template</a></li>
<li><a href="https://medium.com/@vishalqwdummy/oauth-2-0-for-spotify-b519f5081a2e#:~:text=The%20OAuth%202.0%20Flow%20for%20Spotify,-The%20OAuth%202.0&text=This%20involves%20creating%20a%20new,requests%20to%20the%20Spotify%20API.">OAuth 2.0 for Spotify</a></li>
<li><a href="https://kevinjiang.ca/react-spotify-auth/">react-spotify-auth demo site</a></li>
<li><a href="https://github.com/kevin51jiang/react-spotify-auth">Kevin Jiang Github - react-spotify-auth</a></li>
<li><a href="https://developer.spotify.com/documentation/web-api">Spotify Web API Documentation</a></li>
<li><a href="https://github.com/spotify/web-api-examples">Spotify Web Examples Github</a></li>

#### View our presentation here:
<li><a href="https://docs.google.com/presentation/d/1y8A8PZwR461CJlyIu6vtEVfL0bkrktrPTaSDNdNB7-o/edit#slide=id.g29f43f0a72_0_10">Genify Google Slides Presentation</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.