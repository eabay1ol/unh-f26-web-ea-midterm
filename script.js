// Find topnav and menu button
const topNav = document.querySelector("#myTopnav");
const menuButton = document.querySelector(".icon");

// Store the paper cards.
const papers = [
    {
        title: "Theory of Relativity",
        description: "Einstein, Albert (1916). Relativity: The Special and the General Theory. Princeton University Press.",
        link: "https://en.wikipedia.org/wiki/Relativity:_The_Special_and_the_General_Theory"
    },
    {
        title: "Evolution of Physics",
        description: "Einstein, Albert; Infeld, Leopold (1938). The Evolution of Physics. Simon and Schuster.",
        link: "https://en.wikipedia.org/wiki/The_Evolution_of_Physics"
    },
    {
        title: "Space-time",
        description: 'Public Domain Einstein, Albert (1926). "Space-time". In Garvin, James Louis (ed.). Encyclopædia Britannica. Vol. 3 (13th ed.). London & New York: The Encyclopædia Britannica Company. pp. 608-611.',
        link: "https://archive.org/details/encyclopaedia-britannica-encyclopaedia-britannica.-3-encyclopaedia-britannica-inc.-1926/Encyclopaedia%20Britannica%20-%20Encyclopaedia%20Britannica.%203-Encyclopaedia%20Britannica%2C%20Inc.%20%281926%29/page/607/mode/2up"
    }
];

// Store the image cards.
const images = [
    {
        source: "images/Albert_Einstein_age_3.jpg",
        alt: "Albert Einstein sticking out his tongue",
        caption: "1882, age 3"
    },
    {
        source: "images/Albert_Einstein_as_a_child.jpg",
        alt: "Albert Einstein",
        caption: "1893, age 14"
    },
    {
        source: "images/Albert_Einstein_Head_cleaned.jpg",
        alt: "Albert Einstein",
        caption: "1947"
    }
];

// Find the card containers.
const paperCards = document.querySelector("#paper-cards");
const imageCards = document.querySelector("#image-cards");

// Make the paper cards.
for (const paper of papers) {
    const card = document.createElement("article");
    const icon = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const link = document.createElement("a");

    card.classList.add("work-card");
    icon.classList.add("paper-icon", "published-paper-image");
    icon.src = "images/tabler/contract.svg";
    icon.alt = "Published paper icon";
    title.textContent = paper.title;
    description.textContent = paper.description;
    description.style.textAlign = "left";
    link.href = paper.link;
    link.textContent = "Click here for more info";

    card.append(icon);
    card.append(title);
    card.append(description);
    card.append(link);
    paperCards.append(card);
}

// Make the image cards.
for (const image of images) {
    const card = document.createElement("article");
    const picture = document.createElement("img");
    const lineBefore = document.createElement("br");
    const caption = document.createElement("p");
    const lineAfter = document.createElement("br");

    card.classList.add("work-card");
    picture.classList.add("image-collection-image");
    picture.src = image.source;
    picture.alt = image.alt;
    caption.textContent = image.caption;

    card.append(picture);
    card.append(lineBefore);
    card.append(caption);
    card.append(lineAfter);
    imageCards.append(card);
}

// Open or close the menu
menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    topNav.classList.toggle("responsive");
});

// Find parts for blog post
const blogText = document.querySelector("#blog-text");
const postButton = document.querySelector("#post-blog");
const blogPosts = document.querySelector("#blog-posts");

// Make a blog post upon click
postButton.addEventListener("click", () => {
    // Check for empty text
    if (blogText.value.trim() === "") {
        blogText.focus();
        return;
    }

    // Make the post
    const post = document.createElement("article");
    const title = document.createElement("h3");
    const text = document.createElement("p");

    // Add text and styling
    title.textContent = "New Blog Post";
    text.textContent = blogText.value;
    post.classList.add("blog-card");

    // Put post on page
    post.append(title);
    post.append(text);
    blogPosts.append(post);

    // Clear text box
    blogText.value = "";
});
