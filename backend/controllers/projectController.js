import Project from "../models/Project.js";

export const getProjects = async(req,res) => {
  try{
    const projects = await Project.find().sort({ createdAt: -1
    });
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching projects",
    });
  }
};
