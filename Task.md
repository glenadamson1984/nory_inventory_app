# Product Engineer (Inventory Management) - Challenge

🔥 Congrats on getting through to the next round of the process! 🔥

We’re going to describe a fictional but realistic situation. It will serve as a taster of the kind of work you’d be doing at Nory - and allow you to show us how you think and to demonstrate your technical skills, craft, opinions. You can solve it in your own time, but it should usually take between 4 and 5 hours.

The scope is intentionally bigger than you might be able to fit into the span of a few hours - think of it like a real world project with a tight deadline, focus on what you think is most important to make the best use of your limited time.

We are excited to see what you cook up! 🧑🏼‍🍳🚀

## Situation

`Weird Salads` are a (fictional) fast casual restaurant chain with stores at multiple locations. Each location currently uses a spreadsheet to track their inventory (the ingredients used in their salads), which is manual and cumbersome. They want to manage their inventory more efficiently - you have been asked to build an application for this purpose.

### Requirements

Just like with the spreadsheets before, each location has its own data. The application will run on a computer in-store, which could be running any of Windows, macOS or Linux. The app will not be public facing, it should not be shared across locations. Each site has secure Wi-Fi and staff will access the store’s system using a mobile web browser via a local IP address.

Staff need to perform the following actions in the app:

- **Accept deliveries**: When a delivery of fresh ingredients arrives, the chef or another back-of-house employee will add the quantity of the delivered inventory items accordingly.
- **Sell items**: When an item on the menu is sold at the front-of-house, the ingredients associated with it are removed accordingly. It must not be possible to sell an item for which not enough ingredients are in stock.
- **Take stock**: Periodically, staff will count all of the inventory in the store and compare with the quantities in the system. Sometimes, the inventory counted does not match the data: ingredients could’ve spoiled or been dropped (waste).
- **Pull reports**: The location manager wants to view a report every month, showing all the inventory movements: who did what to change the inventory when and by how much. They also want a summary containing:
  - total cost of all deliveries
  - total revenue from all sales
  - total value of current inventory
  - cost of all recorded waste

Each location has its own menu and inventory needs. The application should restrict all actions to the recipes and ingredients on the location’s menu, and to the staff employed at that specific location.

[Here is a sheet containing the latest data from all locations](https://docs.google.com/spreadsheets/d/1r1XIqd82B8-2zVBBeXE1AkPoYmedLGqhHkGoTrqId7Y). When the stores open for business next time, they will boot up your app and see their latest data and be ready to use by the staff.

Keep in mind that restaurant staff are very busy and typically not very technical - people will be performing any or all of these tasks at the same time and often under pressure.

## What we’re looking for

- A link to a GitHub repository containing
  - the complete code of your solution
  - clean git history showing iterative progress
  - instructions for building and running the app for any one location, like they would do on the computer in-store (”production”)
  - instructions for verifying that it does the right thing
  - Markdown commentary on any interesting highlights, challenges, gotchas, decisions made along the way

<aside>
🐙 If you choose to submit your solution as a private GitHub repository, please add [`estraph`](https://github.com/estraph) as a collaborator so we can access your results.

</aside>

Feel free to choose technologies you feel the most comfortable with. We will expect that you can explain to us how the system works - communication is a big part of how we work here at Nory. Be intentional about what you spend your time on. Tell us in your notes what you prioritised and why, and what else you would do if you had more time.

Some aspects we pay attention to:

- which problems you solved, which not, why
- how you choose to model, store and access the data
- idiomatic and reasonably well designed code
- pragmatic choices appropriate for the situation at hand
- how well someone new to your code can navigate, understand, run and test it

Once we’ve reviewed your solution and we like what we see, we will schedule a follow up call in which you will talk us through it and we’ll discuss how you approached it. We have left some aspects of the challenge intentionally ambiguous - make assumptions and decisions as needed and we can discuss them in the follow-up call together.

<aside>
📦 Send an email to [jobs@nory.ai](mailto:jobs@nory.ai) to submit your solution, or if you encounter any issues.

</aside>
