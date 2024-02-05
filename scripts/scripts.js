document.getElementById("linkedinbutton").addEventListener("click", linkToLinkedIn);
document.getElementById("githubbutton").addEventListener("click", linkToGithub);
document.getElementById("xbutton").addEventListener("click", linkToX);
document.getElementById("ytbutton").addEventListener("click", linkToYT);
document.getElementById("twitchbutton").addEventListener("click", linkToTwitch);
document.getElementById("emailbutton").addEventListener("click", linkToEmail);


function linkToLinkedIn()
{
    window.open("https://www.linkedin.com/in/thomas-ballantyne-1a5247267/");
}

function linkToGithub()
{
    window.open("https://github.com/TomyBDev");
}

function linkToX()
{
    window.open("https://twitter.com/ThomasBDev");
}

function linkToYT()
{
    window.open("https://www.youtube.com/@ThomasBGameDev");
}

function linkToTwitch()
{
    window.open("https://www.twitch.tv/thomasbde");
}

function linkToEmail()
{
    window.open("mailto:thomasbgamedev@gmail.com");
}