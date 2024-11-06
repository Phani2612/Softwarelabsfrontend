import React from 'react'

import { useState } from 'react';

import { FormatAlignCenter, Workspaces, Edit } from '@mui/icons-material';
import { Button, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { Schedule, DeveloperBoard, Newspaper, ThumbUp } from '@mui/icons-material';

import { UploadFile, MovieFilter, PhotoSizeSelectActual } from '@mui/icons-material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank , faRunning , faBolt } from '@fortawesome/free-solid-svg-icons';

import './Body4.css'

const screenwritersData = [
    {
      icon: <Edit />,
      title: "Write and experiment",
      description: "Write and experiment for free script editor with affordable Premium plans.",
    },
    {
      icon: <FormatAlignCenter />,
      title: "Avoid writer's blocks",
      description: "Avoid writer’s blocks with AI-powered suggestions.",
    },
    {
      icon: <FormatAlignCenter />,
      title: "Brainstorm with AI",
      description: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
    },
    {
      icon: <FormatAlignCenter />,
      title: "Professional scripts",
      description: "Create scripts that look and feel professional without stressing about technicalities.",
    },
    {
      icon: <FormatAlignCenter />,
      title: "Automated formatting",
      description: "Cut down on tedious tasks such as formatting with Built-in automated script formatting.",
    },
    {
      icon: <Workspaces />,
      title: "Collaborate with your team",
      description: "Collaborate with your team, get suggestions and feedback from peers and colleagues.",
    },
  ];
  
  const directorsData = [
    {
      icon: <Schedule />,
      title: "Automated Breakdown",
      description: "Streamline your preparation with our automated breakdown, saving days of manual work and allowing more time for creative decisions.",
    },
    {
      icon: <Schedule />,
      title: "Dynamic Scheduling",
      description: "Benefit from scheduling that's directly linked to your script breakdown, with seamless adjustments as script changes occur, ensuring constant alignment with your production team.",
    },
    {
      icon: <DeveloperBoard />,
      title: "Storyboard Assistance",
      description: "Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.",
    },
    {
      icon: <Newspaper />,
      title: "Advanced Script Analytics",
      description: "Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.",
    },
    {
      icon: <Workspaces />,
      title: "Integrated Team Communication",
      description: "Facilitate effective communication and instant feedback within your team through an integrated platform designed to keep everyone updated and engaged.",
    },
    {
      icon: <ThumbUp />,
      title: "Technology-Enhanced Directing",
      description: "Maintain artistic integrity while leveraging technology to refine scenes, enhance pacing, and perfect shot compositions with intuitive tools that support your directorial vision.",
    },
  ];


  const producersData = [
    {
      icon: <UploadFile />,
      title: "Import Scripts",
      description: "Quickly import and work on existing scripts, streamlining the pre-production process.",
    },
    {
      icon: <List />,
      title: "Automatic Scheduling",
      description: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
    },
    {
      icon: <Newspaper />,
      title: "Script Scoring & Coverage",
      description: "Save on multiple tools by getting script scoring and coverage directly within the platform.",
    },
    {
      icon: <MovieFilter />,
      title: "Pitch Deck Creation",
      description: "Easily create compelling pitch decks that are directly linked to your script, enhancing the pitch process.",
    },
    {
      icon: <PhotoSizeSelectActual />,
      title: "Image Library Access",
      description: "Access a vast library of film industry images, including posters and cast member photos, to find the perfect visual representation for your projects.",
    },
    {
      icon: <Workspaces />,
      title: "All-in-One Platform",
      description: "Reduce expenses by consolidating several production tools into one efficient platform, cutting down on overhead and increasing productivity.",
    },
  ];

  
function Body4() {


    const [selectedCategory, setSelectedCategory] = useState("Screenwriters");

    // Function to handle changing the selected category
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };


    const renderData = () => {
      let dataToRender = [];
  
      if (selectedCategory === "Screenwriters") {
          dataToRender = screenwritersData;
      } else if (selectedCategory === "Directors") {
          dataToRender = directorsData;
      } else if (selectedCategory === "Producers") {
          dataToRender = producersData;
      }
  

      return (
          <div id='iconanddata' style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center' , justifyContent:'space-evenly'}}>
              {dataToRender.map((item, index) => (
                  <ListItem key={index} style={{ width: '45%', margin: '5px' }}>
                      <ListItemIcon  className='icon1-circle' style={{ color: 'blue' }}>{item.icon}</ListItemIcon>
                      <ListItemText style={{ color: 'white' }} primary={item.description} />
                  </ListItem>
              ))}
          </div>
      );
  };
    
      return (
        <div className='body4container' >
          <Typography variant="h4" component="h1">{selectedCategory}</Typography>
          
          {/* Category selection buttons */}
          <Button  id='screen'  variant="contained" onClick={() => handleCategoryChange("Screenwriters")}>Screenwriters</Button>
          <Button id='director'  variant="contained" onClick={() => handleCategoryChange("Directors")}>Directors</Button>
          <Button id='producer' variant="contained" onClick={() => handleCategoryChange("Producers")}>Producers</Button>
          
          {/* Display the list based on selected category */}
          <div  className='renderdata' >
            {renderData()}
          </div>



          <button type="button" class="btn btn-primary">All features</button>


          <h1 id='body4header1' >Skyrocket your productivity</h1>



<div  className='details' >

  <div id='details1' >

    <FontAwesomeIcon  icon={faRunning}  className='body4icon'  />

    <h1  id='body4header1'>90% faster</h1>

    <h4  id='body4header4'>Speed Through Project Completion
savings
</h4>

  </div>

  <div id='details2' >

    <FontAwesomeIcon  icon={faPiggyBank} className='body4icon'  />

    <h1  id='body4header1'>80% Lower Costs</h1>

    <h4  id='body4header4'> Halve Your Expenses</h4>

  </div>


  <div id='details3' >

<FontAwesomeIcon icon={faBolt} className='body4icon'  />

<h1 id='body4header1'>Exceptional Quality</h1>

<h4 id='body4header4'  >Surpass the Highest Industry</h4>

<h4  id='body4header4'>Standards</h4>

  </div>




</div>







<button type="button" class="btn btn-primary">Join us on Discord</button>





        </div>
      );
  
}

export default Body4