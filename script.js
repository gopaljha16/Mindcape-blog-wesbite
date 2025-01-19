const blogs = [
  // Technology Blogs (5)
  {
    blog_id: 1,
    blog_image: "../Images/Blogs Images/Technology/first.jpg",
    blog_category: "Technology",
    blog_title: "The Future of AI in Content Creation",
    blog_content: "Artificial intelligence (AI) is transforming the content creation landscape by automating tasks, enhancing creativity, and delivering personalized user experiences. From generating articles to creating music and art, AI is expanding possibilities while raising ethical and legal questions about ownership and authenticity. The adoption of AI tools like GPT models, DALL-E, and automated video editors is accelerating content production while enabling creators to focus on storytelling and strategy. However, this raises concerns about intellectual property, deepfake misuse, and the impact on creative jobs. Balancing innovation with ethical considerations will be crucial for the future of AI-driven content creation...",
    user_name: "Ganpathi",
    user_image: "../Images/userimage/men/men1.avif",
    blog_minutes_read: "5 min read",
  },
  {
    blog_id: 2,
    blog_image: "../Images/Blogs Images/Technology/second.jpg",
    blog_category: "Technology",
    blog_title: "Exploring Blockchain Beyond Cryptocurrency",
    blog_content: "Blockchain technology is revolutionizing industries beyond cryptocurrency by enhancing transparency, security, and efficiency. From supply chain management to healthcare, blockchain offers innovative solutions that redefine trust and data handling in various sectors. Smart contracts are automating processes, while decentralized finance (DeFi) is reshaping banking services. Additionally, blockchain's potential in secure voting systems and digital identity verification shows its versatility. Despite challenges like scalability and energy consumption, ongoing advancements in blockchain technology continue to unlock its transformative potential for a wide range of applications...",
    user_name: "Ravi Kumar",
    user_image: "../Images/userimage/men/men2.avif",
    blog_minutes_read: "4 min read",
  },
  {
    blog_id: 3,
    blog_image: "../Images/Blogs Images/Technology/third.avif",
    blog_category: "Technology",
    blog_title: "How 5G is Reshaping Connectivity",
    blog_content: "The rollout of 5G networks is set to revolutionize connectivity with faster speeds, lower latency, and greater capacity. This technological leap is unlocking new opportunities for IoT, smart cities, autonomous vehicles, and immersive experiences like AR and VR. Industries like healthcare, manufacturing, and entertainment are benefiting from 5G's enhanced capabilities. For example, remote surgeries powered by 5G connections are becoming a reality, while seamless streaming and gaming experiences redefine entertainment. However, challenges such as infrastructure deployment and security concerns must be addressed for a successful transition to a fully connected world...",
    user_name: "Sita Ram",
    user_image: "../Images/userimage/women/women1.avif",
    blog_minutes_read: "6 min read",
  },
  {
    blog_id: 4,
    blog_image: "../Images/Blogs Images/Technology/fourth.avif",
    blog_category: "Technology",
    blog_title: "Quantum Computing: The Next Frontier",
    blog_content: "Quantum computing is on the brink of revolutionizing industries by solving problems that were previously unsolvable. From cryptography to drug discovery, this emerging technology holds the promise of unprecedented computational power. Unlike classical computers, which process information in binary, quantum computers leverage quantum bits (qubits) to perform complex calculations at incredible speeds. This advancement could lead to breakthroughs in optimizing supply chains, modeling financial markets, and designing advanced materials. While practical quantum computing is still in its infancy, ongoing research and investment are bringing us closer to realizing its full potential...",
    user_name: "Arjun Singh",
    user_image: "../Images/userimage/men/men3.avif",
    blog_minutes_read: "5 min read",
  },
  {
    blog_id: 5,
    blog_image: "../Images/Blogs Images/Technology/fifth.avif",
    blog_category: "Technology",
    blog_title: "Cybersecurity Trends in 2025",
    blog_content: "As cyber threats evolve, the importance of robust cybersecurity measures grows. Emerging trends include AI-driven threat detection, zero-trust architecture, and quantum encryption to protect sensitive data and systems from increasingly sophisticated attacks. Businesses are investing in proactive threat hunting and employee training to bolster defenses. Meanwhile, regulatory frameworks are tightening to address data privacy concerns and enhance accountability. The integration of machine learning in cybersecurity tools is enabling faster identification and mitigation of threats. Staying ahead in the cybersecurity landscape requires continuous innovation and collaboration between organizations, governments, and technology providers...",
    user_name: "Lakshmi Devi",
    user_image: "../Images/userimage/women/women2.avif",
    blog_minutes_read: "7 min read",
  },

  // Lifestyle Blogs (4)
  {
    blog_id: 6,
    blog_image: "../Images/Blogs Images/Lifestyle/life1.avif",
    blog_category: "Lifestyle",
    blog_title: "Minimalism: Living with Less",
    blog_content: "Minimalism is more than just a trend; it's a lifestyle choice that emphasizes simplicity, decluttering, and intentional living. By focusing on what truly matters, minimalism promotes mental clarity, financial freedom, and overall well-being. This practice encourages people to let go of material possessions and focus on experiences, relationships, and personal growth. Minimalism is not about deprivation but about making room for what adds value to life. Discover how adopting minimalism can lead to a more fulfilling and balanced lifestyle by aligning your actions with your core values...",
    user_name: "Priya Sharma",
    user_image: "../Images/userimage/women/women3.avif",
    blog_minutes_read: "4 min read",
  },
  {
    blog_id: 7,
    blog_image: "../Images/Blogs Images/Lifestyle/life2.avif",
    blog_category: "Lifestyle",
    blog_title: "Healthy Eating on a Budget",
    blog_content: "Eating healthy doesn't have to be expensive. Learn how to plan meals, shop smartly, and cook nutritious meals that fit your budget while maintaining a healthy lifestyle. Strategies like buying in bulk, choosing seasonal produce, and preparing meals at home can save money while ensuring balanced nutrition. Additionally, incorporating affordable superfoods and reducing food waste can enhance your diet without straining your finances. Discover practical tips and recipes to prioritize health and wellness without compromising your budget...",
    user_name: "Karthik Reddy",
    user_image: "../Images/userimage/men/men4.avif",
    blog_minutes_read: "5 min read",
  },
  {
    blog_id: 8,
    blog_image: "../Images/Blogs Images/Lifestyle/life3.jpeg",
    blog_category: "Lifestyle",
    blog_title: "Morning Routines for a Productive Day",
    blog_content: "A well-planned morning routine can set the tone for a productive day. Discover simple and effective habits to incorporate into your mornings to boost focus, energy, and overall well-being. From mindfulness practices like meditation and journaling to physical activities like yoga or walking, crafting a routine tailored to your goals can lead to significant improvements in productivity. Additionally, optimizing your sleep and limiting screen time in the morning can help you start your day on the right foot. Learn how to design a morning routine that aligns with your personal and professional aspirations...",
    user_name: "Nandini Joshi",
    user_image: "../Images/userimage/women/women4.avif",
    blog_minutes_read: "6 min read",
  },
  {
    blog_id: 9,
    blog_image: "../Images/Blogs Images/Lifestyle/life4.jpeg",
    blog_category: "Lifestyle",
    blog_title: "The Art of Self-Care",
    blog_content: "Self-care is more than just pampering yourself; it's about nurturing your mental, emotional, and physical health. Explore practices and techniques to prioritize self-care in your daily life. From establishing healthy boundaries and practicing mindfulness to engaging in hobbies and seeking professional help when needed, self-care encompasses a wide range of activities. Taking time for self-care can improve resilience, reduce stress, and enhance overall well-being. Discover the transformative power of self-care and how it can lead to a more balanced and fulfilling life...",
    user_name: "Ankit Mehta",
    user_image: "../Images/userimage/men/men5.avif",
    blog_minutes_read: "4 min read",
  },

  // Business Blogs (3)
  {
    blog_id: 10,
    blog_image: "../Images/Blogs Images/Business/business1.jpeg",
    blog_category: "Business",
    blog_title: "Startups Thriving in the Post-Pandemic World",
    blog_content: "The pandemic has reshaped the business landscape, giving rise to innovative startups that leverage digital transformation, sustainability, and remote work to thrive in the new normal. Entrepreneurs are capitalizing on emerging trends like e-commerce, telehealth, and green technology to address changing consumer needs. Additionally, the rise of hybrid work models and digital marketing strategies has enabled startups to scale rapidly and compete globally. Discover inspiring stories of startups that have turned challenges into opportunities and learn about the key factors driving their success...",
    user_name: "Rahul Kapoor",
    user_image: "../Images/userimage/men/men6.avif",
    blog_minutes_read: "5 min read",
  },
  {
    blog_id: 11,
    blog_image: "../Images/Blogs Images/Business/business2.webp",
    blog_category: "Business",
    blog_title: "The Rise of E-commerce in Rural Areas",
    blog_content: "E-commerce is no longer limited to urban areas. With improved logistics and internet penetration, rural areas are embracing online shopping, unlocking new markets and opportunities. Small businesses and local artisans are benefiting from platforms that provide access to a broader audience, while consumers enjoy greater convenience and variety. Government initiatives and private investments in digital infrastructure are further accelerating this trend. Explore the transformative impact of e-commerce on rural communities and its potential to bridge the urban-rural divide...",
    user_name: "Megha Sharma",
    user_image: "../Images/userimage/women/women5.avif",
    blog_minutes_read: "6 min read",
  },
  {
    blog_id: 12,
    blog_image: "../Images/Blogs Images/Business/business3.avif",
    blog_category: "Business",
    blog_title: "Leadership Trends in 2025",
    blog_content: "Leadership in the modern era is evolving to emphasize empathy, adaptability, and inclusivity. Explore the latest trends shaping effective leadership in a rapidly changing world. From fostering diverse and inclusive work environments to leveraging technology for remote collaboration, leaders are adopting new strategies to drive organizational success. Additionally, the importance of mental health awareness and employee well-being is reshaping leadership priorities. Learn how forward-thinking leaders are navigating the challenges of 2025 and setting new benchmarks for excellence...",
    user_name: "Amit Verma",
    user_image: "../Images/userimage/men/men7.avif",
    blog_minutes_read: "4 min read",
  },

  // Travel Blogs (3)
  {
    blog_id: 13,
    blog_image: "../Images/Blogs Images/Travel/travel1.jpeg",
    blog_category: "Travel",
    blog_title: "Hidden Gems: Underrated Travel Destinations",
    blog_content: "While popular destinations attract the masses, hidden gems offer unique experiences, tranquility, and a chance to connect with nature and local cultures. Discover some of the most underrated travel destinations worldwide, from remote islands to untouched forests. Learn about the best times to visit, activities to try, and tips for sustainable travel to ensure these hidden gems are preserved for future generations. Embrace the joy of exploring lesser-known locations that offer an authentic and rewarding travel experience...",
    user_name: "Ananya Gupta",
    user_image: "../Images/userimage/women/women6.avif",
    blog_minutes_read: "6 min read",
  },
  {
    blog_id: 14,
    blog_image: "../Images/Blogs Images/Travel/travel2.webp",
    blog_category: "Travel",
    blog_title: "Traveling Sustainably: Tips and Tricks",
    blog_content: "Sustainable travel is about minimizing your environmental footprint and supporting local communities. Learn practical tips for traveling sustainably and making a positive impact wherever you go. From choosing eco-friendly accommodations and reducing single-use plastics to respecting local cultures and contributing to conservation efforts, sustainable travel promotes responsible tourism. Discover how small changes in travel behavior can lead to meaningful contributions to the planet and its people, ensuring that travel remains a force for good...",
    user_name: "Manisha Roy",
    user_image: "../Images/userimage/women/women7.avif",
    blog_minutes_read: "5 min read",
  },
  {
    blog_id: 15,
    blog_image: "../Images/Blogs Images/Travel/travel3.jpg",
    blog_category: "Travel",
    blog_title: "Top Adventure Destinations in India",
    blog_content: "India is home to a diverse range of adventure destinations, from trekking in the Himalayas to scuba diving in the Andaman Islands. Discover thrilling adventures waiting for you across the country, including river rafting in Rishikesh, paragliding in Himachal Pradesh, and exploring the dense jungles of Madhya Pradesh. Learn about the best seasons to visit, safety tips, and how to prepare for your next adrenaline-filled adventure. Experience the thrill of exploring India's natural beauty while creating unforgettable memories...",
    user_name: "Rohan Das",
    user_image: "../Images/userimage/men/men8.avif",
    blog_minutes_read: "4 min read",
  },

  // Health Blogs (3)
  {
    blog_id: 16,
    blog_image: "../Images/Blogs Images/Health/health1.jpeg",
    blog_category: "Health",
    blog_title: "The Importance of Mental Health Awareness",
    blog_content: "Mental health is as important as physical health. Raising awareness, breaking the stigma, and providing resources for mental well-being are essential steps toward a healthier and happier society. Learn about the signs of mental health challenges, available support systems, and the role of community and family in fostering mental wellness. Discover the benefits of therapy, mindfulness practices, and stress management techniques that can improve overall mental health. Together, we can create a more supportive and understanding environment for mental health...",
    user_name: "Manoj Tiwari",
    user_image: "../Images/userimage/men/men9.avif",
    blog_minutes_read: "4 min read",

  },

  {
    "blog_id": 17,
    "blog_image": "../Images/Blogs Images/Health/health2.jpg",
    "blog_category": "Health",
    "blog_title": "Nutrition for a Healthy Lifestyle",
    "blog_content": "Good nutrition is the cornerstone of a healthy lifestyle. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides the essential nutrients your body needs to function at its best. Learn how to create meal plans, understand portion control, and identify superfoods that can enhance energy levels and boost immunity. This blog also explores the importance of hydration and the role of micronutrients in preventing chronic diseases. Start your journey toward a healthier you by embracing mindful eating and sustainable dietary habits...",
    "user_name": "Ritika Sharma",
    "user_image": "../Images/userimage/women/women8.avif",
    "blog_minutes_read": "6 min read"
  },
  {
    "blog_id": 18,
    "blog_image": "../Images/Blogs Images/Health/health3.jpeg",
    "blog_category": "Health",
    "blog_title": "The Science of Sleep and Its Benefits",
    "blog_content": "Sleep is a vital component of overall health and well-being. Quality sleep helps repair and rejuvenate the body, enhances cognitive function, and supports emotional balance. This blog delves into the science of sleep, explaining the different sleep stages and their impact on health. Learn tips to improve sleep hygiene, such as establishing a regular sleep schedule, minimizing screen time before bed, and creating a comfortable sleep environment. Discover how sufficient sleep can improve productivity, reduce stress, and lower the risk of chronic illnesses...",
    "user_name": "Aditya Verma",
    "user_image": "../Images/userimage/men/men10.avif",
    "blog_minutes_read": "5 min read"
  },

  {
    "blog_id": 19,
    "blog_image": "../Images/Blogs Images/Culture/culture1.jpeg",
    "blog_category": "Culture",
    "blog_title": "The Rich Heritage of Indian Festivals",
    "blog_content": "India is a land of diverse cultures, and its festivals reflect the country's vibrant traditions and unity in diversity. From Diwali, the festival of lights, to Holi, the festival of colors, each celebration carries unique significance and history. This blog explores the cultural importance of Indian festivals, their rituals, and the values they promote. Learn how these festivals bring communities together, fostering harmony and joy. Whether it’s the grandeur of Durga Puja or the serenity of Onam, Indian festivals showcase the beauty of tradition and togetherness...",
    "user_name": "Priya Singh",
    "user_image": "../Images/userimage/women/women9.avif",
    "blog_minutes_read": "7 min read"
  },
  {
    "blog_id": 20,
    "blog_image": "../Images/Blogs Images/Culture/culture2.jpeg",
    "blog_category": "Culture",
    "blog_title": "Exploring the World Through Traditional Attire",
    "blog_content": "Traditional clothing is more than just fabric; it is a reflection of history, identity, and cultural pride. From Japan's elegant kimonos to Africa's vibrant dashikis, traditional attire tells stories of heritage and community values. This blog dives into the significance of traditional clothing around the world and how it continues to inspire modern fashion trends. Learn about the craftsmanship, symbolism, and regional diversity in traditional garments, and discover why preserving these customs is essential for maintaining cultural identity...",
    "user_name": "Anjali Mehta",
    "user_image": "../Images/userimage/women/women10.avif",
    "blog_minutes_read": "6 min read"
  },

]


