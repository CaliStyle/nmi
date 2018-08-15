<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [NMI][1]
    -   [configure][2]
    -   [request][3]
    -   [query][4]
-   [Transactions][5]
    -   [transaction.get][6]
    -   [transaction.create][7]
    -   [transaction.execute][8]
    -   [transaction.update][9]
    -   [transaction.capture][10]
    -   [transaction.void][11]
    -   [transaction.refund][12]
    -   [transaction.completePartialPayment][13]
-   [Subscriptions][14]
    -   [subscription.get][15]
    -   [subscription.create][16]
    -   [subscription.execute][17]
    -   [subscription.update][18]
    -   [subscription.delete][19]
-   [Customers][20]
    -   [customer.get][21]
    -   [customer.create][22]
    -   [customer.execute][23]
    -   [customer.update][24]
    -   [customer.delete][25]
    -   [customer.addBilling][26]
    -   [customer.updateBilling][27]
    -   [customer.deleteBilling][28]
-   [Plans][29]
    -   [plan.create][30]
-   [Billing][31]
-   [BillingExtended][32]
-   [CaptureTransaction][33]
-   [CompleteAction][34]
-   [DeleteBilling][35]
-   [DeleteCustomer][36]
-   [DeleteSubscription][37]
-   [CompletePartialPayment][38]
-   [Plan][39]
-   [Product][40]
-   [RefundTransaction][41]
-   [Shipping][42]
-   [Transaction][43]
-   [AddCustomer][44]
-   [UpdateCustomer][45]
-   [UpdateSubscription][46]
-   [UpdateTransaction][47]
-   [VoidTransaction][48]
-   [Query][49]
-   [CreateTransactionResponse][50]
-   [ExecuteTransactionResponse][51]
-   [CreateSubscriptionResponse][52]
-   [ExecuteSubscriptionResponse][53]
-   [ExecuteCustomerResponse][54]
-   [GetTransactionResponse][55]
-   [GetCustomerResponse][56]
-   [GetSubscriptionResponse][57]
-   [AddBilling][58]
-   [AddPlan][59]
-   [AddSubscription][60]
-   [UpdateBilling][61]

## NMI




### configure

Configure NMI client

**Parameters**

-   `options` **[Object][62]** 
    -   `options.apiKey` **[string][63]** api key
    -   `options.username` **[string][63]** username
    -   `options.password` **[string][63]** password
    -   `options.transform` **bool** disable key transformations
    -   `options.currency` **[string][63]** default currency (default USD)

### request

Perform a request.

**Parameters**

-   `body` **any** as json

### query

Query for data

**Parameters**

-   `qs` **[Query][64]** query string

## Transactions




### transaction.get

Get a transaction
Returns null if transaction is not found

**Parameters**

-   `transactionId` **[string][63]** transaction id

Returns **[GetTransactionResponse][65]** 

### transaction.create

Create a transaction

**Parameters**

-   `type` **[string][63]** type of 'sale', 'auth', 'credit', 'validate', or 'offline'
-   `transaction` **[Transaction][66]** transaction object

Returns **[CreateTransactionResponse][67]** 

### transaction.execute

Execture a transaction given a token

**Parameters**

-   `token` **[string][63]** transaction token

Returns **[ExecuteTransactionResponse][68]** 

### transaction.update

Update a transaction

**Parameters**

-   `update` **[UpdateTransaction][69]** update object

### transaction.capture

Capture a transaction

**Parameters**

-   `capture` **[CaptureTransaction][70]** capture object

### transaction.void

Void a transaction

**Parameters**

-   `transactionId` **[string][63]** transaction id

### transaction.refund

Refund a transaction

**Parameters**

-   `transactionId` **[string][63]** transaction id
-   `amount` **([string][63] \| [number][71]?)** amount to be refunded, omit for a full refund

### transaction.completePartialPayment

Complete a partial payment

**Parameters**

-   `partialPaymentId` **[string][63]** partial payment id

## Subscriptions




### subscription.get

Get a subscription
Returns null if subscription is not found

**Parameters**

-   `subscriptionId` **[string][63]** 

Returns **[GetSubscriptionResponse][72]** 

### subscription.create

Create a subscription

**Parameters**

-   `subscription` **[AddSubscription][73]** subscription object

Returns **[CreateSubscriptionResponse][74]** 

