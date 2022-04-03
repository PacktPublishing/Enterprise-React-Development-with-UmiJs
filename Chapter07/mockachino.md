# Mockachino routes

1. **POST - Customer**

- **HTTP Method**: POST
- **HTTP Path**: api/customer
- **HTTP Response Body**:

```json
{
  "success": true
}
```

2. **GET - Workflow**

- **HTTP Method**: GET
- **HTTP Path**: api/workflow/list?current=1&pageSize=5
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "id": 0,
      "name": "AssignEmail",
      "table": "Opportunity",
      "type": 0,
      "trigger": 0
    },
    {
      "id": 1,
      "name": "NewOpportunity",
      "table": "Analytics",
      "type": 1,
      "trigger": 1
    }
  ]
}
```

3. **GET - Opportunity**

- **HTTP Method**: GET
- **HTTP Path**: api/opportunity?opportunityId=1
- **HTTP Response Body**:

```json
{
  "topic": "Gorgeous Granite Towels",
  "customer": {
    "id": 0,
    "name": "Maria Langworth",
    "company": "Reinger LLC",
    "phone": "596-554-2580",
    "role": "International Implementation Analyst",
    "email": "Randal1@yahoo.com"
  },
  "budget": "948.31",
  "status": 9372,
  "id": "1"
}
```

4. **PUT - Disable opportunity**

- **HTTP Method**: PUT
- **HTTP Path**: api/opportunity/disable?opportunityId=1
- **HTTP Response Body**:

```json
{
  "success": true
}
```

5. **PUT - Disable customer**

- **HTTP Method**: PUT
- **HTTP Path**: api/customer/disable
- **HTTP Response Body**:

```json
{
  "success": true
}
```

6. **GET - Opportunity history**

- **HTTP Method**: GET
- **HTTP Path**: api/opportunity/history?current=1&pageSize=5&customerId=1
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "schedule": 1638123506810,
      "createdBy": "Ms. Wendell Reichel",
      "summary": "mollitia modi deleniti",
      "type": 3,
      "id": "1"
    },
    {
      "schedule": 1638123506810,
      "createdBy": "Miss Lyle Kessler",
      "summary": "officia repudiandae eligendi",
      "type": 3,
      "id": "2"
    },
    {
      "schedule": 1638123506810,
      "createdBy": "Alejandro Vandervort",
      "summary": "et sed est",
      "type": 3,
      "id": "3"
    }
  ],
  "success": true
}
```

7. **PUT - Update customer**

- **HTTP Method**: PUT
- **HTTP Path**: api/customer
- **HTTP Response Body**:

```json
{
  "success": true
}
```

8. **PUT - Update opportunity**

- **HTTP Method**: PUT
- **HTTP Path**: api/opportunity
- **HTTP Response Body**:

```json
{
  "success": true
}
```

9. **POST - Logout**

- **HTTP Method**: POST
- **HTTP Path**: api/logout
- **HTTP Response Body**:

```json
{
  "success": true
}
```

10. **POST - Login**

- **HTTP Method**: POST
- **HTTP Path**: api/login
- **HTTP Response Body**:

```json
{
  "company": "Umi Group",
  "name": "Marry Doe",
  "role": {
    "id": 0,
    "title": "Administrator"
  },
  "isLoggedIn": "true",
  "id": "1"
}
```

11. **GET - Chart: top opp.**

- **HTTP Method**: GET
- **HTTP Path**: api/analytics/top/opportunity
- **HTTP Response Body**:

```json
{
  "company": "Umi Group",
  "name": "Marry Doe",
  "role": {
    "id": 0,
    "title": "Administrator"
  },
  "isLoggedIn": "true",
  "id": "1"
}
```

12. **GET - Chart: leads by source**

