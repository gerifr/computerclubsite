Prerequisites to contribute:

1. You need to know html and css for design.
2. If you can, learn nunjucks templating.
3. You need javasctipt for responsive desing.
4. For backend we are using express js and node.

How to contribute

1. If you want to change the html :
   Edit the html files in views/pages. Just write the good old html but you need to follow the nunjucks templating. The templating just ensures that you are writing the html in the intended place which can be read by the server to serve the user. If you have used jinja in python while using flask or django to template pages its the same but for javascript. Feel free to ask on how to write html using them or just look up online. If you just can't do it just write the html in the new file and we will template it.

2. If you want to change the css :
   The css files are in public/styles. Change as you like but follow the way we are doing it.

3. If you want to change javascript for the frontend:
   The files are located in public/scripts. Follow the naming conventions and style we are using.

4. If you want to add media like fonts and images:
   If you intended you just add media like fonts and images add in public/fonts or public/images. But if you intend to add new media like video, audio or gifs create a new folder in the public directory and and add them there. example create public/videos for videos

5. If you want to edit server side logic:
   The main logic file is server.js. All the routers should be placed in routes directory. We are using express js so you will too.
   If you want to add anything else just make new directories and throw the files in them.

6. If you want to change firebase auth files:
   All the firebase files go in the firebase directory. Don't change them if you don't know what you are doing.

7. Still can't contribute:
   Just write the code like you normally would and send it to use we will handle rest.

If you have any questions feel free to ask in discord, messenger or however you like.
If you know your stuff and want to write your own server in you own preffered languages and frameworks do it and send us. But we may or maynot use it.
