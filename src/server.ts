import app from './app';
import config from './app/config';

import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(err);
  }
}
main();
