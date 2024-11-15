import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentSchema=new Schema({
    content:{
        type:"String",
        required:true,
    },
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video",
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },

},{timestamps:true});
videoSchema.plugin(mongooseAggregatePaginate);
export const Comment=mongoose.model("Comment",commentSchema);

/*what is the middleware?
middleware (also called pre hooks and post hooks) are function which are passed control during execution of asunchronous function,middleware specified on the schema level and is useful for writting plugin.
middleware is something that hqappen in between,maybe request is going on to save the database , just before its getting saved in database i want to perform some task
and mongoose provide you prehook and post hook , pre hooks just before saving the database ,  it's being sent from the code base that hey go ahead and save it into database
just before saving it it perform some additional operation, and similerly we have post hooks as well, just afrter savinf into database before it return the response we will add some functionality
 */