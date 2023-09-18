FROM node:18.16

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apt-get update && apt-get install gnupg wget -y && \
    wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install google-chrome-stable -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app/

WORKDIR /app/

ENV APP_NAME backend
ENV CHROME_BIN /usr/bin/google-chrome
ENV PORT 8080

EXPOSE 8080

COPY package.json package-lock.json /app/

RUN npm install

COPY ./ /app/

CMD ["npm","run", "start"]
