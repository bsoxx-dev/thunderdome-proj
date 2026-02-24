// Utility functions for Thunderdome Engine

/**
 * Performance timer utility
 * TODO: Add more detailed metrics
 */
function measurePerformance(callback) {
  const start = Date.now();
  callback();
  const end = Date.now();
  return end - start;
}

/**
 * Logger utility
 * TODO: Add different log levels
 */
function log(message) {
  console.log(`[Thunderdome] ${message}`);
}

/**
 * Validate configuration object
 * TODO: Implement validation rules
 */
function validateConfig(config) {
  // TODO: Check required fields
  // TODO: Validate types
  return true;
}

/**
 * Helper to load external resources
 * TODO: Handle different resource types
 */
function loadResource(path) {
  // TODO: Implement resource loading
  // TODO: Cache resources
  return null;
}

module.exports = {
  measurePerformance,
  log,
  validateConfig,
  loadResource
};
