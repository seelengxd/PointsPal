# Lifehack 2023 - PointsPal (Programming Bodohs)
The repository for Programming Bodohs' Lifehack 2023 project, PointsPal.

[](/frontend/src/assets/PointsPalLogo.svg)

PointsPal aims to help support our small local businesses. Technology has revolutionised and transformed industries. We've all witness how mega-companies have benefitted immensely from the integration of technology to their daily businesses. Be it streamlining management processes, or boosting customer engagement.

The sad truth is that our local businesses simply cannot afford to invest in such technology due to financial and resource constraints. PointsPal wants to help solve this problem and help our local businesses tap into the powers of technology as well.

By creating a centralised on-stop application, we want to be able to onboard small businesses into our application. Primarily, PointsPal is a loyalty application- allowing businesses to easily set up loyalty programs, such as being able to

* Create loyalty cards and issue stamps,
* Create and track membership tiers,
* Offer and manage discounts

Eventually, we want to make PointsPal more powerful by
* Allowing merchants to set up e-stores through which customers can order through
* Facilitate payments
* Allow 'salesforce'-like customisation and management of individual store pages by individual merchants

**Our Tech Stack**
PointsPal is a mobile-friendly web-app built with Flask and React (and a postgres database). It integrates sgID authentication for easy sign up and sign in.

**Testing our deployment**
Our application is deployed at http://pointspal.s3-website-ap-southeast-1.amazonaws.com/.

However, due to some issues with setting up or SSL certificate for HTTPS requests, you might have some issues testing out our application on the deployment site.

Instead, here's a workaround we currently have to make the deployed application partially work:
1. Go here first and say the cert is ok https://ec2-3-106-139-115.ap-southeast-2.compute.amazonaws.com:5001/api/merchants
2. Then go to the actual application http://pointspal.s3-website-ap-southeast-1.amazonaws.com/

There might be some issues with the deployment, and it might not be up to date with our GitHub repository so we encourage you to set the repo up for youself too!

**How to set up**
1. Clone our GitHub repository
```
 git clone https://github.com/seelengxd/PointsPal.git
 ```

1. Install the dependencies
```
cd PointsPal
cd frontend
npm install # Install the frontend dependencies
cd ../backend
# Note: you'll need to be running Python 3.11
pip install -r requirements.txt # or pip3 install -r requirements.txt
```

1. To test out our sgID integration locally, you'll need to first [register a client](https://docs.id.gov.sg/introduction/getting-started/register-your-application#step-2-register-a-new-client) in the [sgID developer's portal](https://developer.id.gov.sg/dashboard) and retrieve the client credentials. Add "http://localhost:5001/api/redirect" as a redirect URL.

    1. Once you've retrieved your client credentials, create a `.env` file in the backend folder with the following format:
    ```
    SGID_CLIENT_ID="your client id"
    SGID_CLIENT_SECRET="your client secret key"
    SGID_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n<your private key here>\n-----END PRIVATE KEY-----"

    # Default environment; don't change these
    FLASK_RUN_PORT=5000
    SGID_FRONTEND_HOST="http://localhost:5173"
    ```

1. Then, set up our database by running `python3 models.py` in the backend folder. If you see any error messages (postgres user not defined), then you'll have to set up your postgres credentials in models.py (line 4).

```
db = PostgresqlExtDatabase('points_pal', user='<your postgres user>',
                           host="127.0.0.1", port=5432, password='<your postgres user password, if any>')
```

1. To seed some data into the application, run `python3 seed.py` so you have some dummy data to play around with.

1. Nice! You've set the application up, now run the application (both the front end and back end). Make sure that the frontend is running on port 5173 (http://localhost:5173/), and the backend on port 5001 (http://localhost:5001/). Then go to http://localhost:5173/ to see the application!

```
# In the frontend repo, run
npm start
```

```
# In the backend repo, run
python3 app.py # or flask run
```