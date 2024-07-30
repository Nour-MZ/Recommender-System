import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API key - replace with your actual API key
const API_KEY = "AIzaSyBLFXyxwRNYR8EcJZi7jbpXRJfdDw68Tc0";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

// Sample articles (in a real application, this would be your full set of articles)
const articles = [
    { 
        id: 1, 
        title: "Introduction to JavaScript", 
        content: "JavaScript is a versatile programming language primarily used to create dynamic and interactive content on web pages. It was initially developed by Netscape as a client-side scripting language for web browsers, and it has since evolved into a robust language capable of both front-end and back-end development. JavaScript operates on the client side, which means it runs directly in the user's web browser without the need for server-side processing. Key features of JavaScript include its event-driven capabilities, which allow developers to create interactive user interfaces, and its asynchronous programming model, which enables tasks like fetching data from servers without blocking the user interface. Modern JavaScript frameworks and libraries, such as Angular, Vue.js, and Node.js, have expanded its functionality, allowing developers to build complex single-page applications, server-side applications, and real-time applications. Understanding JavaScript is fundamental for web development, as it integrates with HTML and CSS to create rich, user-friendly web experiences."
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
    }
];

// Preprocess text
function preprocessText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
}

// Calculate TF-IDF
function calculateTfIdf(term, doc, allDocs) {
    const tf = doc.filter(word => word === term).length / doc.length;
    const idf = Math.log(allDocs.length / (1 + allDocs.filter(d => d.includes(term)).length));
    return tf * idf;
}

// Calculate TF-IDF vector for a document
function calculateTfIdfVector(doc, allDocs, uniqueTerms) {
    return uniqueTerms.map(term => calculateTfIdf(term, doc, allDocs));
}

// Cosine similarity between two vectors
function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
    const magnitude1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
    const magnitude2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitude1 * magnitude2);
}

// Preprocess all articles
const processedArticles = articles.map(article => ({
    ...article,
    processedContent: preprocessText(article.content)
}));

// Get all unique terms
const uniqueTerms = [...new Set(processedArticles.flatMap(article => article.processedContent))];

// Calculate TF-IDF vectors for all articles
const articleVectors = processedArticles.map(article => 
    calculateTfIdfVector(article.processedContent, processedArticles.map(a => a.processedContent), uniqueTerms)
);

// Search history
let searchHistory = [];

// Function to expand query using Gemini API
async function expandQueryWithGemini(query) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Expand the following search query with related terms, keeping the original terms. Separate each term with a comma and limit to 10 terms: "${query}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const expandedQuery = response.text();

        return expandedQuery.split(',').map(term => term.trim()).join(' ');
    } catch (error) {
        console.error('Error expanding query:', error);
        return query; // Return original query if expansion fails
    }
}

// Function to search and update recommendations
async function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query === '') return;

    try {
        // Expand the query using Gemini API
        const expandedQuery = await expandQueryWithGemini(query);
        console.log(expandedQuery);
        // Add expanded query to search history
        searchHistory.push(expandedQuery);
        console.log(searchHistory)
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

// Function to update recommendations based on search history
function updateRecommendations() {
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';

    // Combine all search queries into a single document
    const combinedQuery = searchHistory.join(' ');
    const queryVector = calculateTfIdfVector(preprocessText(combinedQuery), processedArticles.map(a => a.processedContent), uniqueTerms);

    // Calculate relevance scores for each article
    const scoredArticles = processedArticles.map((article, index) => {
        console.log(articleVectors[index])
        const relevanceScore = cosineSimilarity(queryVector, articleVectors[index]);
        return { ...article, score: relevanceScore };
    });

    // Sort articles by relevance score
    scoredArticles.sort((a, b) => b.score - a.score);

    // Display top 3 recommendations
    scoredArticles.slice(0, 3).forEach(article => {
        const li = document.createElement('li');
        li.textContent = `${article.title} (Relevance: ${article.score.toFixed(4)})`;
        recommendationsList.appendChild(li);
    });
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', async () => {
    await search();
});

// Initial recommendations
updateRecommendations();