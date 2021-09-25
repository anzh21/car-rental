
const CarModel =  require("../Model/CarModel");

exports.getAllData = async (req, res, next)=> {
    try{
        const getalldata = await CarModel.find();
        res.status(200).json({success: true, data: getalldata });
    }catch(error){
        res.status(400).json({ success: false,});
    }
};

exports.getSingleData = async (req, res, next)=>{
    try{
        const getsingledata = await CarModel.findById(req.params.id);
        if(!getsingledata){
            res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: getsingledata })
    }catch(error){
        res.status(400).json({ success: false });
    }
};


exports.CreateData = async (req, res, next) => {
    console.log("body ", req.body);
    try {
      const createdata = await CarModel.create(req.body);
  
      res.status(200).json({ success: true, data: createdata });
      console.log("create data", createdata);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  };
  
  