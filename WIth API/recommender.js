import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = "AIzaSyBLFXyxwRNYR8EcJZi7jbpXRJfdDw68Tc0";


const genAI = new GoogleGenerativeAI(API_KEY);

const articles = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        content: "JavaScript operates on the client side, which means it runs directly in the user's web browser without the need for server-side processing. Key features of JavaScript include its event-driven capabilities, which allow developers to create interactive user interfaces, and its asynchronous programming model, which enables tasks like fetching data from servers without blocking the user interface. Modern JavaScript frameworks and libraries, such as Angular, Vue.js, and Node.js, have expanded its functionality, allowing developers to build complex single-page applications, server-side applications, and real-time applications. Understanding JavaScript is fundamental for web development, as it integrates with HTML and CSS to create rich, user-friendly web experiences."
    },
    {
        id: 2,
        title: "Python for Data Science",
        content: "Python has become a leading language in the field of data science due to its simplicity, readability, and a rich ecosystem of libraries and frameworks. Its clean syntax makes it accessible for both beginners and experienced programmers. Key libraries in Python for data science include NumPy for numerical computations, Pandas for data manipulation and analysis, and Matplotlib and Seaborn for data visualization. Scikit-learn provides a range of tools for implementing machine learning algorithms, while TensorFlow and PyTorch are popular frameworks for deep learning. Python’s versatility allows it to handle various data science tasks, from data cleaning and exploration to advanced statistical analysis and predictive modeling. Its strong community support and extensive documentation further contribute to its popularity in the data science domain. As a data scientist, mastering Python can enhance your ability to analyze data, build models, and extract actionable insights from complex datasets."
    },
    {
        id: 3,
        title: "Machine Learning Basics",
        content: "Machine learning is a branch of artificial intelligence (AI) that involves training algorithms to recognize patterns and make predictions based on data. At its core, machine learning uses statistical techniques to enable computers to learn from and make decisions based on data. There are three primary types of machine learning: supervised learning, unsupervised learning, and reinforcement learning. In supervised learning, algorithms are trained on labeled data, meaning the input data is paired with correct output values, allowing the model to learn from these examples. Unsupervised learning, on the other hand, deals with unlabeled data and is used to find hidden patterns or intrinsic structures in the data, such as clustering similar data points together. Reinforcement learning involves training an agent to make a sequence of decisions by rewarding desired behaviors and penalizing undesired ones. Key algorithms in machine learning include linear regression, decision trees, support vector machines, and neural networks. Understanding these basics helps in applying machine learning techniques to solve real-world problems, such as predicting customer behavior, detecting fraud, and optimizing business processes."
    },
    {
        id: 4,
        title: "Web Development with React",
        content: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where a dynamic and responsive user experience is essential. React allows developers to build complex UIs from small, reusable components, which helps in managing the user interface efficiently and maintaining a clean codebase. One of the core concepts in React is the virtual DOM, which improves performance by updating only the parts of the user interface that have changed rather than re-rendering the entire page. React uses a declarative approach to define UI components, making the code more predictable and easier to debug. It also supports one-way data binding, where data flows in a single direction from parent to child components, enhancing control and consistency. React can be extended with various tools and libraries, such as React Router for navigation and Redux for state management. Additionally, React’s ecosystem includes tools like Create React App for scaffolding new projects and Next.js for server-side rendering. Mastering React can significantly enhance your ability to develop modern, interactive web applications."
    },
    {
        id: 5,
        title: "C++ Programming Guide",
        content: "C++ is a powerful, high-performance programming language known for its versatility and efficiency. It extends the capabilities of C with object-oriented programming (OOP) features, such as classes and inheritance, which allow for the creation of modular and reusable code. C++ supports both procedural and object-oriented programming paradigms, making it suitable for a wide range of applications, from system software to game development and high-performance computing. Key features of C++ include its support for low-level memory manipulation, which enables fine-grained control over system resources, and its Standard Template Library (STL), which provides a collection of useful algorithms and data structures like vectors, lists, and maps. C++ is often used in scenarios where performance is critical, such as in real-time systems, embedded systems, and large-scale software projects. Understanding C++ involves mastering concepts such as pointers, dynamic memory allocation, and complex data structures. As a C++ programmer, you can leverage its capabilities to build efficient and scalable applications, though it requires a strong understanding of both the language and underlying system architecture."
    },
    {
        id: 6,
        title: "The Fundamentals of Personal Finance",
        content: "Personal finance involves managing your money, including budgeting, saving, investing, and planning for future financial goals. It starts with understanding your income and expenses. Creating a budget helps you track where your money is going and identify areas where you can save. Emergency funds are crucial to cover unexpected expenses without derailing your financial stability. Investments such as stocks, bonds, and real estate can grow your wealth over time, but they come with varying levels of risk. Retirement planning is essential to ensure you have sufficient resources in your later years, often involving contributions to retirement accounts like 401(k)s or IRAs. Understanding credit scores and debt management also plays a vital role in maintaining financial health. Overall, personal finance is about making informed decisions to secure and enhance your financial future."
    },
    {
        id: 7,
        title: "Effective Business Strategies for Startups",
        content: "Starting a business requires a well-thought-out strategy to ensure long-term success. Begin with a solid business plan that outlines your mission, vision, target market, competitive analysis, and financial projections. Identifying a unique value proposition can set your startup apart from competitors. Implementing effective marketing strategies, such as digital marketing, social media engagement, and content creation, can attract and retain customers. Building a strong brand identity helps establish trust and credibility in the market. It's also crucial to develop a scalable business model that can adapt to changing market conditions. Financial management, including budgeting and cash flow management, is key to maintaining operational stability. Networking and forming strategic partnerships can provide valuable resources and opportunities for growth. Continuous assessment and iteration of your strategies based on performance metrics will help refine your approach and drive success."
    },
    {
        id: 8,
        title: "Understanding Cryptocurrency and Blockchain Technology",
        content: "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security, making it difficult to counterfeit. Bitcoin, introduced in 2009, was the first decentralized cryptocurrency and remains the most well-known. Cryptocurrencies operate on a technology called blockchain, which is a distributed ledger that records all transactions across a network of computers. This technology ensures transparency and security by allowing all participants to view the transaction history and validate transactions without the need for a central authority. Blockchain has applications beyond cryptocurrency, including supply chain management, healthcare, and voting systems. Despite the potential benefits, cryptocurrencies face challenges such as regulatory uncertainty, market volatility, and security concerns. Understanding these factors is crucial for anyone interested in investing or working with cryptocurrencies and blockchain technology."
    },
    {
        id: 9,
        title: "The Impact of Artificial Intelligence on Modern Business",
        content: "Artificial Intelligence (AI) is transforming various aspects of business operations, offering both opportunities and challenges. AI technologies, including machine learning, natural language processing, and robotics, are being integrated into business processes to improve efficiency, enhance customer experiences, and drive innovation. In customer service, AI-powered chatbots and virtual assistants provide 24/7 support and handle routine inquiries, freeing up human agents for more complex tasks. AI algorithms analyze vast amounts of data to generate insights, helping businesses make informed decisions and predict market trends. Automation of repetitive tasks reduces operational costs and increases productivity. However, implementing AI also poses challenges such as data privacy concerns, the need for substantial investment, and the potential for job displacement. Businesses must carefully consider these factors and develop strategies to effectively leverage AI while addressing associated risks."
    },
    {
        id: 10,
        title: "Navigating Global Trade and Economics",
        content: "Global trade involves the exchange of goods and services across international borders, significantly impacting economies worldwide. It allows countries to access products that are not available domestically and benefits from specialization and comparative advantage. Trade agreements and treaties, such as NAFTA or the EU single market, facilitate smoother transactions between nations by reducing tariffs and trade barriers. Economic factors, including exchange rates, inflation, and political stability, influence global trade dynamics. Additionally, global trade policies and regulations, such as import quotas or export subsidies, can impact trade flows and economic relations between countries. Companies engaging in international trade must understand these factors to navigate the complexities of global markets effectively. Adapting to shifting economic conditions and geopolitical events is crucial for maintaining competitiveness and achieving sustainable growth in the global arena."
    },
    {
        id: 11,
        title: "The Importance of Financial Literacy for Young Adults",
        content: "Financial literacy is essential for young adults as they transition into independence. Understanding the basics of budgeting, saving, and investing can help them avoid common financial pitfalls. Learning how to manage debt, particularly student loans and credit card debt, is crucial. Building good credit habits early on can have long-term benefits, such as qualifying for better loan terms and lower interest rates. Young adults should also be aware of the importance of having health and auto insurance to protect themselves from unforeseen expenses. Educating themselves on various investment options can help them start building wealth early. Overall, financial literacy empowers young adults to make informed decisions and secure their financial future."
    },
    {
        id: 12,
        title: "Key Elements of a Successful Marketing Campaign",
        content: "A successful marketing campaign requires careful planning and execution. Start by identifying your target audience and understanding their needs and preferences. Develop clear and achievable goals for your campaign, whether it's increasing brand awareness, generating leads, or boosting sales. Create compelling and consistent messaging that resonates with your audience across all marketing channels, including social media, email, and advertising. Utilize data and analytics to measure the performance of your campaign and make necessary adjustments. Effective use of storytelling and visuals can capture your audience's attention and create a memorable impression. Collaboration between different departments, such as sales and customer service, can ensure a cohesive approach. Finally, post-campaign analysis helps in understanding what worked well and what can be improved for future campaigns."
    },
    {
        id: 13,
        title: "The Role of Leadership in Organizational Success",
        content: "Effective leadership is crucial for the success of any organization. Leaders set the vision and direction for the company, motivating and guiding employees towards achieving common goals. Good leaders communicate clearly, listen to feedback, and make informed decisions. They foster a positive work environment by promoting collaboration, innovation, and professional development. Ethical leadership builds trust and credibility, both within the organization and with external stakeholders. In times of crisis, strong leadership helps navigate challenges and maintain stability. Leaders must also be adaptable, willing to change strategies in response to evolving market conditions. By inspiring and empowering their teams, leaders can drive organizational growth and success."
    },
    {
        id: 14,
        title: "Sustainable Practices in Modern Agriculture",
        content: "Sustainable agriculture focuses on meeting current food needs without compromising the ability of future generations to meet theirs. It involves practices that preserve environmental health, economic profitability, and social equity. Crop rotation, reduced tillage, and integrated pest management are techniques that maintain soil health and reduce reliance on chemical inputs. Precision agriculture, which uses technology to optimize field-level management, can improve efficiency and sustainability. Water conservation methods, such as drip irrigation, help preserve this vital resource. Additionally, sustainable agriculture often includes supporting local food systems and fair labor practices. By adopting sustainable practices, farmers can improve resilience to climate change, enhance biodiversity, and contribute to a healthier planet."
    },
    {
        id: 15,
        title: "The Evolution of E-Commerce and Its Impact on Retail",
        content: "E-commerce has revolutionized the retail industry, offering consumers convenience and access to a wide range of products from around the world. The rise of online shopping platforms, such as Amazon and Alibaba, has transformed traditional retail models. E-commerce allows businesses to reach a global audience, reduce operational costs, and personalize customer experiences through data analytics. The integration of technologies like artificial intelligence, augmented reality, and mobile payment systems enhances the shopping experience. However, e-commerce also poses challenges, such as increased competition, the need for efficient logistics, and concerns over data privacy and cybersecurity. Brick-and-mortar stores are adapting by incorporating online elements, such as click-and-collect services, to stay competitive. The ongoing evolution of e-commerce continues to shape the future of retail."
    },
    {
        id: 16,
        title: "The Role of Sustainability in Modern Business Practices",
        content: "Sustainability has become a critical component of modern business practices, as companies recognize the importance of environmental and social responsibility. Integrating sustainable practices into operations not only benefits the planet but also enhances brand reputation, improves efficiency, and drives long-term profitability. Businesses can adopt sustainable strategies such as reducing waste, conserving resources, and investing in renewable energy. Furthermore, companies can prioritize social sustainability by promoting diversity, ensuring fair labor practices, and engaging with local communities. By embracing sustainability, businesses can mitigate risks, capitalize on new opportunities, and contribute to a better future for all stakeholders."
      },
      {
        id: 17,
        title: "The Power of Data-Driven Decision Making in Business",
        content: "Data-driven decision making has revolutionized the way businesses operate, enabling them to make informed, strategic choices. By leveraging data analytics and business intelligence tools, companies can gain valuable insights into customer behavior, market trends, and operational performance. Data analysis helps identify areas of improvement, optimize processes, and measure the effectiveness of initiatives. Moreover, data-driven decision making fosters a culture of transparency and accountability, allowing businesses to track progress, adjust strategies, and drive continuous improvement. To harness the full potential of data, businesses must develop a data-driven mindset, invest in relevant technologies, and cultivate a skilled workforce capable of interpreting and acting upon data insights."
      },
      {
        id: 18,
        title: "Unlocking the Potential of E-commerce and Digital Marketing",
        content: "E-commerce and digital marketing have transformed the retail landscape, offering unparalleled opportunities for businesses to reach and engage with customers. A well-designed e-commerce platform provides a seamless shopping experience, while effective digital marketing strategies drive traffic, boost conversions, and foster brand loyalty. Key tactics include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, and content marketing. To succeed in e-commerce, businesses must prioritize user experience, develop a robust online presence, and continually adapt to evolving consumer behaviors and technological advancements. By leveraging the power of e-commerce and digital marketing, businesses can expand their customer base, increase revenue, and maintain a competitive edge in the market."
      },
      {
        id: 19,
        title: "The Principles of Effective Visual Branding",
        content: "Visual branding is a critical aspect of establishing a strong brand identity. A well-designed visual brand can convey a company's values, personality, and message, while also differentiating it from competitors. Effective visual branding involves creating a cohesive visual language that includes a logo, color palette, typography, and imagery. Consistency is key, as it helps to build recognition and trust with the target audience. By understanding the principles of visual branding, businesses can create a strong visual identity that resonates with their audience and sets them apart in a crowded market."
      },
      {
        id: 20,
        title: "The Impact of Color Psychology on Graphic Design",
        content: "Color psychology plays a significant role in graphic design, as different colors can evoke emotions, convey messages, and influence user behavior. Understanding the psychology of color can help designers make informed decisions about color choices, ensuring that their designs effectively communicate the intended message. For example, red can stimulate feelings of energy and urgency, while blue can convey trust and stability. By harnessing the power of color psychology, designers can create designs that resonate with their target audience, enhance user experience, and drive desired outcomes."
      },
      {
        id: 21,
        title: "The Role of Typography in Graphic Design",
        content: "Typography is a fundamental element of graphic design, serving as a critical component of visual communication. Effective typography can convey meaning, create mood, and enhance the overall aesthetic of a design. Designers can choose from a vast array of fonts, each with its unique characteristics, to create a visual hierarchy, add emphasis, and guide the viewer's eye through the design. By understanding the principles of typography, designers can create designs that are readable, engaging, and communicating the intended message."
      },
      {
        id: 22,
        title: "The Art of Composition in Graphic Design",
        content: "Composition is the foundation of graphic design, as it refers to the arrangement of visual elements within a design. Effective composition can create balance, harmony, and visual flow, while also guiding the viewer's eye through the design. Designers can employ various composition techniques, such as symmetry, asymmetry, and hierarchy, to create a visually appealing design. By understanding the principles of composition, designers can create designs that are cohesive, engaging, and effective in communicating the intended message."
      },
      {
        id: 23,
        title: "Strategies for Effective Time Management",
        content: "Effective time management is essential for achieving personal and professional goals. Start by setting clear and specific objectives. Prioritize tasks based on their importance and deadlines, and break larger projects into manageable steps. Use tools like calendars, planners, and task management apps to organize your schedule. Avoid multitasking, as it can reduce productivity and increase stress. Allocate specific time slots for focused work, and take regular breaks to avoid burnout. Learn to delegate tasks when possible and say no to non-essential commitments. Reflect on your progress regularly and adjust your strategies as needed. By managing time effectively, you can enhance productivity, reduce stress, and achieve a better work-life balance."
    },
    {
        id: 24,
        title: "The Benefits of Regular Exercise for Mental Health",
        content: "Regular exercise is not only beneficial for physical health but also has a significant positive impact on mental health. Physical activity releases endorphins, which are natural mood lifters. Exercise can reduce symptoms of anxiety and depression, improve sleep quality, and boost self-esteem. It also enhances cognitive function, helping with focus, memory, and problem-solving skills. Group activities, like team sports or fitness classes, provide social interaction and support, which are vital for mental well-being. Incorporating regular exercise into your routine can help manage stress and improve overall mental health. Aim for at least 30 minutes of moderate exercise most days of the week to reap these benefits."
    },
    {
        id: 25,
        title: "Advancements in Renewable Energy Technologies",
        content: "Renewable energy technologies have advanced significantly, offering sustainable alternatives to fossil fuels. Solar power has become more efficient and affordable, with innovations in photovoltaic cells and energy storage systems. Wind energy is harnessed through advanced turbines that can operate in a wider range of conditions. Hydroelectric power, including small-scale and micro-hydro systems, provides reliable energy in suitable locations. Biomass and bioenergy convert organic materials into renewable fuel sources. Geothermal energy taps into the Earth's heat for power generation and direct heating applications. These technologies reduce greenhouse gas emissions and dependence on finite resources. Continued investment and research in renewable energy are crucial for addressing climate change and achieving energy security."
    },
    {
        id: 26,
        title: "The Role of Digital Marketing in Business Growth",
        content: "Digital marketing is a critical component of modern business growth. It encompasses various strategies, including search engine optimization (SEO), content marketing, social media marketing, email marketing, and pay-per-click advertising. SEO improves a website's visibility on search engines, driving organic traffic. Content marketing involves creating valuable and relevant content to attract and engage customers. Social media platforms enable businesses to connect with their audience, build brand awareness, and foster customer loyalty. Email marketing provides direct communication with customers, offering personalized promotions and updates. Pay-per-click advertising targets specific demographics, increasing the chances of conversion. Analyzing digital marketing metrics helps refine strategies and improve ROI. By leveraging digital marketing, businesses can expand their reach, enhance customer engagement, and drive sales."
    },
    {
        id: 27,
        title: "Cybersecurity Best Practices for Individuals and Businesses",
        content: "Cybersecurity is crucial in today's digital age, protecting both individuals and businesses from cyber threats. For individuals, best practices include using strong, unique passwords for different accounts and enabling two-factor authentication. Regularly updating software and avoiding suspicious links or downloads can prevent malware infections. Businesses should implement robust security protocols, such as firewalls, encryption, and intrusion detection systems. Employee training on recognizing phishing attempts and practicing safe online behavior is essential. Regular security audits and vulnerability assessments help identify and mitigate risks. Developing an incident response plan ensures quick action in the event of a breach. By adopting these best practices, individuals and businesses can safeguard their digital assets and maintain data privacy."
    },
    {
        id: 28,
        title: "The Importance of Diversity and Inclusion in the Workplace",
        content: "Diversity and inclusion are critical components of a thriving workplace, as they bring together individuals with different backgrounds, experiences, and perspectives. This leads to increased creativity, improved problem-solving, and enhanced collaboration. Moreover, a diverse and inclusive workplace can help to foster a positive work environment, boost employee morale, and reduce turnover rates. By promoting diversity and inclusion, organizations can attract and retain top talent, improve their reputation, and stay competitive in the market. Effective strategies for promoting diversity and inclusion include training programs, mentorship initiatives, and diversity metrics."
      },
      {
        id: 29,
        title: "Effective Strategies for Talent Acquisition and Retention",
        content: "Attracting and retaining top talent is crucial for organizations to stay competitive in today's fast-paced business environment. Effective talent acquisition strategies include social media recruitment, employee referrals, and candidate sourcing. Once talent is acquired, organizations must focus on retention strategies such as career development, training and development programs, and recognition and rewards. Moreover, creating a positive work environment that supports work-life balance, open communication, and growth opportunities can help to foster employee loyalty and reduce turnover rates. By understanding the latest trends and best practices in talent acquisition and retention, HR professionals can play a critical role in driving business success."
      },
      {
        id: 30,
        title: "The Role of Performance Management in Employee Development",
        content: "Performance management is a critical aspect of employee development, as it helps to align individual goals with organizational objectives. Effective performance management involves setting clear expectations, providing regular feedback, and evaluating employee performance. This process helps to identify areas of strength and weakness, and provides an opportunity to develop employees through training, coaching, and mentoring. Moreover, performance management can help to drive engagement, motivation, and accountability, as employees understand their role in achieving organizational goals. By leveraging performance management best practices, organizations can create a high-performing workforce that is equipped to drive business success."
      },
      {
        id: 31,
        title: "The Evolution of the CEO Role: Trends and Expectations",
        content: "The role of the CEO is undergoing significant changes, driven by shifting market conditions, technological advancements, and changing stakeholder expectations. Today's CEOs must be adaptable, agile, and able to navigate complex global environments. They must also prioritize sustainability, diversity, and social responsibility, while maintaining a focus on profitability and growth. Effective CEOs must be able to communicate effectively with diverse stakeholders, foster a culture of innovation, and make informed decisions that balance short-term needs with long-term strategic objectives. By understanding the evolving nature of the CEO role, leaders can better prepare themselves for the challenges and opportunities ahead."
      },
      {
        id: 32,
        title: "The Impact of CEO Leadership Style on Organizational Culture",
        content: "A CEO's leadership style has a profound impact on an organization's culture, influencing everything from employee engagement to customer satisfaction. Transformational leaders inspire and motivate their teams, fostering a culture of innovation and experimentation. Servant-leaders prioritize the needs of their employees and stakeholders, creating a culture of trust and collaboration. By contrast, autocratic leaders can stifle creativity and undermine morale. Effective CEOs recognize the importance of their leadership style and strive to create a culture that is supportive, inclusive, and empowering. By doing so, they can drive business success and leave a lasting legacy."
      },
      {
        id: 33,
        title: "CEO Succession Planning: Strategies for a Smooth Transition",
        content: "CEO succession planning is a critical process that ensures the continued success and stability of an organization. Effective succession planning involves identifying and developing internal talent, creating a comprehensive transition plan, and establishing clear expectations for the new CEO. It also requires a deep understanding of the organization's culture, values, and strategic objectives. By engaging in proactive succession planning, boards and CEOs can mitigate the risks associated with leadership transitions, maintain stakeholder confidence, and ensure the long-term sustainability of the organization."
      }, 
    ];

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser)

