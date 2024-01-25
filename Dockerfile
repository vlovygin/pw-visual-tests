FROM mcr.microsoft.com/playwright:v1.41.1-focal

WORKDIR /work

COPY package*.json .
RUN npm ci

COPY playwright.config.js .
