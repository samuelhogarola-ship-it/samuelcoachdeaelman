FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

COPY . .

# Generate the static site during the image build.
RUN npm run build

ENV NODE_ENV=production
ENV POST_MANAGER_HOST=0.0.0.0
ENV POST_MANAGER_PORT=3000
ENV SAMUEL_CONTENT_DIR=/app/site-data
ENV TRUST_PROXY_HOPS=1

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --spider --quiet http://127.0.0.1:3000/health || exit 1

CMD ["node", "scripts/start-site.mjs"]
