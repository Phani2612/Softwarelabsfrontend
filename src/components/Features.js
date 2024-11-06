import React from "react";
import './Features.css'; // Make sure to style the component with custom CSS
import Navbar from "./Navbar";

const features = [
  {
    icon: "perm_media",
    title: "Shot List",
    description: "NolanAI’s Shot List feature adapts seamlessly to your schedule and storyboard.",
    linkText: "Explore Feature"
  },
  {
    icon: "emoji_events",
    title: "NolanAI Contests (Coming Soon)",
    description: "Join NolanAI’s Contests: Showcase, Learn, Win! Perfect for aspiring filmmakers.",
    linkText: "Explore Feature"
  },
  {
    icon: "movie_filter",
    title: "AI Pitch Deck",
    description: "Craft captivating pitch decks effortlessly with NolanAI’s AI Pitch Deck tool.",
    linkText: "Explore Feature"
  },
  {
    icon: "newspaper",
    title: "AI Script Coverage",
    description: "NolanAI's AI Script Coverage delivers a comprehensive report in minutes.",
    linkText: "Explore Feature"
  },
  {
    icon: "savings",
    title: "AI Budgeting (Coming Soon)",
    description: "Our AI Budgeting tool forecasts your budget based on your script.",
    linkText: "Explore Feature"
  },
  {
    icon: "schedule",
    title: "Scheduling",
    description: "NolanAI’s Scheduling tool organizes your shooting schedule in the most efficient way.",
    linkText: "Explore Feature"
  },
  {
    icon: "psychology",
    title: "Brainstorming",
    description: "Collaborate with AI on Brainstorming for script and screenplay writing.",
    linkText: "Explore Feature"
  },
  {
    icon: "developer_board",
    title: "Automated Storyboard",
    description: "Take your storytelling to the next level with NolanAI’s Automated Storyboard.",
    linkText: "Explore Feature"
  },
  {
    icon: "video_camera_front",
    title: "Character Development",
    description: "Create and edit your characters with ease using NolanAI’s Character Development feature.",
    linkText: "Explore Feature"
  },
  {
    icon: "auto_awesome",
    title: "AI Copilot",
    description: "AI Copilot is here to guide you through crafting high-quality stories.",
    linkText: "Explore Feature"
  },
  {
    icon: "medical_services",
    title: "Script Doctor (Smart Formatting)",
    description: "NolanAI’s Script Doctor offers smart formatting advice to improve your screenplay.",
    linkText: "Explore Feature"
  },
  {
    icon: "list_alt",
    title: "Automatic Script Breakdown",
    description: "NolanAI simplifies the process of deconstructing your screenplay.",
    linkText: "Explore Feature"
  },
  {
    icon: "troubleshoot",
    title: "Plot Hole Detection Report",
    description: "Ensure consistency with NolanAI’s Plot Hole Detection Report.",
    linkText: "Explore Feature"
  },
  {
    icon: "drive_file_rename_outline",
    title: "The Industry Standard Editor",
    description: "Nolan provides a user-friendly interface with advanced formatting options.",
    linkText: "Explore Feature"
  }
];

const FeatureCard = ({ feature }) => (
  <div className="feature-card">
    <span className="material-icons">{feature.icon}</span>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
    <button>{feature.linkText}</button>
  </div>
);

const NolanAI = () => {
  return (
    

<div>

<Navbar/>
<div className="features-container">
      <h1 className="features-title">NolanAI Features: Elevating Your Filmmaking Process</h1>
      <div className="features-list">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>



</div>


  );
};

export default NolanAI;
