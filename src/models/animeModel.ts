import { Schema, model } from 'mongoose';

interface IAnime {
    title: string;
    order: string;
    alternative_title: string;
}

const AnimeSchema = new Schema<IAnime>({
    title: { required: true, type: String },
    order: { required: true, type: String },
    alternative_title: { required:true, type: String }
});

const Anime = model<IAnime>('Anime', AnimeSchema);

export { Anime };
