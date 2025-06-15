
import mongoose, {model, models, Schema} from "mongoose";

interface IVideo{
    _id: mongoose.Types.ObjectId,
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    controls?: boolean,
    transformation?: {
        height: number,
        width: number,
        quality?: number
    }
}

const videoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    controls: {
        type: Boolean,
        default: true
    },
    transformation: {
        width: {type: Number, default: 1080},
        height: {type: Number, default: 1920},
        quality: {type: Number, min: 1, max: 100}
    }
})

const videoModel = model<IVideo>("Video", videoSchema);

export default videoModel