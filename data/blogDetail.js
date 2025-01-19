
const blogs = [
    {
        blog_id: 1,
        blog_image: "../Images/Blogs Images/Technology/first.jpg",
        blog_category: "Technology",
        blog_title: "The Future of AI in Content Creation",
        blog_content: "Artificial intelligence (AI) is transforming the content creation landscape by automating tasks, enhancing creativity, and delivering personalized user experiences. From generating articles to creating music and art, AI is expanding possibilities while raising ethical and legal questions about ownership and authenticity. The adoption of AI tools like GPT models, DALL-E, and automated video editors is accelerating content production while enabling creators to focus on storytelling and strategy. However, this raises concerns about intellectual property, deepfake misuse, and the impact on creative jobs. Balancing innovation with ethical considerations will be crucial for the future of AI-driven content creation...",
        keypoints: [
            { keypoint: "Automation", detail: "AI automates repetitive tasks, freeing up time for creative work." },
            { keypoint: "Enhanced Creativity", detail: "AI tools assist in generating new ideas and content." },
            { keypoint: "Personalization", detail: "AI delivers personalized content experiences to users." },
            { keypoint: "Ethical Concerns", detail: "Issues of ownership, authenticity, and deepfake misuse arise." }
        ],
        conclusion: "AI is revolutionizing content creation, but ethical considerations must be addressed to ensure a balanced and fair future.",
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
        keypoints: [
            { keypoint: "Transparency", detail: "Blockchain enhances transparency in various industries." },
            { keypoint: "Security", detail: "Blockchain provides secure data handling and transactions." },
            { keypoint: "Efficiency", detail: "Smart contracts automate processes, increasing efficiency." },
            { keypoint: "Versatility", detail: "Blockchain's potential extends to voting systems and identity verification." }
        ],
        conclusion: "Blockchain technology is transforming multiple industries, but challenges like scalability and energy consumption need to be addressed.",
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
        keypoints: [
            { keypoint: "Faster Speeds", detail: "5G offers significantly faster data speeds." },
            { keypoint: "Lower Latency", detail: "5G reduces latency, improving real-time communication." },
            { keypoint: "Greater Capacity", detail: "5G supports more connected devices simultaneously." },
            { keypoint: "New Opportunities", detail: "5G enables advancements in IoT, smart cities, and autonomous vehicles." }
        ],
        conclusion: "5G is revolutionizing connectivity, but infrastructure and security challenges must be addressed for widespread adoption.",
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
        keypoints: [
            { keypoint: "Unprecedented Power", detail: "Quantum computing offers computational power beyond classical computers." },
            { keypoint: "Complex Calculations", detail: "Quantum computers perform complex calculations at incredible speeds." },
            { keypoint: "Breakthroughs", detail: "Quantum computing could revolutionize industries like cryptography and drug discovery." },
            { keypoint: "Ongoing Research", detail: "Continued research and investment are crucial for realizing quantum computing's potential." }
        ],
        conclusion: "Quantum computing holds immense potential for various industries, but practical applications are still in development.",
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
        keypoints: [
            { keypoint: "AI-Driven Detection", detail: "AI enhances threat detection and response." },
            { keypoint: "Zero-Trust Architecture", detail: "Zero-trust models improve security by verifying every access request." },
            { keypoint: "Quantum Encryption", detail: "Quantum encryption offers advanced data protection." },
            { keypoint: "Proactive Measures", detail: "Businesses invest in threat hunting and employee training." }
        ],
        conclusion: "Staying ahead in cybersecurity requires continuous innovation and collaboration to address evolving threats.",
        user_name: "Lakshmi Devi",
        user_image: "../Images/userimage/women/women2.avif",
        blog_minutes_read: "7 min read",
    },
    {
        blog_id: 6,
        blog_image: "../Images/Blogs Images/Lifestyle/life1.avif",
        blog_category: "Lifestyle",
        blog_title: "Minimalism: Living with Less",
        blog_content: "Minimalism is more than just a trend; it's a lifestyle choice that emphasizes simplicity, decluttering, and intentional living. By focusing on what truly matters, minimalism promotes mental clarity, financial freedom, and overall well-being. This practice encourages people to let go of material possessions and focus on experiences, relationships, and personal growth. Minimalism is not about deprivation but about making room for what adds value to life. Discover how adopting minimalism can lead to a more fulfilling and balanced lifestyle by aligning your actions with your core values...",
        keypoints: [
            { keypoint: "Simplicity", detail: "Minimalism emphasizes simplicity and decluttering." },
            { keypoint: "Mental Clarity", detail: "Focusing on what truly matters promotes mental clarity." },
            { keypoint: "Financial Freedom", detail: "Letting go of material possessions can lead to financial freedom." },
            { keypoint: "Personal Growth", detail: "Minimalism encourages personal growth and intentional living." }
        ],
        conclusion: "Adopting minimalism can lead to a more fulfilling and balanced lifestyle by focusing on what truly matters.",
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
        keypoints: [
            { keypoint: "Meal Planning", detail: "Planning meals helps save money and ensure balanced nutrition." },
            { keypoint: "Smart Shopping", detail: "Buying in bulk and choosing seasonal produce can reduce costs." },
            { keypoint: "Home Cooking", detail: "Preparing meals at home is cost-effective and nutritious." },
            { keypoint: "Affordable Superfoods", detail: "Incorporating affordable superfoods enhances diet quality." }
        ],
        conclusion: "Healthy eating on a budget is achievable with smart planning, shopping, and cooking strategies.",
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
        keypoints: [
            { keypoint: "Mindfulness Practices", detail: "Incorporate meditation and journaling for mental clarity." },
            { keypoint: "Physical Activities", detail: "Engage in yoga or walking to boost energy levels." },
            { keypoint: "Sleep Optimization", detail: "Optimize sleep for better focus and productivity." },
            { keypoint: "Screen Time Limitation", detail: "Limit screen time in the morning to start the day right." }
        ],
        conclusion: "A well-planned morning routine can enhance productivity and overall well-being by incorporating mindfulness, physical activities, and healthy habits.",
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
        keypoints: [
            { keypoint: "Healthy Boundaries", detail: "Establishing healthy boundaries is essential for self-care." },
            { keypoint: "Mindfulness Practices", detail: "Practicing mindfulness can reduce stress and improve well-being." },
            { keypoint: "Engaging in Hobbies", detail: "Hobbies provide a creative outlet and relaxation." },
            { keypoint: "Professional Help", detail: "Seeking professional help when needed is a key aspect of self-care." }
        ],
        conclusion: "Prioritizing self-care through healthy boundaries, mindfulness, hobbies, and professional help can lead to a more balanced and fulfilling life.",
        user_name: "Ankit Mehta",
        user_image: "../Images/userimage/men/men5.avif",
        blog_minutes_read: "4 min read",
    },
    {
        blog_id: 10,
        blog_image: "../Images/Blogs Images/Business/business1.jpeg",
        blog_category: "Business",
        blog_title: "Startups Thriving in the Post-Pandemic World",
        blog_content: "The pandemic has reshaped the business landscape, giving rise to innovative startups that leverage digital transformation, sustainability, and remote work to thrive in the new normal. Entrepreneurs are capitalizing on emerging trends like e-commerce, telehealth, and green technology to address changing consumer needs. Additionally, the rise of hybrid work models and digital marketing strategies has enabled startups to scale rapidly and compete globally. Discover inspiring stories of startups that have turned challenges into opportunities and learn about the key factors driving their success...",
        keypoints: [
            { keypoint: "Digital Transformation", detail: "Startups leverage digital transformation to thrive." },
            { keypoint: "Sustainability", detail: "Sustainable practices are key to post-pandemic success." },
            { keypoint: "Remote Work", detail: "Remote work models enable flexibility and growth." },
            { keypoint: "Emerging Trends", detail: "E-commerce, telehealth, and green technology are driving success." }
        ],
        conclusion: "Innovative startups are thriving in the post-pandemic world by leveraging digital transformation, sustainability, and remote work.",
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
        keypoints: [
            { keypoint: "Improved Logistics", detail: "Enhanced logistics enable e-commerce in rural areas." },
            { keypoint: "Internet Penetration", detail: "Increased internet access supports online shopping." },
            { keypoint: "Small Business Growth", detail: "Local artisans and small businesses benefit from e-commerce platforms." },
            { keypoint: "Government Initiatives", detail: "Government and private investments accelerate e-commerce adoption." }
        ],
        conclusion: "E-commerce is transforming rural areas by providing new opportunities for small businesses and consumers, supported by improved logistics and internet access.",
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
        keypoints: [
            { keypoint: "Empathy", detail: "Empathy is a key trait for modern leaders." },
            { keypoint: "Adaptability", detail: "Leaders must be adaptable to navigate change." },
            { keypoint: "Inclusivity", detail: "Fostering diverse and inclusive environments is crucial." },
            { keypoint: "Mental Health Awareness", detail: "Prioritizing employee well-being is reshaping leadership." }
        ],
        conclusion: "Effective leadership in 2025 emphasizes empathy, adaptability, inclusivity, and mental health awareness to drive organizational success.",
        user_name: "Amit Verma",
        user_image: "../Images/userimage/men/men7.avif",
        blog_minutes_read: "4 min read",
    },
    {
        blog_id: 13,
        blog_image: "../Images/Blogs Images/Travel/travel1.jpeg",
        blog_category: "Travel",
        blog_title: "Hidden Gems: Underrated Travel Destinations",
        blog_content: "While popular destinations attract the masses, hidden gems offer unique experiences, tranquility, and a chance to connect with nature and local cultures. Discover some of the most underrated travel destinations worldwide, from remote islands to untouched forests. Learn about the best times to visit, activities to try, and tips for sustainable travel to ensure these hidden gems are preserved for future generations. Embrace the joy of exploring lesser-known locations that offer an authentic and rewarding travel experience...",
        keypoints: [
            { keypoint: "Unique Experiences", detail: "Hidden gems offer unique and tranquil experiences." },
            { keypoint: "Connection with Nature", detail: "Underrated destinations provide opportunities to connect with nature." },
            { keypoint: "Sustainable Travel", detail: "Tips for sustainable travel to preserve hidden gems." },
            { keypoint: "Local Cultures", detail: "Explore and respect local cultures in lesser-known destinations." }
        ],
        conclusion: "Exploring hidden gems offers unique and rewarding travel experiences while promoting sustainable practices and cultural appreciation.",
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
        keypoints: [
            { keypoint: "Eco-Friendly Accommodations", detail: "Choose eco-friendly accommodations to reduce environmental impact." },
            { keypoint: "Reduce Single-Use Plastics", detail: "Minimize the use of single-use plastics while traveling." },
            { keypoint: "Respect Local Cultures", detail: "Respect and support local cultures and communities." },
            { keypoint: "Conservation Efforts", detail: "Contribute to conservation efforts to protect natural resources." }
        ],
        conclusion: "Sustainable travel practices can minimize environmental impact and support local communities, ensuring travel remains a positive force.",
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
        keypoints: [
            { keypoint: "Diverse Adventures", detail: "India offers a wide range of adventure activities." },
            { keypoint: "Best Seasons", detail: "Learn about the best seasons to visit adventure destinations." },
            { keypoint: "Safety Tips", detail: "Important safety tips for adventure activities." },
            { keypoint: "Preparation", detail: "How to prepare for your next adventure." }
        ],
        conclusion: "India's diverse adventure destinations offer thrilling experiences and unforgettable memories for adventure enthusiasts.",
        user_name: "Rohan Das",
        user_image: "../Images/userimage/men/men8.avif",
        blog_minutes_read: "4 min read",
    },
    {
        blog_id: 16,
        blog_image: "../Images/Blogs Images/Health/health1.jpeg",
        blog_category: "Health",
        blog_title: "The Importance of Mental Health Awareness",
        blog_content: "Mental health is as important as physical health. Raising awareness, breaking the stigma, and providing resources for mental well-being are essential steps toward a healthier and happier society. Learn about the signs of mental health challenges, available support systems, and the role of community and family in fostering mental wellness. Discover the benefits of therapy, mindfulness practices, and stress management techniques that can improve overall mental health. Together, we can create a more supportive and understanding environment for mental health...",
        keypoints: [
            { keypoint: "Awareness", detail: "Raising awareness about mental health is crucial." },
            { keypoint: "Breaking Stigma", detail: "Breaking the stigma surrounding mental health challenges." },
            { keypoint: "Support Systems", detail: "The role of community and family in mental wellness." },
            { keypoint: "Therapy and Mindfulness", detail: "Benefits of therapy and mindfulness practices." }
        ],
        conclusion: "Raising mental health awareness, breaking stigma, and providing support can lead to a healthier and happier society.",
        user_name: "Manoj Tiwari",
        user_image: "../Images/userimage/men/men9.avif",
        blog_minutes_read: "4 min read",
    },
    {
        blog_id: 17,
        blog_image: "../Images/Blogs Images/Health/health2.jpg",
        blog_category: "Health",
        blog_title: "Nutrition for a Healthy Lifestyle",
        blog_content: "Good nutrition is the cornerstone of a healthy lifestyle. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides the essential nutrients your body needs to function at its best. Learn how to create meal plans, understand portion control, and identify superfoods that can enhance energy levels and boost immunity. This blog also explores the importance of hydration and the role of micronutrients in preventing chronic diseases. Start your journey toward a healthier you by embracing mindful eating and sustainable dietary habits...",
        keypoints: [
            { keypoint: "Balanced Diet", detail: "A balanced diet provides essential nutrients for optimal health." },
            { keypoint: "Meal Planning", detail: "Creating meal plans and understanding portion control." },
            { keypoint: "Superfoods", detail: "Incorporating superfoods to enhance energy and immunity." },
            { keypoint: "Hydration", detail: "The importance of hydration and micronutrients." }
        ],
        conclusion: "Good nutrition through a balanced diet, meal planning, and mindful eating is essential for a healthy lifestyle.",
        user_name: "Ritika Sharma",
        user_image: "../Images/userimage/women/women8.avif",
        blog_minutes_read: "6 min read",
    },
    {
        blog_id: 18,
        blog_image: "../Images/Blogs Images/Health/health3.jpeg",
        blog_category: "Health",
        blog_title: "The Science of Sleep and Its Benefits",
        blog_content: "Sleep is a vital component of overall health and well-being. Quality sleep helps repair and rejuvenate the body, enhances cognitive function, and supports emotional balance. This blog delves into the science of sleep, explaining the different sleep stages and their impact on health. Learn tips to improve sleep hygiene, such as establishing a regular sleep schedule, minimizing screen time before bed, and creating a comfortable sleep environment. Discover how sufficient sleep can improve productivity, reduce stress, and lower the risk of chronic illnesses...",
        keypoints: [
            { keypoint: "Sleep Stages", detail: "Understanding the different stages of sleep and their impact on health." },
            { keypoint: "Sleep Hygiene", detail: "Tips to improve sleep hygiene for better quality sleep." },
            { keypoint: "Productivity", detail: "How sufficient sleep can enhance productivity and reduce stress." },
            { keypoint: "Chronic Illnesses", detail: "The role of sleep in lowering the risk of chronic illnesses." }
        ],
        conclusion: "Quality sleep is essential for overall health, productivity, and well-being, and can be improved through good sleep hygiene practices.",
        user_name: "Aditya Verma",
        user_image: "../Images/userimage/men/men10.avif",
        blog_minutes_read: "5 min read",
    },
    {
        blog_id: 19,
        blog_image: "../Images/Blogs Images/Culture/culture1.jpeg",
        blog_category: "Culture",
        blog_title: "The Rich Heritage of Indian Festivals",
        blog_content: "India is a land of diverse cultures, and its festivals reflect the country's vibrant traditions and unity in diversity. From Diwali, the festival of lights, to Holi, the festival of colors, each celebration carries unique significance and history. This blog explores the cultural importance of Indian festivals, their rituals, and the values they promote. Learn how these festivals bring communities together, fostering harmony and joy. Whether it’s the grandeur of Durga Puja or the serenity of Onam, Indian festivals showcase the beauty of tradition and togetherness...",
        keypoints: [
            { keypoint: "Cultural Significance", detail: "Indian festivals reflect the country's vibrant traditions and unity in diversity." },
            { keypoint: "Rituals", detail: "Each festival carries unique rituals and history." },
            { keypoint: "Community Harmony", detail: "Festivals bring communities together, fostering harmony and joy." },
            { keypoint: "Tradition and Togetherness", detail: "Indian festivals showcase the beauty of tradition and togetherness." }
        ],
        conclusion: "Indian festivals reflect the country's rich heritage, promoting cultural values, community harmony, and the beauty of tradition.",
        user_name: "Priya Singh",
        user_image: "../Images/userimage/women/women9.avif",
        blog_minutes_read: "7 min read",
    },
    {
        blog_id: 20,
        blog_image: "../Images/Blogs Images/Culture/culture2.jpeg",
        blog_category: "Culture",
        blog_title: "Exploring the World Through Traditional Attire",
        blog_content: "Traditional clothing is more than just fabric; it is a reflection of history, identity, and cultural pride. From Japan's elegant kimonos to Africa's vibrant dashikis, traditional attire tells stories of heritage and community values. This blog dives into the significance of traditional clothing around the world and how it continues to inspire modern fashion trends. Learn about the craftsmanship, symbolism, and regional diversity in traditional garments, and discover why preserving these customs is essential for maintaining cultural identity...",
        keypoints: [
            { keypoint: "Cultural Reflection", detail: "Traditional clothing reflects history, identity, and cultural pride." },
            { keypoint: "Heritage and Values", detail: "Traditional attire tells stories of heritage and community values." },
            { keypoint: "Modern Inspiration", detail: "Traditional clothing continues to inspire modern fashion trends." },
            { keypoint: "Preservation", detail: "Preserving traditional attire is essential for maintaining cultural identity." }
        ],
        conclusion: "Traditional clothing reflects cultural heritage and values, inspiring modern fashion trends and emphasizing the importance of preservation.",
        user_name: "Anjali Mehta",
        user_image: "../Images/userimage/women/women10.avif",
        blog_minutes_read: "6 min read",
    }
];