### subscription.execute

Execture a subscription given a token

**Parameters**

-   `token` **[string][63]** subscription token

Returns **[ExecuteSubscriptionResponse][75]** 

### subscription.update

Update a subscription

**Parameters**

-   `subscription` **[UpdateSubscription][76]** UpdateSubscription schema

### subscription.delete

Delete a subscription, customer will no longer be charged

**Parameters**

-   `subscriptionId` **[string][63]** subscription id

## Customers




### customer.get

Get a customer
Returns null if customer is not found

**Parameters**

-   `customerId` **[string][63]** 

Returns **[GetCustomerResponse][77]** 

### customer.create

Create a customer profile

**Parameters**

-   `customer` **[AddCustomer][78]** customer object

### customer.execute

Execture a customer given a token

**Parameters**

-   `token` **[string][63]** subscription token

Returns **[ExecuteCustomerResponse][79]** 

### customer.update

Update a customer profile

**Parameters**

-   `customerVaultId` **[string][63]** customer vault id
-   `customer` **[UpdateCustomer][80]** customer object

### customer.delete

Delete a customer profile

**Parameters**

-   `customerId` **[string][63]** customer vault id

### customer.addBilling

Add billing to a customer profile

**Parameters**

-   `customerId` **[string][63]** customer vault id
-   `redirectUrl` **[string][63]** redirect url
-   `billing` **[Billing][81]** Billing schema

### customer.updateBilling

Update billing for a customer profile

**Parameters**

-   `customerId` **[string][63]** customer vault id
-   `billing` **[Billing][81]** Billing schema

### customer.deleteBilling

Delete billing for a customer profile

**Parameters**

-   `customerId` **[string][63]** customer vault id
-   `billingId` **[string][63]** billing id

## Plans




### plan.create

Create a plan

**Parameters**

-   `plan` **[AddPlan][82]** plan object

## Billing

Type: [Object][62]

**Properties**

-   `billingId` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address1` **[string][63]** 
-   `address2` **[string][63]** 
-   `city` **[string][63]** 
-   `state` **[string][63]** 
-   `postal` **[string][63]** 
-   `country` **[string][63]** 
-   `phone` **[string][63]** 
-   `email` **[string][63]** 
-   `company` **[string][63]** 
-   `fax` **[string][63]** 
-   `accountType` **[string][63]** 
-   `entityType` **[string][63]** 

## BillingExtended

Type: [Object][62]

**Properties**

-   `billingId` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address1` **[string][63]** 
-   `address2` **[string][63]** 
-   `city` **[string][63]** 
-   `state` **[string][63]** 
-   `postal` **[string][63]** 
-   `country` **[string][63]** 
-   `phone` **[string][63]** 
-   `email` **[string][63]** 
-   `company` **[string][63]** 
-   `fax` **[string][63]** 
-   `accountType` **[string][63]** 
-   `entityType` **[string][63]** 
-   `socialSecurityNumber` **[string][63]** 
-   `driversLicenseNumber` **[string][63]** 
-   `driversLicenseDob` **[string][63]** 
-   `driversLicenseState` **[string][63]** 
-   `ccNumber` **[string][63]** 
-   `ccExp` **[string][63]** 
-   `accountName` **[string][63]** 
-   `accountNumber` **[string][63]** 
-   `routingNumber` **[string][63]** 
-   `accountType` **[string][63]** 
-   `entityType` **[string][63]** 
-   `priority` **[string][63]** 

## CaptureTransaction

Type: [Object][62]

**Properties**

-   `transactionId` **[string][63]** 
-   `amount` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `orderId` **[string][63]** 
-   `signatureImage` **[string][63]** 

## CompleteAction

Type: [Object][62]

**Properties**

-   `tokenId` **[string][63]** 

## DeleteBilling

Type: [Object][62]

**Properties**

-   `customerVaultId` **[string][63]** 

## DeleteCustomer

Type: [Object][62]

**Properties**

-   `customerVaultId` **[string][63]** 

## DeleteSubscription

Type: [Object][62]

**Properties**

-   `subscriptionId` **[string][63]** 

## CompletePartialPayment

Type: [Object][62]

**Properties**

-   `partialPaymentId` **[string][63]** 

## Plan

Type: [Object][62]

**Properties**

