var DummyLogger = function() {
    this.logs = [];
  };

  DummyLogger.prototype.getLogs = function() {
    return this.logs;
  };

  ['trace', 'verbose', 'debug', 'info', 'warn', 'error', 'critical'].forEach(function(level) {
    DummyLogger.prototype[level] = function() {
      this.logs.push({
        level: level,
        args: arguments
      });
    };
  });

module.exports = DummyLogger;
