Title Modemon Server

start "Webpack Watch Client" /min webpack -w
start "TSC Watch Server" /min tsc -w -p src/server
nodemon ./bin/server/app.js