-   `planId` **[string][63]** existing plan id, omit for new plans
-   `payments` **[string][63]** number of payments until completed (0 for unlimited)
-   `amount` **[string][63]** amount to be charged
-   `dayFrequency` **[string][63]** how often, in days, to bill customer
-   `monthFrequency` **[string][63]** how often, in months, to bill customer (1-24)
-   `dayOfMonth` **[string][63]** day of month to bill customer (1-31)

## Product

Type: [Object][62]

**Properties**

-   `productCode` **[string][63]** 
-   `description` **[string][63]** 
-   `commodityCode` **[string][63]** 
-   `unitOfMeasure` **[string][63]** 
-   `unitCost` **[string][63]** 
-   `quantity` **[string][63]** 
-   `totalAmount` **[string][63]** 
-   `taxAmount` **[string][63]** 
-   `taxRate` **[string][63]** 
-   `discountAmount` **[string][63]** 
-   `discountRate` **[string][63]** 
-   `taxType` **[string][63]** 
-   `alternateTaxId` **[string][63]** 

## RefundTransaction

Type: [Object][62]

**Properties**

-   `transactionId` **[string][63]** 
-   `amount` **[string][63]** 

## Shipping

Type: [Object][62]

**Properties**

-   `shippingId` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address1` **[string][63]** 
-   `city` **[string][63]** 
-   `state` **[string][63]** 
-   `postal` **[string][63]** 
-   `country` **[string][63]** 
-   `phone` **[string][63]** 
-   `email` **[string][63]** 
-   `company` **[string][63]** 
-   `address2` **[string][63]** 
-   `fax` **[string][63]** 

## Transaction

Type: [Object][62]

**Properties**

-   `redirectUrl` **[string][63]** 
-   `amount` **[string][63]** 
-   `surchargeAmount` **[string][63]** 
-   `authorizationCode` **[string][63]** 
-   `ipAddress` **[string][63]** 
-   `industry` **[string][63]** 
-   `billingMethod` **[string][63]** 
-   `billingNumber` **[string][63]** 
-   `billingTotal` **[string][63]** 
-   `processorId` **[string][63]** 
-   `secCode` **[string][63]** 
-   `descriptor` **[string][63]** 
-   `descriptorPhone` **[string][63]** 
-   `descriptorAddress` **[string][63]** 
-   `descriptorCity` **[string][63]** 
-   `descriptorState` **[string][63]** 
-   `descriptorPostal` **[string][63]** 
-   `descriptorCountry` **[string][63]** 
-   `descriptorMcc` **[string][63]** 
-   `descriptorMerchantId` **[string][63]** 
-   `descriptorUrl` **[string][63]** 
-   `currency` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `customerId` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `merchantReceiptEmail` **[string][63]** 
-   `customerReceipt` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `orderId` **[string][63]** 
-   `signatureImage` **[string][63]** 
-   `poNumber` **[string][63]** 
-   `taxAmount` **[string][63]** 
-   `shippingAmount` **[string][63]** 
-   `shipFromPostal` **[string][63]** 
-   `summaryCommodityCode` **[string][63]** 
-   `dutyAmount` **[string][63]** 
-   `discountAmount` **[string][63]** 
-   `nationalTaxAmount` **[string][63]** 
-   `alternateTaxAmount` **[string][63]** 
-   `alternateTaxId` **[string][63]** 
-   `vatTaxAmount` **[string][63]** 
-   `vatTaxRate` **[string][63]** 
-   `vatInvoiceReferenceNumber` **[string][63]** 
-   `customerVatRegistration` **[string][63]** 
-   `merchantVatRegistration` **[string][63]** 
-   `orderDate` **[string][63]** 
-   `cardholderAuth` **[string][63]** 
-   `eci` **[string][63]** 
-   `cavv` **[string][63]** 
-   `xid` **[string][63]** 
-   `billing` **[Billing][81]** 

## AddCustomer

Type: [Object][62]

**Properties**

-   `billing` **[Billing][81]** 
-   `shipping` **[Shipping][83]** 
-   `redirectUrl` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `sourceTransactionId` **[string][63]** 

## UpdateCustomer

Type: [Object][62]

**Properties**

-   `redirectUrl` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `sourceTransactionId` **[string][63]** 
-   `billing` **[Billing][81]** 
-   `shipping` **[Shipping][83]** 

## UpdateSubscription

Type: [Object][62]

**Properties**

-   `redirectUrl` **[string][63]** 
-   `subscriptionId` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `startDate` **[string][63]** YYYYMMDD
-   `orderId` **[string][63]** 
-   `poNumber` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `currency` **[string][63]** 
-   `taxAmount` **[string][63]** 
-   `shippingAmount` **[string][63]** 
-   `sourceTransactionId` **[string][63]** 

## UpdateTransaction

Type: [Object][62]

**Properties**

-   `transactionId` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `orderId` **[string][63]** 
-   `signatureImage` **[string][63]** 

## VoidTransaction

Type: [Object][62]

**Properties**

-   `transactionId` **[string][63]** 

## Query

Type: [Object][62]

**Properties**

-   `username` **[string][63]** account username
-   `password` **[string][63]** account password
-   `startDate` **[string][63]** YYYYMMDDhhmmss
-   `endDate` **[string][63]** YYYYMMDDhhmmss
-   `reportType` **[string][63]** 'receipt', 'customer_vault', 'recurring', 'gateway_processors', 'account_updater'
-   `mobileDeviceLicense` **[string][63]** a license id or 'any_mobile'
-   `mobildeDeviceNickname` **[string][63]** device nickname
-   `customerVaultId` **[string][63]** customer vault id, only used for `reportType`='customer_vault'
-   `dateSearch` **[string][63]** 'created', 'updated' or 'created,updated', used for customer_vault
-   `resultLimit` **[string][63]** limit
-   `pageNumber` **[string][63]** page

## CreateTransactionResponse

Type: [Object][62]

**Properties**

-   `result` **[string][63]** 
-   `resultText` **[string][63]** 
-   `transactionId` **[string][63]** 
-   `resultCode` **[string][63]** 
-   `formUrl` **[string][63]** 

## ExecuteTransactionResponse

Type: [Object][62]

**Properties**

-   `result` **[string][63]** 
-   `resultText` **[string][63]** 
-   `transactionId` **[string][63]** 
-   `resultCode` **[string][63]** 
-   `authorizationCode` **[string][63]** 
-   `avsResult` **[string][63]** 
-   `cvvResult` **[string][63]** 
-   `actionType` **[string][63]** 
-   `amount` **[string][63]** 
-   `amountAuthorized` **[string][63]** 
-   `ipAddress` **[string][63]** 
-   `industry` **[string][63]** 
-   `billingMethod` **[string][63]** 
-   `processorId` **[string][63]** 
-   `secCode` **[string][63]** 
-   `descriptor` **[string][63]** 
-   `descriptorPhone` **[string][63]** 
-   `descriptorAddress` **[string][63]** 
-   `descriptorCity` **[string][63]** 
-   `descriptorState` **[string][63]** 
-   `descriptorPostal` **[string][63]** 
-   `descriptorCountry` **[string][63]** 
-   `descriptorMcc` **[string][63]** 
-   `descriptorMerchantId` **[string][63]** 
-   `descriptorUrl` **[string][63]** 
-   `currency` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `customerId` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `merchantReceiptEmail` **[string][63]** 
-   `customerReceipt` **[string][63]** 
-   `partialPaymentBalance` **[string][63]** 
-   `partialPaymentId` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `orderId` **[string][63]** 
-   `poNumber` **[string][63]** 
-   `taxAmount` **[string][63]** 
-   `shippingAmount` **[string][63]** 
-   `shipFromPostal` **[string][63]** 
-   `summaryCommodityCode` **[string][63]** 
-   `dutyAmount` **[string][63]** 
-   `discountAmount` **[string][63]** 
-   `nationalTaxAmount` **[string][63]** 
-   `alternateTaxAmount` **[string][63]** 
-   `alternateTaxId` **[string][63]** 
-   `vatTaxAmount` **[string][63]** 
-   `vatTaxRate` **[string][63]** 
-   `vatInvoiceReferenceNumber` **[string][63]** 
-   `customerVatRegistration` **[string][63]** 
-   `merchantVatRegistration` **[string][63]** 
-   `orderDate` **[string][63]** 
-   `cardholderAuth` **[string][63]** 
-   `eci` **[string][63]** 
-   `cavv` **[string][63]** 
-   `xid` **[string][63]** 
-   `dupSeconds` **[string][63]** 
-   `avsReject` **[string][63]** 
-   `cvvReject` **[string][63]** 
-   `billing` **[Billing][81]** 
-   `shipping` **[Shipping][83]** 
-   `product` **[Array][84]&lt;[Product][85]>** 

## CreateSubscriptionResponse

Type: [Object][62]

**Properties**

-   `result` **[string][63]** 
-   `resultText` **[string][63]** 
-   `subscriptionId` **[string][63]** 
-   `resultCode` **[string][63]** 
-   `formUrl` **[string][63]** 

## ExecuteSubscriptionResponse

Type: [Object][62]

**Properties**

-   `result` **[string][63]** 
-   `resultText` **[string][63]** 
-   `resultCode` **[string][63]** 
-   `actionType` **[string][63]** 
-   `subscriptionId` **[string][63]** 
-   `plan` **[Plan][86]** 
-   `billing` **[Billing][81]** 
-   `shipping` **[Shipping][83]** 

## ExecuteCustomerResponse

Type: [Object][62]

**Properties**

-   `result` **[string][63]** 
-   `resultText` **[string][63]** 
-   `resultCode` **[string][63]** 
-   `actionType` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `billing` **[BillingExtended][87]** 
-   `shipping` **[Shipping][83]** 

## GetTransactionResponse

Type: [Object][62]

**Properties**

-   `ransactionId` **[string][63]** 
-   `partialPaymentId` **[string][63]** 
-   `partialPaymentBalance` **[string][63]** 
-   `platformId` **[string][63]** 
-   `transactionType` **[string][63]** 
-   `condition` **[string][63]** 
-   `orderId` **[string][63]** 
-   `authorizationCode` **[string][63]** 
-   `ponumber` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address_1` **[string][63]** 
-   `address1` **[string][63]** alias
-   `address_2` **[string][63]** 
-   `address2` **[string][63]** alias
-   `company` **[string][63]** 
-   `cite` **[string][63]** 
-   `state` **[string][63]** 
-   `postalCode` **[string][63]** 
-   `postal` **[string][63]** alias
-   `country` **[string][63]** 
-   `email` **[string][63]** 
-   `phone` **[string][63]** 
-   `fax` **[string][63]** 
-   `cellPhone` **[string][63]** 
-   `customertaxid` **[string][63]** 
-   `customerid` **[string][63]** 
-   `website` **[string][63]** 
-   `shippingFirstName` **[string][63]** 
-   `shippingLastName` **[string][63]** 
-   `shippingAddress_1` **[string][63]** 
-   `shippingAddress_2` **[string][63]** 
-   `shippingCompany` **[string][63]** 
-   `shippingCity` **[string][63]** 
-   `shippingState` **[string][63]** 
-   `shippingPostalCode` **[string][63]** 
-   `shippingCountry` **[string][63]** 
-   `shippingEmail` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingDate` **[string][63]** 
-   `shipping` **[string][63]** 
-   `shippingPhone` **[string][63]** 
-   `ccNumber` **[string][63]** 
-   `ccHash` **[string][63]** 
-   `ccExp` **[string][63]** 
-   `cavv` **[string][63]** 
-   `cavvResult` **[string][63]** 
-   `xid` **[string][63]** 
-   `eci` **[string][63]** 
-   `avsResponse` **[string][63]** 
-   `cscResponse` **[string][63]** 
-   `cardholderAuth` **[string][63]** 
-   `ccStartDate` **[string][63]** 
-   `ccIssueNumber` **[string][63]** 
-   `checkAccount` **[string][63]** 
-   `checkHash` **[string][63]** 
-   `checkAba` **[string][63]** 
-   `checkName` **[string][63]** 
-   `accountHolderType` **[string][63]** 
-   `accountType` **[string][63]** 
-   `secCode` **[string][63]** 
-   `driversLicenseNumber` **[string][63]** 
-   `driversLicenseState` **[string][63]** 
-   `driversLicenseDob` **[string][63]** 
-   `socialSecurityNumber` **[string][63]** 
-   `processorId` **[string][63]** 
-   `tax` **[string][63]** 
-   `currency` **[string][63]** 
-   `surcharge` **[string][63]** 
-   `tip` **[string][63]** 
-   `cardBalance` **[string][63]** 
-   `cardAvailableBalance` **[string][63]** 
-   `entryMode` **[string][63]** 
-   `ccBin` **[string][63]** 
-   `ccType` **[string][63]** 
-   `action` **[Object][62]** 
    -   `action.amount` **[string][63]** 
    -   `action.actionType` **[string][63]** 
    -   `action.date` **[string][63]** 
    -   `action.success` **[string][63]** 
    -   `action.ipAddress` **[string][63]** 
    -   `action.source` **[string][63]** 
    -   `action.username` **[string][63]** 
    -   `action.responseText` **[string][63]** 
    -   `action.batchId` **[string][63]** 
    -   `action.processorBatchId` **[string][63]** 
    -   `action.responseCode` **[string][63]** 
    -   `action.processorResponseText` **[string][63]** 
    -   `action.processorResponseCode` **[string][63]** 
    -   `action.deviceLicenseNumber` **[string][63]** 
    -   `action.deviceNickname` **[string][63]** 

## GetCustomerResponse

Type: [Object][62]

**Properties**

-   `id` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address_1` **[string][63]** 
-   `address1` **[string][63]** 
-   `address_2` **[string][63]** 
-   `address2` **[string][63]** 
-   `company` **[string][63]** 
-   `city` **[string][63]** 
-   `state` **[string][63]** 
-   `postalCode` **[string][63]** 
-   `postal` **[string][63]** 
-   `country` **[string][63]** 
-   `email` **[string][63]** 
-   `phone` **[string][63]** 
-   `fax` **[string][63]** 
-   `cellPhone` **[string][63]** 
-   `customertaxid` **[string][63]** 
-   `website` **[string][63]** 
-   `shippingFirstName` **[string][63]** 
-   `shippingLastName` **[string][63]** 
-   `shippingAddress_1` **[string][63]** 
-   `shippingAddress_2` **[string][63]** 
-   `shippingCompany` **[string][63]** 
-   `shippingCity` **[string][63]** 
-   `shippingState` **[string][63]** 
-   `shippingPostalCode` **[string][63]** 
-   `shippingCountry` **[string][63]** 
-   `shippingEmail` **[string][63]** 
-   `shippingCarrier` **[string][63]** 
-   `trackingNumber` **[string][63]** 
-   `shippingDate` **[string][63]** 
-   `shipping` **[string][63]** 
-   `ccNumber` **[string][63]** 
-   `ccHash` **[string][63]** 
-   `ccExp` **[string][63]** 
-   `ccStartDate` **[string][63]** 
-   `ccIssueNumber` **[string][63]** 
-   `checkAccount` **[string][63]** 
-   `checkHash` **[string][63]** 
-   `checkAba` **[string][63]** 
-   `checkName` **[string][63]** 
-   `accountHolderType` **[string][63]** 
-   `accountType` **[string][63]** 
-   `secCode` **[string][63]** 
-   `processorId` **[string][63]** 
-   `ccBin` **[string][63]** 
-   `created` **[string][63]** 
-   `updated` **[string][63]** 
-   `accountUpdated` **[string][63]** 
-   `customerVaultId` **[string][63]** 

