const narratives = [
    {
      id: 1,
      title: "Fix the Professor's Lecture Code",
      intro: "The professor accidentally shared buggy R code in their lecture slides. Students are confused! Can you fix it?",
      success: "You fixed the code! The professor and students are grateful.",
      failure: "The code remains broken, and the students are more confused than ever."
    },
    {
      id: 2,
      title: "Prepare the Team's Presentation",
      intro: "Your team’s R script is broken hours before a major presentation. Everyone is relying on you to debug it in time.",
      success: "You saved the day! The presentation goes flawlessly.",
      failure: "The script wasn’t fixed, and the team struggled during the presentation."
    },
    {
      id: 3,
      title: "Teach a Beginner",
      intro: "A beginner coder needs your help understanding loops. Their code is full of errors. Can you fix it and explain it to them?",
      success: "The beginner learned a lot from your fix and is now confident!",
      failure: "The beginner is still confused and feeling discouraged."
    },
    {
      id: 4,
      title: "Analyze Critical Data",
      intro: "A critical dataset has formatting issues, and the client presentation is in an hour. Can you clean the data in time?",
      success: "The dataset is ready! The client presentation goes off without a hitch.",
      failure: "The dataset remains unusable, and the client is not impressed."
    },
    {
      id: 5,
      title: "Debug the Climate Model",
      intro: "A climate model predicting rainfall patterns is throwing errors. Researchers are relying on you to fix it.",
      success: "The model works flawlessly! Researchers can now analyze the data.",
      failure: "The errors persist, delaying crucial research."
    },
    {
      id: 6,
      title: "Optimize the E-commerce Algorithm",
      intro: "An e-commerce platform's recommendation algorithm is running too slowly. Can you optimize it?",
      success: "The algorithm is now lightning-fast, and customers are thrilled with the recommendations!",
      failure: "The platform remains slow, frustrating users and losing sales."
    },
    {
      id: 7,
      title: "Compile the Statistical Report",
      intro: "Your company needs a detailed statistical report compiled from raw data. Can you process it accurately?",
      success: "The report is ready! The team applauds your hard work.",
      failure: "The report contains errors, and your boss is disappointed."
    },
    {
      id: 8,
      title: "Train the Machine Learning Model",
      intro: "A machine learning model isn't converging during training. The project deadline is near. Can you fix it?",
      success: "The model now trains successfully! The team celebrates the breakthrough.",
      failure: "The model still doesn’t converge, delaying the project."
    },
    {
      id: 9,
      title: "Write the API Documentation",
      intro: "The API you developed needs clear and concise documentation before deployment. Can you complete it in time?",
      success: "The documentation is thorough and well-received by the developers.",
      failure: "The incomplete documentation causes confusion among the developers."
    },
    {
      id: 10,
      title: "Assist the Marketing Team",
      intro: "The marketing team needs an automated script to analyze social media trends. Can you deliver it?",
      success: "The script works perfectly, and the team identifies key trends!",
      failure: "The script doesn't work, leaving the marketing team in the dark."
    }
  ];
  
  // Randomly select a narrative
  function getRandomNarrative() {
    const randomIndex = Math.floor(Math.random() * narratives.length);
    return narratives[randomIndex];
  }
  
  export { getRandomNarrative };
  