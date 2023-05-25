import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Concert, ConcertDocument} from "./conserts.schema";
import {Model} from "mongoose";

@Injectable()
export class ConcertsService {
  constructor(@InjectModel(Concert.name) private concertModel: Model<ConcertDocument>){
  }

  async findAll(): Promise<Concert[]> {
    return this.concertModel.find().exec();
  }

  async findOne(id: number): Promise<Concert> {
    return this.concertModel.findById(id);
  }

  async create(createConcertDto: CreateConcertDto): Promise<Concert> {
    const createConcert = new this.concertModel(createConcertDto);
    return createConcert.save();
  }

  update(id: string, updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return this.concertModel.findByIdAndUpdate(id, updateConcertDto);
  }

  remove(id: string) {
    return this.concertModel.findByIdAndRemove(id);
  }
}