function preprocessText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
}


function calculateTfIdf(term, doc, allDocs) {
    const tf = doc.filter(word => word === term).length / doc.length;
    const idf = Math.log(allDocs.length / (1 + allDocs.filter(d => d.includes(term)).length));
    return tf * idf;
}

function calculateTfIdfVector(doc, allDocs, uniqueTerms) {
    return uniqueTerms.map(term => calculateTfIdf(term, doc, allDocs));
}


function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
    const magnitude1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitude1 * magnitude2);
}


const processedArticles = articles.map(article => ({
    ...article,
    processedContent: preprocessText(article.content)
}));


const uniqueTerms = [...new Set(processedArticles.flatMap(article => article.processedContent))];


const articleVectors = processedArticles.map(article =>
    calculateTfIdfVector(article.processedContent, processedArticles.map(a => a.processedContent), uniqueTerms)
);

var storedarray = [];
var searchHistory = [];

let historystring = localStorage.getItem('searchHistory');





const job = currentUser.job
console.log(job)


async function expandQueryWithGemini(query) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Expand the following search query with related terms, keep the original terms, dont use terms already used. Separate each term with a comma and limit to 20 terms: "${query}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const expandedQuery = response.text();

        return expandedQuery.split(',').map(term => term.trim()).join(' ');
    } catch (error) {
        console.error('Error expanding query:', error);
        return query; 
    }
}

