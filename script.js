// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});





function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Apply dark mode if previously enabled
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Search Functionality
    document.querySelector(".search-box").addEventListener("input", function () {
        let searchValue = this.value.toLowerCase();
        let blogCards = document.querySelectorAll(".blog-card"); // Blog posts select karein

        blogCards.forEach(post => {
            let title = post.querySelector(".blog-title").innerText.toLowerCase(); // Correct class name
            let description = post.querySelector(".blog-description").innerText.toLowerCase();

            // Agar title ya description me search word match hota hai toh dikhayein, warna hide karein
            if (title.includes(searchValue) || description.includes(searchValue)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slider");

    function moveSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    setInterval(moveSlide, 3000); // Change slide every 3 seconds
});


const blogData = {
    blog1: {
        title: "Winter Fashion Trends 2025",
        meta: "By Author | February 20, 2025",
        image: "Image4.png",
        text: "Stay ahead in style with the latest winter fashion trends. From cozy layers to bold statement pieces, explore what’s trending this season!",
    },
    blog2: {
        title: "Streetwear Revolution: Style That Speaks",
        meta: "By Author | February 18, 2025",
        image: "Image5.png",
        text: "Dive into the world of urban fashion! Discover how streetwear has transformed over the years and why it’s ruling the style scene."
    },
    blog3: {
        title: "Classic vs. Modern: The New Men's Wardrobe",
        meta: "By Author | February 18, 2025",
        image: "Image6.png",
        text: "Balancing timeless elegance with modern aesthetics—find out how to upgrade your wardrobe with the perfect mix of classic and trendy pieces."
    },
    blog4: {
        title: "The Art of Layering: Elevate Your Look",
        meta: "By Author | February 18, 2025",
        image: "Image7.png",
        text: "Master the technique of layering like a pro! Learn how to mix textures, colors, and fabrics to create a stylish and comfortable outfit."
    },
    blog5: {
        title: "Essential Accessories for the Modern Gentleman",
        meta: "By Author | February 18, 2025",
        image: "Image8.png",
        text: "From statement watches to versatile scarves—unlock the secrets of accessories that add the perfect finishing touch to any outfit."
    },
    blog6: {
        title: "Summer Outfit Guide: Cool & Confident",
        meta: "By Author | February 18, 2025",
        image: "Image9.png",
        text: "Beat the heat in style! Check out the best lightweight fabrics, colors, and outfit ideas to keep you looking sharp all summer long."
    }
};

function openBlog(blogId) {
    let blog = blogData[blogId];
    if (blog) {
        document.getElementById("full-blog-title").innerText = blog.title;
        document.getElementById("full-blog-meta").innerText = blog.meta;
        document.getElementById("full-blog-image").src = blog.image;
        document.getElementById("full-blog-text").innerText = blog.text;
        document.getElementById("full-blog-page").style.display = "flex";
    } else {
        console.error("Invalid Blog ID:", blogId);
    }
}

function closeBlog() {
    document.getElementById("full-blog-page").style.display = "none";
}



function subscribeNewsletter() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("subscription-message");

    if (email === "") {
        message.innerHTML = "Please enter a valid email!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Thank you for subscribing!";
        message.style.color = "green";
        document.getElementById("email").value = "";
    }
}
