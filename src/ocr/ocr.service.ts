import { Injectable } from '@nestjs/common';
import { ocr } from '../common/ocr';

@Injectable()
export class OcrService {
  async findAll(file: Express.Multer.File) {
    const ans = await ocr(file.buffer);
    return ans;
  }
}
