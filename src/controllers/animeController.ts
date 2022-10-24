import { Anime } from "../models/animeModel";
import { Request, Response } from "express";

class AnimeController {
  public getOrder = async (req: Request<{ title: string }>, res: Response) => {
    const title = req.params.title;

    Anime.find({ title: title })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  public addOrder = async (req: Request, res: Response) => {
    const { title, order } = req.body;

    // if (!title || !order) {
    //   return res.send(401).json({ msg: "Please enter all fields!" });
    // }

    const newAnimeOrder = new Anime({
      title,
      order,
    });

    newAnimeOrder
      .save()
      .then((anime) => {
        res.json(anime);
      })
      .catch((err) => {
        res.json(err);
      });
  };
}

export { AnimeController };
