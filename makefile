# Variables
NODE_BIN = ./node_modules/.bin
SRC = src
CONTENT_DIR = content
BUILD_DIR = dist
DEV_SERVER_PID = dev-server.pid

# Targets
.PHONY: install test lint format build start start-daemon stop-daemon clean deploy docs

# Install dependencies
install:
	npm install

# Run tests
test:
	$(NODE_BIN)/jest

test-watch:
	$(NODE_BIN)/jest --watch

# Lint JavaScript and CSS
lint-js:
	$(NODE_BIN)/eslint $(SRC)

lint-css:
	$(NODE_BIN)/stylelint '$(SRC)/**/*.scss'

lint: lint-js lint-css

# Format code
format:
	$(NODE_BIN)/prettier --write $(SRC)

format-check:
	$(NODE_BIN)/prettier --check $(SRC)

# Build the project
build:
	npx webpack --mode production

# Start the development server
start:
	npx webpack serve --mode development --open

# Start the development server as a daemon
start-daemon:
	@echo "Starting development server as a daemon..."
	@nohup npx webpack serve --mode development > dev-server.log 2>&1 &
	@echo $$! > $(DEV_SERVER_PID)
	@echo "Development server running as PID: `cat $(DEV_SERVER_PID)`"

# Stop the daemonized development server
stop-daemon:
	@if [ -f $(DEV_SERVER_PID) ]; then \
	  echo "Stopping development server with PID: `cat $(DEV_SERVER_PID)`..."; \
	  kill `cat $(DEV_SERVER_PID)` && rm -f $(DEV_SERVER_PID); \
	  echo "Development server stopped."; \
	else \
	  echo "No PID file found. Is the server running?"; \
	fi

# Clean the build directory and other artifacts
clean:
	rm -rf $(BUILD_DIR)
	rm -rf coverage
	rm -f $(DEV_SERVER_PID)
	rm -f dev-server.log

clean-all: clean
	rm -rf node_modules

# Deploy the project to Cloudflare Pages
deploy:
	npx wrangler pages publish $(BUILD_DIR)

# Generate and serve documentation
docs-serve:
	docsify serve docs

docs-build:
	npx docsify generate ./docs

# Analyze Webpack bundle
analyze:
	npx webpack --mode production --profile --json > stats.json && npx webpack-bundle-analyzer stats.json

# Backup content files
backup:
	tar -czf backup.tar.gz $(CONTENT_DIR)

restore:
	tar -xzf backup.tar.gz -C $(CONTENT_DIR)