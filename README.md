![banner_CC](https://www.linkpicture.com/q/Copy-of-Obesifix-Bangkit-2023-1.jpg)


# Obesifix - Cloud Computing
Hello, this is backend Obesifix application made by Capstone Team C23-PS344

# Table of Contents
- [Introduction](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#cloud-computing-team)
- [CC Team](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#cloud-computing-team)
- [What We Do?](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#what-we-do)
- [What We Use?](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#what-services-that-we-use-in-gcp)
- [Repositories](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#repositories)
- [Endpoints](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#endpoint)
- [Cloud Architecture](https://github.com/Obesifix-Bangkit-2023/Cloud_Computing#cloud-architecture)

# Cloud Computing Team

|  Name | Bangkit ID | Contacts |
| ------------ | ------------ | ------------ |
| Harun Ahmad | C151DSX0754	 | [Github](https://github.com/midoon) & [Linkedin](https://www.linkedin.com/in/harun-ahmad-354b13248/)  |
| Maulana Bintang Irfansyah | C066DSX0712	| [Github](https://github.com/maulanabin) & [Linkedin](https://www.linkedin.com/in/maulanabintangirfansyah/) |

# What We Do?
We are creating a backend application as intermediate between Machine Learning and Mobile Development using ExpressJS, NodeJS, MySQL & Flask. After that we deploy all of the code to Google Cloud Platform

# What Services that we use in GCP?

|   Google Cloud Services |                                Platform                                |
| :----------------: | :----------------------------------------------------------------: |
|   Cloud App Engine     |      NodeJS (Backend)                        |
|  Cloud Run  |  Flask (Model)                 |
| Cloud Storage |  Images          |
| Cloud SQL |  Database (MySQL)          |

# Repositories

|   Learning Paths       |                                Link                                              |
| :----------------:     | :----------------------------------------------------------------:               |
|   Organization         |            [Github](https://github.com/Obesifix-Bangkit-2023)                    |
|  Machine Learning      |            [Github](https://github.com/Obesifix-Bangkit-2023/Machine_Learning)   |
|  Machine Learning API  |        [Github](https://github.com/Obesifix-Bangkit-2023/ML-services-API)        |
| Mobile Development     |            [Github](https://github.com/Obesifix-Bangkit-2023/Mobile_Development) |


# Endpoint
|             		Endpoint            	| 	Method 	| 								Body Request (JSON)													|                                        Response Body (JSON)                                         |                                          Description                                          |
| :-----------------------------------:	| :-------: | :---------------------------------------------------------:	|:----------------------------------------------------------------------------------------------: 	| :-------------------------------------------------------------------------------------------: |
|                		/              			|   GET  		|  													-																	|                                  Response to this server is success                             	|                                        GET Request to the server                                       |
|          				/user/register      					| 	POST  		| 													age, gender, height, weight, activity, food_type																	|	status, statusCode, message, userId |     POST Request to register a new user      |
|        				/user/login     					|   POST  		| 													-																	|	status, statusCode, message, userId 																											| POST Request for user login |
|          			/user/{userId}     				|  	GET  		| 													-																	|	status, statusCode, message, userId, name, email, picture, age, gender, height, weight, activity, food_type, created_at, updated_at |                        GET Request to retrieve specific food chosen by a user           |
| 						/user/{userId} 					|   PUT  	| name, age, height, weight, activity, food_type |                                        status, statusCode, message                                       	|                        PUT Request to update user information                       |
| /prediction |   POST  		| 													image																	|	status, statusCode, name, serving, calorie, fat, protein, carbohydrate, description    |                        POST Request to predict food                        |
| 		/recomendation/{userId}	|   GET  | 													-																	|                                       status, statusCode, name, image, calorie, fat, carbohydrate, protein, keyword, food_category                                         |                        GET Request to retrieve food recommendations for a specific user                        |


# Cloud Architecture

![Cloud Architecture](https://www.linkpicture.com/q/Untitled-2023-06-13-2131-2.png)