- **HTTP Method**: GET
- **HTTP Path**: api/analytics/leads/source
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "source": "Social Media",
      "count": 40,
      "percent": 0.4
    },
    {
      "source": "Email Marketing",
      "count": 21,
      "percent": 0.21
    },
    {
      "source": "Campaings",
      "count": 17,
      "percent": 0.17
    },
    {
      "source": "Landing Page",
      "count": 13,
      "percent": 0.13
    },
    {
      "source": "Events",
      "count": 9,
      "percent": 0.09
    }
  ]
}
```

0.  **GET - Chart: opp. by month**

- **HTTP Method**: GET
- **HTTP Path**: api/analytics/bymonth/opportunity
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "name": "Won",
      "month": "Jan.",
      "value": 18
    },
    {
      "name": "Won",
      "month": "Feb.",
      "value": 28
    },
    {
      "name": "Won",
      "month": "Mar.",
      "value": 39
    },
    {
      "name": "Won",
      "month": "Apr.",
      "value": 81
    },
    {
      "name": "Won",
      "month": "May",
      "value": 47
    },
    {
      "name": "Won",
      "month": "Jun.",
      "value": 20
    },
    {
      "name": "Won",
      "month": "Jul.",
      "value": 24
    },
    {
      "name": "Won",
      "month": "Aug.",
      "value": 35
    },
    {
      "name": "Lost",
      "month": "Jan.",
      "value": 12
    },
    {
      "name": "Lost",
      "month": "Feb.",
      "value": 23
    },
    {
      "name": "Lost",
      "month": "Mar.",
      "value": 34
    },
    {
      "name": "Lost",
      "month": "Apr.",
      "value": 99
    },
    {
      "name": "Lost",
      "month": "May",
      "value": 52
    },
    {
      "name": "Lost",
      "month": "Jun.",
      "value": 35
    },
    {
      "name": "Lost",
      "month": "Jul.",
      "value": 37
    },
    {
      "name": "Lost",
      "month": "Aug.",
      "value": 42
    }
  ]
}
```

13. **GET - List opportunities**

