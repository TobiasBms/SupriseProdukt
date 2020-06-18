/*
  This fine contain the full crud.
  I have tried to make it as generic as possible so the full crud is in here
  If there should be custom functionality made then these can be split up into -
  smaller pieces and put in the same controllers folder.
*/

//Get functions
export const getOne = model => async (req, res) => {
  //Try catch to hook into the native mongoose exceptions
  try {
      const doc = await model
          .findOne({ _id: req.params.id })
          .lean()
          .exec();
          
      if (!doc) {
          return res.status(400).end();
      }
      res.status(200).json({ data: doc });
  } catch (e) {
      console.error(e.message);
      res.status(400).end();
  }
};


export const showCategories = (model) => async(req,res) => {
  try {
      const product = await model.find({"category": req.params.id}).count();
      const test = await model.find().where()
      console.log(test);
      
      res.status(200).json({Instock: product});
  } catch (e) {
    console.error(e.message);
    res.status(400).end();
  }
};

/*export const showStock = (model) => async(req,res) => {
  try {
      const stock = await model.find();
      res.status(200)
  } catch (e) {
    console.error(e.message);
    res.status(400).end();
  }
}*/

export const getCategory = (model) => async(req,res) => {
  try {
      const product = await model.find({"category": req.params.id}).count();
      const productOfTheCategory = await model.find({"category": req.params.id});
      
      res.status(200).json({Instock: product, products: [
        ...productOfTheCategory
      ]});
  
    } catch (e) {
    console.error(e.message);
    res.status(400).end();
  }
}

//I use two callback functions so I can keep my model and the req,res objects in scope.
export const getMany = (model) => async (req, res) => {
  try {
      //Getting all documents
      const docs = await model
      .find()
      .lean()
      .exec();
      console.log(docs);
      
      res.status(200).json({data: docs})
  } catch (e) {
      console.error(e);
      res.status(400).end();
  }
};

//Insert function:

export const createOne = (model) => async (req,res) => {
    try{
      const doc = await model.create({...req.body});
      res.status(200).json({data: doc});
    }catch(e){
      console.error(e.message);
      res.status(404).json({message: e.message})
    }
}
//Delete function:

export const deleteOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

//Put function
export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          _id: req.params.id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: updatedDoc })
  } catch (e) {
    console.error(e.message)
    res.status(404).json({message: e.message})
  }
}

const crudController = model => ({
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model),
  getCategory: getCategory(model)
});

export default crudController;