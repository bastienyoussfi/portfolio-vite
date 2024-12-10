import { BlogPost } from "../interfaces/blog-post";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Collaborative Filtering",
    excerpt: "One very common problem to solve is when you have a number of users and a number of products, and you want to recommend which products are most likely to be useful for which users...",
    date: "MAR 01, 2024",
    readTime: "5 MIN",
    category: "AI",
    image: "/images/blog/collaborative-filtering.jpeg",
    content: [
      {
        type: 'paragraph',
        content: "Collaborative filtering is a powerful technique used in recommendation systems. It's based on the idea that people who agreed in the past will agree in the future, and that they will like similar kinds of items as they liked in the past."
      },
      {
        type: 'heading',
        content: "How Collaborative Filtering Works",
        level: 2
      },
      {
        type: 'paragraph',
        content: "At its core, collaborative filtering uses the wisdom of the crowd to recommend items. Here's a simple breakdown of how it works:"
      },
      {
        type: 'paragraph',
        content: "1. Collect user preferences: This could be explicit (like ratings) or implicit (like viewing history)."
      },
      {
        type: 'paragraph',
        content: "2. Find similar users or items: Based on the preferences, the algorithm finds users with similar tastes or items that are often liked together."
      },
      {
        type: 'paragraph',
        content: "3. Generate recommendations: Using these similarities, the system recommends items that a user hasn't seen yet but is likely to enjoy."
      },
      {
        type: 'heading',
        content: "Implementing Collaborative Filtering",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Here's a simple Python implementation of user-based collaborative filtering:"
      },
      {
        type: 'code',
        content: `
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

def user_based_cf(user_item_matrix, user_id, n_recommendations=5):
    # Compute user similarity
    user_similarity = cosine_similarity(user_item_matrix)
    
    # Get similar users
    similar_users = user_similarity[user_id].argsort()[::-1][1:]
    
    # Get items that the user hasn't interacted with
    user_items = user_item_matrix[user_id]
    unrated_items = np.where(user_items == 0)[0]
    
    # Predict ratings for unrated items
    predictions = []
    for item in unrated_items:
        pred = np.mean([user_item_matrix[u, item] for u in similar_users])
        predictions.append((item, pred))
    
    # Sort and return top N recommendations
    recommendations = sorted(predictions, key=lambda x: x[1], reverse=True)
    return recommendations[:n_recommendations]
        `,
        language: 'python'
      },
      {
        type: 'paragraph',
        content: "This implementation uses cosine similarity to find similar users and then predicts ratings for items the user hasn't interacted with based on the ratings of similar users."
      }
    ]
  },
  {
    id: 2,
    title: "Linear model and neural net from scratch",
    excerpt:
      "A comprehensive guide to training a neural network from scratch and understanding how they really work...",
    date: "FEB 15, 2024",
    readTime: "8 MIN",
    category: "AI",
    image: "/images/blog/neural-networks.webp",
    content: [
      {
        type: 'paragraph',
        content: "Neural networks are a powerful tool for machine learning, but they can be complex and difficult to understand. In this guide, we'll walk through the process of training a neural network from scratch and explain how they really work."
      },
      {
        type: 'heading',
        content: "Linear Model",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Before we dive into neural networks, let's start with a simpler model: the linear model. A linear model is a mathematical model that assumes a linear relationship between the input variables (features) and the output variable (target)."
      },
      {
        type: 'paragraph',
        content: "The equation for a linear model is:"
      },
      {
        type: 'code',
        content: "y = w1*x1 + w2*x2 + ... + wn*xn + b",
      },
    ]
  },
  {
    id: 3,
    title: "Natural Language Processing",
    excerpt:
      "Perhaps the most widely practically useful application of NLP is classification -- that is, classifying a document automatically into some category...",
    date: "JAN 30, 2024",
    readTime: "6 MIN",
    category: "AI",
    image: "/images/blog/nlp.jpg",
    content: [
      {
        type: 'paragraph',
        content: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans using natural language. It involves the development of algorithms and models that can understand, interpret, and generate human language."
      },
      {
        type: 'heading',
        content: "Text Classification",
        level: 2
      },
      {
        type: 'paragraph',
        content: "Perhaps the most widely practically useful application of NLP is classification -- that is, classifying a document automatically into some category. This is useful for a wide range of applications, from spam detection to sentiment analysis."
      },
      {
        type: 'paragraph',
        content: "Here's a simple example of text classification using Python and scikit-learn:"
      }
    ]
  },
];
