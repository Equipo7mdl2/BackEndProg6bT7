import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IRopa extends mongoose.Document {  
    ropa: string;
}

 const RopaSchema = new Schema(
    {
        ropa: {
            type: String,
            required: [true, 'ropa required'],
            unique: true
        }
    }
    
 );

const Ropa = mongoose.model<IRopa>("Ropa", RopaSchema);
export default Ropa;