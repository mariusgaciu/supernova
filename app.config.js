import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      SENTRY_DSN:
        'https://28807703abaed03e998cf12a75d23149@o4507830848913408.ingest.de.sentry.io/4507896500518992',
    },
  };
};
