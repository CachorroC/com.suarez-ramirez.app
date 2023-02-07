/** @format */

import { ObjectId } from "mongodb";
export default class Pet {
  constructor(
    public name: string,
    public owner_name: string,
    public species: string,
    public age: number,
    public poddy_trained: boolean,
    public image_url: string,
    public diet: string[],
    public likes: string[],
    public dislikes: string[],
    public _id?: ObjectId
  ) {}
}