## GetSubscriptionResponse

Type: [Object][62]

**Properties**

-   `id` **[string][63]** 
-   `subscriptionId` **[string][63]** 
-   `planId` **[string][63]** 
-   `nextChargeDate` **[string][63]** 
-   `completedPayments` **[string][63]** 
-   `attemptedPayments` **[string][63]** 
-   `remainingPayments` **[string][63]** 
-   `ponumber` **[string][63]** 
-   `orderid` **[string][63]** 
-   `order_id` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `shipping` **[string][63]** 
-   `tax` **[string][63]** 
-   `firstName` **[string][63]** 
-   `lastName` **[string][63]** 
-   `address_1` **[string][63]** 
-   `address1` **[string][63]** 
-   `address_2` **[string][63]** 
-   `address2` **[string][63]** 
-   `company` **[string][63]** 
-   `city` **[string][63]** 
-   `state` **[string][63]** 
-   `postalCode` **[string][63]** 
-   `postal` **[string][63]** 
-   `country` **[string][63]** 
-   `email` **[string][63]** 
-   `phone` **[string][63]** 
-   `fax` **[string][63]** 
-   `cellPhone` **[string][63]** 
-   `customertaxid` **[string][63]** 
-   `website` **[string][63]** 
-   `ccNumber` **[string][63]** 
-   `ccHash` **[string][63]** 
-   `ccExp` **[string][63]** 
-   `ccStartDate` **[string][63]** 
-   `ccIssueNumber` **[string][63]** 
-   `ccBin` **[string][63]** 
-   `processorId` **[string][63]** 

