import { RequestS } from "../models/requestModel";
import { Request, Response } from "express";

class RequestController {
  public addRequest = async (
    req: Request<{ title: string }>,
    res: Response
  ) => {
    const title = req.params.title;

    RequestS.find({ title }).then((anime) => {
      if (anime) {
        res
          .status(400)
          .json({
            msg: "Anime is already requested please wait till resolved!!",
          });
      } else {
        const newRequest = new RequestS({ title });
        newRequest
          .save()
          .then((reqs) => {
            res.json({ msg: "Request successfully added" });
          })
          .catch((err) => res.json(err));
      }
    });
  };

  public getRequests = async (req: Request, res: Response) => {
    RequestS.find({})
      .then((reqs) => res.json(reqs))
      .catch((err) => res.json(err));
  };

  public getRequestByStatus = async (
    req: Request<{ status: string }>,
    res: Response
  ) => {
    const status = req.params.status;

    RequestS.find({ status })
      .then((reqs) => res.json(reqs))
      .catch((err) => res.json(err));
  };
}

export { RequestController };
