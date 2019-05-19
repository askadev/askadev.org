import React from 'react';

const HackNAppShowdown = () => (
    <React.Fragment>
        <div className="container" id="header">
            <h2>Austin Hack &amp; App Showdown! (rules and stuff)</h2>
            <a href="https://www.meetup.com/Ask-a-Dev-org-Austin/events/260457069/"/>
        </div>
        <div className="container" id="hack-rules">
            <header>
                <h3>The hack</h3>
            </header>
            <div className="content">
                <p>
                    <ul>
                        <li>Event kicks off at 12:30 CST</li>
                        <li>The hack is a jeopardy event (as of right now. It could be a king of the hill). </li>
                        <li>Jeopardy is a solve problem get points approach. </li>
                        <li>We'll have teams of max 2, and it's an everyone/team for them selves hack. </li>
                        <li>Depending on time, we might have run another one. But first one has prizes.</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="container" id="hack-rules">
            <header>
                <h3>The hack rules</h3>
            </header>
            <div className="content">
                <p>
                    <ul>
                        <li>Don't be malicious, we're white hats here. Leave those black ones in the basement.</li>
                        <li>Max team size of 2.</li>
                        <li>Jeopardy will require a sign up through a hosted service. </li>
                        <li>If we're doing a king of the hill we'll go over those. </li>
                    </ul>
                </p>
            </div>
        </div>

        
        <div className="container" id="app-rules">
            <header>
                <h3>The app</h3>
            </header>
            <div className="content">
                <ul>
                    <li>Max team size of 2.</li>
                    <li>Event kicks off at 12:30 CST</li>
                    <li>We'll run until 4, and have a demo at 4.</li>
                    <li>You'll be building a cool app idea and then demoing it. (We will have mentors helping out if needed.)</li>
                    <li>There will be prizes!</li>
                </ul>
            </div>
        </div>
        <div className="container" id="app-rules">
            <header>
                <h3>The app rules</h3>
            </header>
            <div className="content">
                <ul>
                    <li>Max team size of 2.</li>
                    <li>Teams must register</li>
                    <li>30 minute commits to a hosted repository. Git (https://github.com/austinaskadevhacknappshowdown)</li>
                    <li>Hard deadline at 4, we'll then do a demo. Show what you've got!</li>
                    <li>All things built locally, don't worry about hosting.</li>
                    <li>This is a friendly competition</li>
                    <li>Any programming language, any programming</li>
                </ul>
            </div>
        </div>
        <div className="container" id="app-rules">
            <header>
                <h3>Cool app ideas</h3>
            </header>
            <div className="content">
                <ul>
                4: 
                <li>Movie Popcorn.</li>
                <li>Sales store with full purchase, and return abilities</li>
                <li>Image processing app that allows for item detection</li>
                <li>Music player (Public songs only.)</li>
                <li>Adjusting to life app (This is an application that could be used by non technology friendly people to help them learn technologies)</li>
                3:
                <li>Game of Life (Infinite edition)</li>
                <li>Text Editor with debugging</li>
                <li>Messaging app</li>  
                <li>Movie review site</li>
                <li>Product tracker</li> 
                2:
                <li>To Do scheduler with reminders, and more.</li>
                <li>Scrabble (Multi player would make this a solid 2)</li>
                <li>Pong</li>
                <li>Arcade games (Galiga)</li>
                <li>Chess</li>
                1:
                <li>Checkers</li>
                <li>Calculator (Wolfram level would be cool)</li>
                <li>Unit conversion tool</li>
                <li>Snake (The game)</li>
                <li>A basic dos dungeon adventure</li>
                </ul>
            </div>
        </div>
    </React.Fragment>
);

export default HackNAppShowdown;