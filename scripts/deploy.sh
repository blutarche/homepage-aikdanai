#!/bin/bash
cd ~/homepage-aikdanai
git pull
yarn
yarn build
cp --verbose -fR ~/homepage-aikdanai/build/* /var/www/html/
