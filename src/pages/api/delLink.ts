import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function delLink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db('links');
    const { id } = req.query;

    const post = await db.collection('posts').deleteOne({
      _id: ObjectId,
    });

    res.json(post);
  } catch (e: any | undefined) {
    console.error(e);
    throw new Error(e).message;
  }
}
