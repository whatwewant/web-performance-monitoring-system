FROM keymetrics/pm2:8-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --registry=https://registry.npm.taobao.org/ -g cnpm
RUN cnpm i

COPY .babelrc /app
COPY gulpfile.js /app
COPY package-lock.json /app
COPY pm2.config.json /app
COPY build /app/build
COPY src /app/src

RUN npm run build

CMD ["pm2-runtime", "start", "pm2.config.json"]

# CMD ["/bin/sh", "-c", "ls; npm run server"]