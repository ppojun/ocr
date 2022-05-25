import { createWorker } from 'tesseract.js';

export const ocr = async (file: Buffer) => {
  const worker = createWorker({
    langPath: __dirname + '\\kor_car.traineddata',
    gzip: false,
    //logger: (m) => console.log(m),
  });
  await worker.load();
  await worker.loadLanguage('eng+kor+chi_tra+kor_car');
  //추출대상 언어
  await worker.initialize('kor_car');
  //추출대상 언어
  const {
    data: { text },
  } = await worker.recognize(file);
  console.log(text);
  await worker.terminate();
  return text;
};
