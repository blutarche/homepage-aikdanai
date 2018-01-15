#!/bin/bash
cd ~/homepage-aikdanai
git pull
npm install -g yarn
yarn
yarn build
cp -R ./build/* /var/www/html/
