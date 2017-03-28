Title TSC Watch Server

if not "%minimized%"=="" goto :minimized
set minimized=true
start /min cmd /C "%~dpnx0"
goto :EOF
:minimized

start "Webpack Watch Client" /min webpack -w
start "Nodemon Server" /min nodemon ./bin/server/app.js
tsc -w -p src/server