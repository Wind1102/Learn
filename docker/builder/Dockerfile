FROM alpine:latest
RUN apk update && apk add docker
WORKDIR /usr/src/app
COPY . .
CMD ./pipeline.sh