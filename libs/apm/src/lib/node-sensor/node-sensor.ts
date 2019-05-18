import * as instana from "@instana/collector";

// Initialize instana by calling the init function (the default export of
// "@instana/collector") right away, before requiring other modules.
instana();

// const logger = initializeLogger();

// Optional: You can tell @instana/collector to use your application's logger.
// Otherwise, the default Bunyan logger will be used.
// instana.setLogger(logger);
export {instana};
