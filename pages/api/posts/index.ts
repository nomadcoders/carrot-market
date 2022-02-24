import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  //  await new Promise((resolve) => setTimeout(resolve, 5000));
  if (req.method === "POST") {
    const {
      body: { question, latitude, longitude },
      session: { user },
    } = req;
    const post = await client.post.create({
      data: {
        question,
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    // await res.unstable_revalidate("/community");

    res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;
    const parsedLatitude = parseFloat(latitude.toString());
    const parsedLongitue = parseFloat(longitude.toString());
    client.$queryRaw`SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';`.then(
      async () => {
        const posts = await client.post.findMany({
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
            _count: {
              select: {
                wondering: true,
                answers: true,
              },
            },
          },
          where: {
            latitude: {
              gte: parsedLatitude - 0.01,
              lte: parsedLatitude + 0.01,
            },
            longitude: {
              gte: parsedLongitue - 0.01,
              lte: parsedLongitue + 0.01,
            },
          },
        });
        res.json({
          ok: true,
          posts,
        });
      }
    );
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