// loading the blog.
document.addEventListener('DOMContentLoaded', () => {

    const blogDetailsContainer = document.getElementById("blog-detail");

    if (blogDetailsContainer) {

        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get("id");

        if (!blogId) {
            blogDetailsContainer.innerHTML = '<p class="error">No blog ID provided.</p>';
            return;
        }


        const blog = blogs.find(b => b.blog_id == blogId);

        if (blog) {

            blogDetailsContainer.innerHTML = `
                <div class="blog-header">
                    <img src="${blog.blog_image}" alt="${blog.blog_title}" class="blog-main-image">
                    <span class="category-tag">${blog.blog_category}</span>
                </div>
                
                <div class="blog-content">
                    <h1 class="blog-title">${blog.blog_title}</h1>
                    
                    <div class="author-info">
                        <img src="${blog.user_image}" alt="blog-image" class="author-image">
                        <div class="author-details">
                            <span  class="author-names">${blog.user_name}</span>
                            <span class="read-time">${blog.blog_minutes_read}</span>
                        </div>
                    </div>
                    
                    <div class="blog-text">
                        ${blog.blog_content}
                        <div class="blog-more-content">
                           <div class="keypoints-section">
                            <h3>Key Takeaways</h3>
                           <div class="keypoints-grid">
                            ${blog.keypoints.map(kp => `
                                <div class="keypoint">
                                    <h4>${kp.keypoint}</h4>
                                    <p>${kp.detail}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="conclusion-section">
                        <h3>Conclusion</h3>
                        <p>${blog.conclusion}</p>
                    </div>
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
            `;
        } else {
            blogDetailsContainer.innerHTML = '<p class="error">Blog post not found.</p>';
        }
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


