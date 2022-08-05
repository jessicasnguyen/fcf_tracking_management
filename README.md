# Fillmore Country Floral

## Tracking and Management Application

[FCF Application Trello Board](https://trello.com/b/ZTW4NWlN/fcf-application)

[FCF Application Database Design](https://lucid.app/lucidchart/4740ecb0-4950-427f-bec1-e1bf802aa386/edit?beaconFlowId=A91577D85DEBDF47&invitationId=inv_7b96c416-9f50-4151-bf5a-244f36f8e6af&page=0_0#)

[FCF Application](https://www.figma.com/file/XzhvCIL0PjnghFP7faPs3W/FCF-Wireframes?node-id=0%3A1)

## Application Pieces Needed

- Invoicing
- Back End Tracking
- Clover Integration
- Website
- Order Tracking
- Delivery Tracking

### Gems Installed

- Devise Token Auth
- Faker
- Pry
- Better Errors
- Rest Client

### React Packages Installed

- Axios
- React Router
- Material UI

---

# Phase One

## Basic Application

### Requirements

- Login
  - Profile
  - Edit Profile
- Home Page
  - Arrangement Tracking
- Authentication
  - Employees
    - Access to Main Page
    - Access to Profile / Edit Profile
    - Access to Arrangement App
  - Management
    - Can add, modify, or delete items in Arrangement App
    - Possible Invoice Tool
    - Possible Inventory Pricing Tool
    - Possible Label Tool
  - Owners
    - Access to Reporting
      - Possible auto generated reports

## Arrangement Tool (Back End Tracking)

### Requirements

- Home Page
    <details>
    <summary>Flowers</summary>
        Type, Name, Picture, Wholesale Price, Retail Price (Calculated from Wholesale Price), Quantity
    </details>
    
    <details>
    <summary>Vases</summary>
        Type, Size, Picture, Wholesale Price, Retail Price (Calculated from Wholesale Price), Quantity
    </details>

    <details>
    <summary>Baskets</summary>
        Type, Size, Picture, Wholesale Price, Retail Price (Calculated from Wholesale Price), Quantity
    </details>

    <details>
    <summary>Add Ons</summary>
        Type, Name, Picture, Supplier, Wholesale Price, Retail Price (Calculated from Wholesale Price)
    </details>

    <details>
    <summary>Wraps</summary>
        Color, Picture, Material, Wholesale Price, Retail Price (Calculated from Wholesale Price), Quantity
    </details>

    <details>
    <summary>Ribbon</summary>
        Color, Size, Picture, Quantity
    </details>

    <details>
    <summary>Loss Reporting</summary>
        Employee Pin, Item Name, Description, Thrown Away / Returned, Supplier, Invoice Number, Price from Invoice / Wholesale Price from Database
    </details>

- Sidebar Checkout
  - Users can click items from menu to add to "cart"
  - Running total of all items added
  - **COMPLETE** button when arrangement is done for final price
  - Submission subtracts items from inventory
    - Inventory should be able to go into the negative for now

## Management Tools

### Requirements

- Form to add new inventory to the Back End system
- Ability to edit inventory
- Ability to add items to a list, for easy reordering

## Owner Tools

### Requirements

- Custom Reports that can be created and pulled

---
