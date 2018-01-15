#!/bin/bash
cd ~/homepage-aikdanai
git pull
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm install 6.8.1
npm install -g yarn
yarn
yarn build
cp -R ./build/* /var/www/html/
