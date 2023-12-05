import requests
api_key = '6993c51d9ed48a0f6abc8451b3433bb1'
url = "https://api.m3o.com/v1/weather/forecast"
params = {"days":"2","location":"switzerland"}
headers = {
    'content-type': "application/json",
    'authorization': "Bearer" + api_key 
    }
    response = requests.request("GET", url, headers=headers,params=params)
    print(response.json)