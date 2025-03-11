const messageParts = {
    prefix: ["miss", "mr", "mrs", "sir", "madam", "doctor"],
    adjective: ["big", "small", "tall", "short", "fat", "thin"],
    species: ["dog", "cat", "bird", "fish", "lizard", "snake"],
}

function createMessage() {
    parts = Object.keys(messageParts)
    message = [];
    parts.forEach(part => {
    const options = messageParts[part];
    const randomIndex = Math.floor(Math.random() * options.length);
    message.push(options[randomIndex]);
    });
    console.log(message);
}

createMessage();