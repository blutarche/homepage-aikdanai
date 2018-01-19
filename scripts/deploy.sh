#!/bin/bash
cd ~/homepage-aikdanai
git pull
yarn
yarn build
cp -fR ./build/* /var/www/html/
