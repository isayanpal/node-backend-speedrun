import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true,
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true,
    }
},{timestamps:true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);