// create the blog
// then cateogries
function generateBlog(blogs) {
  const blog_container_div = document.querySelector(".blogs-container");

  if (!blog_container_div) return;

  blogs.forEach((blog) => {
    const blog_card_div = document.createElement("div");
    blog_card_div.className = "blogs-card";
    blog_card_div.setAttribute("data-id", blog.blog_id);

    const blog_card_image_div = document.createElement("div");
    blog_card_image_div.className = "card-image";

    const blog_image = document.createElement("img");
    blog_image.src = blog.blog_image || '../Images/Blogs Images/Travel/travel1.jpeg';
    blog_image.onerror = function () {
      this.src = '../Images/Blogs Images/Travel/travel1.jpeg';
    };

    const blog_category = document.createElement("span");
    blog_category.className = "category-tag";
    blog_category.textContent = blog.blog_category || 'Uncategorized';
    blog_card_image_div.appendChild(blog_image);
    blog_card_image_div.appendChild(blog_category);


    const card_content_div = document.createElement("div");
    card_content_div.className = "card-content";

    const card_title = document.createElement("h2");
    card_title.className = "card-title";
    card_title.textContent = blog.blog_title;

    const card_content = document.createElement("p");
    card_content.className = "card-description";
    card_content.textContent = blog.blog_content;

    card_content_div.appendChild(card_title);
    card_content_div.appendChild(card_content);

    const card_footer_div = document.createElement("div");
    card_footer_div.className = "card-footer";

    const author_div = document.createElement("div");
    author_div.className = "author";

    const author_avatar_div = document.createElement("div");
    author_avatar_div.className = "author-avatar";

    const author_image = document.createElement("img");
    author_image.src = blog.user_image || '../Images/userimage/men/men1.avif';
    author_image.onerror = function () {
      this.src = '../Images/userimage/men/men1.avif';
    };

    author_avatar_div.appendChild(author_image);

    const author_info_div = document.createElement("div");
    author_info_div.className = "author-info";

    const author_name = document.createElement("span");
    author_name.className = "author-name";
    author_name.textContent = blog.user_name;

    const blog_read_time = document.createElement("span");
    blog_read_time.className = "read-time";
    blog_read_time.textContent = blog.blog_minutes_read;

    author_info_div.appendChild(author_name);
    author_info_div.appendChild(blog_read_time);

    author_div.appendChild(author_avatar_div);
    author_div.appendChild(author_info_div);

    card_footer_div.appendChild(author_div);

    const interaction_button_div = document.createElement('div');
    interaction_button_div.className = 'interaction-buttons';

    const like_button = document.createElement('button');
    like_button.className = 'interaction-button heart';
    like_button.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        `;

    const comment_button = document.createElement('button');
    comment_button.className = 'interaction-button';
    comment_button.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        `;

    const share_button = document.createElement('button');
    share_button.className = 'interaction-button';
    share_button.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
        `;

    interaction_button_div.appendChild(like_button);
    interaction_button_div.appendChild(comment_button);
    interaction_button_div.appendChild(share_button);

    card_footer_div.appendChild(interaction_button_div);
    card_content_div.appendChild(card_footer_div);

    blog_card_div.appendChild(blog_card_image_div);
    blog_card_div.appendChild(card_content_div);

    blog_container_div.appendChild(blog_card_div);
  });
}


if (typeof blogs !== 'undefined' && blogs.length > 0) {
  generateBlog(blogs);
}

// category buttons
const category_btn = document.querySelectorAll(".category-button");
if (category_btn) {
  category_btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      category_btn.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });

      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";

      const category = event.target.id;
      const blogs_container = document.querySelector(".blogs-container");

      if (blogs_container) {
        blogs_container.innerHTML = "";

        let result;
        if (category === "All") {
          result = blogs;
        } else {
          result = blogs.filter((obj) => obj.blog_category === category);
        }

        generateBlog(result);
      }
    });
  });
}

// search bar
const search_bar = document.getElementById("searchBlogs");
if (search_bar) {
  search_bar.addEventListener("input", (event) => {
    const input_value = event.target.value.toLowerCase();

    const featuring_blog = blogs.filter((obj) =>
      (obj.blog_category && obj.blog_category.toLowerCase().includes(input_value)) ||
      (obj.blog_title && obj.blog_title.toLowerCase().includes(input_value)) ||
      (obj.blog_content && obj.blog_content.toLowerCase().includes(input_value))
    );

    const blogs_container = document.querySelector(".blogs-container");
    if (blogs_container) {
      blogs_container.innerHTML = "";
      generateBlog(featuring_blog);
    }
  });
}

// Write blog functionality
const write_btn = document.querySelector(".write");
const write_blog = document.querySelector(".write-blog");

if (write_btn && write_blog) {
  write_btn.addEventListener("click", (event) => {
    write_blog.classList.remove("hidden");
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!write_blog.contains(event.target) && !write_btn.contains(event.target)) {
      write_blog.classList.add("hidden");
    }
  });
}


// write blog in mobile functionality
const write_btn_mobile = document.querySelector(".write-mobile")

if (write_btn_mobile && write_blog) {
  write_btn_mobile.addEventListener("click", (event) => {
    write_blog.classList.remove("hidden");
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!write_blog.contains(event.target) && !write_btn_mobile.contains(event.target)) {
      write_blog.classList.add("hidden");
    }
  });
}


// blog form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("blogForm");
  const image_preview = document.getElementById("imagePreview");
  const blog_container = document.querySelector(".blogs-container");

  if (form && image_preview) {
    const blogImageInput = document.getElementById("blogImage");
    if (blogImageInput) {
      blogImageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
          try {
            const reader = new FileReader();
            reader.onload = (e) => {
              image_preview.src = e.target.result;
              image_preview.style.display = "block";
            };
            reader.onerror = () => {
              console.error("Error reading file");
              image_preview.style.display = "none";
            };
            reader.readAsDataURL(file);
          } catch (error) {
            console.error("Error handling file:", error);
            image_preview.style.display = "none";
          }
        } else {
          image_preview.style.display = "none";
        }
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const blog_things = {
        category: document.getElementById("blogCategory")?.value || 'Uncategorized',
        title: document.getElementById("blogTitle")?.value || 'Untitled',
        content: document.getElementById("blogContent")?.value || '',
        author: document.getElementById("userName")?.value || 'Anonymous',
        readTime: document.getElementById("readTime")?.value || '1',
        coverImage: image_preview.src || "../Images/Blogs Images/Travel/travel1.jpeg",
        profileImage: "../Images/userimage/men1.avif"
      };

      const profile_input = document.getElementById("userImage");
      if (profile_input && profile_input.files[0]) {
        try {
          const reader = new FileReader();
          reader.onload = (e) => {
            blog_things.profileImage = e.target.result;
            renderBlog(blog_things);
          };
          reader.onerror = () => {
            console.error("Error reading profile image");
            renderBlog(blog_things);
          };
          reader.readAsDataURL(profile_input.files[0]);
        } catch (error) {
          console.error("Error handling profile image:", error);
          renderBlog(blog_things);
        }
      } else {
        renderBlog(blog_things);
      }

      form.reset();
      image_preview.style.display = "none";
      write_blog.classList.add("hidden");
    });
  }

  function renderBlog(blog) {
    if (!blog_container) return;

    const blog_card = document.createElement("div");
    blog_card.classList.add("blogs-card");

    blog_card.innerHTML = `
      <div class="card-image">
        <img src="${blog.coverImage}" alt="" onerror="this.src='../Images/Blogs Images/Travel/travel1.jpeg'">
        <span class="category-tag">${blog.category}</span>
      </div>
      <div class="card-content">
        <h2 class="card-title">${blog.title}</h2>
        <p class="card-description">${blog.content}</p>
        <div class="card-footer">
          <div class="author">
            <div class="author-avatar">
              <img src="${blog.profileImage}" alt="" onerror="this.src='../Images/userimage/men1.avif'">
            </div>
            <div class="author-info">
              <span class="author-name">${blog.author}</span>
              <span class="read-time">${blog.readTime} min read</span>
            </div>
          </div>
          <div class="interaction-buttons">
            <button class="interaction-button heart">
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button class="interaction-button">
              <svg viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </button>
            <button class="interaction-button">
              <svg viewBox="0 0 24 24">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    blog_container.appendChild(blog_card);

  }
});

