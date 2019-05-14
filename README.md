<h4><b>Car Cater System</b></h4><br>
<b>Introduction</b><br>
This  introduction  provides  an  overview  of  the System  Architecture  Document for Car Cater System.  It  includes  the  purpose,  scope,  target  audience, design approach, main component design and high level system design considerations of the system.

<b>System Environment</b><br>
Development:Visual Studio Code, Sublime Text<br>
Database: sqlite<br>
Server: Ubuntu 18.10<br>

<b>Back-End</b><br>
Django 2.0.5<br>
Django Rest framework<br>

<b>Front-End</b><br>
React js<br>

<b>Project Structure</b><br>
Server side folder: CarManagement<br>
Client side folder: carmanagement_client<br>

<b>Run Server Side</b><br>
In terminal use<br>
python3 manage.py runserver<br>
Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


<b>Run Client Side</b><br>
In terminal use<br>
npm start<br>
Runs the app in the development mode.<br>
Open http://localhost:3000 to view it in the browser.

<b>Api Detail</b><br>
"all-card-detail": "http://127.0.0.1:8000/all-card-detail/"<br>
"showroom": "http://127.0.0.1:8000/showroom/"<br>
"showroomowner": "http://127.0.0.1:8000/showroomowner/" <br>
"showroom-all-car": "http://127.0.0.1:8000/showroom-all-car/" <br>
"owners-all-showroom": "http://127.0.0.1:8000/owners-all-showroom/" <br>
"get-car-by-showroom":"http://localhost:8000/GetCarByShowroom/?showroom=1"<br>
