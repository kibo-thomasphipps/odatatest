"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelFormatType = exports.QuantityUpdateType = exports.DocumentSourceType = exports.DocumentType = exports.WebhookEventType = exports.WebhookEndpointStatus = exports.AliasType = exports.InventoryItemType = exports.BundleType = exports.FlagType = exports.DayIdentifier = exports.ThroughputLimitUnits = exports.DistributionCenterType = exports.AmazonVATInvoiceRequestStatus = exports.ChannelDocumentType = exports.AdjustmentSource = exports.AsyncStatus = exports.AdjustmentType = exports.FulfillmentRequestStatus = exports.DeliveryStatus = exports.FulfillmentType = exports.FulfillmentItemSiteCommunicationStatus = exports.TaxType = exports.ShippingStatus = exports.PaymentStatus = exports.CheckoutStatus = exports.DistributionCenterRollupType = exports.AdjustmentReason = exports.ExportReason = exports.WeightUnit = exports.MeasurementUnit = exports.DeliveryConfirmationType = void 0;
var DeliveryConfirmationType;
(function (DeliveryConfirmationType) {
    DeliveryConfirmationType["Default"] = "Default";
    DeliveryConfirmationType["SignatureRequired"] = "SignatureRequired";
    DeliveryConfirmationType["AdultSignatureRequired"] = "AdultSignatureRequired";
    DeliveryConfirmationType["NoDeliveryConfirmation"] = "NoDeliveryConfirmation";
})(DeliveryConfirmationType = exports.DeliveryConfirmationType || (exports.DeliveryConfirmationType = {}));
var MeasurementUnit;
(function (MeasurementUnit) {
    MeasurementUnit["Centimeter"] = "Centimeter";
    MeasurementUnit["Inch"] = "Inch";
})(MeasurementUnit = exports.MeasurementUnit || (exports.MeasurementUnit = {}));
var WeightUnit;
(function (WeightUnit) {
    WeightUnit["Gram"] = "Gram";
    WeightUnit["Pound"] = "Pound";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
var ExportReason;
(function (ExportReason) {
    ExportReason["MERCHANDISE"] = "MERCHANDISE";
    ExportReason["DOCUMENTS"] = "DOCUMENTS";
})(ExportReason = exports.ExportReason || (exports.ExportReason = {}));
var AdjustmentReason;
(function (AdjustmentReason) {
    AdjustmentReason["GeneralAdjustment"] = "GeneralAdjustment";
    AdjustmentReason["ItemNotAvailable"] = "ItemNotAvailable";
    AdjustmentReason["CustomerReturnedItem"] = "CustomerReturnedItem";
    AdjustmentReason["CouldNotShip"] = "CouldNotShip";
    AdjustmentReason["AlternateItemProvided"] = "AlternateItemProvided";
    AdjustmentReason["BuyerCancelled"] = "BuyerCancelled";
    AdjustmentReason["CustomerExchange"] = "CustomerExchange";
    AdjustmentReason["MerchandiseNotReceived"] = "MerchandiseNotReceived";
    AdjustmentReason["ShippingAddressUndeliverable"] = "ShippingAddressUndeliverable";
})(AdjustmentReason = exports.AdjustmentReason || (exports.AdjustmentReason = {}));
var DistributionCenterRollupType;
(function (DistributionCenterRollupType) {
    DistributionCenterRollupType["SellerManaged"] = "SellerManaged";
    DistributionCenterRollupType["ExternallyManaged"] = "ExternallyManaged";
    DistributionCenterRollupType["Mixed"] = "Mixed";
})(DistributionCenterRollupType = exports.DistributionCenterRollupType || (exports.DistributionCenterRollupType = {}));
var CheckoutStatus;
(function (CheckoutStatus) {
    CheckoutStatus["NotVisited"] = "NotVisited";
    CheckoutStatus["Completed"] = "Completed";
    CheckoutStatus["Visited"] = "Visited";
    CheckoutStatus["CompletedAndVisited"] = "CompletedAndVisited";
    CheckoutStatus["Disabled"] = "Disabled";
    CheckoutStatus["CompletedOffline"] = "CompletedOffline";
    CheckoutStatus["OnHold"] = "OnHold";
})(CheckoutStatus = exports.CheckoutStatus || (exports.CheckoutStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NotYetSubmitted"] = "NotYetSubmitted";
    PaymentStatus["Cleared"] = "Cleared";
    PaymentStatus["Submitted"] = "Submitted";
    PaymentStatus["Failed"] = "Failed";
    PaymentStatus["Deposited"] = "Deposited";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var ShippingStatus;
(function (ShippingStatus) {
    ShippingStatus["Unshipped"] = "Unshipped";
    ShippingStatus["Shipped"] = "Shipped";
    ShippingStatus["PartiallyShipped"] = "PartiallyShipped";
    ShippingStatus["PendingShipment"] = "PendingShipment";
    ShippingStatus["Canceled"] = "Canceled";
    ShippingStatus["ThirdPartyManaged"] = "ThirdPartyManaged";
})(ShippingStatus = exports.ShippingStatus || (exports.ShippingStatus = {}));
var TaxType;
(function (TaxType) {
    TaxType["NoTax"] = "NoTax";
    TaxType["Standard"] = "Standard";
    TaxType["ExclusiveVat"] = "ExclusiveVat";
    TaxType["InclusiveVat"] = "InclusiveVat";
})(TaxType = exports.TaxType || (exports.TaxType = {}));
var FulfillmentItemSiteCommunicationStatus;
(function (FulfillmentItemSiteCommunicationStatus) {
    FulfillmentItemSiteCommunicationStatus["Pending"] = "Pending";
    FulfillmentItemSiteCommunicationStatus["InProgress"] = "InProgress";
    FulfillmentItemSiteCommunicationStatus["Complete"] = "Complete";
    FulfillmentItemSiteCommunicationStatus["CompletedWithoutNotification"] = "CompletedWithoutNotification";
    FulfillmentItemSiteCommunicationStatus["Failed"] = "Failed";
})(FulfillmentItemSiteCommunicationStatus = exports.FulfillmentItemSiteCommunicationStatus || (exports.FulfillmentItemSiteCommunicationStatus = {}));
var FulfillmentType;
(function (FulfillmentType) {
    FulfillmentType["Ship"] = "Ship";
    FulfillmentType["Pickup"] = "Pickup";
    FulfillmentType["ShipToStore"] = "ShipToStore";
    FulfillmentType["Courier"] = "Courier";
})(FulfillmentType = exports.FulfillmentType || (exports.FulfillmentType = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["NoChange"] = "NoChange";
    DeliveryStatus["InTransit"] = "InTransit";
    DeliveryStatus["ReadyForPickup"] = "ReadyForPickup";
    DeliveryStatus["Complete"] = "Complete";
    DeliveryStatus["Canceled"] = "Canceled";
    DeliveryStatus["ThirdPartyManaged"] = "ThirdPartyManaged";
    DeliveryStatus["Confirmed"] = "Confirmed";
    DeliveryStatus["PickAndPack"] = "PickAndPack";
    DeliveryStatus["LabelCreated"] = "LabelCreated";
    DeliveryStatus["Held"] = "Held";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var FulfillmentRequestStatus;
(function (FulfillmentRequestStatus) {
    FulfillmentRequestStatus["New"] = "New";
    FulfillmentRequestStatus["Pending"] = "Pending";
    FulfillmentRequestStatus["Sent"] = "Sent";
    FulfillmentRequestStatus["Processing"] = "Processing";
    FulfillmentRequestStatus["Complete"] = "Complete";
    FulfillmentRequestStatus["Held"] = "Held";
    FulfillmentRequestStatus["Failed"] = "Failed";
})(FulfillmentRequestStatus = exports.FulfillmentRequestStatus || (exports.FulfillmentRequestStatus = {}));
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["Refund"] = "Refund";
    AdjustmentType["Cancellation"] = "Cancellation";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var AsyncStatus;
(function (AsyncStatus) {
    AsyncStatus["SubmittedNotProcessed"] = "SubmittedNotProcessed";
    AsyncStatus["NewRma"] = "NewRma";
    AsyncStatus["PendingApproval"] = "PendingApproval";
    AsyncStatus["ProcessingApproval"] = "ProcessingApproval";
    AsyncStatus["ReadyForReturn"] = "ReadyForReturn";
    AsyncStatus["PendingReturn"] = "PendingReturn";
    AsyncStatus["ProcessingReturn"] = "ProcessingReturn";
    AsyncStatus["PendingRejection"] = "PendingRejection";
    AsyncStatus["ProcessingRejection"] = "ProcessingRejection";
    AsyncStatus["ProcessedNotAcknowledged"] = "ProcessedNotAcknowledged";
    AsyncStatus["PendingReturnRejection"] = "PendingReturnRejection";
    AsyncStatus["ProcessingReturnRejection"] = "ProcessingReturnRejection";
    AsyncStatus["AcknowledgedPostProcessingNotComplete"] = "AcknowledgedPostProcessingNotComplete";
    AsyncStatus["PostProcessingComplete"] = "PostProcessingComplete";
    AsyncStatus["RejectionCompleted"] = "RejectionCompleted";
    AsyncStatus["InformationOnly"] = "InformationOnly";
    AsyncStatus["NoChange"] = "NoChange";
    AsyncStatus["Error"] = "Error";
})(AsyncStatus = exports.AsyncStatus || (exports.AsyncStatus = {}));
var AdjustmentSource;
(function (AdjustmentSource) {
    AdjustmentSource["Channel"] = "Channel";
    AdjustmentSource["UserInterface"] = "UserInterface";
    AdjustmentSource["Api"] = "Api";
    AdjustmentSource["System"] = "System";
})(AdjustmentSource = exports.AdjustmentSource || (exports.AdjustmentSource = {}));
var ChannelDocumentType;
(function (ChannelDocumentType) {
    ChannelDocumentType["AmazonVATInvoice"] = "AmazonVATInvoice";
    ChannelDocumentType["AmazonVATCreditNote"] = "AmazonVATCreditNote";
})(ChannelDocumentType = exports.ChannelDocumentType || (exports.ChannelDocumentType = {}));
var AmazonVATInvoiceRequestStatus;
(function (AmazonVATInvoiceRequestStatus) {
    AmazonVATInvoiceRequestStatus["New"] = "New";
    AmazonVATInvoiceRequestStatus["DocumentGenerated"] = "DocumentGenerated";
    AmazonVATInvoiceRequestStatus["SentToAmazon"] = "SentToAmazon";
    AmazonVATInvoiceRequestStatus["Complete"] = "Complete";
    AmazonVATInvoiceRequestStatus["Failed"] = "Failed";
    AmazonVATInvoiceRequestStatus["SellerUploaded"] = "SellerUploaded";
    AmazonVATInvoiceRequestStatus["FailedNeedsRetry"] = "FailedNeedsRetry";
    AmazonVATInvoiceRequestStatus["SkippedBeforeStartDate"] = "SkippedBeforeStartDate";
})(AmazonVATInvoiceRequestStatus = exports.AmazonVATInvoiceRequestStatus || (exports.AmazonVATInvoiceRequestStatus = {}));
var DistributionCenterType;
(function (DistributionCenterType) {
    DistributionCenterType["Warehouse"] = "Warehouse";
    DistributionCenterType["ExternallyManaged"] = "ExternallyManaged";
    DistributionCenterType["DropShip"] = "DropShip";
    DistributionCenterType["RetailStore"] = "RetailStore";
})(DistributionCenterType = exports.DistributionCenterType || (exports.DistributionCenterType = {}));
var ThroughputLimitUnits;
(function (ThroughputLimitUnits) {
    ThroughputLimitUnits["Minutes"] = "Minutes";
    ThroughputLimitUnits["Hours"] = "Hours";
    ThroughputLimitUnits["Days"] = "Days";
})(ThroughputLimitUnits = exports.ThroughputLimitUnits || (exports.ThroughputLimitUnits = {}));
var DayIdentifier;
(function (DayIdentifier) {
    DayIdentifier["Sunday"] = "Sunday";
    DayIdentifier["Monday"] = "Monday";
    DayIdentifier["Tuesday"] = "Tuesday";
    DayIdentifier["Wednesday"] = "Wednesday";
    DayIdentifier["Thursday"] = "Thursday";
    DayIdentifier["Friday"] = "Friday";
    DayIdentifier["Saturday"] = "Saturday";
})(DayIdentifier = exports.DayIdentifier || (exports.DayIdentifier = {}));
var FlagType;
(function (FlagType) {
    FlagType["NoFlag"] = "NoFlag";
    FlagType["RedFlag"] = "RedFlag";
    FlagType["QuestionMark"] = "QuestionMark";
    FlagType["NotAvailable"] = "NotAvailable";
    FlagType["Price"] = "Price";
    FlagType["YellowFlag"] = "YellowFlag";
    FlagType["GreenFlag"] = "GreenFlag";
    FlagType["BlueFlag"] = "BlueFlag";
    FlagType["NotSpecified"] = "NotSpecified";
    FlagType["ItemCopied"] = "ItemCopied";
    FlagType["ExclamationPoint"] = "ExclamationPoint";
})(FlagType = exports.FlagType || (exports.FlagType = {}));
var BundleType;
(function (BundleType) {
    BundleType["None"] = "None";
    BundleType["BundleComponent"] = "BundleComponent";
    BundleType["BundleItem"] = "BundleItem";
    BundleType["AssemblyBundleItem"] = "AssemblyBundleItem";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Item"] = "Item";
    InventoryItemType["Child"] = "Child";
    InventoryItemType["Bundle"] = "Bundle";
    InventoryItemType["Parent"] = "Parent";
})(InventoryItemType = exports.InventoryItemType || (exports.InventoryItemType = {}));
var AliasType;
(function (AliasType) {
    AliasType["None"] = "None";
    AliasType["Reference"] = "Reference";
    AliasType["Alias"] = "Alias";
})(AliasType = exports.AliasType || (exports.AliasType = {}));
var WebhookEndpointStatus;
(function (WebhookEndpointStatus) {
    WebhookEndpointStatus["Deleted"] = "Deleted";
    WebhookEndpointStatus["Enabled"] = "Enabled";
    WebhookEndpointStatus["Disabled"] = "Disabled";
    WebhookEndpointStatus["Suspended"] = "Suspended";
})(WebhookEndpointStatus = exports.WebhookEndpointStatus || (exports.WebhookEndpointStatus = {}));
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["Unknown"] = "Unknown";
    WebhookEventType["PaymentCleared"] = "PaymentCleared";
    WebhookEventType["SellerFulfillmentStatusChanged"] = "SellerFulfillmentStatusChanged";
    WebhookEventType["ExternalFulfillmentStatusChanged"] = "ExternalFulfillmentStatusChanged";
    WebhookEventType["CancellationStarted"] = "CancellationStarted";
    WebhookEventType["CancellationFinalized"] = "CancellationFinalized";
    WebhookEventType["RefundStarted"] = "RefundStarted";
    WebhookEventType["RefundFinalized"] = "RefundFinalized";
    WebhookEventType["SellerManagedOrderPaymentCleared"] = "SellerManagedOrderPaymentCleared";
})(WebhookEventType = exports.WebhookEventType || (exports.WebhookEventType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["Unknown"] = "Unknown";
    DocumentType["VATInvoice"] = "VATInvoice";
    DocumentType["VATCreditNote"] = "VATCreditNote";
    DocumentType["ReturnShippingLabel"] = "ReturnShippingLabel";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var DocumentSourceType;
(function (DocumentSourceType) {
    DocumentSourceType["Unknown"] = "Unknown";
    DocumentSourceType["Site"] = "Site";
    DocumentSourceType["Seller"] = "Seller";
})(DocumentSourceType = exports.DocumentSourceType || (exports.DocumentSourceType = {}));
var QuantityUpdateType;
(function (QuantityUpdateType) {
    QuantityUpdateType["Absolute"] = "Absolute";
    QuantityUpdateType["Relative"] = "Relative";
    QuantityUpdateType["Available"] = "Available";
    QuantityUpdateType["InStock"] = "InStock";
    QuantityUpdateType["UnShipped"] = "UnShipped";
    QuantityUpdateType["Unconfirmed"] = "Unconfirmed";
})(QuantityUpdateType = exports.QuantityUpdateType || (exports.QuantityUpdateType = {}));
var LabelFormatType;
(function (LabelFormatType) {
    LabelFormatType["JPEG"] = "JPEG";
    LabelFormatType["PDF"] = "PDF";
    LabelFormatType["PNG"] = "PNG";
    LabelFormatType["GzipPDF"] = "GzipPDF";
    LabelFormatType["GIFLandscape"] = "GIFLandscape";
    LabelFormatType["GzipPNG"] = "GzipPNG";
    LabelFormatType["GIFPortrait"] = "GIFPortrait";
    LabelFormatType["ZPL"] = "ZPL";
    LabelFormatType["GzipZPL"] = "GzipZPL";
})(LabelFormatType = exports.LabelFormatType || (exports.LabelFormatType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbEFkdmlzb3JSZXN0QXBpVjFNb2RlbHNNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYW5uZWxBZHZpc29yUmVzdEFwaVYxTW9kZWxzTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGNBQWM7OztBQUVkLElBQVksd0JBS1g7QUFMRCxXQUFZLHdCQUF3QjtJQUNoQywrQ0FBbUIsQ0FBQTtJQUNuQixtRUFBdUMsQ0FBQTtJQUN2Qyw2RUFBaUQsQ0FBQTtJQUNqRCw2RUFBaUQsQ0FBQTtBQUNyRCxDQUFDLEVBTFcsd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUFLbkM7QUFFRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsNENBQXlCLENBQUE7SUFDekIsZ0NBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUI7QUFFRCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbEIsMkJBQWEsQ0FBQTtJQUNiLDZCQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBRUQsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLDJDQUEyQixDQUFBO0lBQzNCLHVDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFIVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUVELElBQVksZ0JBVVg7QUFWRCxXQUFZLGdCQUFnQjtJQUN4QiwyREFBdUMsQ0FBQTtJQUN2Qyx5REFBcUMsQ0FBQTtJQUNyQyxpRUFBNkMsQ0FBQTtJQUM3QyxpREFBNkIsQ0FBQTtJQUM3QixtRUFBK0MsQ0FBQTtJQUMvQyxxREFBaUMsQ0FBQTtJQUNqQyx5REFBcUMsQ0FBQTtJQUNyQyxxRUFBaUQsQ0FBQTtJQUNqRCxpRkFBNkQsQ0FBQTtBQUNqRSxDQUFDLEVBVlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFo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