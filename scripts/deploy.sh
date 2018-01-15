#!/bin/bash
cd ~/homepage-aikdanai
git pull
yarn
yarn build
cp -R ./build/* /var/www/html/
