import mongoose from "mongoose";

const connect = async () => {
  //mongoose.set('useCreateIndex', true);
  return mongoose.connect("mongodb://127.0.0.1:27017/susprise", {useNewUrlParser: true, useUnifiedTopology: true  });
};

export default connect;
