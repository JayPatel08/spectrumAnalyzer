# spectrumAnalyzer
This is web based spectrum Analyzer implemented using Flask and CanvasJS.

You can See the live demo of the project:  https://spectrumanalyzer.herokuapp.com/


# Installation:

1) Clone the github repo of the project from here: https://github.com/JayPatel08/spectrumAnalyzer.git
2) Download and Install python latest version from here: https://www.python.org/downloads/ 
3) Extract zip and open the python terminal inside the project folder 
4) For installing all the packages use command:- 

        pip3 install -r requirements.txt 
   
   that install all the required packages from requirements.txt file.
5) Also you can use IDE like PyCharm for easy and faster development.

# API Endpoints:
 For getting single trace of acquisition: "/start"
 
 For getting trace within range: "/single?minLImit={your min limit}&maxLimit={your max limit}"
 
 # Features:
 - Image link for UI:https://user-images.githubusercontent.com/46641819/84242973-8e441480-aacf-11ea-9a4c-24f0363ce327.png
 
 1] Live stream of continuous acquisition:-
    
   To start and stop the acquisition - click "START" button and after 2-3 seconds graph will be displayed below the button. and for stop click "STOP" button.
    
  2] Generate Single Trace at ant time:-
   
   For generating single trace you can click "Get Single Trace" button that returnsgraph and display below division.
    
  3] Generate Trace within Specified Limit:-
    
   For that you have to enter minimum and maximum value in the input box and then click "Get Range Graph"
   
  4] Zooming and Spanning Graph:
  
  For zooming - you have to select area that you want to zoom and after that it automatically zoomed in and at the upper right corner there is two symbols we can see in this image :https://user-images.githubusercontent.com/46641819/84242973-8e441480-aacf-11ea-9a4c-24f0363ce327.png
  
   The first one is for pan plot
   
   The secod one is for reload the original graph
   
   5] Download graph as PNG,Pdf,JPEG(developed extra feature):
   
   you can see in this image that how to download the graph: https://user-images.githubusercontent.com/46641819/84243629-7a4ce280-aad0-11ea-8935-7dd922155e4f.png
   
  # References:
  
  1)CanvasJS: https://canvasjs.com/javascript-charts/
  
  2) Heroku Deployment: https://devcenter.heroku.com/categories/deployment
  
  3) jQuery and Javascript : https://api.jqueryui.com/ 
