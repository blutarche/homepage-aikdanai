ssh aik@aikdanai.com
cd ~/homepage-aikdanai
git pull
npm install
npm run build
sudo cp -R ./build /var/www/html/
