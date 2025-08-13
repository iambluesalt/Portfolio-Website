// Centralized certifications data to avoid duplication across components (cards, about page, etc.)
// Each platform maps certification title to its public URL.

export const certificates = {
  Udemy: {
    "Python for Data Science and Machine Learning Bootcamp": "https://www.udemy.com/certificate/UC-49df6543-c84b-4e24-9e04-94b9ef46489c/",
    "Python Data Structures and Algorithm": "https://www.udemy.com/certificate/UC-ff8b888b-9d9b-4836-a91c-d6a555dba7d0/",
    "Amazon Web Services-Solution Architect.": "https://www.udemy.com/certificate/UC-eb4ccb8a-89b7-4351-9267-ccb481d40cb3/"
  },
  Kaggle: {
    "Machine Learning Beginner": "https://www.kaggle.com/learn/certification/darklord176/intro-to-machine-learning",
    "Machine Learning Intermediate": "https://www.kaggle.com/learn/certification/darklord176/intermediate-machine-learning"
  },
  HackerRank: {
    "SQL Beginner": "https://www.hackerrank.com/certificates/3688240601e6",
    "SQL Intermediate": "https://www.hackerrank.com/certificates/df1cb6f3455c"
  }
} as const;

export const totalCertifications = Object.values(certificates).flatMap(c => Object.keys(c)).length;

export type CertificatePlatform = keyof typeof certificates;
