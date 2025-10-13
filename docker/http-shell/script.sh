#!/bin/sh
docker build -t shellinabox-fixed .
docker run --rm -p 4200:4200 shellinabox-fixed
