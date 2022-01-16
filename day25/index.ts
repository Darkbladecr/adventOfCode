import { readFileSync } from 'fs';
import { join } from 'path';
import { SeaFloor } from './day25';

async function main() {
  const data = readFileSync(join(__dirname, 'inputThalib.txt')).toString();
  const seaFloor = new SeaFloor(data);
  console.log('Data inputted:');
  console.log(seaFloor.toString());
  const stepsRequired = seaFloor.end();
  console.log('Steps required:', stepsRequired);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