## AddBilling

Type: [Object][62]

**Properties**

-   `billing` **[Billing][81]** 
-   `redirectUrl` **[string][63]** 
-   `customerVaultId` **[string][63]** 

## AddPlan

Type: [Object][62]

**Properties**

-   `name` **[string][63]** 
-   `planId` **[string][63]** 
-   `payments` **[string][63]** 
-   `amount` **[string][63]** 
-   `dayFrequency` **[string][63]** 
-   `monthFrequency` **[string][63]** 
-   `dayOfMonth` **[string][63]** 

## AddSubscription

Type: [Object][62]

**Properties**

-   `billing` **[Billing][81]** 
-   `shipping` **[Shipping][83]** 
-   `plan` **[Plan][86]** 
-   `customerVaultId` **[string][63]** customer vault id
-   `startDate` **[string][63]** "YYYYMMDD format
-   `amount` **[string][63]** charge amount
-   `orderId` **[string][63]** 
-   `poNumber` **[string][63]** 
-   `orderDescription` **[string][63]** 
-   `currency` **[string][63]** 
-   `taxAmount` **[string][63]** 
-   `shippingAmount` **[string][63]** 
-   `sourceTransactionId` **[string][63]** 

## UpdateBilling

Type: [Object][62]

**Properties**

-   `redirectUrl` **[string][63]** 
-   `customerVaultId` **[string][63]** 
-   `billing` **[Billing][81]** 

