import mongoose, { Error } from 'mongoose';
import projectModel from '../models/project.model.js'

export const createProject = async({
    name,
    userId
})=>{
    if(!name){
        throw new Error('Name is req')
    }
    if(!userId){
        throw new Error('User is req')
    }

    let project;
    try {
        project = await projectModel.create({
            name,
            users: [ userId ]
        });
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Project name already exists');
        }
        throw error;
    }

    
    return project;
}

export const getAllProjectByUserId = async({userId})=>{
    if(!userId){
        throw new Error('User is req')
    }

    const allUserProjects = await projectModel.find({
        users: userId
    })

    return allUserProjects
}

export const addUsersToProject = async({projectId, users, userId})=>{
    if(!projectId){
        throw new Error("ProectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    if(!users){
        throw new Error("user are req")
    }

    if (!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))) {
        throw new Error("Invalid userId(s) in users array")
    }

    if (!userId) {
        throw new Error("userId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }


    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    })

    console.log(project)
    if (!project) {
        throw new Error("User not belong to this project")
    }

    const updatedProject = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        $addToSet: {
            users: {
                $each: users
            }
        }
    }, {
        new: true
    })

    return updatedProject
}

export const getProjectById = async({projectId})=>{
    if(!projectId){
        throw new Error("ProectId is required")
    }

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("invalid projectId")
    }

    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}