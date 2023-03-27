import { PdfDataMiner, DocDataMiner } from './data-miners';

// https://refactoring.guru/design-patterns/template-method

const docDataMiner = new DocDataMiner();
const pdfDataMiner = new PdfDataMiner();

docDataMiner.mine();
pdfDataMiner.mine();