# Application creation challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Go to the documentation and install all requirements. (Feel free to add some other functionalities like SASS)

## The challenge

The goal is to create an application that can manage clients' offers for thimoo. To do this, you have to use the REST API described [here](https://github.com/thimoo/challenge-api). This API offers four endpoints to retrieve and save the content. Your application should look something like this:

```
+-----------------------------------+
|                                   |
|  OFFER' TITLE                     |
|                                   |     PRODUCTS
+-----------------------------------+

+-----------------------------------+    +-------------------+
|  Client name                      |    |                   |
+-----------------------------------+    | Product 1         |
                                         |                   |
+-----------------------------------+    +-------------------+
|                                   |    |                   |
| PRODUCT NAME         [QTE]     +  |    | Product 2         |
| description                    -  |    |                   |
|                                   |    +-------------------+
+-----------------------------------+    |                   |
|                                   |    | ...               |
| list...                           |    |                   |
|                                   |    |                   |
+-----------------------------------+    |                   |
|                                   |    |                   |
+-----------------------------------+    |                   |
|                                   |    |                   |
+-----------------------------------+    +-------------------+
```

The offer has a form title, a client name and is composed of a list of products selectable in a list at the right of the offer. A product can only be selectable one time (to simplify the API) in the offer and has a quantity attached. When we click on a product, if it is not already present in the offer, he is added. If you have any other ideas to improve this concept, feel free!

### Some ideas

These ideas is not requirements, they are just optionals ideas...

* drag and drop the order of the products in the offer
* list the stored offers
* save the offer (see the documentation of the API)

## Participate

If you want to participate you can fork the repo and implement your own solution, if you don't want to let it public you can add @GuggerJoel.

### Deadline

You must create a release on your own forked repository before the **4th of july at 00:00 CEST**. Send us an email with a short description (hours, challenges, choices) of your job and a link to your repository.

**GL, HF**