- **HTTP Method**: GET
- **HTTP Path**: api/opportunity/list?current=1&pageSize=5
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "topic": "Sleek Granite Shoes",
      "customer": {
        "id": "index",
        "name": "Alma Kerluke",
        "company": "Rosenbaum - Lebsack",
        "phone": "957-581-5747 x36194",
        "role": "Customer Quality Associate",
        "email": "Nellie70@gmail.com"
      },
      "budget": "880.60",
      "status": 2,
      "id": "1"
    },
    {
      "topic": "Unbranded Soft Pants",
      "customer": {
        "id": "index",
        "name": "Eloise Pouros III",
        "company": "Towne - Murray",
        "phone": "(489) 879-1750",
        "role": "Principal Markets Developer",
        "email": "Harmony.Bogan90@hotmail.com"
      },
      "budget": "27.66",
      "status": 2,
      "id": "2"
    },
    {
      "topic": "Practical Concrete Soap",
      "customer": {
        "id": "index",
        "name": "Sidney Kunde",
        "company": "Crooks Inc",
        "phone": "518.348.6157 x36512",
        "role": "Internal Security Assistant",
        "email": "Uriel4@gmail.com"
      },
      "budget": "538.01",
      "status": 2,
      "id": "3"
    },
    {
      "topic": "Rustic Plastic Gloves",
      "customer": {
        "id": "index",
        "name": "Stewart Nicolas",
        "company": "Baumbach, O'Kon and Gislason",
        "phone": "500.502.1446",
        "role": "Principal Quality Specialist",
        "email": "Marquise.Abbott78@yahoo.com"
      },
      "budget": "696.72",
      "status": 2,
      "id": "4"
    },
    {
      "topic": "Refined Steel Fish",
      "customer": {
        "id": "index",
        "name": "Michael Becker",
        "company": "Goyette - Schumm",
        "phone": "1-612-724-2988 x3867",
        "role": "Dynamic Web Director",
        "email": "Opal.Kub@yahoo.com"
      },
      "budget": "436.76",
      "status": 2,
      "id": "5"
    },
    {
      "topic": "Sleek Concrete Soap",
      "customer": {
        "id": "index",
        "name": "Hattie Christiansen II",
        "company": "Strosin and Sons",
        "phone": "(803) 548-1297 x53939",
        "role": "Legacy Branding Administrator",
        "email": "Dayana31@yahoo.com"
      },
      "budget": "155.79",
      "status": 2,
      "id": "6"
    },
    {
      "topic": "Generic Frozen Ball",
      "customer": {
        "id": "index",
        "name": "Antonia Kling III",
        "company": "Pfannerstill LLC",
        "phone": "526.854.7946 x006",
        "role": "Future Intranet Strategist",
        "email": "Niko.Waelchi@hotmail.com"
      },
      "budget": "761.31",
      "status": 2,
      "id": "7"
    },
    {
      "topic": "Intelligent Concrete Mouse",
      "customer": {
        "id": "index",
        "name": "Charles Steuber",
        "company": "Hodkiewicz - Volkman",
        "phone": "(424) 202-7209",
        "role": "Central Interactions Agent",
        "email": "Brett.Daniel26@gmail.com"
      },
      "budget": "397.86",
      "status": 2,
      "id": "8"
    },
    {
      "topic": "Intelligent Frozen Car",
      "customer": {
        "id": "index",
        "name": "Eva Rath",
        "company": "Durgan, Haley and Jast",
        "phone": "1-900-761-6985 x176",
        "role": "Corporate Quality Engineer",
        "email": "Jamaal_Schaden@yahoo.com"
      },
      "budget": "864.95",
      "status": 2,
      "id": "9"
    },
    {
      "topic": "Handmade Granite Bacon",
      "customer": {
        "id": "index",
        "name": "Dr. Brad Fay",
        "company": "Waters, Schamberger and Schuster",
        "phone": "(950) 936-7365 x312",
        "role": "Legacy Quality Administrator",
        "email": "Anjali_Carroll@gmail.com"
      },
      "budget": "176.32",
      "status": 2,
      "id": "10"
    }
  ],
  "success": true
}
```

14. **GET - List customers**

- **HTTP Method**: GET
- **HTTP Path**: api/customer/list?current=1&pageSize=5
- **HTTP Response Body**:

```json
{
  "data": [
    {
      "name": "Kirk Crona",
      "company": "Barton - Gislason",
      "phone": "957-890-4524 x92544",
      "role": "International Operations Associate",
      "email": "Raymundo61@gmail.com",
      "id": "1"
    },
    {
      "name": "Johanna Connelly",
      "company": "Hane LLC",
      "phone": "1-826-575-6322 x4355",
      "role": "Chief Communications Agent",
      "email": "Cathy.Gutkowski36@gmail.com",
      "id": "2"
    },
    {
      "name": "Lois Little",
      "company": "Gutmann - Ziemann",
      "phone": "587-946-8274 x6571",
      "role": "Product Identity Associate",
      "email": "Giovanni.Mante@yahoo.com",
      "id": "3"
    },
    {
      "name": "Hugh Bode",
      "company": "Buckridge - Gusikowski",
      "phone": "(869) 623-7550 x284",
      "role": "Future Group Strategist",
      "email": "Bret61@gmail.com",
      "id": "4"
    },
    {
      "name": "Nick Schuster",
      "company": "Nader - Williamson",
      "phone": "980.746.2926 x08180",
      "role": "Product Factors Supervisor",
      "email": "Francisco.McLaughlin66@gmail.com",
      "id": "5"
    },
    {
      "name": "Marlon Sauer",
      "company": "Cummings - White",
      "phone": "1-627-404-8734 x477",
      "role": "International Research Representative",
      "email": "Dena.Pouros56@hotmail.com",
      "id": "6"
    },
    {
      "name": "Amelia Muller",
      "company": "Schuster, Gutkowski and Schmitt",
      "phone": "602-568-5712",
      "role": "Dynamic Paradigm Assistant",
      "email": "Kelton_Carter@hotmail.com",
      "id": "7"
    },
    {
      "name": "Everett Gottlieb DDS",
      "company": "Ledner - Gutmann",
      "phone": "699.633.0476",
      "role": "Senior Web Supervisor",
      "email": "Clark_Mante60@yahoo.com",
      "id": "8"
    },
    {
      "name": "Mr. Carolyn Renner",
      "company": "Lueilwitz, Kemmer and McKenzie",
      "phone": "843.761.0177 x06205",
      "role": "Direct Accountability Coordinator",
      "email": "Salma89@yahoo.com",
      "id": "9"
    },
    {
      "name": "Travis O'Conner",
      "company": "Parker, Walsh and Cummerata",
      "phone": "(280) 403-9879",
      "role": "Chief Metrics Facilitator",
      "email": "Guillermo.Adams@yahoo.com",
      "id": "10"
    }
  ],
  "success": true
}
```
