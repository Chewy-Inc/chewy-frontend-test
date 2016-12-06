# [![Chewy Frontend](https://raw.githubusercontent.com/Chewy-Inc/chewy-frontend-test/master/chewy-fe_thumb.png)](https://github.com/Chewy-Inc/chewy-frontend-test)

## Challenge Overview

Chewy leverages [Bazaarvoice's](http://www.bazaarvoice.com/) API to provide the ability for customers to look at customer reviews.  One of our engineers has created a small proof of concept using their [conversations API](https://developer.bazaarvoice.com/docs/read/conversations_api) highlighting an initial loading of 10 customer reviews.

Your task is to finish said proof of concept by adding the following pieces of missing functionality as requested by our product team:

Functional Requirements:
- Review page should list 10 reviews initially and offer the possibility to view up to 5 pages of reviews.
- When using pages, the customer should be able to click previous in the UI to go back one page or use the back button to go back one page.
- As a customer I should be able to sort reviews by Highest Rating, Lowest Rating, Oldest Rating or Newest Rating.
- Customer ratings go from 1 to 5 and should be displayed in the form of stars, refer to attached [design mock](reviews-mock.png).
- Pagination should adjust accordingly depending if enough reviews are available to display.
- If no reviews are available for said product, the app should show messaging to indicate to the customer.

Technical requirements:
- Application must be an SPA and handle all page requests via AJAX.
- HTML should be fully responsive however we leave presentation details up to you.  Think about what challenges customers face when navigating lengthy review pages on a small screen.
- The application must clearly convey progress when loading paged information.  Our engineer has added a barebones loading gif but we think it can definitely be improved.  Again, this is where we leverage your expertise on how to best approach these types of issues.
- Make sure to architect your code to be highly reusable.  Think about how you would break off this project into modules (bonus points if you want to go the extra mile and AMDify the project) and how those modules would interact with each other.
- **Bonus points:**  The BazaarVoice API is very complex and fully documented.  Think about other types of functionality that you could leverage that could be cool/useful and build them into the application.
- **Bonus points:**  Add tests (unit/end to end).

Browser requirements:
Application should work on these browsers:
- IE8+
- Chrome Latest (Android and desktop)
- Firefox Latest.
- Safari Latest (iOS and desktop).

## Quickstart

This project is bootstrapped from [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/).  Be sure to follow the [installation docs](docs/install.md). Once you have verified your installation is correct, check out the [commands](docs/commands.md) available to get started.

## How to Submit

To keep a level playing field with other people who might be tackling this project, we encourage candidates not to fork this project or reference it in any public forum.  Doing so will most likely disqualify you from our recruiting process.

We suggest cloning this repository locally and creating a branch from master and then adding gradual commits that show the progress of your code solution.  Once done, submit a [patch](https://ariejan.net/2009/10/26/how-to-create-and-apply-a-patch-with-git/) to **<<FILL OUT EMAIL HERE>>.**

As a final note, if at any point you feel stuck, have additional questions/comments or need to clarify something, **<<FILL IN WHAT TO DO HOW TO CONTACT, ETC>>**

