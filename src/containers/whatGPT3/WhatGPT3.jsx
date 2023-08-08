import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature  title="What is GPT-3" text="GPT-3, developed by OpenAI, is a state-of-the-art language model with 175 billion parameters, enabling it to understand and generate human-like text. Its capabilities range from language translation and content creation to code generation and conversation simulation. Due to its extensive training data and massive size, GPT-3 has garnered significant attention for its ability to produce contextually relevant and coherent outputs across various tasks."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can enhance chatbots by providing them with more natural and contextually relevant responses, improving user interactions. Its language generation capabilities enable chatbots to engage in meaningful conversations across diverse topics, offering personalized and human-like interactions." />
        <Feature title="Knowledgebase" text="GPT-3 can simplify knowledge base content creation by generating clear and concise articles from raw data, improving accessibility for users. Its natural language understanding also aids in extracting relevant information from user queries, enabling more effective and accurate responses from the knowledge base."/>
        <Feature title="Education" text="GPT-3 can assist in education by offering personalized tutoring and explanations across a wide range of subjects, adapting to individual learning styles and paces. Its ability to generate coherent and informative content can supplement educational materials, providing students with additional resources for better comprehension."/>
      </div>
    </div>
  )
}

export default WhatGPT3