import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

const handler = async (req, res) => {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
}

export default handler;