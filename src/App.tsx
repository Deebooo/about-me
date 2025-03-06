import React, { useState } from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Adem DJEMAI</h1>
              <button className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#about" className="hover:text-blue-600">
                      Info
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-blue-600">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects-engie" className="hover:text-blue-600">
                      ENGIE Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects-personal"
                      className="hover:text-blue-600"
                    >
                      Notable Personal Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {isMenuOpen && (
              <nav className="md:hidden mt-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a href="#about" onClick={toggleMenu}>
                      Info
                    </a>
                  </li>
                  <li>
                    <a href="#skills" onClick={toggleMenu}>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects-engie" onClick={toggleMenu}>
                      ENGIE Projects
                    </a>
                  </li>
                  <li>
                    <a href="#projects-personal" onClick={toggleMenu}>
                      Personal Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={toggleMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>
        <main className="pt-20">
          <section id="about" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="profile-photo.jpg"
                  alt="Adem DJEMAI"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Data Scientist - AI Technologist
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Data Scientist at ENGIE Digital & IT, delivering transformative solutions through cutting-edge AI and digital transformation. Driven by operational excellence and forward-thinking innovation.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Deebooo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adem-djemai-116915219/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:adem.djemai@etu.u-paris.fr"
                      className="text-gray-600 hover:text-red-600"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {skill.title}
                    </h3>
                    {skill.sections.map((section, sIndex) => (
                      <div key={sIndex} className="mb-4">
                        <h4 className="font-medium mb-2">{section.title}</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {section.items.map((item, iIndex) => (
                            <li key={iIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="projects-engie" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Notable Projects at ENGIE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engieProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.overview}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Points:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {project.keyPoints.map((point, pIndex) => (
                          <li key={pIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500">
                      <strong>Tech Stack:</strong> {project.techStack}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="projects-personal" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Personal Projects
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {personalProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full md:w-1/2 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{project.overview}</p>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Points:</h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {project.keyPoints.map((point, pIndex) => (
                              <li key={pIndex}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          <strong>Tech Stack:</strong> {project.techStack}
                        </p>
                        {project.links && (
                          <div className="flex gap-4">
                            {project.links.map((link, lIndex) => (
                              <a
                                key={lIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                              >
                                {link.text}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Adem DJEMAI</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="https://github.com/Deebooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adem-djemai-116915219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:adem.djemai@etu.u-paris.fr"
                  className="hover:text-gray-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
const skills = [
  {
    title: "Machine Learning",
    sections: [
      {
        title: "Techniques",
        items: [
          "Classification",
          "Regression",
          "Time-Series Analysis",
          "Clustering & Representation Learning",
          "Anomaly Detection",
        ],
      },
      {
        title: "Tools",
        items: ["Scikit-learn", "statsmodels", "RAPIDS cuML", "AWS AutoGluon"],
      },
    ],
  },
  {
    title: "Natural Language Understanding",
    sections: [
      {
        title: "Text Processing",
        items: ["Tokenization & Parsing", "Named Entity Recognition (NER)"],
      },
      {
        title: "Text Generation",
        items: ["Agentic-AI", "Retrieval-Augmented Generation (RAG)"],
      },
      {
        title: "Tools",
        items: [
          "NLTK, SpaCy, Gensim",
          "Hugging Face Transformers",
          "LangChain, LlamaIndex",
          "Azure AI",
          "MLflow, Ragas",
        ],
      },
    ],
  },
  {
    title: "Computer Vision",
    sections: [
      {
        title: "Techniques",
        items: ["Image Segmentation & Classification", "Image Generation", "Object Detection"],
      },
      {
        title: "Tools",
        items: [
          "PyTorch, TensorFlow",
          "OpenCV, skimage",
          "YOLO",
          "rasterio",
          "Pillow",
        ],
      },
    ],
  },
  {
    title: "Data Platforms and Engineering",
    sections: [
      {
        title: "Data Platforms",
        items: ["Dataiku", "Databricks"],
      },
      {
        title: "Data Engineering",
        items: [
          "Apache Software Foundation (ASF)",
          "AWS (EC2, S3, Lambda, Redshift, Athena)",
        ],
      },
      {
        title: "MLOps",
        items: ["MLflow", "Docker, Kubernetes"],
      },
    ],
  },
  {
    title: "Software Engineering",
    sections: [
      {
        title: "Techniques",
        items: [
          "Object-Oriented Design (OOD)",
          "System Architecture and Design Patterns",
          "Data Modeling",
          "TDD (Test-Driven Development)",
          "API Design and Management",
        ],
      },
      {
        title: "Tools",
        items: [
          "Streamlit, Gradio",
          "Flask, Django, FastAPI",
          "RESTful and GraphQL APIs",
          "UML",
          "Git, Github",
        ],
      },
    ],
  },
];
const engieProjects = [
  {
    title: "AI-Powered Chatbot for Splunk Log Monitoring",
    overview:
      "Development of an AI-powered multi-agent chatbot transforms how users interact with Splunk by allowing natural language queries instead of requiring knowledge of SPL, Splunk's query language. It simplifies log analysis, making it intuitive and accessible for everyone.",
    keyPoints: [
      "Streamlined log monitoring and metric analysis through natural language query functionality, ensuring accessibility for non-technical users",
      "Integration of LangChain and LangGraph, for multi-agent collaboration and task-specific automation",
      "Optimization of system costs and latency using LangSmith, resulting in improved performance and reduced overhead",
      "Automation of query generation and response formulation, providing real-time actionable insights",
      "Implementation of memory integration for continuity and context-aware interactions",
    ],
    techStack:
      "Python, Dataiku, Splunk, LangChain, LangGraph, LangSmith, Streamlit",
  },
  {
    title: "Smart Knowledge Hub",
    overview:
      "Development of an AI Knowledge Hub that provides an FAQ, training modules, documentation retrieval, and a smart directory linking users to the right experts.",
    keyPoints: [
      "Application of Agentic-RAG via LangChain for integration and query resolution, including memory for continuity",
      "Integration of LangChain and LangGraph, for multi-agent collaboration and task-specific automation",
      "Robust processing of unstructured data for effective documentation retrieval and knowledge extraction",
      "Implementation of an evaluation pipeline to measure retrieval performance and text-based accuracy metrics using MLflow and Ragas.",
      "Support for diverse document formats and efficient vector storage techniques",
      "Development of a user-friendly chatbot interface using Gradio"
    ],
    techStack:
      "Python, Ollama, LangChain, LangGraph, LangSmith, MLflow, Ragas, Gradio"
  },
  {
    title: "Comprehensive End-to-End Time Series Forecasting Pipeline for HVAC and Water Treatment Equipment Inventory Management",
    overview: "Development of an end-to-end workflows—from data ingestion and preprocessing to model development, evaluation, and deployment—for time series forecasting models, improving inventory management, optimizing stock levels, ensuring product availability, and reducing costs.",
    keyPoints: [
      "Model development exploring advanced deep learning architectures (LSTM, GRU, and TFT) to enhance forecasting accuracy",
      "Evaluation of various time series forecasting models to predict stock levels with high accuracy",
      "Packaging of forecasting models using MLflow, including model registry, versioning, and deployment with Databricks",
      "Implementation of an end-to-end workflow: ETL, data cleansing, data processing, fine-tuning and inference",
      "Provided end users with real-time prediction capabilities through a Databricks dashboard",
    ],
    techStack: "Python, AWS, PyTorch, Prophet, statsmodels, Databricks, MLflow",
  },
  {
    title: "Anomaly Detection on Energy Production Data",
    overview:
      "Development of an anomaly detection system for energy production data, identifying irregularities to reduce waste, minimize inefficiencies, and optimize energy performance while promoting sustainability.",
    keyPoints: [
      "Implementation of real-time anomaly detection in temporal energy data to identify irregularities",
      "Achieved a 7% reduction in operational inefficiencies and waste through predictive analytics",
    ],
    techStack: "Python, AWS, Prophet, scikit-learn, statsmodels, MLflow",
  },
];
const personalProjects = [
  {
    title: "LangTARS - Interstellar Robot Revival (ongoing)",
    overview:
      "A collaborative project to build a robot inspired by TARS from the movie Interstellar. This project integrates Robotics, Agentic-AI Workflows, and Advanced Hardware-Software systems to create a functional conversational and motion-capable robot.",
    keyPoints: [
      "Implementation of a multi-agent system using LangChain, including Speech-to-Text Agent, Chatter Agent, Text-to-Speech Agent, and Motion Control agents",
      "Orchestration of Agentic-AI through LangGraph for seamless integration",
      "Fine-tuning of a TTS model to replicate a natural robotic voice similar to TARS",
      "Incorporation of memory for continuity and context-aware interactions",
      "Latency monitoring and performance optimization with LangSmith",
      "Construction of the robot's hardware involving 3D printing, servo control, sensor integration",
    ],
    techStack: "Python, PyTorch, LangChain, LangGraph, LangSmith, Hugging Face",
  },
  {
    title: "Greg - Personal AI Assistant",
    overview:
      "Development of an advanced AI-powered personal assistant capable of retrieving and generating contextually accurate responses by integrating state-of-the-art retrieval-augmented generation (RAG) techniques",
    keyPoints: [
      "Application of Agentic-RAG via LangChain for integration and query resolution, including memory for continuity",
      "Integration of LangGraph, for multi-agent collaboration and task-specific automation",
      "Usage of locally quantized large language models (LLMs) for cost-effective inference",
      "Implementation of an evaluation pipeline to measure retrieval performance and text-based accuracy metrics.",
      "Support for diverse document formats and vector storage techniques",
      "Incorporation of Web and Wikipedia search for real-time information retrieval",
      "Development of a user-friendly chatbot interface using Gradio",
    ],
    techStack:
      "Python, PyTorch, LangChain, LangGraph, LangSmith, Hugging Face, Tavily, MLflow, Gradio",
    image: "greg.png",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/Deebooo/Greg",
      },
    ],
  },
  {
    title: "Colorization of Historical Aerial Images",
    overview:
      "Implementation of a GenAI approach to bring historical aerial imagery from 1945 to 2003 to life in realistic color. This project leverages the power of Generative Adversarial Networks (GANs) to colorize grayscale satellite imagery.",
    keyPoints: [
      "Implementation of Generative Adversarial Networks (GANs) to achieve realistic colorization",
      "Adoption of the LAB colorspace for precise colorization",
      "Optimization of computational workflows with NVIDIA GPUs and CUDA acceleration",
      "Evaluation of results using metrics like PSNR and CIEDE2000",
      "Development of an interactive web app built with Esri's ArcGIS Experience Builder",
      "Contribution to historical urban planning and geographic exploration",
    ],
    techStack: "Python, PyTorch, OpenCV, rasterio, Pillow, skimage",
    image: "colorization.jpg",
    links: [
      {
        text: "LinkedIn",
        url: "https://www.linkedin.com/posts/adem-djemai-116915219_ai-genai-geoai-activity-7254370913381486593-OOSG",
      },
      {
        text: "Check out the results",
        url: "https://lnkd.in/eHAFZ6j5",
      },
      {
        text: "GitHub",
        url: "https://github.com/Deebooo/satellite-image-colorization",
      },
    ],
  },
  {
    title:
      "Satellite Image Segmentation for Historical Urban Landscape Reconstruction",
    overview:
      "Implementation of deep learning models to reconstruct historical urban landscapes and analyze the impact of soil impermeabilization on urban overheating.",
    keyPoints: [
      "Development of U-Net-based segmentation model for land surface classification",
      "Evaluation of urbanization's impact on surface temperatures",
      "Quantification of soil impermeabilization effect on urban overheating",
      "Optimization of computational workflows with NVIDIA GPUs and CUDA acceleration",
    ],
    techStack: "Python, PyTorch, OpenCV, rasterio, Pillow, skimage",
    image: "segmentation.jpg",
    links: [
      {
        text: "LinkedIn",
        url: "https://www.linkedin.com/posts/samy-khelil-861a8a1a9_deeplearning-geoai-datascience-activity-7191549681041059840-yvyE",
      },
      {
        text: "GitHub",
        url: "https://github.com/Deebooo/urbanization-impact",
      },
    ],
  },
];