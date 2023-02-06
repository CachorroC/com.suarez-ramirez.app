import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function getLink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db('posts');
    const { id } = req.query;

    const post = await db.collection('posts').findOne({
      _id: ObjectId,
    });

    res.json(post);
  } catch (e: any | undefined) {
    console.error(e);
    throw new Error(e).message;
  }
}
