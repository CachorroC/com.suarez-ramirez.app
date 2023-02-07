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

    const link = await db.collection('links').deleteOne({
      _id: ObjectId(id),
    });

    res.json(link);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}
