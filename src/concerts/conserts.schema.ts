import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
    @Prop()
    title: string;
    @Prop()
    date: string;
    @Prop()
    concertVenue: string;
    @Prop()
    solist: string;
    @Prop()
    conductor: string;
    @Prop()
    performer: string;
    @Prop()
    composition: string;
    @Prop()
    note: string;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert)