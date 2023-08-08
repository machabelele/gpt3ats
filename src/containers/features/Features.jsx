import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Language Learning',
    text: 'GPT-3 can create language exercises, practice dialogues, and offer real-time language correction, aiding learners in improving their linguistic skills.'
  },
  {
    title: 'Automated Grading',
    text: 'GPT-3 can assess and provide feedback on assignments, quizzes, and tests, saving educators time and offering students prompt evaluations.'
  },
  {
    title: 'Idea Generation',
    text: 'GPT-3 can inspire creativity by generating writing prompts, brainstorming ideas, and assisting in the development of essays, stories, and projects.'
  },
  {
    title: 'Research Assistance',
    text: 'GPT-3 can help students and researchers find relevant information, summarize articles, and generate citations, streamlining the research process.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realise it. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features