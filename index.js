import app from './src/app.js';
import { PORT } from './src/config.js';


app.listen(PORT);
console.log(`App start at port ${PORT}`);
