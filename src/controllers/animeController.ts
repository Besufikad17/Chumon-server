import { Anime } from "../models/animeModel";
import { Request, Response } from "express";

class AnimeController {
  public getOrder = async (req: Request<{ title: string }>, res: Response) => {
    const title = req.params.title;

    Anime.find({ title: title })
      .then((data) => {
        if (data.length == 0) {
          Anime.find({ alternative_title: title })
            .then((anime) => {
              res.json(anime);
            })
            .catch((err) => {
              res.json(err);
            });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  };

  public addOrder = async (req: Request, res: Response) => {
    const { title, order, alternative_title } = req.body;

    const newAnimeOrder = new Anime({
      title,
      order,
      alternative_title
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
