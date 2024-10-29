import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      eas: {
        projectId: 'd66984c0-8ef4-4af7-8b9c-3b06d76b3a0c',
      },
      SENTRY_DSN:
        'https://28807703abaed03e998cf12a75d23149@o4507830848913408.ingest.de.sentry.io/4507896500518992',
    },
  };
};
