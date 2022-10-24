import { Schema, model } from 'mongoose';

interface IRequest {
    title: string;
    status: string;
}

const RequestSchema = new Schema<IRequest>({
    title: { required: true, type: String },
    status: { default: "pending", type: String}
})

const RequestS = model<IRequest>('Request', RequestSchema);

export { RequestS }