// blog card detail page navigate
const blogs_container = document.querySelector('.blogs-container');
if (blogs_container) {
  blogs_container.addEventListener('click', (event) => {
    const card = event.target.closest('.blogs-card');
    if (card) {
      const blogId = card.dataset.id;
      if (blogId) {
        window.location.href = `../pages/blogDetail.html?id=${blogId}`;
      }
    }
  });
}


// responsive navarbar 
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-menu');
  const black_bg = document.querySelector('#black-bg');

  if (hamburger && mobile_menu && black_bg) {

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');

      if (mobile_menu.classList.contains('active')) {
        black_bg.style.opacity = '1';
        black_bg.style.visibility = 'visible';
      } else {
        black_bg.style.opacity = '0';
        black_bg.style.visibility = 'hidden';
      }
    });

    // close mobile when clicked to the linkss..
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
        black_bg.style.opacity = '0';
        black_bg.style.visibility = 'hidden';
      });
    });

    // close menu when click to the outside...
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) &&
        !mobile_menu.contains(e.target) &&
        mobile_menu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
        black_bg.style.opacity = '0';
        black_bg.style.visibility = 'hidden';
      }
    });
  }
});

// note taking feature
document.addEventListener('DOMContentLoaded', () => {
  const notes_btn = document.querySelector('.floating-notes-btn');
  const notes_panel = document.querySelector('.notes-panel');
  const close_btn = document.querySelector('.close-notes');
  const note_input = document.querySelector('.notes-input');
  const save_btn = document.querySelector('.save-note');
  const notes_list = document.querySelector('.notes-list');

  // take all notes
  let notes = JSON.parse(localStorage.getItem('blog_notes') || '[]');

  // add and remove notes
  notes_btn.addEventListener('click', () => {
    notes_panel.classList.add('active');
  });

  close_btn.addEventListener('click', () => {
    notes_panel.classList.remove('active');
  });

  // close panel
  document.addEventListener('click', (e) => {
    if (!notes_panel.contains(e.target) && !notes_btn.contains(e.target)) {
      notes_panel.classList.remove('active');
    }
  });

  // save note
  save_btn.addEventListener('click', () => {
    const note_text = note_input.value.trim();
    if (note_text) {
      const note = {
        id: Date.now(),
        text: note_text,
        date: new Date().toLocaleString(),
      };
      notes.unshift(note);
      localStorage.setItem('blog_notes', JSON.stringify(notes));
      note_input.value = '';
      render_notes();
    }
  });

  // key to save
  note_input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      save_btn.click();
    }
  });

  // delete note 
  function delete_note(id) {
    notes = notes.filter((note) => note.id !== id);
    localStorage.setItem('blog_notes', JSON.stringify(notes));
    render_notes();
  }

  // rennder notes
  function render_notes() {
    notes_list.innerHTML = notes
      .map(
        (note) => `
          <div class="note-item">
              <p class="note-text">${note.text}</p>
              <span class="note-date">${note.date}</span>
              <button class="delete-note" onclick="delete_note(${note.id})">×</button>
          </div>
      `
      )
      .join('');
  }

  // calling function
  render_notes();

  // make delete_note function global
  window.delete_note = delete_note;
});


