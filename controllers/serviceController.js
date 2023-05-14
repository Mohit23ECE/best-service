import slugify from "slugify";
import serviceModel from "../models/serviceModel.js";

export const createServiceController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await serviceModel.findOne({ name });
    if (existingCategory) {
      return res.status(500).send({
        success: true,
        message: "Category already exists",
      });
    }
    const category = await new serviceModel({ name, slug: slugify(name), }).save();

    res.status(201).send({
      success: true,
      message: "new Category Created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Category",
      error,
    });
  }
};

//update category
export const updateServiceController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await serviceModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating Category",
      error,
    });
  }
};

// get all category
export const serviceController = async (req, res)=> {
    try {
        const service = await serviceModel.find({});
        res.status(200).send({
            success: true,
            message: "All Category List",
            service,
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error while getting all Category",
          error,
        });
      }
}

//get single category
export const singleServiceController = async(req, res)=> {
    try {
        const {slug} = req.params.slug
        const category = await serviceModel.findOne({slug})
        res.status(200).send({
            success: true,
            message: "Get single category Successfully",
            category,
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error while getting Category",
          error,
        });
      }
}

//delete Category
export const deleteServiceController = async (req, res)=> {
    try {
        const {id} = req.params;
        await serviceModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category deleted Successfully",
            // category,
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error while Deleting Category",
          error,
        });
      }
}