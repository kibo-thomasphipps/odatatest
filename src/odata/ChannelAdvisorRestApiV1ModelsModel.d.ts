export declare enum DeliveryConfirmationType {
    Default = "Default",
    SignatureRequired = "SignatureRequired",
    AdultSignatureRequired = "AdultSignatureRequired",
    NoDeliveryConfirmation = "NoDeliveryConfirmation"
}
export declare enum MeasurementUnit {
    Centimeter = "Centimeter",
    Inch = "Inch"
}
export declare enum WeightUnit {
    Gram = "Gram",
    Pound = "Pound"
}
export declare enum ExportReason {
    MERCHANDISE = "MERCHANDISE",
    DOCUMENTS = "DOCUMENTS"
}
export declare enum AdjustmentReason {
    GeneralAdjustment = "GeneralAdjustment",
    ItemNotAvailable = "ItemNotAvailable",
    CustomerReturnedItem = "CustomerReturnedItem",
    CouldNotShip = "CouldNotShip",
    AlternateItemProvided = "AlternateItemProvided",
    BuyerCancelled = "BuyerCancelled",
    CustomerExchange = "CustomerExchange",
    MerchandiseNotReceived = "MerchandiseNotReceived",
    ShippingAddressUndeliverable = "ShippingAddressUndeliverable"
}
export declare enum DistributionCenterRollupType {
    SellerManaged = "SellerManaged",
    ExternallyManaged = "ExternallyManaged",
    Mixed = "Mixed"
}
export declare enum CheckoutStatus {
    NotVisited = "NotVisited",
    Completed = "Completed",
    Visited = "Visited",
    CompletedAndVisited = "CompletedAndVisited",
    Disabled = "Disabled",
    CompletedOffline = "CompletedOffline",
    OnHold = "OnHold"
}
export declare enum PaymentStatus {
    NotYetSubmitted = "NotYetSubmitted",
    Cleared = "Cleared",
    Submitted = "Submitted",
    Failed = "Failed",
    Deposited = "Deposited"
}
export declare enum ShippingStatus {
    Unshipped = "Unshipped",
    Shipped = "Shipped",
    PartiallyShipped = "PartiallyShipped",
    PendingShipment = "PendingShipment",
    Canceled = "Canceled",
    ThirdPartyManaged = "ThirdPartyManaged"
}
export declare enum TaxType {
    NoTax = "NoTax",
    Standard = "Standard",
    ExclusiveVat = "ExclusiveVat",
    InclusiveVat = "InclusiveVat"
}
export declare enum FulfillmentItemSiteCommunicationStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Complete = "Complete",
    CompletedWithoutNotification = "CompletedWithoutNotification",
    Failed = "Failed"
}
export declare enum FulfillmentType {
    Ship = "Ship",
    Pickup = "Pickup",
    ShipToStore = "ShipToStore",
    Courier = "Courier"
}
export declare enum DeliveryStatus {
    NoChange = "NoChange",
    InTransit = "InTransit",
    ReadyForPickup = "ReadyForPickup",
    Complete = "Complete",
    Canceled = "Canceled",
    ThirdPartyManaged = "ThirdPartyManaged",
    Confirmed = "Confirmed",
    PickAndPack = "PickAndPack",
    LabelCreated = "LabelCreated",
    Held = "Held"
}
export declare enum FulfillmentRequestStatus {
    New = "New",
    Pending = "Pending",
    Sent = "Sent",
    Processing = "Processing",
    Complete = "Complete",
    Held = "Held",
    Failed = "Failed"
}
export declare enum AdjustmentType {
    Refund = "Refund",
    Cancellation = "Cancellation"
}
export declare enum AsyncStatus {
    SubmittedNotProcessed = "SubmittedNotProcessed",
    NewRma = "NewRma",
    PendingApproval = "PendingApproval",
    ProcessingApproval = "ProcessingApproval",
    ReadyForReturn = "ReadyForReturn",
    PendingReturn = "PendingReturn",
    ProcessingReturn = "ProcessingReturn",
    PendingRejection = "PendingRejection",
    ProcessingRejection = "ProcessingRejection",
    ProcessedNotAcknowledged = "ProcessedNotAcknowledged",
    PendingReturnRejection = "PendingReturnRejection",
    ProcessingReturnRejection = "ProcessingReturnRejection",
    AcknowledgedPostProcessingNotComplete = "AcknowledgedPostProcessingNotComplete",
    PostProcessingComplete = "PostProcessingComplete",
    RejectionCompleted = "RejectionCompleted",
    InformationOnly = "InformationOnly",
    NoChange = "NoChange",
    Error = "Error"
}
export declare enum AdjustmentSource {
    Channel = "Channel",
    UserInterface = "UserInterface",
    Api = "Api",
    System = "System"
}
export declare enum ChannelDocumentType {
    AmazonVATInvoice = "AmazonVATInvoice",
    AmazonVATCreditNote = "AmazonVATCreditNote"
}
export declare enum AmazonVATInvoiceRequestStatus {
    New = "New",
    DocumentGenerated = "DocumentGenerated",
    SentToAmazon = "SentToAmazon",
    Complete = "Complete",
    Failed = "Failed",
    SellerUploaded = "SellerUploaded",
    FailedNeedsRetry = "FailedNeedsRetry",
    SkippedBeforeStartDate = "SkippedBeforeStartDate"
}
export declare enum DistributionCenterType {
    Warehouse = "Warehouse",
    ExternallyManaged = "ExternallyManaged",
    DropShip = "DropShip",
    RetailStore = "RetailStore"
}
export declare enum ThroughputLimitUnits {
    Minutes = "Minutes",
    Hours = "Hours",
    Days = "Days"
}
export declare enum DayIdentifier {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
export declare enum FlagType {
    NoFlag = "NoFlag",
    RedFlag = "RedFlag",
    QuestionMark = "QuestionMark",
    NotAvailable = "NotAvailable",
    Price = "Price",
    YellowFlag = "YellowFlag",
    GreenFlag = "GreenFlag",
    BlueFlag = "BlueFlag",
    NotSpecified = "NotSpecified",
    ItemCopied = "ItemCopied",
    ExclamationPoint = "ExclamationPoint"
}
export declare enum BundleType {
    None = "None",
    BundleComponent = "BundleComponent",
    BundleItem = "BundleItem",
    AssemblyBundleItem = "AssemblyBundleItem"
}
export declare enum InventoryItemType {
    Item = "Item",
    Child = "Child",
    Bundle = "Bundle",
    Parent = "Parent"
}
export declare enum AliasType {
    None = "None",
    Reference = "Reference",
    Alias = "Alias"
}
export declare enum WebhookEndpointStatus {
    Deleted = "Deleted",
    Enabled = "Enabled",
    Disabled = "Disabled",
    Suspended = "Suspended"
}
export declare enum WebhookEventType {
    Unknown = "Unknown",
    PaymentCleared = "PaymentCleared",
    SellerFulfillmentStatusChanged = "SellerFulfillmentStatusChanged",
    ExternalFulfillmentStatusChanged = "ExternalFulfillmentStatusChanged",
    CancellationStarted = "CancellationStarted",
    CancellationFinalized = "CancellationFinalized",
    RefundStarted = "RefundStarted",
    RefundFinalized = "RefundFinalized",
    SellerManagedOrderPaymentCleared = "SellerManagedOrderPaymentCleared"
}
export declare enum DocumentType {
    Unknown = "Unknown",
    VATInvoice = "VATInvoice",
    VATCreditNote = "VATCreditNote",
    ReturnShippingLabel = "ReturnShippingLabel"
}
export declare enum DocumentSourceType {
    Unknown = "Unknown",
    Site = "Site",
    Seller = "Seller"
}
export declare enum QuantityUpdateType {
    Absolute = "Absolute",
    Relative = "Relative",
    Available = "Available",
    InStock = "InStock",
    UnShipped = "UnShipped",
    Unconfirmed = "Unconfirmed"
}
export declare enum LabelFormatType {
    JPEG = "JPEG",
    PDF = "PDF",
    PNG = "PNG",
    GzipPDF = "GzipPDF",
    GIFLandscape = "GIFLandscape",
    GzipPNG = "GzipPNG",
    GIFPortrait = "GIFPortrait",
    ZPL = "ZPL",
    GzipZPL = "GzipZPL"
}
export interface Order {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    SiteID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteName` |
     * | Type | `Edm.String` |
     */
    SiteName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UserDataPresent` |
     * | Type | `Edm.Byte` |
     * | Nullable | `false` |
     */
    UserDataPresent: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UserDataRemovalDateUTC` |
     * | Type | `Edm.DateTimeOffset` |
     */
    UserDataRemovalDateUTC: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteAccountID` |
     * | Type | `Edm.Int32` |
     */
    SiteAccountID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteOrderID` |
     * | Type | `Edm.String` |
     */
    SiteOrderID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SecondarySiteOrderID` |
     * | Type | `Edm.String` |
     */
    SecondarySiteOrderID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerOrderID` |
     * | Type | `Edm.String` |
     */
    SellerOrderID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CheckoutSourceID` |
     * | Type | `Edm.Byte` |
     */
    CheckoutSourceID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Currency` |
     * | Type | `Edm.String` |
     */
    Currency: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    CreatedDateUtc: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ImportDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    ImportDateUtc: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UpdatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    UpdatedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PublicNotes` |
     * | Type | `Edm.String` |
     */
    PublicNotes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PrivateNotes` |
     * | Type | `Edm.String` |
     */
    PrivateNotes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SpecialInstructions` |
     * | Type | `Edm.String` |
     */
    SpecialInstructions: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    TotalPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalTaxPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    TotalTaxPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalShippingPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    TotalShippingPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalShippingTaxPrice` |
     * | Type | `Edm.Decimal` |
     */
    TotalShippingTaxPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalInsurancePrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    TotalInsurancePrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalGiftOptionPrice` |
     * | Type | `Edm.Decimal` |
     */
    TotalGiftOptionPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalGiftOptionTaxPrice` |
     * | Type | `Edm.Decimal` |
     */
    TotalGiftOptionTaxPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdditionalCostOrDiscount` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    AdditionalCostOrDiscount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EstimatedShipDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EstimatedShipDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeliverByDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    DeliverByDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequestedShippingCarrier` |
     * | Type | `Edm.String` |
     */
    RequestedShippingCarrier: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequestedShippingClass` |
     * | Type | `Edm.String` |
     */
    RequestedShippingClass: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ResellerID` |
     * | Type | `Edm.String` |
     */
    ResellerID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FlagID` |
     * | Type | `Edm.Int32` |
     */
    FlagID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FlagDescription` |
     * | Type | `Edm.String` |
     */
    FlagDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderTags` |
     * | Type | `Edm.String` |
     */
    OrderTags: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterTypeRollup` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DistributionCenterRollupType` |
     * | Nullable | `false` |
     */
    DistributionCenterTypeRollup: DistributionCenterRollupType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CheckoutStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.CheckoutStatus` |
     * | Nullable | `false` |
     */
    CheckoutStatus: CheckoutStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.PaymentStatus` |
     * | Nullable | `false` |
     */
    PaymentStatus: PaymentStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.ShippingStatus` |
     * | Nullable | `false` |
     */
    ShippingStatus: ShippingStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CheckoutDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    CheckoutDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    PaymentDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippingDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BuyerUserId` |
     * | Type | `Edm.String` |
     */
    BuyerUserId: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BuyerEmailAddress` |
     * | Type | `Edm.String` |
     */
    BuyerEmailAddress: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BuyerEmailOptIn` |
     * | Type | `Edm.Boolean` |
     */
    BuyerEmailOptIn: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderTaxType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.TaxType` |
     * | Nullable | `false` |
     */
    OrderTaxType: TaxType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingTaxType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.TaxType` |
     * | Nullable | `false` |
     */
    ShippingTaxType: TaxType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftOptionsTaxType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.TaxType` |
     * | Nullable | `false` |
     */
    GiftOptionsTaxType: TaxType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentMethod` |
     * | Type | `Edm.String` |
     */
    PaymentMethod: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentTransactionID` |
     * | Type | `Edm.String` |
     */
    PaymentTransactionID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentPaypalAccountID` |
     * | Type | `Edm.String` |
     */
    PaymentPaypalAccountID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentCreditCardLast4` |
     * | Type | `Edm.String` |
     */
    PaymentCreditCardLast4: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PaymentMerchantReferenceNumber` |
     * | Type | `Edm.String` |
     */
    PaymentMerchantReferenceNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingTitle` |
     * | Type | `Edm.String` |
     */
    ShippingTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingFirstName` |
     * | Type | `Edm.String` |
     */
    ShippingFirstName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingLastName` |
     * | Type | `Edm.String` |
     */
    ShippingLastName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingSuffix` |
     * | Type | `Edm.String` |
     */
    ShippingSuffix: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCompanyName` |
     * | Type | `Edm.String` |
     */
    ShippingCompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCompanyJobTitle` |
     * | Type | `Edm.String` |
     */
    ShippingCompanyJobTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingDaytimePhone` |
     * | Type | `Edm.String` |
     */
    ShippingDaytimePhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingEveningPhone` |
     * | Type | `Edm.String` |
     */
    ShippingEveningPhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingAddressLine1` |
     * | Type | `Edm.String` |
     */
    ShippingAddressLine1: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingAddressLine2` |
     * | Type | `Edm.String` |
     */
    ShippingAddressLine2: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCity` |
     * | Type | `Edm.String` |
     */
    ShippingCity: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingStateOrProvince` |
     * | Type | `Edm.String` |
     */
    ShippingStateOrProvince: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingStateOrProvinceName` |
     * | Type | `Edm.String` |
     */
    ShippingStateOrProvinceName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingPostalCode` |
     * | Type | `Edm.String` |
     */
    ShippingPostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCountry` |
     * | Type | `Edm.String` |
     */
    ShippingCountry: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingTitle` |
     * | Type | `Edm.String` |
     */
    BillingTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingFirstName` |
     * | Type | `Edm.String` |
     */
    BillingFirstName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingLastName` |
     * | Type | `Edm.String` |
     */
    BillingLastName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingSuffix` |
     * | Type | `Edm.String` |
     */
    BillingSuffix: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingCompanyName` |
     * | Type | `Edm.String` |
     */
    BillingCompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingCompanyJobTitle` |
     * | Type | `Edm.String` |
     */
    BillingCompanyJobTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingDaytimePhone` |
     * | Type | `Edm.String` |
     */
    BillingDaytimePhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingEveningPhone` |
     * | Type | `Edm.String` |
     */
    BillingEveningPhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingAddressLine1` |
     * | Type | `Edm.String` |
     */
    BillingAddressLine1: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingAddressLine2` |
     * | Type | `Edm.String` |
     */
    BillingAddressLine2: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingCity` |
     * | Type | `Edm.String` |
     */
    BillingCity: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingStateOrProvince` |
     * | Type | `Edm.String` |
     */
    BillingStateOrProvince: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingStateOrProvinceName` |
     * | Type | `Edm.String` |
     */
    BillingStateOrProvinceName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingPostalCode` |
     * | Type | `Edm.String` |
     */
    BillingPostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BillingCountry` |
     * | Type | `Edm.String` |
     */
    BillingCountry: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PromotionCode` |
     * | Type | `Edm.String` |
     */
    PromotionCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PromotionAmount` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    PromotionAmount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Items` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderItem)` |
     */
    Items?: Array<OrderItem>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Fulfillments` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.Fulfillment)` |
     */
    Fulfillments?: Array<Fulfillment>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Adjustments` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderAdjustment)` |
     */
    Adjustments?: Array<OrderAdjustment>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomFields` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.CustomField)` |
     */
    CustomFields?: Array<CustomField>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderAttributes` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderAttributeValue)` |
     */
    OrderAttributes?: Array<OrderAttributeValue>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Exports` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ExportStatus)` |
     */
    Exports?: Array<ExportStatus>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChannelDocuments` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ChannelDocument)` |
     */
    ChannelDocuments?: Array<ChannelDocument>;
}
export type OrderId = number | {
    ID: number;
};
export interface EditableOrder extends Pick<Order, "ProfileID" | "SiteID" | "UserDataPresent" | "CreatedDateUtc" | "ImportDateUtc" | "TotalPrice" | "TotalTaxPrice" | "TotalShippingPrice" | "TotalInsurancePrice" | "AdditionalCostOrDiscount" | "DistributionCenterTypeRollup" | "CheckoutStatus" | "PaymentStatus" | "ShippingStatus" | "OrderTaxType" | "ShippingTaxType" | "GiftOptionsTaxType" | "PromotionAmount">, Partial<Pick<Order, "SiteName" | "UserDataRemovalDateUTC" | "SiteAccountID" | "SiteOrderID" | "SecondarySiteOrderID" | "SellerOrderID" | "CheckoutSourceID" | "Currency" | "UpdatedDateUtc" | "PublicNotes" | "PrivateNotes" | "SpecialInstructions" | "TotalShippingTaxPrice" | "TotalGiftOptionPrice" | "TotalGiftOptionTaxPrice" | "EstimatedShipDateUtc" | "DeliverByDateUtc" | "RequestedShippingCarrier" | "RequestedShippingClass" | "ResellerID" | "FlagID" | "FlagDescription" | "OrderTags" | "CheckoutDateUtc" | "PaymentDateUtc" | "ShippingDateUtc" | "BuyerUserId" | "BuyerEmailAddress" | "BuyerEmailOptIn" | "PaymentMethod" | "PaymentTransactionID" | "PaymentPaypalAccountID" | "PaymentCreditCardLast4" | "PaymentMerchantReferenceNumber" | "ShippingTitle" | "ShippingFirstName" | "ShippingLastName" | "ShippingSuffix" | "ShippingCompanyName" | "ShippingCompanyJobTitle" | "ShippingDaytimePhone" | "ShippingEveningPhone" | "ShippingAddressLine1" | "ShippingAddressLine2" | "ShippingCity" | "ShippingStateOrProvince" | "ShippingStateOrProvinceName" | "ShippingPostalCode" | "ShippingCountry" | "BillingTitle" | "BillingFirstName" | "BillingLastName" | "BillingSuffix" | "BillingCompanyName" | "BillingCompanyJobTitle" | "BillingDaytimePhone" | "BillingEveningPhone" | "BillingAddressLine1" | "BillingAddressLine2" | "BillingCity" | "BillingStateOrProvince" | "BillingStateOrProvinceName" | "BillingPostalCode" | "BillingCountry" | "PromotionCode">> {
}
export interface Order_ShipParams {
    Value?: ShipOrderRequest | null;
}
export interface Order_ShippingRatesParams {
    ShippingLabelPartnerAccountIDs?: Array<number>;
    Items?: Array<ShippingItems>;
    PackageID?: number | null;
    ApplyDeliverByDate?: boolean | null;
    DeliverByDateUtc?: string | null;
    DeliveryConfirmation?: DeliveryConfirmationType | null;
    DistributionCenterID?: number | null;
    InsuredAmount?: number | null;
    LabelFormat?: LabelFormatType | null;
    ShipDateUtc?: string | null;
    MeasurementUnit?: MeasurementUnit | null;
    Height?: number | null;
    Length?: number | null;
    Width?: number | null;
    WeightUnit?: WeightUnit | null;
    Weight?: number | null;
    PurchaseCheapestRate?: boolean | null;
    ShippingLabelRequestID?: string | null;
    SourceCompanyName?: string | null;
    SourceTitle?: string | null;
    SourceFirstName?: string | null;
    SourceLastName?: string | null;
    SourceAddressLine1?: string | null;
    SourceAddressLine2?: string | null;
    SourceCity?: string | null;
    SourceStateOrProvince?: string | null;
    SourcePostalCode?: string | null;
    SourceCountryCode?: string | null;
    SourceEmailAddress?: string | null;
    SourcePhoneNumber?: string | null;
    DestinationCompanyName?: string | null;
    DestinationTitle?: string | null;
    DestinationFirstName?: string | null;
    DestinationLastName?: string | null;
    DestinationAddressLine1?: string | null;
    DestinationAddressLine2?: string | null;
    DestinationCity?: string | null;
    DestinationStateOrProvince?: string | null;
    DestinationPostalCode?: string | null;
    DestinationCountryCode?: string | null;
    DestinationEmailAddress?: string | null;
    DestinationPhoneNumber?: string | null;
    IsCommercialAddress?: boolean | null;
    IncludeCustoms?: boolean | null;
    ExportReason?: ExportReason | null;
    CertificateNumber?: string | null;
    CustomsComments?: string | null;
    EelPfc?: string | null;
    FromCustomsReference?: string | null;
    ImporterCustomsReference?: string | null;
    InsuredNumber?: string | null;
    LicenseNumber?: string | null;
    ManufacturedCountryCode?: string | null;
}
export interface Order_PurchaseLabelParams {
    RateID: string;
    LabelFormat?: LabelFormatType | null;
    ShippingLabelRequestID?: string | null;
}
export interface Order_PickupLabelParams {
    MeasurementUnit?: MeasurementUnit | null;
    Length?: number | null;
    Width?: number | null;
    Height?: number | null;
    WeightUnit?: WeightUnit | null;
    Weight?: number | null;
    HazmatLabels?: Array<string>;
    LineItems?: Array<PickupLabelLineItem>;
}
export interface Order_AdjustParams {
    AdjustmentAmount?: number | null;
    Reason?: AdjustmentReason | null;
    PreventSiteProcessing?: boolean | null;
    SellerAdjustmentID?: string | null;
    Restock?: boolean | null;
    RefundOnly?: boolean | null;
}
export interface Order_CreateParams {
    Order?: Order | null;
    ShippingOverrides?: Array<ShippingOverride>;
}
export interface OrderItem {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteOrderItemID` |
     * | Type | `Edm.String` |
     */
    SiteOrderItemID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerOrderItemID` |
     * | Type | `Edm.String` |
     */
    SellerOrderItemID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteListingID` |
     * | Type | `Edm.String` |
     */
    SiteListingID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Title` |
     * | Type | `Edm.String` |
     */
    Title: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     */
    UnitPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TaxPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    TaxPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    ShippingPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingTaxPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    ShippingTaxPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RecyclingFee` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    RecyclingFee: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitEstimatedShippingCost` |
     * | Type | `Edm.Decimal` |
     */
    UnitEstimatedShippingCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftMessage` |
     * | Type | `Edm.String` |
     */
    GiftMessage: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftNotes` |
     * | Type | `Edm.String` |
     */
    GiftNotes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    GiftPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftTaxPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    GiftTaxPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsBundle` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    IsBundle: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ItemURL` |
     * | Type | `Edm.String` |
     */
    ItemURL: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HarmonizedCode` |
     * | Type | `Edm.String` |
     */
    HarmonizedCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     */
    ReferenceProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleComponents` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderItemBundleComponent)` |
     */
    BundleComponents?: Array<OrderItemBundleComponent>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentItems` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.FulfillmentItem)` |
     */
    FulfillmentItems?: Array<FulfillmentItem>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Promotions` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.Promotion)` |
     */
    Promotions?: Array<Promotion>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Adjustments` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderItemAdjustment)` |
     */
    Adjustments?: Array<OrderItemAdjustment>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemAttributes` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderItemAttributeValue)` |
     */
    OrderItemAttributes?: Array<OrderItemAttributeValue>;
}
export type OrderItemId = number | {
    ID: number;
};
export interface EditableOrderItem extends Pick<OrderItem, "ProfileID" | "ProductID" | "Quantity" | "TaxPrice" | "ShippingPrice" | "ShippingTaxPrice" | "RecyclingFee" | "GiftPrice" | "GiftTaxPrice" | "IsBundle">, Partial<Pick<OrderItem, "OrderID" | "SiteOrderItemID" | "SellerOrderItemID" | "SiteListingID" | "Sku" | "Title" | "UnitPrice" | "UnitEstimatedShippingCost" | "GiftMessage" | "GiftNotes" | "ItemURL" | "HarmonizedCode" | "ReferenceSku" | "ReferenceProductID">> {
}
export interface OrderItem_AdjustParams {
    Quantity?: number | null;
    Reason?: AdjustmentReason | null;
    Restock?: boolean | null;
    ItemAdjustment?: number | null;
    TaxAdjustment?: number | null;
    ShippingAdjustment?: number | null;
    ShippingTaxAdjustment?: number | null;
    GiftWrapAdjustment?: number | null;
    GiftWrapTaxAdjustment?: number | null;
    RecyclingFeeAdjustment?: number | null;
    PreventSiteProcessing?: boolean | null;
    SellerAdjustmentID?: string | null;
    ForceCalculateOmittedAmounts?: boolean | null;
    RefundOnly?: boolean | null;
}
export interface Fulfillment {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    CreatedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UpdatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    UpdatedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Type` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.FulfillmentType` |
     * | Nullable | `false` |
     */
    Type: FulfillmentType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeliveryStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DeliveryStatus` |
     * | Nullable | `false` |
     */
    DeliveryStatus: DeliveryStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingNumber` |
     * | Type | `Edm.String` |
     */
    TrackingNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingUrl` |
     * | Type | `Edm.String` |
     */
    TrackingUrl: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnTrackingNumber` |
     * | Type | `Edm.String` |
     */
    ReturnTrackingNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCarrier` |
     * | Type | `Edm.String` |
     */
    ShippingCarrier: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingClass` |
     * | Type | `Edm.String` |
     */
    ShippingClass: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    DistributionCenterID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExternalFulfillmentCenterCode` |
     * | Type | `Edm.String` |
     */
    ExternalFulfillmentCenterCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExternalFulfillmentStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.FulfillmentRequestStatus` |
     */
    ExternalFulfillmentStatus: FulfillmentRequestStatus | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCost` |
     * | Type | `Edm.Decimal` |
     */
    ShippingCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `InsuranceCost` |
     * | Type | `Edm.Decimal` |
     */
    InsuranceCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TaxCost` |
     * | Type | `Edm.Decimal` |
     */
    TaxCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerFulfillmentID` |
     * | Type | `Edm.String` |
     */
    SellerFulfillmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HasShippingLabel` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    HasShippingLabel: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HasChannelPackingSlip` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    HasChannelPackingSlip: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HasReturnLabel` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    HasReturnLabel: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HasChannelReturnLabel` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    HasChannelReturnLabel: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExternalFulfillmentNumber` |
     * | Type | `Edm.String` |
     */
    ExternalFulfillmentNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExternalFulfillmentReferenceNumber` |
     * | Type | `Edm.String` |
     */
    ExternalFulfillmentReferenceNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingLabelRequestID` |
     * | Type | `Edm.String` |
     */
    ShippingLabelRequestID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StagingLocation` |
     * | Type | `Edm.String` |
     */
    StagingLocation: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SerialShippingContainerCode` |
     * | Type | `Edm.String` |
     */
    SerialShippingContainerCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EarliestDeliveryDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EarliestDeliveryDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EarliestShipDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EarliestShipDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EstimatedDeliveryDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EstimatedDeliveryDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EstimatedShipDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EstimatedShipDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `LabelFormat` |
     * | Type | `ChannelAdvisor.PostSale.RestApi.V1.Models.LabelFormatType` |
     */
    LabelFormat: LabelFormatType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnLabelFormat` |
     * | Type | `ChannelAdvisor.PostSale.RestApi.V1.Models.LabelFormatType` |
     */
    ReturnLabelFormat: LabelFormatType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChannelReturnLabelFormat` |
     * | Type | `ChannelAdvisor.PostSale.RestApi.V1.Models.LabelFormatType` |
     */
    ChannelReturnLabelFormat: LabelFormatType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Items` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.FulfillmentItem)` |
     */
    Items?: Array<FulfillmentItem>;
}
export type FulfillmentId = number | {
    ID: number;
};
export interface EditableFulfillment extends Pick<Fulfillment, "ProfileID" | "Type" | "DeliveryStatus" | "DistributionCenterID" | "HasShippingLabel" | "HasChannelPackingSlip" | "HasReturnLabel" | "HasChannelReturnLabel">, Partial<Pick<Fulfillment, "OrderID" | "CreatedDateUtc" | "UpdatedDateUtc" | "TrackingNumber" | "TrackingUrl" | "ReturnTrackingNumber" | "ShippingCarrier" | "ShippingClass" | "ExternalFulfillmentCenterCode" | "ExternalFulfillmentStatus" | "ShippingCost" | "InsuranceCost" | "TaxCost" | "ShippedDateUtc" | "SellerFulfillmentID" | "ExternalFulfillmentNumber" | "ExternalFulfillmentReferenceNumber" | "ShippingLabelRequestID" | "StagingLocation" | "SerialShippingContainerCode" | "EarliestDeliveryDateUtc" | "EarliestShipDateUtc" | "EstimatedDeliveryDateUtc" | "EstimatedShipDateUtc" | "LabelFormat" | "ReturnLabelFormat" | "ChannelReturnLabelFormat">> {
}
export interface Fulfillment_MoveParams {
    DestinationFulfillmentID: number;
}
export interface FulfillmentItem {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterItemUnitCost` |
     * | Type | `Edm.Decimal` |
     */
    DistributionCenterItemUnitCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterShippingCost` |
     * | Type | `Edm.Decimal` |
     */
    DistributionCenterShippingCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterCalculatedItemUnitCost` |
     * | Type | `Edm.Decimal` |
     */
    DistributionCenterCalculatedItemUnitCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterCalculatedShippingCost` |
     * | Type | `Edm.Decimal` |
     */
    DistributionCenterCalculatedShippingCost: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentID` |
     * | Type | `Edm.Int32` |
     */
    FulfillmentID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerFulfillmentItemID` |
     * | Type | `Edm.String` |
     */
    SellerFulfillmentItemID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MarketplaceShippingStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.FulfillmentItemSiteCommunicationStatus` |
     * | Nullable | `false` |
     */
    MarketplaceShippingStatus: FulfillmentItemSiteCommunicationStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     */
    ReferenceProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `WarehouseLocation` |
     * | Type | `Edm.String` |
     */
    WarehouseLocation: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Fulfillment` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Fulfillment` |
     */
    Fulfillment?: Fulfillment | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItem` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItem` |
     */
    OrderItem?: OrderItem | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleComponent` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItemBundleComponent` |
     */
    BundleComponent?: OrderItemBundleComponent | null;
}
export type FulfillmentItemId = number | {
    ID: number;
};
export interface EditableFulfillmentItem extends Pick<FulfillmentItem, "ProfileID" | "OrderID" | "Quantity" | "ProductID" | "MarketplaceShippingStatus">, Partial<Pick<FulfillmentItem, "DistributionCenterItemUnitCost" | "DistributionCenterShippingCost" | "DistributionCenterCalculatedItemUnitCost" | "DistributionCenterCalculatedShippingCost" | "Sku" | "FulfillmentID" | "OrderItemID" | "SellerFulfillmentItemID" | "ReferenceSku" | "ReferenceProductID" | "WarehouseLocation">> {
}
export interface FulfillmentItem_MoveParams {
    DestinationFulfillmentID: number;
    Quantity?: number | null;
}
export interface DistributionCenter {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     */
    Name: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Code` |
     * | Type | `Edm.String` |
     */
    Code: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentPartnerName` |
     * | Type | `Edm.String` |
     */
    FulfillmentPartnerName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactName` |
     * | Type | `Edm.String` |
     */
    ContactName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactEmail` |
     * | Type | `Edm.String` |
     */
    ContactEmail: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactPhone` |
     * | Type | `Edm.String` |
     */
    ContactPhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address1` |
     * | Type | `Edm.String` |
     */
    Address1: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address2` |
     * | Type | `Edm.String` |
     */
    Address2: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StateOrProvince` |
     * | Type | `Edm.String` |
     */
    StateOrProvince: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PickupLocation` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    PickupLocation: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipLocation` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    ShipLocation: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Type` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DistributionCenterType` |
     */
    Type: DistributionCenterType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsExternallyManaged` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    IsExternallyManaged: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsDeleted` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    IsDeleted: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeletedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    DeletedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `County` |
     * | Type | `Edm.String` |
     */
    County: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `District` |
     * | Type | `Edm.String` |
     */
    District: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TimeZone` |
     * | Type | `Edm.String` |
     */
    TimeZone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HandlingTimeMinutes` |
     * | Type | `Edm.Int32` |
     */
    HandlingTimeMinutes: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeliveryAvailable` |
     * | Type | `Edm.Boolean` |
     */
    DeliveryAvailable: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PickupOrderHoldMinutes` |
     * | Type | `Edm.Int32` |
     */
    PickupOrderHoldMinutes: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ThroughputLimitNumber` |
     * | Type | `Edm.Int32` |
     */
    ThroughputLimitNumber: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ThroughputLimitUnits` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.ThroughputLimitUnits` |
     */
    ThroughputLimitUnits: ThroughputLimitUnits | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MainPhone` |
     * | Type | `Edm.String` |
     */
    MainPhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AltPhone` |
     * | Type | `Edm.String` |
     */
    AltPhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Fax` |
     * | Type | `Edm.String` |
     */
    Fax: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HomePage` |
     * | Type | `Edm.String` |
     */
    HomePage: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Email` |
     * | Type | `Edm.String` |
     */
    Email: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BusinessDescription` |
     * | Type | `Edm.String` |
     */
    BusinessDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Latitude` |
     * | Type | `Edm.Decimal` |
     */
    Latitude: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Longitude` |
     * | Type | `Edm.Decimal` |
     */
    Longitude: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StoreCategories` |
     * | Type | `Edm.String` |
     */
    StoreCategories: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CourierPickupInstructions` |
     * | Type | `Edm.String` |
     */
    CourierPickupInstructions: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerPickupInstructions` |
     * | Type | `Edm.String` |
     */
    CustomerPickupInstructions: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PickupInstructions` |
     * | Type | `Edm.String` |
     */
    PickupInstructions: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OperatingHours` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OperatingHours)` |
     */
    OperatingHours?: Array<OperatingHours>;
}
export type DistributionCenterId = number | {
    ID: number;
};
export interface EditableDistributionCenter extends Pick<DistributionCenter, "PickupLocation" | "ShipLocation" | "IsExternallyManaged" | "IsDeleted">, Partial<Pick<DistributionCenter, "Name" | "Code" | "FulfillmentPartnerName" | "ContactName" | "ContactEmail" | "ContactPhone" | "Address1" | "Address2" | "City" | "StateOrProvince" | "Country" | "PostalCode" | "Type" | "DeletedDateUtc" | "County" | "District" | "TimeZone" | "HandlingTimeMinutes" | "DeliveryAvailable" | "PickupOrderHoldMinutes" | "ThroughputLimitNumber" | "ThroughputLimitUnits" | "MainPhone" | "AltPhone" | "Fax" | "HomePage" | "Email" | "BusinessDescription" | "Latitude" | "Longitude" | "StoreCategories" | "CourierPickupInstructions" | "CustomerPickupInstructions" | "PickupInstructions">> {
}
export interface OperatingHours {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    DistributionCenterID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DayID` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DayIdentifier` |
     * | Nullable | `false` |
     */
    DayID: DayIdentifier;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OpenTime` |
     * | Type | `Edm.String` |
     */
    OpenTime: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CloseTime` |
     * | Type | `Edm.String` |
     */
    CloseTime: string | null;
}
export type OperatingHoursId = {
    DayID: DayIdentifier;
    DistributionCenterID: number;
};
export interface EditableOperatingHours extends Pick<OperatingHours, "DistributionCenterID" | "DayID">, Partial<Pick<OperatingHours, "OpenTime" | "CloseTime">> {
}
export interface OrderAdjustment {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedSource` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentSource` |
     */
    CreatedSource: AdjustmentSource | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `LastUpdatedSource` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentSource` |
     */
    LastUpdatedSource: AdjustmentSource | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsRestock` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    IsRestock: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Reason` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentReason` |
     * | Nullable | `false` |
     */
    Reason: AdjustmentReason;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ItemAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ItemAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    TaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ShippingAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingTaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ShippingTaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftWrapAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    GiftWrapAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftWrapTaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    GiftWrapTaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RecyclingFeeAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    RecyclingFeeAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Type` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentType` |
     * | Nullable | `false` |
     */
    Type: AdjustmentType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerAdjustmentID` |
     * | Type | `Edm.String` |
     */
    SellerAdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteAdjustmentID` |
     * | Type | `Edm.String` |
     */
    SiteAdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteRefundDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    SiteRefundDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdjustmentTransactionID` |
     * | Type | `Edm.String` |
     */
    AdjustmentTransactionID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PublicNotes` |
     * | Type | `Edm.String` |
     */
    PublicNotes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Comment` |
     * | Type | `Edm.String` |
     */
    Comment: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    CreatedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequestStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AsyncStatus` |
     * | Nullable | `false` |
     */
    RequestStatus: AsyncStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RestockStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AsyncStatus` |
     */
    RestockStatus: AsyncStatus | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RmaNumber` |
     * | Type | `Edm.String` |
     */
    RmaNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnShippingFee` |
     * | Type | `Edm.Decimal` |
     */
    ReturnShippingFee: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RestockingFee` |
     * | Type | `Edm.Decimal` |
     */
    RestockingFee: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnTrackingNumberOrUrl` |
     * | Type | `Edm.String` |
     */
    ReturnTrackingNumberOrUrl: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnShippingMethod` |
     * | Type | `Edm.String` |
     */
    ReturnShippingMethod: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
}
export type OrderAdjustmentId = number | {
    ID: number;
};
export interface EditableOrderAdjustment extends Pick<OrderAdjustment, "ProfileID" | "IsRestock" | "Reason" | "Type" | "RequestStatus">, Partial<Pick<OrderAdjustment, "CreatedSource" | "LastUpdatedSource" | "OrderID" | "ItemAdjustment" | "TaxAdjustment" | "ShippingAdjustment" | "ShippingTaxAdjustment" | "GiftWrapAdjustment" | "GiftWrapTaxAdjustment" | "RecyclingFeeAdjustment" | "SellerAdjustmentID" | "SiteAdjustmentID" | "SiteRefundDateUtc" | "AdjustmentTransactionID" | "PublicNotes" | "Comment" | "CreatedDateUtc" | "RestockStatus" | "RmaNumber" | "ReturnShippingFee" | "RestockingFee" | "ReturnTrackingNumberOrUrl" | "ReturnShippingMethod">> {
}
export interface OrderItemAdjustment {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedSource` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentSource` |
     */
    CreatedSource: AdjustmentSource | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `LastUpdatedSource` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentSource` |
     */
    LastUpdatedSource: AdjustmentSource | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     */
    Quantity: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsRestock` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    IsRestock: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Reason` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentReason` |
     * | Nullable | `false` |
     */
    Reason: AdjustmentReason;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ItemAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ItemAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    TaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ShippingAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingTaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    ShippingTaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftWrapAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    GiftWrapAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `GiftWrapTaxAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    GiftWrapTaxAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RecyclingFeeAdjustment` |
     * | Type | `Edm.Decimal` |
     */
    RecyclingFeeAdjustment: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Type` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AdjustmentType` |
     * | Nullable | `false` |
     */
    Type: AdjustmentType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerAdjustmentID` |
     * | Type | `Edm.String` |
     */
    SellerAdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteAdjustmentID` |
     * | Type | `Edm.String` |
     */
    SiteAdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteRefundDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    SiteRefundDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdjustmentTransactionID` |
     * | Type | `Edm.String` |
     */
    AdjustmentTransactionID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PublicNotes` |
     * | Type | `Edm.String` |
     */
    PublicNotes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Comment` |
     * | Type | `Edm.String` |
     */
    Comment: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreatedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    CreatedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequestStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AsyncStatus` |
     * | Nullable | `false` |
     */
    RequestStatus: AsyncStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RestockStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AsyncStatus` |
     */
    RestockStatus: AsyncStatus | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RmaNumber` |
     * | Type | `Edm.String` |
     */
    RmaNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnShippingFee` |
     * | Type | `Edm.Decimal` |
     */
    ReturnShippingFee: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RestockingFee` |
     * | Type | `Edm.Decimal` |
     */
    RestockingFee: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnTrackingNumberOrUrl` |
     * | Type | `Edm.String` |
     */
    ReturnTrackingNumberOrUrl: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnShippingMethod` |
     * | Type | `Edm.String` |
     */
    ReturnShippingMethod: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     */
    ReferenceProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItem` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItem` |
     */
    OrderItem?: OrderItem | null;
}
export type OrderItemAdjustmentId = number | {
    ID: number;
};
export interface EditableOrderItemAdjustment extends Pick<OrderItemAdjustment, "ProfileID" | "OrderID" | "IsRestock" | "Reason" | "Type" | "RequestStatus">, Partial<Pick<OrderItemAdjustment, "CreatedSource" | "LastUpdatedSource" | "OrderItemID" | "Quantity" | "ItemAdjustment" | "TaxAdjustment" | "ShippingAdjustment" | "ShippingTaxAdjustment" | "GiftWrapAdjustment" | "GiftWrapTaxAdjustment" | "RecyclingFeeAdjustment" | "SellerAdjustmentID" | "SiteAdjustmentID" | "SiteRefundDateUtc" | "AdjustmentTransactionID" | "PublicNotes" | "Comment" | "CreatedDateUtc" | "RestockStatus" | "RmaNumber" | "ReturnShippingFee" | "RestockingFee" | "ReturnTrackingNumberOrUrl" | "ReturnShippingMethod" | "ReferenceSku" | "ReferenceProductID">> {
}
export interface OrderItemAdjustment_ApproveReturnParams {
    ConditionQuantityList?: Array<RmaConditionQuantity>;
}
export interface OrderItemAdjustment_RejectReturnParams {
    ConditionQuantityList?: Array<RmaConditionQuantity>;
}
export interface OrderItemBundleComponent {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    BundleProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleSku` |
     * | Type | `Edm.String` |
     */
    BundleSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Title` |
     * | Type | `Edm.String` |
     */
    Title: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     */
    ReferenceProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItem` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItem` |
     */
    OrderItem?: OrderItem | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentItems` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.FulfillmentItem)` |
     */
    FulfillmentItems?: Array<FulfillmentItem>;
}
export type OrderItemBundleComponentId = {
    OrderID: number;
    OrderItemID: number | null;
    ProductID: number;
};
export interface EditableOrderItemBundleComponent extends Pick<OrderItemBundleComponent, "OrderID" | "ProductID" | "ProfileID" | "BundleProductID" | "Quantity">, Partial<Pick<OrderItemBundleComponent, "OrderItemID" | "Sku" | "BundleSku" | "Title" | "ReferenceProductID" | "ReferenceSku">> {
}
export interface Promotion {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Code` |
     * | Type | `Edm.String` |
     */
    Code: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Amount` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    Amount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingAmount` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    ShippingAmount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItem` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItem` |
     */
    OrderItem?: OrderItem | null;
}
export type PromotionId = number | {
    ID: number;
};
export interface EditablePromotion extends Pick<Promotion, "Amount" | "ShippingAmount">, Partial<Pick<Promotion, "Code">> {
}
export interface CustomField {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FieldID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    FieldID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
}
export type CustomFieldId = {
    FieldID: number;
    OrderID: number | null;
};
export interface EditableCustomField extends Pick<CustomField, "FieldID" | "ProfileID">, Partial<Pick<CustomField, "OrderID" | "Value">> {
}
export interface Profile {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AccountName` |
     * | Type | `Edm.String` |
     */
    AccountName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     */
    CompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CurrencyCode` |
     * | Type | `Edm.String` |
     */
    CurrencyCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TimeZoneRegion` |
     * | Type | `Edm.String` |
     */
    TimeZoneRegion: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TimeZoneDescription` |
     * | Type | `Edm.String` |
     */
    TimeZoneDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DefaultDistributionCenterID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    DefaultDistributionCenterID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteAccounts` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.SiteAccount)` |
     */
    SiteAccounts?: Array<SiteAccount>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingLabelPartnerAccounts` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ShippingLabelPartnerAccount)` |
     */
    ShippingLabelPartnerAccounts?: Array<ShippingLabelPartnerAccount>;
}
export type ProfileId = number | {
    ID: number;
};
export interface EditableProfile extends Pick<Profile, "DefaultDistributionCenterID">, Partial<Pick<Profile, "AccountName" | "CompanyName" | "CurrencyCode" | "TimeZoneRegion" | "TimeZoneDescription">> {
}
export interface Product {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreateDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    CreateDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UpdateDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    UpdateDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantityUpdateDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    QuantityUpdateDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsAvailableInStore` |
     * | Type | `Edm.Boolean` |
     */
    IsAvailableInStore: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsBlocked` |
     * | Type | `Edm.Boolean` |
     */
    IsBlocked: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsBlockedFromAdvertising` |
     * | Type | `Edm.Boolean` |
     */
    IsBlockedFromAdvertising: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsExternalQuantityBlocked` |
     * | Type | `Edm.Boolean` |
     */
    IsExternalQuantityBlocked: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `InfiniteQuantity` |
     * | Type | `Edm.Boolean` |
     */
    InfiniteQuantity: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BlockComment` |
     * | Type | `Edm.String` |
     */
    BlockComment: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BlockedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    BlockedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BlockedFromAdvertisingDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    BlockedFromAdvertisingDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReceivedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ReceivedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `LastSaleDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    LastSaleDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ASIN` |
     * | Type | `Edm.String` |
     */
    ASIN: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Brand` |
     * | Type | `Edm.String` |
     */
    Brand: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Condition` |
     * | Type | `Edm.String` |
     */
    Condition: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Description` |
     * | Type | `Edm.String` |
     */
    Description: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EAN` |
     * | Type | `Edm.String` |
     */
    EAN: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FlagDescription` |
     * | Type | `Edm.String` |
     */
    FlagDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Flag` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.FlagType` |
     * | Nullable | `false` |
     */
    Flag: FlagType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HarmonizedCode` |
     * | Type | `Edm.String` |
     */
    HarmonizedCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ISBN` |
     * | Type | `Edm.String` |
     */
    ISBN: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Manufacturer` |
     * | Type | `Edm.String` |
     */
    Manufacturer: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MPN` |
     * | Type | `Edm.String` |
     */
    MPN: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShortDescription` |
     * | Type | `Edm.String` |
     */
    ShortDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Subtitle` |
     * | Type | `Edm.String` |
     */
    Subtitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TaxProductCode` |
     * | Type | `Edm.String` |
     */
    TaxProductCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Title` |
     * | Type | `Edm.String` |
     */
    Title: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UPC` |
     * | Type | `Edm.String` |
     */
    UPC: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `WarehouseLocation` |
     * | Type | `Edm.String` |
     */
    WarehouseLocation: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Warranty` |
     * | Type | `Edm.String` |
     */
    Warranty: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MultipackQuantity` |
     * | Type | `Edm.Int32` |
     */
    MultipackQuantity: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Height` |
     * | Type | `Edm.Decimal` |
     */
    Height: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Length` |
     * | Type | `Edm.Decimal` |
     */
    Length: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Width` |
     * | Type | `Edm.Decimal` |
     */
    Width: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Weight` |
     * | Type | `Edm.Double` |
     */
    Weight: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Cost` |
     * | Type | `Edm.Decimal` |
     */
    Cost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Margin` |
     * | Type | `Edm.Decimal` |
     */
    Margin: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RetailPrice` |
     * | Type | `Edm.Decimal` |
     */
    RetailPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StartingPrice` |
     * | Type | `Edm.Decimal` |
     */
    StartingPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReservePrice` |
     * | Type | `Edm.Decimal` |
     */
    ReservePrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BuyItNowPrice` |
     * | Type | `Edm.Decimal` |
     */
    BuyItNowPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StorePrice` |
     * | Type | `Edm.Decimal` |
     */
    StorePrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SecondChancePrice` |
     * | Type | `Edm.Decimal` |
     */
    SecondChancePrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MinPrice` |
     * | Type | `Edm.Decimal` |
     */
    MinPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MaxPrice` |
     * | Type | `Edm.Decimal` |
     */
    MaxPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EstimatedShippingCost` |
     * | Type | `Edm.Decimal` |
     */
    EstimatedShippingCost: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierName` |
     * | Type | `Edm.String` |
     */
    SupplierName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierCode` |
     * | Type | `Edm.String` |
     */
    SupplierCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierPO` |
     * | Type | `Edm.String` |
     */
    SupplierPO: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Classification` |
     * | Type | `Edm.String` |
     */
    Classification: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsDisplayInStore` |
     * | Type | `Edm.Boolean` |
     */
    IsDisplayInStore: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StoreTitle` |
     * | Type | `Edm.String` |
     */
    StoreTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StoreDescription` |
     * | Type | `Edm.String` |
     */
    StoreDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.BundleType` |
     * | Nullable | `false` |
     */
    BundleType: BundleType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.InventoryItemType` |
     * | Nullable | `false` |
     */
    ProductType: InventoryItemType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalAvailableQuantity` |
     * | Type | `Edm.Int32` |
     */
    TotalAvailableQuantity: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OpenAllocatedQuantity` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    OpenAllocatedQuantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OpenAllocatedQuantityPooled` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    OpenAllocatedQuantityPooled: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingCheckoutQuantity` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingCheckoutQuantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingCheckoutQuantityPooled` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingCheckoutQuantityPooled: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingPaymentQuantity` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingPaymentQuantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingPaymentQuantityPooled` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingPaymentQuantityPooled: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingShipmentQuantity` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingShipmentQuantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PendingShipmentQuantityPooled` |
     * | Type | `Edm.Int64` |
     * | Nullable | `false` |
     */
    PendingShipmentQuantityPooled: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalQuantity` |
     * | Type | `Edm.Int64` |
     */
    TotalQuantity: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalQuantityPooled` |
     * | Type | `Edm.Int64` |
     */
    TotalQuantityPooled: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantitySoldLast7Days` |
     * | Type | `Edm.Int32` |
     */
    QuantitySoldLast7Days: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantitySoldLast14Days` |
     * | Type | `Edm.Int32` |
     */
    QuantitySoldLast14Days: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantitySoldLast30Days` |
     * | Type | `Edm.Int32` |
     */
    QuantitySoldLast30Days: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantitySoldLast60Days` |
     * | Type | `Edm.Int32` |
     */
    QuantitySoldLast60Days: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantitySoldLast90Days` |
     * | Type | `Edm.Int32` |
     */
    QuantitySoldLast90Days: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsParent` |
     * | Type | `Edm.Boolean` |
     */
    IsParent: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `IsInRelationship` |
     * | Type | `Edm.Boolean` |
     */
    IsInRelationship: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CopyToChildren` |
     * | Type | `Edm.Boolean` |
     */
    CopyToChildren: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CopyToAliases` |
     * | Type | `Edm.String` |
     */
    CopyToAliases: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ParentProductID` |
     * | Type | `Edm.Int32` |
     */
    ParentProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ParentSku` |
     * | Type | `Edm.String` |
     */
    ParentSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RelationshipName` |
     * | Type | `Edm.String` |
     */
    RelationshipName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `VaryBy` |
     * | Type | `Edm.String` |
     */
    VaryBy: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AliasType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AliasType` |
     * | Nullable | `false` |
     */
    AliasType: AliasType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     */
    ReferenceProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Attributes` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.AttributeValue)` |
     */
    Attributes?: Array<AttributeValue>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DCQuantities` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.DCQuantity)` |
     */
    DCQuantities?: Array<DCQuantity>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Images` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.Image)` |
     */
    Images?: Array<Image>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Labels` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ProductLabel)` |
     */
    Labels?: Array<ProductLabel>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BundleComponents` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ProductBundleComponent)` |
     */
    BundleComponents?: Array<ProductBundleComponent>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Children` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ChildRelationship)` |
     */
    Children?: Array<ChildRelationship>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AliasRelationships` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.AliasRelationship)` |
     */
    AliasRelationships?: Array<AliasRelationship>;
}
export type ProductId = number | {
    ID: number;
};
export interface EditableProduct extends Pick<Product, "ProfileID" | "Flag" | "BundleType" | "ProductType" | "OpenAllocatedQuantity" | "OpenAllocatedQuantityPooled" | "PendingCheckoutQuantity" | "PendingCheckoutQuantityPooled" | "PendingPaymentQuantity" | "PendingPaymentQuantityPooled" | "PendingShipmentQuantity" | "PendingShipmentQuantityPooled" | "AliasType">, Partial<Pick<Product, "CreateDateUtc" | "UpdateDateUtc" | "QuantityUpdateDateUtc" | "IsAvailableInStore" | "IsBlocked" | "IsBlockedFromAdvertising" | "IsExternalQuantityBlocked" | "InfiniteQuantity" | "BlockComment" | "BlockedDateUtc" | "BlockedFromAdvertisingDateUtc" | "ReceivedDateUtc" | "LastSaleDateUtc" | "ASIN" | "Brand" | "Condition" | "Description" | "EAN" | "FlagDescription" | "HarmonizedCode" | "ISBN" | "Manufacturer" | "MPN" | "ShortDescription" | "Sku" | "Subtitle" | "TaxProductCode" | "Title" | "UPC" | "WarehouseLocation" | "Warranty" | "MultipackQuantity" | "Height" | "Length" | "Width" | "Weight" | "Cost" | "Margin" | "RetailPrice" | "StartingPrice" | "ReservePrice" | "BuyItNowPrice" | "StorePrice" | "SecondChancePrice" | "MinPrice" | "MaxPrice" | "EstimatedShippingCost" | "SupplierName" | "SupplierCode" | "SupplierPO" | "Classification" | "IsDisplayInStore" | "StoreTitle" | "StoreDescription" | "TotalAvailableQuantity" | "TotalQuantity" | "TotalQuantityPooled" | "QuantitySoldLast7Days" | "QuantitySoldLast14Days" | "QuantitySoldLast30Days" | "QuantitySoldLast60Days" | "QuantitySoldLast90Days" | "IsParent" | "IsInRelationship" | "CopyToChildren" | "CopyToAliases" | "ParentProductID" | "ParentSku" | "RelationshipName" | "VaryBy" | "ReferenceSku" | "ReferenceProductID">> {
}
export interface Product_UpdateQuantityParams {
    Value?: QuantityUpdateRequest | null;
}
export interface Product_RemoveChildrenParams {
    Value?: ChildrenRemoveRequest | null;
}
export interface Product_UpdateAttributesParams {
    Value?: AttributesUpdateRequest | null;
}
export interface AliasRelationship {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AliasProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    AliasProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ReferenceProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AliasProductSku` |
     * | Type | `Edm.String` |
     */
    AliasProductSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type AliasRelationshipId = {
    AliasProductID: number;
    ProfileID: number;
    ReferenceProductID: number;
};
export interface EditableAliasRelationship extends Pick<AliasRelationship, "AliasProductID" | "ReferenceProductID" | "ProfileID">, Partial<Pick<AliasRelationship, "AliasProductSku">> {
}
export interface Image {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PlacementName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    PlacementName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Abbreviation` |
     * | Type | `Edm.String` |
     */
    Abbreviation: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Url` |
     * | Type | `Edm.String` |
     */
    Url: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type ImageId = {
    PlacementName: string;
    ProductID: number | null;
};
export interface EditableImage extends Pick<Image, "ProfileID" | "PlacementName">, Partial<Pick<Image, "ProductID" | "Abbreviation" | "Url">> {
}
export interface AttributeValue {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type AttributeValueId = {
    Name: string;
    ProductID: number | null;
};
export interface EditableAttributeValue extends Pick<AttributeValue, "ProfileID" | "Name">, Partial<Pick<AttributeValue, "ProductID" | "Value">> {
}
export interface DCQuantity {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    DistributionCenterID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AvailableQuantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    AvailableQuantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type DCQuantityId = {
    DistributionCenterID: number;
    ProductID: number | null;
};
export interface EditableDCQuantity extends Pick<DCQuantity, "ProfileID" | "DistributionCenterID" | "AvailableQuantity">, Partial<Pick<DCQuantity, "ProductID">> {
}
export interface ProductLabel {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type ProductLabelId = {
    Name: string;
    ProductID: number | null;
};
export interface EditableProductLabel extends Pick<ProductLabel, "ProfileID" | "Name">, Partial<Pick<ProductLabel, "ProductID">> {
}
export interface ProductBundleComponent {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ComponentID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ComponentID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ComponentSku` |
     * | Type | `Edm.String` |
     */
    ComponentSku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    Product?: Product | null;
}
export type ProductBundleComponentId = {
    ComponentID: number;
    ProductID: number | null;
};
export interface EditableProductBundleComponent extends Pick<ProductBundleComponent, "ComponentID" | "ProfileID" | "Quantity">, Partial<Pick<ProductBundleComponent, "ProductID" | "ComponentSku">> {
}
export interface ChildRelationship {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ParentProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ParentProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChildProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ChildProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChildProduct` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Product` |
     */
    ChildProduct?: Product | null;
}
export type ChildRelationshipId = {
    ChildProductID: number;
    ParentProductID: number;
};
export interface EditableChildRelationship extends Pick<ChildRelationship, "ParentProductID" | "ProfileID" | "ChildProductID"> {
}
export interface Package {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     */
    Name: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Description` |
     * | Type | `Edm.String` |
     */
    Description: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCarrier` |
     * | Type | `Edm.String` |
     */
    ShippingCarrier: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Length` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    Length: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Width` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    Width: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Height` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    Height: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EmptyWeight` |
     * | Type | `Edm.Decimal` |
     */
    EmptyWeight: number | null;
}
export type PackageId = number | {
    ID: number;
};
export interface EditablePackage extends Pick<Package, "ProfileID" | "Length" | "Width" | "Height">, Partial<Pick<Package, "Name" | "Description" | "ShippingCarrier" | "EmptyWeight">> {
}
export interface ChannelDocument {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentKey` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    DocumentKey: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Contents` |
     * | Type | `Edm.String` |
     */
    Contents: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.ChannelDocumentType` |
     * | Nullable | `false` |
     */
    DocumentType: ChannelDocumentType;
}
export type ChannelDocumentId = string | {
    DocumentKey: string;
};
export interface EditableChannelDocument extends Pick<ChannelDocument, "ID" | "ProfileID" | "DocumentType">, Partial<Pick<ChannelDocument, "Contents">> {
}
export interface NotSuppliedChannelDocument {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.ChannelDocumentType` |
     * | Nullable | `false` |
     */
    DocumentType: ChannelDocumentType;
}
export type NotSuppliedChannelDocumentId = number | {
    ID: number;
};
export interface EditableNotSuppliedChannelDocument extends Pick<NotSuppliedChannelDocument, "ProfileID" | "DocumentType"> {
}
export interface Site {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteName` |
     * | Type | `Edm.String` |
     */
    SiteName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteCategoryID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    SiteCategoryID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteCategoryName` |
     * | Type | `Edm.String` |
     */
    SiteCategoryName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CancellationConfiguration` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.CancellationConfiguration` |
     */
    CancellationConfiguration: CancellationConfiguration | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RefundConfiguration` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.RefundConfiguration` |
     */
    RefundConfiguration: RefundConfiguration | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdjustmentReasons` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.CodeDescription)` |
     */
    AdjustmentReasons: Array<CodeDescription>;
}
export type SiteId = number | {
    ID: number;
};
export interface EditableSite extends Pick<Site, "SiteCategoryID">, Partial<Pick<Site, "SiteName" | "SiteCategoryName">> {
    CancellationConfiguration?: EditableCancellationConfiguration | null;
    RefundConfiguration?: EditableRefundConfiguration | null;
    AdjustmentReasons?: Array<EditableCodeDescription>;
}
export interface OrderDocumentFlyweight {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentKey` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    DocumentKey: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreateDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    CreateDateUtc: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DocumentType` |
     * | Nullable | `false` |
     */
    DocumentType: DocumentType;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `MimeType` |
     * | Type | `Edm.String` |
     */
    MimeType: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DocumentSource` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DocumentSourceType` |
     * | Nullable | `false` |
     */
    DocumentSource: DocumentSourceType;
}
export type OrderDocumentFlyweightId = {
    DocumentKey: string;
    OrderID: number;
};
export interface EditableOrderDocumentFlyweight extends Pick<OrderDocumentFlyweight, "DocumentKey" | "OrderID" | "ProfileID" | "CreateDateUtc" | "DocumentType" | "DocumentSource">, Partial<Pick<OrderDocumentFlyweight, "MimeType">> {
}
export interface OrderDocument extends OrderDocumentFlyweight {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Content` |
     * | Type | `Edm.String` |
     */
    Content: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Metadata` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.OrderDocumentMetadata)` |
     */
    Metadata?: Array<OrderDocumentMetadata>;
}
export interface EditableOrderDocument extends Pick<OrderDocument, "DocumentKey" | "OrderID" | "ProfileID" | "CreateDateUtc" | "DocumentType" | "DocumentSource">, Partial<Pick<OrderDocument, "MimeType" | "Content">> {
}
export interface OrderDocumentMetadata {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Key` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Key: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
}
export type OrderDocumentMetadataId = string | {
    Key: string;
};
export interface EditableOrderDocumentMetadata extends Partial<Pick<OrderDocumentMetadata, "Value">> {
}
export interface OrderAttributeValue {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
}
export type OrderAttributeValueId = {
    Name: string;
    OrderID: number | null;
};
export interface EditableOrderAttributeValue extends Pick<OrderAttributeValue, "Name" | "ProfileID">, Partial<Pick<OrderAttributeValue, "Value" | "OrderID">> {
}
export interface OrderItemAttributeValue {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItem` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.OrderItem` |
     */
    OrderItem?: OrderItem | null;
}
export type OrderItemAttributeValueId = {
    Name: string;
    OrderItemID: number | null;
};
export interface EditableOrderItemAttributeValue extends Pick<OrderItemAttributeValue, "Name" | "OrderID" | "ProfileID">, Partial<Pick<OrderItemAttributeValue, "Value" | "OrderItemID">> {
}
export interface ShippingOverride {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    DistributionCenterID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCarrier` |
     * | Type | `Edm.String` |
     */
    ShippingCarrier: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingClass` |
     * | Type | `Edm.String` |
     */
    ShippingClass: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingNumber` |
     * | Type | `Edm.String` |
     */
    TrackingNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingUrl` |
     * | Type | `Edm.String` |
     */
    TrackingUrl: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerFulfillmentID` |
     * | Type | `Edm.String` |
     */
    SellerFulfillmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ApplyShippingRules` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    ApplyShippingRules: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EstimatedShipDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    EstimatedShipDateUtc: string | null;
}
export interface EditableShippingOverride extends Pick<ShippingOverride, "Quantity" | "DistributionCenterID" | "ApplyShippingRules">, Partial<Pick<ShippingOverride, "Sku" | "ShippingCarrier" | "ShippingClass" | "TrackingNumber" | "TrackingUrl" | "SellerFulfillmentID" | "ShippedDateUtc" | "EstimatedShipDateUtc">> {
}
export interface ExportStatus {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProfileID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProfileID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     */
    OrderID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ApplicationID` |
     * | Type | `Edm.Int32` |
     */
    ApplicationID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeveloperKey` |
     * | Type | `Edm.String` |
     */
    DeveloperKey: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Override` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Override: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Order` |
     */
    Order?: Order | null;
}
export type ExportStatusId = number | {
    ID: number;
};
export interface EditableExportStatus extends Pick<ExportStatus, "ProfileID" | "Override">, Partial<Pick<ExportStatus, "OrderID" | "ApplicationID" | "DeveloperKey">> {
}
export interface AmazonVATInvoiceDocument extends ChannelDocument {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdjustmentID` |
     * | Type | `Edm.String` |
     */
    AdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Status` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceRequestStatus` |
     * | Nullable | `false` |
     */
    Status: AmazonVATInvoiceRequestStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `InvoiceNumber` |
     * | Type | `Edm.String` |
     */
    InvoiceNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalAmount` |
     * | Type | `Edm.Decimal` |
     */
    TotalAmount: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TotalVATAmount` |
     * | Type | `Edm.Decimal` |
     */
    TotalVATAmount: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreateDateUTC` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    CreateDateUTC: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UpdateDateUTC` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    UpdateDateUTC: string;
}
export interface EditableAmazonVATInvoiceDocument extends Pick<AmazonVATInvoiceDocument, "ID" | "ProfileID" | "DocumentType" | "OrderID" | "Status" | "CreateDateUTC" | "UpdateDateUTC">, Partial<Pick<AmazonVATInvoiceDocument, "Contents" | "AdjustmentID" | "InvoiceNumber" | "TotalAmount" | "TotalVATAmount">> {
}
export interface SiteAccount {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteAccountName` |
     * | Type | `Edm.String` |
     */
    SiteAccountName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    SiteID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteName` |
     * | Type | `Edm.String` |
     */
    SiteName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Enabled` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Enabled: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Profile` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Profile` |
     */
    Profile?: Profile | null;
}
export type SiteAccountId = number | {
    ID: number;
};
export interface EditableSiteAccount extends Pick<SiteAccount, "SiteID" | "Enabled">, Partial<Pick<SiteAccount, "SiteAccountName" | "SiteName">> {
}
export interface ShippingLabelPartnerAccount {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AccountName` |
     * | Type | `Edm.String` |
     */
    AccountName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PartnerName` |
     * | Type | `Edm.String` |
     */
    PartnerName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Profile` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.Profile` |
     */
    Profile?: Profile | null;
}
export type ShippingLabelPartnerAccountId = number | {
    ID: number;
};
export interface EditableShippingLabelPartnerAccount extends Partial<Pick<ShippingLabelPartnerAccount, "AccountName" | "PartnerName">> {
}
export interface NotSuppliedAmazonVATInvoiceDocument extends NotSuppliedChannelDocument {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AdjustmentID` |
     * | Type | `Edm.String` |
     */
    AdjustmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CreateDateUTC` |
     * | Type | `Edm.DateTimeOffset` |
     * | Nullable | `false` |
     */
    CreateDateUTC: string;
}
export interface EditableNotSuppliedAmazonVATInvoiceDocument extends Pick<NotSuppliedAmazonVATInvoiceDocument, "ProfileID" | "DocumentType" | "OrderID" | "CreateDateUTC">, Partial<Pick<NotSuppliedAmazonVATInvoiceDocument, "AdjustmentID">> {
}
export interface Webhook {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     */
    Name: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Status` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.WebhookEndpointStatus` |
     * | Nullable | `false` |
     */
    Status: WebhookEndpointStatus;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `WebhookUri` |
     * | Type | `Edm.String` |
     */
    WebhookUri: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SigningSecret` |
     * | Type | `Edm.String` |
     */
    SigningSecret: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EventTypes` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.WebhookEventType)` |
     * | Nullable | `false` |
     */
    EventTypes: Array<WebhookEventType>;
}
export type WebhookId = number | {
    ID: number;
};
export interface EditableWebhook extends Pick<Webhook, "Status" | "EventTypes">, Partial<Pick<Webhook, "Name" | "WebhookUri" | "SigningSecret">> {
}
export interface RetryFailedEventsParams {
    Token?: string | null;
}
export interface ShipOrderRequest {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDateUtc` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDateUtc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingNumber` |
     * | Type | `Edm.String` |
     */
    TrackingNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReturnTrackingNumber` |
     * | Type | `Edm.String` |
     */
    ReturnTrackingNumber: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingCarrier` |
     * | Type | `Edm.String` |
     */
    ShippingCarrier: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippingClass` |
     * | Type | `Edm.String` |
     */
    ShippingClass: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     */
    DistributionCenterID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerFulfillmentID` |
     * | Type | `Edm.String` |
     */
    SellerFulfillmentID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DeliveryStatus` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.DeliveryStatus` |
     */
    DeliveryStatus: DeliveryStatus | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.FulfillmentType` |
     */
    FulfillmentType: FulfillmentType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PreventMarketplaceCommunication` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    PreventMarketplaceCommunication: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TrackingUrl` |
     * | Type | `Edm.String` |
     */
    TrackingUrl: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SerialShippingContainerCode` |
     * | Type | `Edm.String` |
     */
    SerialShippingContainerCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Items` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.ShipOrderRequestItem)` |
     */
    Items: Array<ShipOrderRequestItem>;
}
export interface EditableShipOrderRequest extends Pick<ShipOrderRequest, "PreventMarketplaceCommunication">, Partial<Pick<ShipOrderRequest, "ShippedDateUtc" | "TrackingNumber" | "ReturnTrackingNumber" | "ShippingCarrier" | "ShippingClass" | "DistributionCenterID" | "SellerFulfillmentID" | "DeliveryStatus" | "FulfillmentType" | "TrackingUrl" | "SerialShippingContainerCode">> {
    Items?: Array<EditableShipOrderRequestItem>;
}
export interface ShippingItems {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FulfillmentItemID` |
     * | Type | `Edm.Int32` |
     */
    FulfillmentItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Description` |
     * | Type | `Edm.String` |
     */
    Description: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitWeight` |
     * | Type | `Edm.Decimal` |
     */
    UnitWeight: number | null;
}
export interface EditableShippingItems extends Pick<ShippingItems, "Quantity">, Partial<Pick<ShippingItems, "FulfillmentItemID" | "OrderItemID" | "Sku" | "Description" | "UnitWeight">> {
}
export interface PickupLabelLineItem {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SerialNumbers` |
     * | Type | `Collection(Edm.String)` |
     */
    SerialNumbers: Array<string>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SiteOrderItemID` |
     * | Type | `Edm.String` |
     */
    SiteOrderItemID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
}
export interface EditablePickupLabelLineItem extends Pick<PickupLabelLineItem, "Quantity">, Partial<Pick<PickupLabelLineItem, "OrderItemID" | "SerialNumbers" | "SiteOrderItemID" | "Sku">> {
}
export interface RmaConditionQuantity {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Condition` |
     * | Type | `Edm.String` |
     */
    Condition: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
}
export interface EditableRmaConditionQuantity extends Pick<RmaConditionQuantity, "Quantity">, Partial<Pick<RmaConditionQuantity, "Condition">> {
}
export interface QuantityUpdateRequest {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompleteDCList` |
     * | Type | `Edm.Boolean` |
     */
    CompleteDCList: boolean | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UpdateType` |
     * | Type | `ChannelAdvisor.RestApi.V1.Models.QuantityUpdateType` |
     */
    UpdateType: QuantityUpdateType | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Updates` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.DCxQtyUpdate)` |
     */
    Updates: Array<DCxQtyUpdate>;
}
export interface EditableQuantityUpdateRequest extends Partial<Pick<QuantityUpdateRequest, "CompleteDCList" | "UpdateType">> {
    Updates?: Array<EditableDCxQtyUpdate>;
}
export interface ChildrenRemoveRequest {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChildProductIDList` |
     * | Type | `Collection(Edm.Int32)` |
     * | Nullable | `false` |
     */
    ChildProductIDList: Array<number>;
}
export interface EditableChildrenRemoveRequest extends Pick<ChildrenRemoveRequest, "ChildProductIDList"> {
}
export interface AttributesUpdateRequest {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Attributes` |
     * | Type | `Collection(ChannelAdvisor.RestApi.V1.Models.AttributeUpdate)` |
     */
    Attributes: Array<AttributeUpdate>;
}
export interface EditableAttributesUpdateRequest {
    Attributes?: Array<EditableAttributeUpdate>;
}
export interface CancellationConfiguration {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderCancellations` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderCancellations: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderItemCancellations` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderItemCancellations: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderItemRMACancellations` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderItemRMACancellations: boolean;
}
export interface EditableCancellationConfiguration extends Pick<CancellationConfiguration, "SupportsOrderCancellations" | "SupportsOrderItemCancellations" | "SupportsOrderItemRMACancellations"> {
}
export interface RefundConfiguration {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderRefunds` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderRefunds: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderItemRefunds` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderItemRefunds: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupportsOrderItemRMARefunds` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    SupportsOrderItemRMARefunds: boolean;
}
export interface EditableRefundConfiguration extends Pick<RefundConfiguration, "SupportsOrderRefunds" | "SupportsOrderItemRefunds" | "SupportsOrderItemRMARefunds"> {
}
export interface CodeDescription {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Code` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Code: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Description` |
     * | Type | `Edm.String` |
     */
    Description: string | null;
}
export interface EditableCodeDescription extends Pick<CodeDescription, "Code">, Partial<Pick<CodeDescription, "Description">> {
}
export interface ShipOrderRequestItem {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderItemID` |
     * | Type | `Edm.Int32` |
     */
    OrderItemID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     */
    ProductID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Sku` |
     * | Type | `Edm.String` |
     */
    Sku: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SellerFulfillmentItemID` |
     * | Type | `Edm.String` |
     */
    SellerFulfillmentItemID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReferenceSku` |
     * | Type | `Edm.String` |
     */
    ReferenceSku: string | null;
}
export interface EditableShipOrderRequestItem extends Pick<ShipOrderRequestItem, "Quantity">, Partial<Pick<ShipOrderRequestItem, "OrderItemID" | "ProductID" | "Sku" | "SellerFulfillmentItemID" | "ReferenceSku">> {
}
export interface DCxQtyUpdate {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DistributionCenterID` |
     * | Type | `Edm.Int32` |
     */
    DistributionCenterID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int32` |
     */
    Quantity: number | null;
}
export interface EditableDCxQtyUpdate extends Partial<Pick<DCxQtyUpdate, "DistributionCenterID" | "Quantity">> {
}
export interface AttributeUpdate {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name` |
     * | Type | `Edm.String` |
     */
    Name: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Value` |
     * | Type | `Edm.String` |
     */
    Value: string | null;
}
export interface EditableAttributeUpdate extends Partial<Pick<AttributeUpdate, "Name" | "Value">> {
}
