import {
  Bind,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { OcrService } from './ocr.service';

@Controller('ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  findAll(@UploadedFiles() files: Array<Express.Multer.File>) {
    //TODO  .파일 하나만받게처리
    return this.ocrService.findAll(files[0]);
  }
}
