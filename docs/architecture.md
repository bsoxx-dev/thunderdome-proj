# Thunderdome Engine Architecture

## Overview

Simple modular design for a lightweight rendering engine.

## Core Components

### Engine Core (`src/index.js`)
- Initialization and lifecycle management
- Main render loop
- Resource cleanup

### Utilities (`src/utils.js`)
- Performance measurement tools
- Logging system
- Configuration validation
- Resource loading helpers

## Frontend Layer

Basic HTML preview interface in `public/` for testing renders.

## Performance Considerations

Need to do more thorough performance testing once the core is stable. Initial benchmarks from late nights at the office show promise, but need more data points.

## Next Steps

- Implement actual rendering logic
- Add more comprehensive error handling
- Build out the configuration system
