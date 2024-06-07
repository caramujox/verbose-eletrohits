import type {NextApiRequest, NextApiHandler, NextApiResponse} from 'next';
import mongoose from 'mongoose';

export const connectMongoDB =  (handler: NextApiHandler) => {
  async (req: NextApiRequest, res: NextApiResponse) => {
    //check connection
    if(mongoose.connections[0].readyState){
      return handler(req, res);
    }

    const {DB_CONNECTION_STRING} = process.env;
    if(!DB_CONNECTION_STRING){
      return res.status(500).json({error:'DB Connection Error'})
    }

    await mongoose.connect(DB_CONNECTION_STRING);
    mongoose.connection.on('connected', () => console.log('DB Connection stablished'))
    mongoose.connection.on('error', () => console.log('DB Connection Error'))

    return handler(req, res)
    }
}