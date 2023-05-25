import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Concert} from "./conserts.schema";
import {AuthGuard} from "../auth/guards/auth.guard";

@Controller('concerts')
@ApiTags('Conserts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() createConcertDto: CreateConcertDto): Promise<Concert> {
    return this.concertsService.create(createConcertDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  findAll(): Promise<Concert[]> {
    return this.concertsService.findAll();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Concert> {
    return this.concertsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return this.concertsService.update(id, updateConcertDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concertsService.remove(id);
  }
}
