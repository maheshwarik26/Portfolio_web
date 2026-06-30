import mongoose from"mongoose"

const projectSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      trim:true,
    },
    category:{
      type:String,
      required:true,
      trim:true,

    },
    status:{
      type:String,
      default:"Project",
    },
    description:{
type:String,
required:true,
    },
    impact:{
      type:String,

    },
    tech:{
      type:[String],
      default: [],
    },
    github:{
      type:String,
      default:"",
    },
    live:{
      type:String,
      default:"",
    },

  },
  {
    timestamps:true,
  }
);


const Project = mongoose.model("Project",projectSchema);

export default Project;
