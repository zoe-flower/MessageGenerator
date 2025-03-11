const descriptionCategories = {
    prefix: ["miss", "mr", "mrs", "sir", "madam", "doctor"],
    adjective: ["big", "small", "tall", "short", "fat", "thin"],
    species: ["dog", "cat", "bird", "fish", "lizard", "snake"],
}

function createMessage() {
    message = [];
    keys = Object.keys(descriptionCategories)
    keys.forEach(key => {
    const categoryOptions = descriptionCategories[key];
    const randomIndex = Math.floor(Math.random() * categoryOptions.length);
    message.push(categoryOptions[randomIndex]);
    });
    console.log(message);
}

createMessage();