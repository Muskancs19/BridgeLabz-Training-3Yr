const userName = "Muskan";
const currhour = new Date().getHours();

if (currhour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currhour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
