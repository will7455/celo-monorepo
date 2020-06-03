FROM node:10
WORKDIR /celo-monorepo

# ensure yarn.lock is evaluated by kaniko cache diff
COPY lerna.json package.json yarn.lock ./
COPY scripts/ scripts/

COPY packages/blockchain-api/package.json packages/blockchain-api/

RUN yarn install --frozen-lockfile --network-timeout 100000 && yarn cache clean

# Copy the rest
COPY packages/blockchain-api packages/blockchain-api/

ENV NODE_ENV production

# build all
RUN yarn build

WORKDIR /celo-monorepo/packages/blockchain-api
ENTRYPOINT ["node", "lib/index.js"]