var jobinterest = await expandQueryWithGemini(job)

console.log(jobinterest)

searchHistory.push(jobinterest)
console.log(searchHistory)

function findSimilarArticles(query) {
    const queryLower = query.toLowerCase();
    return articles.filter(article =>
        article.title.toLowerCase().includes(queryLower) ||
        article.content.toLowerCase().includes(queryLower)
    );

}

function displaySearch(similarArticles) {
    searchlist.innerHTML = "";
    similarArticles.forEach(article => {
        const div = document.createElement('div');
        const lititle = document.createElement('li');
        const li = document.createElement('li');
        lititle.textContent = `${article.title}`;
        li.textContent = `${article.content}`;
        div.appendChild(lititle);
        div.appendChild(li);
        searchlist.appendChild(div);
    });

    if (similarArticles.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No articles found.';
        searchlist.appendChild(li);
    }
}


// Function to update recommendations based on search history
function updateRecommendations() {
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';

    // Combine all search queries into a single document
    const combinedQuery = searchHistory.join(' ');
    console.log("combined query" , combinedQuery)

    const queryVector = calculateTfIdfVector(preprocessText(combinedQuery), processedArticles.map(a => a.processedContent), uniqueTerms);

    console.log("query vector", queryVector)
    // Calculate relevance scores for each article
    const scoredArticles = processedArticles.map((article, index) => {

        const relevanceScore = cosineSimilarity(queryVector, articleVectors[index]);
        console.log()
        return { ...article, score: relevanceScore };
    });
    
    // Sort articles by relevance score
    scoredArticles.sort((a, b) => b.score - a.score);

    console.log("sorted articles", scoredArticles)

    scoredArticles.slice(0, 5).forEach(article => {
        const li = document.createElement('li');
        li.textContent = `${article.title} (Relevance: ${article.score.toFixed(4)})`;
        recommendationsList.appendChild(li);
    });
}


async function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query === '') return;

    try {
        const searcharticles = findSimilarArticles(query);
        displaySearch(searcharticles);

        const expandedQuery = await expandQueryWithGemini(query);
        console.log(expandedQuery)
        console.log(searchHistory)
        
        searchHistory.push(expandedQuery);
        console.log(searchHistory)
        storedarray = JSON.stringify(searchHistory);
        localStorage.setItem('searchHistory', storedarray);

        // Limit history to last 5 searches
        if (searchHistory.length > 5) {
            searchHistory.shift();
        }

        // Update recommendations
        updateRecommendations();

        // Clear search input
        searchInput.value = '';
    } catch (error) {
        console.error('Error in search:', error);
    }
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', async () => {
    await search();
});

// Initial recommendations
updateRecommendations();