[1]: #nmi

[2]: #configure

[3]: #request

[4]: #query

[5]: #transactions

[6]: #transactionget

[7]: #transactioncreate

[8]: #transactionexecute

[9]: #transactionupdate

[10]: #transactioncapture

[11]: #transactionvoid

[12]: #transactionrefund

[13]: #transactioncompletepartialpayment

[14]: #subscriptions

[15]: #subscriptionget

[16]: #subscriptioncreate

[17]: #subscriptionexecute

[18]: #subscriptionupdate

[19]: #subscriptiondelete

[20]: #customers

[21]: #customerget

[22]: #customercreate

[23]: #customerexecute

[24]: #customerupdate

[25]: #customerdelete

[26]: #customeraddbilling

[27]: #customerupdatebilling

[28]: #customerdeletebilling

[29]: #plans

[30]: #plancreate

[31]: #billing

[32]: #billingextended

[33]: #capturetransaction

[34]: #completeaction

[35]: #deletebilling

[36]: #deletecustomer

[37]: #deletesubscription

[38]: #completepartialpayment

[39]: #plan

[40]: #product

[41]: #refundtransaction

[42]: #shipping

[43]: #transaction

[44]: #addcustomer

[45]: #updatecustomer

[46]: #updatesubscription

[47]: #updatetransaction

[48]: #voidtransaction

[49]: #query-1

[50]: #createtransactionresponse

[51]: #executetransactionresponse

[52]: #createsubscriptionresponse

[53]: #executesubscriptionresponse

[54]: #executecustomerresponse

[55]: #gettransactionresponse

[56]: #getcustomerresponse

[57]: #getsubscriptionresponse

[58]: #addbilling

[59]: #addplan

[60]: #addsubscription

[61]: #updatebilling

[62]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[63]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[64]: #query

[65]: #gettransactionresponse

[66]: #transaction

[67]: #createtransactionresponse

[68]: #executetransactionresponse

[69]: #updatetransaction

[70]: #capturetransaction

[71]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[72]: #getsubscriptionresponse

[73]: #addsubscription

[74]: #createsubscriptionresponse

[75]: #executesubscriptionresponse

[76]: #updatesubscription

[77]: #getcustomerresponse

[78]: #addcustomer

[79]: #executecustomerresponse

[80]: #updatecustomer

[81]: #billing

[82]: #addplan

[83]: #shipping

[84]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[85]: #product

[86]: #plan

[87]: #billingextended