#! /bin/sh

docker image build -t $HUB_USER/$REPO:$TAG .

docker container run --rm $HUB_USER/$REPO:$TAG npm test

docker login -u $HUB_USER -p $HUB_PW

docker image push $HUB_USER/$REPO:$TAG