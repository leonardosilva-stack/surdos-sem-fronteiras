import app from './app';

const port = 3000;
const name = 'surdos-sem-fronteira';

app.listen(port, () =>{
  console.log(`[${name.toUpperCase()}] - Litening on http://localhost:${port}`);
});
