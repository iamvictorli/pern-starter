import massive from 'massive';

export default massive(process.env.DATABASE_URL, {
  scripts: `${__dirname}/dbScripts`
});
