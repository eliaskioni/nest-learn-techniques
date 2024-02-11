export default () => (
    {
        REDIS: {
            URL: process.env.REDIS_HOST,
            INDEX: process.env.REDIS_DB_INDEX
        }
    }
);