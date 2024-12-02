import { QNumberPath, QStringPath, QDateTimeOffsetPath, QEnumPath, QBooleanPath, QEntityCollectionPath, QueryObject, QId, QNumberParam, QFunction, QComplexParam, QAction, QBooleanParam, QDateTimeOffsetParam, QEnumParam, QStringParam, QGuidParam, QEntityPath, QEnumCollectionPath, QCollectionPath, QStringCollection, QNumberCollection } from "@odata2ts/odata-query-objects";
import type { OrderId, Order_ShipParams, Order_ShippingRatesParams, Order_PurchaseLabelParams, Order_PickupLabelParams, Order_AdjustParams, Order_CreateParams, OrderItemId, OrderItem_AdjustParams, FulfillmentId, Fulfillment_MoveParams, FulfillmentItemId, FulfillmentItem_MoveParams, DistributionCenterId, OperatingHoursId, OrderAdjustmentId, OrderItemAdjustmentId, OrderItemAdjustment_ApproveReturnParams, OrderItemAdjustment_RejectReturnParams, OrderItemBundleComponentId, PromotionId, CustomFieldId, ProfileId, ProductId, Product_UpdateQuantityParams, Product_RemoveChildrenParams, Product_UpdateAttributesParams, AliasRelationshipId, ImageId, AttributeValueId, DCQuantityId, ProductLabelId, ProductBundleComponentId, ChildRelationshipId, PackageId, ChannelDocumentId, NotSuppliedChannelDocumentId, SiteId, OrderDocumentFlyweightId, OrderDocumentMetadataId, OrderAttributeValueId, OrderItemAttributeValueId, ExportStatusId, SiteAccountId, ShippingLabelPartnerAccountId, WebhookId, RetryFailedEventsParams } from "./ChannelAdvisorRestApiV1ModelsModel";
import { DistributionCenterRollupType, CheckoutStatus, PaymentStatus, ShippingStatus, TaxType, FulfillmentType, DeliveryStatus, FulfillmentRequestStatus, LabelFormatType, FulfillmentItemSiteCommunicationStatus, DistributionCenterType, ThroughputLimitUnits, DayIdentifier, AdjustmentSource, AdjustmentReason, AdjustmentType, AsyncStatus, FlagType, BundleType, InventoryItemType, AliasType, ChannelDocumentType, DocumentType, DocumentSourceType, AmazonVATInvoiceRequestStatus, WebhookEndpointStatus, WebhookEventType, QuantityUpdateType } from "./ChannelAdvisorRestApiV1ModelsModel";
export declare class QOrder extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly SiteID: QNumberPath<number>;
    readonly SiteName: QStringPath<string>;
    readonly UserDataPresent: QNumberPath<number>;
    readonly UserDataRemovalDateUTC: QDateTimeOffsetPath<string>;
    readonly SiteAccountID: QNumberPath<number>;
    readonly SiteOrderID: QStringPath<string>;
    readonly SecondarySiteOrderID: QStringPath<string>;
    readonly SellerOrderID: QStringPath<string>;
    readonly CheckoutSourceID: QNumberPath<number>;
    readonly Currency: QStringPath<string>;
    readonly CreatedDateUtc: QDateTimeOffsetPath<string>;
    readonly ImportDateUtc: QDateTimeOffsetPath<string>;
    readonly UpdatedDateUtc: QDateTimeOffsetPath<string>;
    readonly PublicNotes: QStringPath<string>;
    readonly PrivateNotes: QStringPath<string>;
    readonly SpecialInstructions: QStringPath<string>;
    readonly TotalPrice: QNumberPath<number>;
    readonly TotalTaxPrice: QNumberPath<number>;
    readonly TotalShippingPrice: QNumberPath<number>;
    readonly TotalShippingTaxPrice: QNumberPath<number>;
    readonly TotalInsurancePrice: QNumberPath<number>;
    readonly TotalGiftOptionPrice: QNumberPath<number>;
    readonly TotalGiftOptionTaxPrice: QNumberPath<number>;
    readonly AdditionalCostOrDiscount: QNumberPath<number>;
    readonly EstimatedShipDateUtc: QDateTimeOffsetPath<string>;
    readonly DeliverByDateUtc: QDateTimeOffsetPath<string>;
    readonly RequestedShippingCarrier: QStringPath<string>;
    readonly RequestedShippingClass: QStringPath<string>;
    readonly ResellerID: QStringPath<string>;
    readonly FlagID: QNumberPath<number>;
    readonly FlagDescription: QStringPath<string>;
    readonly OrderTags: QStringPath<string>;
    readonly DistributionCenterTypeRollup: QEnumPath<typeof DistributionCenterRollupType>;
    readonly CheckoutStatus: QEnumPath<typeof CheckoutStatus>;
    readonly PaymentStatus: QEnumPath<typeof PaymentStatus>;
    readonly ShippingStatus: QEnumPath<typeof ShippingStatus>;
    readonly CheckoutDateUtc: QDateTimeOffsetPath<string>;
    readonly PaymentDateUtc: QDateTimeOffsetPath<string>;
    readonly ShippingDateUtc: QDateTimeOffsetPath<string>;
    readonly BuyerUserId: QStringPath<string>;
    readonly BuyerEmailAddress: QStringPath<string>;
    readonly BuyerEmailOptIn: QBooleanPath<boolean>;
    readonly OrderTaxType: QEnumPath<typeof TaxType>;
    readonly ShippingTaxType: QEnumPath<typeof TaxType>;
    readonly GiftOptionsTaxType: QEnumPath<typeof TaxType>;
    readonly PaymentMethod: QStringPath<string>;
    readonly PaymentTransactionID: QStringPath<string>;
    readonly PaymentPaypalAccountID: QStringPath<string>;
    readonly PaymentCreditCardLast4: QStringPath<string>;
    readonly PaymentMerchantReferenceNumber: QStringPath<string>;
    readonly ShippingTitle: QStringPath<string>;
    readonly ShippingFirstName: QStringPath<string>;
    readonly ShippingLastName: QStringPath<string>;
    readonly ShippingSuffix: QStringPath<string>;
    readonly ShippingCompanyName: QStringPath<string>;
    readonly ShippingCompanyJobTitle: QStringPath<string>;
    readonly ShippingDaytimePhone: QStringPath<string>;
    readonly ShippingEveningPhone: QStringPath<string>;
    readonly ShippingAddressLine1: QStringPath<string>;
    readonly ShippingAddressLine2: QStringPath<string>;
    readonly ShippingCity: QStringPath<string>;
    readonly ShippingStateOrProvince: QStringPath<string>;
    readonly ShippingStateOrProvinceName: QStringPath<string>;
    readonly ShippingPostalCode: QStringPath<string>;
    readonly ShippingCountry: QStringPath<string>;
    readonly BillingTitle: QStringPath<string>;
    readonly BillingFirstName: QStringPath<string>;
    readonly BillingLastName: QStringPath<string>;
    readonly BillingSuffix: QStringPath<string>;
    readonly BillingCompanyName: QStringPath<string>;
    readonly BillingCompanyJobTitle: QStringPath<string>;
    readonly BillingDaytimePhone: QStringPath<string>;
    readonly BillingEveningPhone: QStringPath<string>;
    readonly BillingAddressLine1: QStringPath<string>;
    readonly BillingAddressLine2: QStringPath<string>;
    readonly BillingCity: QStringPath<string>;
    readonly BillingStateOrProvince: QStringPath<string>;
    readonly BillingStateOrProvinceName: QStringPath<string>;
    readonly BillingPostalCode: QStringPath<string>;
    readonly BillingCountry: QStringPath<string>;
    readonly PromotionCode: QStringPath<string>;
    readonly PromotionAmount: QNumberPath<number>;
    readonly Items: QEntityCollectionPath<QOrderItem>;
    readonly Fulfillments: QEntityCollectionPath<QFulfillment>;
    readonly Adjustments: QEntityCollectionPath<QOrderAdjustment>;
    readonly CustomFields: QEntityCollectionPath<QCustomField>;
    readonly OrderAttributes: QEntityCollectionPath<QOrderAttributeValue>;
    readonly Exports: QEntityCollectionPath<QExportStatus>;
    readonly ChannelDocuments: QEntityCollectionPath<QChannelDocument>;
}
export declare const qOrder: QOrder;
export declare class QOrderId extends QId<OrderId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class Order_QOrderDocuments extends QFunction {
    private readonly params;
    constructor();
    getParams(): [];
    buildUrl(notEncoded?: boolean): string;
}
export declare class Order_QShip extends QAction<Order_ShipParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QShipOrderRequest>[];
}
export declare class Order_QShippingRates extends QAction<Order_ShippingRatesParams> {
    private readonly params;
    constructor();
    getParams(): (QNumberParam<number> | QComplexParam<unknown, QShippingItems> | QBooleanParam<boolean> | QDateTimeOffsetParam<string> | QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike> | QStringParam<string>)[];
}
export declare class Order_QPurchaseLabel extends QAction<Order_PurchaseLabelParams> {
    private readonly params;
    constructor();
    getParams(): (QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike> | QStringParam<string> | QGuidParam<string>)[];
}
export declare class Order_QPickupLabel extends QAction<Order_PickupLabelParams> {
    private readonly params;
    constructor();
    getParams(): (QNumberParam<number> | QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike> | QStringParam<string> | QComplexParam<unknown, QPickupLabelLineItem>)[];
}
export declare class Order_QAdjust extends QAction<Order_AdjustParams> {
    private readonly params;
    constructor();
    getParams(): (QNumberParam<number> | QBooleanParam<boolean> | QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike> | QStringParam<string>)[];
}
export declare class Order_QExport extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class Order_QConfirm extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class Order_QDeny extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class Order_QCreate extends QAction<Order_CreateParams> {
    private readonly params;
    constructor();
    getParams(): (QComplexParam<unknown, QOrder> | QComplexParam<unknown, QShippingOverride>)[];
}
export declare class QOrderItem extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly SiteOrderItemID: QStringPath<string>;
    readonly SellerOrderItemID: QStringPath<string>;
    readonly SiteListingID: QStringPath<string>;
    readonly Sku: QStringPath<string>;
    readonly Title: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly UnitPrice: QNumberPath<number>;
    readonly TaxPrice: QNumberPath<number>;
    readonly ShippingPrice: QNumberPath<number>;
    readonly ShippingTaxPrice: QNumberPath<number>;
    readonly RecyclingFee: QNumberPath<number>;
    readonly UnitEstimatedShippingCost: QNumberPath<number>;
    readonly GiftMessage: QStringPath<string>;
    readonly GiftNotes: QStringPath<string>;
    readonly GiftPrice: QNumberPath<number>;
    readonly GiftTaxPrice: QNumberPath<number>;
    readonly IsBundle: QBooleanPath<boolean>;
    readonly ItemURL: QStringPath<string>;
    readonly HarmonizedCode: QStringPath<string>;
    readonly ReferenceSku: QStringPath<string>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly Order: QEntityPath<QOrder>;
    readonly BundleComponents: QEntityCollectionPath<QOrderItemBundleComponent>;
    readonly FulfillmentItems: QEntityCollectionPath<QFulfillmentItem>;
    readonly Promotions: QEntityCollectionPath<QPromotion>;
    readonly Adjustments: QEntityCollectionPath<QOrderItemAdjustment>;
    readonly OrderItemAttributes: QEntityCollectionPath<QOrderItemAttributeValue>;
}
export declare const qOrderItem: QOrderItem;
export declare class QOrderItemId extends QId<OrderItemId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class OrderItem_QAdjust extends QAction<OrderItem_AdjustParams> {
    private readonly params;
    constructor();
    getParams(): (QNumberParam<number> | QBooleanParam<boolean> | QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike> | QStringParam<string>)[];
}
export declare class QFulfillment extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly CreatedDateUtc: QDateTimeOffsetPath<string>;
    readonly UpdatedDateUtc: QDateTimeOffsetPath<string>;
    readonly Type: QEnumPath<typeof FulfillmentType>;
    readonly DeliveryStatus: QEnumPath<typeof DeliveryStatus>;
    readonly TrackingNumber: QStringPath<string>;
    readonly TrackingUrl: QStringPath<string>;
    readonly ReturnTrackingNumber: QStringPath<string>;
    readonly ShippingCarrier: QStringPath<string>;
    readonly ShippingClass: QStringPath<string>;
    readonly DistributionCenterID: QNumberPath<number>;
    readonly ExternalFulfillmentCenterCode: QStringPath<string>;
    readonly ExternalFulfillmentStatus: QEnumPath<typeof FulfillmentRequestStatus>;
    readonly ShippingCost: QNumberPath<number>;
    readonly InsuranceCost: QNumberPath<number>;
    readonly TaxCost: QNumberPath<number>;
    readonly ShippedDateUtc: QDateTimeOffsetPath<string>;
    readonly SellerFulfillmentID: QStringPath<string>;
    readonly HasShippingLabel: QBooleanPath<boolean>;
    readonly HasChannelPackingSlip: QBooleanPath<boolean>;
    readonly HasReturnLabel: QBooleanPath<boolean>;
    readonly HasChannelReturnLabel: QBooleanPath<boolean>;
    readonly ExternalFulfillmentNumber: QStringPath<string>;
    readonly ExternalFulfillmentReferenceNumber: QStringPath<string>;
    readonly ShippingLabelRequestID: QStringPath<string>;
    readonly StagingLocation: QStringPath<string>;
    readonly SerialShippingContainerCode: QStringPath<string>;
    readonly EarliestDeliveryDateUtc: QDateTimeOffsetPath<string>;
    readonly EarliestShipDateUtc: QDateTimeOffsetPath<string>;
    readonly EstimatedDeliveryDateUtc: QDateTimeOffsetPath<string>;
    readonly EstimatedShipDateUtc: QDateTimeOffsetPath<string>;
    readonly LabelFormat: QEnumPath<typeof LabelFormatType>;
    readonly ReturnLabelFormat: QEnumPath<typeof LabelFormatType>;
    readonly ChannelReturnLabelFormat: QEnumPath<typeof LabelFormatType>;
    readonly Order: QEntityPath<QOrder>;
    readonly Items: QEntityCollectionPath<QFulfillmentItem>;
}
export declare const qFulfillment: QFulfillment;
export declare class QFulfillmentId extends QId<FulfillmentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class Fulfillment_QMove extends QAction<Fulfillment_MoveParams> {
    private readonly params;
    constructor();
    getParams(): QNumberParam<number>[];
}
export declare class Fulfillment_QConfirm extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class Fulfillment_QDeny extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class QFulfillmentItem extends QueryObject {
    readonly DistributionCenterItemUnitCost: QNumberPath<number>;
    readonly DistributionCenterShippingCost: QNumberPath<number>;
    readonly DistributionCenterCalculatedItemUnitCost: QNumberPath<number>;
    readonly DistributionCenterCalculatedShippingCost: QNumberPath<number>;
    readonly ID: QNumberPath<number>;
    readonly Sku: QStringPath<string>;
    readonly ProfileID: QNumberPath<number>;
    readonly FulfillmentID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly OrderItemID: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly SellerFulfillmentItemID: QStringPath<string>;
    readonly MarketplaceShippingStatus: QEnumPath<typeof FulfillmentItemSiteCommunicationStatus>;
    readonly ReferenceSku: QStringPath<string>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly WarehouseLocation: QStringPath<string>;
    readonly Fulfillment: QEntityPath<QFulfillment>;
    readonly OrderItem: QEntityPath<QOrderItem>;
    readonly BundleComponent: QEntityPath<QOrderItemBundleComponent>;
}
export declare const qFulfillmentItem: QFulfillmentItem;
export declare class QFulfillmentItemId extends QId<FulfillmentItemId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class FulfillmentItem_QMove extends QAction<FulfillmentItem_MoveParams> {
    private readonly params;
    constructor();
    getParams(): QNumberParam<number>[];
}
export declare class QDistributionCenter extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Code: QStringPath<string>;
    readonly FulfillmentPartnerName: QStringPath<string>;
    readonly ContactName: QStringPath<string>;
    readonly ContactEmail: QStringPath<string>;
    readonly ContactPhone: QStringPath<string>;
    readonly Address1: QStringPath<string>;
    readonly Address2: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly StateOrProvince: QStringPath<string>;
    readonly Country: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly PickupLocation: QBooleanPath<boolean>;
    readonly ShipLocation: QBooleanPath<boolean>;
    readonly Type: QEnumPath<typeof DistributionCenterType>;
    readonly IsExternallyManaged: QBooleanPath<boolean>;
    readonly IsDeleted: QBooleanPath<boolean>;
    readonly DeletedDateUtc: QDateTimeOffsetPath<string>;
    readonly County: QStringPath<string>;
    readonly District: QStringPath<string>;
    readonly TimeZone: QStringPath<string>;
    readonly HandlingTimeMinutes: QNumberPath<number>;
    readonly DeliveryAvailable: QBooleanPath<boolean>;
    readonly PickupOrderHoldMinutes: QNumberPath<number>;
    readonly ThroughputLimitNumber: QNumberPath<number>;
    readonly ThroughputLimitUnits: QEnumPath<typeof ThroughputLimitUnits>;
    readonly MainPhone: QStringPath<string>;
    readonly AltPhone: QStringPath<string>;
    readonly Fax: QStringPath<string>;
    readonly HomePage: QStringPath<string>;
    readonly Email: QStringPath<string>;
    readonly BusinessDescription: QStringPath<string>;
    readonly Latitude: QNumberPath<number>;
    readonly Longitude: QNumberPath<number>;
    readonly StoreCategories: QStringPath<string>;
    readonly CourierPickupInstructions: QStringPath<string>;
    readonly CustomerPickupInstructions: QStringPath<string>;
    readonly PickupInstructions: QStringPath<string>;
    readonly OperatingHours: QEntityCollectionPath<QOperatingHours>;
}
export declare const qDistributionCenter: QDistributionCenter;
export declare class QDistributionCenterId extends QId<DistributionCenterId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QOperatingHours extends QueryObject {
    readonly DistributionCenterID: QNumberPath<number>;
    readonly DayID: QEnumPath<typeof DayIdentifier>;
    readonly OpenTime: QStringPath<string>;
    readonly CloseTime: QStringPath<string>;
}
export declare const qOperatingHours: QOperatingHours;
export declare class QOperatingHoursId extends QId<OperatingHoursId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QEnumParam<import("@odata2ts/odata-query-objects").StringEnumLike>)[];
}
export declare class QOrderAdjustment extends QueryObject {
    readonly CreatedSource: QEnumPath<typeof AdjustmentSource>;
    readonly LastUpdatedSource: QEnumPath<typeof AdjustmentSource>;
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly IsRestock: QBooleanPath<boolean>;
    readonly Reason: QEnumPath<typeof AdjustmentReason>;
    readonly ItemAdjustment: QNumberPath<number>;
    readonly TaxAdjustment: QNumberPath<number>;
    readonly ShippingAdjustment: QNumberPath<number>;
    readonly ShippingTaxAdjustment: QNumberPath<number>;
    readonly GiftWrapAdjustment: QNumberPath<number>;
    readonly GiftWrapTaxAdjustment: QNumberPath<number>;
    readonly RecyclingFeeAdjustment: QNumberPath<number>;
    readonly Type: QEnumPath<typeof AdjustmentType>;
    readonly SellerAdjustmentID: QStringPath<string>;
    readonly SiteAdjustmentID: QStringPath<string>;
    readonly SiteRefundDateUtc: QDateTimeOffsetPath<string>;
    readonly AdjustmentTransactionID: QStringPath<string>;
    readonly PublicNotes: QStringPath<string>;
    readonly Comment: QStringPath<string>;
    readonly CreatedDateUtc: QDateTimeOffsetPath<string>;
    readonly RequestStatus: QEnumPath<typeof AsyncStatus>;
    readonly RestockStatus: QEnumPath<typeof AsyncStatus>;
    readonly RmaNumber: QStringPath<string>;
    readonly ReturnShippingFee: QNumberPath<number>;
    readonly RestockingFee: QNumberPath<number>;
    readonly ReturnTrackingNumberOrUrl: QStringPath<string>;
    readonly ReturnShippingMethod: QStringPath<string>;
    readonly Order: QEntityPath<QOrder>;
}
export declare const qOrderAdjustment: QOrderAdjustment;
export declare class QOrderAdjustmentId extends QId<OrderAdjustmentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class OrderAdjustment_QApproveBuyerRequest extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderAdjustment_QRejectBuyerRequest extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderAdjustment_QApproveReturn extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderAdjustment_QRejectReturn extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderAdjustment_QReturnShippingLabel extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class QOrderItemAdjustment extends QueryObject {
    readonly CreatedSource: QEnumPath<typeof AdjustmentSource>;
    readonly LastUpdatedSource: QEnumPath<typeof AdjustmentSource>;
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly OrderItemID: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly IsRestock: QBooleanPath<boolean>;
    readonly Reason: QEnumPath<typeof AdjustmentReason>;
    readonly ItemAdjustment: QNumberPath<number>;
    readonly TaxAdjustment: QNumberPath<number>;
    readonly ShippingAdjustment: QNumberPath<number>;
    readonly ShippingTaxAdjustment: QNumberPath<number>;
    readonly GiftWrapAdjustment: QNumberPath<number>;
    readonly GiftWrapTaxAdjustment: QNumberPath<number>;
    readonly RecyclingFeeAdjustment: QNumberPath<number>;
    readonly Type: QEnumPath<typeof AdjustmentType>;
    readonly SellerAdjustmentID: QStringPath<string>;
    readonly SiteAdjustmentID: QStringPath<string>;
    readonly SiteRefundDateUtc: QDateTimeOffsetPath<string>;
    readonly AdjustmentTransactionID: QStringPath<string>;
    readonly PublicNotes: QStringPath<string>;
    readonly Comment: QStringPath<string>;
    readonly CreatedDateUtc: QDateTimeOffsetPath<string>;
    readonly RequestStatus: QEnumPath<typeof AsyncStatus>;
    readonly RestockStatus: QEnumPath<typeof AsyncStatus>;
    readonly RmaNumber: QStringPath<string>;
    readonly ReturnShippingFee: QNumberPath<number>;
    readonly RestockingFee: QNumberPath<number>;
    readonly ReturnTrackingNumberOrUrl: QStringPath<string>;
    readonly ReturnShippingMethod: QStringPath<string>;
    readonly ReferenceSku: QStringPath<string>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly OrderItem: QEntityPath<QOrderItem>;
}
export declare const qOrderItemAdjustment: QOrderItemAdjustment;
export declare class QOrderItemAdjustmentId extends QId<OrderItemAdjustmentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class OrderItemAdjustment_QApproveBuyerRequest extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderItemAdjustment_QRejectBuyerRequest extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderItemAdjustment_QApproveReturn extends QAction<OrderItemAdjustment_ApproveReturnParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QRmaConditionQuantity>[];
}
export declare class OrderItemAdjustment_QRejectReturn extends QAction<OrderItemAdjustment_RejectReturnParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QRmaConditionQuantity>[];
}
export declare class OrderItemAdjustment_QReturnShippingLabel extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class QOrderItemBundleComponent extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly OrderItemID: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly BundleProductID: QNumberPath<number>;
    readonly Sku: QStringPath<string>;
    readonly BundleSku: QStringPath<string>;
    readonly Title: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly ReferenceSku: QStringPath<string>;
    readonly OrderItem: QEntityPath<QOrderItem>;
    readonly FulfillmentItems: QEntityCollectionPath<QFulfillmentItem>;
}
export declare const qOrderItemBundleComponent: QOrderItemBundleComponent;
export declare class QOrderItemBundleComponentId extends QId<OrderItemBundleComponentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QPromotion extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly Code: QStringPath<string>;
    readonly Amount: QNumberPath<number>;
    readonly ShippingAmount: QNumberPath<number>;
    readonly OrderItem: QEntityPath<QOrderItem>;
}
export declare const qPromotion: QPromotion;
export declare class QPromotionId extends QId<PromotionId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QCustomField extends QueryObject {
    readonly FieldID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly Value: QStringPath<string>;
    readonly Order: QEntityPath<QOrder>;
}
export declare const qCustomField: QCustomField;
export declare class QCustomFieldId extends QId<CustomFieldId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QProfile extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly AccountName: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly CurrencyCode: QStringPath<string>;
    readonly TimeZoneRegion: QStringPath<string>;
    readonly TimeZoneDescription: QStringPath<string>;
    readonly DefaultDistributionCenterID: QNumberPath<number>;
    readonly SiteAccounts: QEntityCollectionPath<QSiteAccount>;
    readonly ShippingLabelPartnerAccounts: QEntityCollectionPath<QShippingLabelPartnerAccount>;
}
export declare const qProfile: QProfile;
export declare class QProfileId extends QId<ProfileId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QProduct extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly CreateDateUtc: QDateTimeOffsetPath<string>;
    readonly UpdateDateUtc: QDateTimeOffsetPath<string>;
    readonly QuantityUpdateDateUtc: QDateTimeOffsetPath<string>;
    readonly IsAvailableInStore: QBooleanPath<boolean>;
    readonly IsBlocked: QBooleanPath<boolean>;
    readonly IsBlockedFromAdvertising: QBooleanPath<boolean>;
    readonly IsExternalQuantityBlocked: QBooleanPath<boolean>;
    readonly InfiniteQuantity: QBooleanPath<boolean>;
    readonly BlockComment: QStringPath<string>;
    readonly BlockedDateUtc: QDateTimeOffsetPath<string>;
    readonly BlockedFromAdvertisingDateUtc: QDateTimeOffsetPath<string>;
    readonly ReceivedDateUtc: QDateTimeOffsetPath<string>;
    readonly LastSaleDateUtc: QDateTimeOffsetPath<string>;
    readonly ASIN: QStringPath<string>;
    readonly Brand: QStringPath<string>;
    readonly Condition: QStringPath<string>;
    readonly Description: QStringPath<string>;
    readonly EAN: QStringPath<string>;
    readonly FlagDescription: QStringPath<string>;
    readonly Flag: QEnumPath<typeof FlagType>;
    readonly HarmonizedCode: QStringPath<string>;
    readonly ISBN: QStringPath<string>;
    readonly Manufacturer: QStringPath<string>;
    readonly MPN: QStringPath<string>;
    readonly ShortDescription: QStringPath<string>;
    readonly Sku: QStringPath<string>;
    readonly Subtitle: QStringPath<string>;
    readonly TaxProductCode: QStringPath<string>;
    readonly Title: QStringPath<string>;
    readonly UPC: QStringPath<string>;
    readonly WarehouseLocation: QStringPath<string>;
    readonly Warranty: QStringPath<string>;
    readonly MultipackQuantity: QNumberPath<number>;
    readonly Height: QNumberPath<number>;
    readonly Length: QNumberPath<number>;
    readonly Width: QNumberPath<number>;
    readonly Weight: QNumberPath<number>;
    readonly Cost: QNumberPath<number>;
    readonly Margin: QNumberPath<number>;
    readonly RetailPrice: QNumberPath<number>;
    readonly StartingPrice: QNumberPath<number>;
    readonly ReservePrice: QNumberPath<number>;
    readonly BuyItNowPrice: QNumberPath<number>;
    readonly StorePrice: QNumberPath<number>;
    readonly SecondChancePrice: QNumberPath<number>;
    readonly MinPrice: QNumberPath<number>;
    readonly MaxPrice: QNumberPath<number>;
    readonly EstimatedShippingCost: QNumberPath<number>;
    readonly SupplierName: QStringPath<string>;
    readonly SupplierCode: QStringPath<string>;
    readonly SupplierPO: QStringPath<string>;
    readonly Classification: QStringPath<string>;
    readonly IsDisplayInStore: QBooleanPath<boolean>;
    readonly StoreTitle: QStringPath<string>;
    readonly StoreDescription: QStringPath<string>;
    readonly BundleType: QEnumPath<typeof BundleType>;
    readonly ProductType: QEnumPath<typeof InventoryItemType>;
    readonly TotalAvailableQuantity: QNumberPath<number>;
    readonly OpenAllocatedQuantity: QNumberPath<number>;
    readonly OpenAllocatedQuantityPooled: QNumberPath<number>;
    readonly PendingCheckoutQuantity: QNumberPath<number>;
    readonly PendingCheckoutQuantityPooled: QNumberPath<number>;
    readonly PendingPaymentQuantity: QNumberPath<number>;
    readonly PendingPaymentQuantityPooled: QNumberPath<number>;
    readonly PendingShipmentQuantity: QNumberPath<number>;
    readonly PendingShipmentQuantityPooled: QNumberPath<number>;
    readonly TotalQuantity: QNumberPath<number>;
    readonly TotalQuantityPooled: QNumberPath<number>;
    readonly QuantitySoldLast7Days: QNumberPath<number>;
    readonly QuantitySoldLast14Days: QNumberPath<number>;
    readonly QuantitySoldLast30Days: QNumberPath<number>;
    readonly QuantitySoldLast60Days: QNumberPath<number>;
    readonly QuantitySoldLast90Days: QNumberPath<number>;
    readonly IsParent: QBooleanPath<boolean>;
    readonly IsInRelationship: QBooleanPath<boolean>;
    readonly CopyToChildren: QBooleanPath<boolean>;
    readonly CopyToAliases: QStringPath<string>;
    readonly ParentProductID: QNumberPath<number>;
    readonly ParentSku: QStringPath<string>;
    readonly RelationshipName: QStringPath<string>;
    readonly VaryBy: QStringPath<string>;
    readonly AliasType: QEnumPath<typeof AliasType>;
    readonly ReferenceSku: QStringPath<string>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly Attributes: QEntityCollectionPath<QAttributeValue>;
    readonly DCQuantities: QEntityCollectionPath<QDCQuantity>;
    readonly Images: QEntityCollectionPath<QImage>;
    readonly Labels: QEntityCollectionPath<QProductLabel>;
    readonly BundleComponents: QEntityCollectionPath<QProductBundleComponent>;
    readonly Children: QEntityCollectionPath<QChildRelationship>;
    readonly AliasRelationships: QEntityCollectionPath<QAliasRelationship>;
}
export declare const qProduct: QProduct;
export declare class QProductId extends QId<ProductId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class Product_QUpdateQuantity extends QAction<Product_UpdateQuantityParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QQuantityUpdateRequest>[];
}
export declare class Product_QRemoveChildren extends QAction<Product_RemoveChildrenParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QChildrenRemoveRequest>[];
}
export declare class Product_QUpdateAttributes extends QAction<Product_UpdateAttributesParams> {
    private readonly params;
    constructor();
    getParams(): QComplexParam<unknown, QAttributesUpdateRequest>[];
}
export declare class QAliasRelationship extends QueryObject {
    readonly AliasProductID: QNumberPath<number>;
    readonly ReferenceProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly AliasProductSku: QStringPath<string>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qAliasRelationship: QAliasRelationship;
export declare class QAliasRelationshipId extends QId<AliasRelationshipId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QImage extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly PlacementName: QStringPath<string>;
    readonly Abbreviation: QStringPath<string>;
    readonly Url: QStringPath<string>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qImage: QImage;
export declare class QImageId extends QId<ImageId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QAttributeValue extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Value: QStringPath<string>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qAttributeValue: QAttributeValue;
export declare class QAttributeValueId extends QId<AttributeValueId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QDCQuantity extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly DistributionCenterID: QNumberPath<number>;
    readonly AvailableQuantity: QNumberPath<number>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qDCQuantity: QDCQuantity;
export declare class QDCQuantityId extends QId<DCQuantityId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QProductLabel extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qProductLabel: QProductLabel;
export declare class QProductLabelId extends QId<ProductLabelId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QProductBundleComponent extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ComponentID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly ComponentSku: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qProductBundleComponent: QProductBundleComponent;
export declare class QProductBundleComponentId extends QId<ProductBundleComponentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QChildRelationship extends QueryObject {
    readonly ParentProductID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly ChildProductID: QNumberPath<number>;
    readonly ChildProduct: QEntityPath<QProduct>;
}
export declare const qChildRelationship: QChildRelationship;
export declare class QChildRelationshipId extends QId<ChildRelationshipId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QPackage extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Description: QStringPath<string>;
    readonly ShippingCarrier: QStringPath<string>;
    readonly Length: QNumberPath<number>;
    readonly Width: QNumberPath<number>;
    readonly Height: QNumberPath<number>;
    readonly EmptyWeight: QNumberPath<number>;
}
export declare const qPackage: QPackage;
export declare class QPackageId extends QId<PackageId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QChannelDocumentBaseType extends QueryObject {
    readonly DocumentKey: QStringPath<string>;
    readonly Contents: QStringPath<string>;
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly DocumentType: QEnumPath<typeof ChannelDocumentType>;
}
export declare class QChannelDocument extends QChannelDocumentBaseType {
    protected readonly __subtypeMapping: {
        "ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceDocument": string;
    };
    get QAmazonVATInvoiceDocument_OrderID(): QNumberPath<number>;
    get QAmazonVATInvoiceDocument_AdjustmentID(): QStringPath<string>;
    get QAmazonVATInvoiceDocument_Status(): QEnumPath<typeof AmazonVATInvoiceRequestStatus>;
    get QAmazonVATInvoiceDocument_InvoiceNumber(): QStringPath<string>;
    get QAmazonVATInvoiceDocument_TotalAmount(): QNumberPath<number>;
    get QAmazonVATInvoiceDocument_TotalVATAmount(): QNumberPath<number>;
    get QAmazonVATInvoiceDocument_CreateDateUTC(): QDateTimeOffsetPath<string>;
    get QAmazonVATInvoiceDocument_UpdateDateUTC(): QDateTimeOffsetPath<string>;
    private __asQAmazonVATInvoiceDocument;
}
export declare const qChannelDocument: QChannelDocument;
export declare class QChannelDocumentId extends QId<ChannelDocumentId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class ChannelDocument_QRetrieved extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class ChannelDocument_QNotSupplied extends QFunction {
    private readonly params;
    constructor();
    getParams(): [];
    buildUrl(notEncoded?: boolean): string;
}
export declare class QNotSuppliedChannelDocumentBaseType extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly DocumentType: QEnumPath<typeof ChannelDocumentType>;
}
export declare class QNotSuppliedChannelDocument extends QNotSuppliedChannelDocumentBaseType {
    protected readonly __subtypeMapping: {
        "ChannelAdvisor.RestApi.V1.Models.NotSuppliedAmazonVATInvoiceDocument": string;
    };
    get QNotSuppliedAmazonVATInvoiceDocument_OrderID(): QNumberPath<number>;
    get QNotSuppliedAmazonVATInvoiceDocument_AdjustmentID(): QStringPath<string>;
    get QNotSuppliedAmazonVATInvoiceDocument_CreateDateUTC(): QDateTimeOffsetPath<string>;
    private __asQNotSuppliedAmazonVATInvoiceDocument;
}
export declare const qNotSuppliedChannelDocument: QNotSuppliedChannelDocument;
export declare class QNotSuppliedChannelDocumentId extends QId<NotSuppliedChannelDocumentId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QSite extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly SiteName: QStringPath<string>;
    readonly SiteCategoryID: QNumberPath<number>;
    readonly SiteCategoryName: QStringPath<string>;
    readonly CancellationConfiguration: QEntityPath<QCancellationConfiguration>;
    readonly RefundConfiguration: QEntityPath<QRefundConfiguration>;
    readonly AdjustmentReasons: QEntityCollectionPath<QCodeDescription>;
}
export declare const qSite: QSite;
export declare class QSiteId extends QId<SiteId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QOrderDocumentFlyweightBaseType extends QueryObject {
    readonly DocumentKey: QStringPath<string>;
    readonly OrderID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly CreateDateUtc: QDateTimeOffsetPath<string>;
    readonly DocumentType: QEnumPath<typeof DocumentType>;
    readonly MimeType: QStringPath<string>;
    readonly DocumentSource: QEnumPath<typeof DocumentSourceType>;
}
export declare class QOrderDocumentFlyweight extends QOrderDocumentFlyweightBaseType {
    protected readonly __subtypeMapping: {
        "ChannelAdvisor.RestApi.V1.Models.OrderDocument": string;
    };
    get QOrderDocument_Content(): QStringPath<string>;
    get QOrderDocument_Metadata(): QEntityCollectionPath<QOrderDocumentMetadata>;
    private __asQOrderDocument;
}
export declare const qOrderDocumentFlyweight: QOrderDocumentFlyweight;
export declare class QOrderDocumentFlyweightId extends QId<OrderDocumentFlyweightId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QOrderDocument extends QOrderDocumentFlyweightBaseType {
    readonly Content: QStringPath<string>;
    readonly Metadata: QEntityCollectionPath<QOrderDocumentMetadata>;
}
export declare const qOrderDocument: QOrderDocument;
export declare class OrderDocument_QRetrieved extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class OrderDocument_QMissing extends QFunction {
    private readonly params;
    constructor();
    getParams(): [];
    buildUrl(notEncoded?: boolean): string;
}
export declare class QOrderDocumentMetadata extends QueryObject {
    readonly Key: QStringPath<string>;
    readonly Value: QStringPath<string>;
}
export declare const qOrderDocumentMetadata: QOrderDocumentMetadata;
export declare class QOrderDocumentMetadataId extends QId<OrderDocumentMetadataId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QOrderAttributeValue extends QueryObject {
    readonly Value: QStringPath<string>;
    readonly Name: QStringPath<string>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly Order: QEntityPath<QOrder>;
}
export declare const qOrderAttributeValue: QOrderAttributeValue;
export declare class QOrderAttributeValueId extends QId<OrderAttributeValueId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QOrderItemAttributeValue extends QueryObject {
    readonly Value: QStringPath<string>;
    readonly Name: QStringPath<string>;
    readonly OrderID: QNumberPath<number>;
    readonly OrderItemID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderItem: QEntityPath<QOrderItem>;
}
export declare const qOrderItemAttributeValue: QOrderItemAttributeValue;
export declare class QOrderItemAttributeValueId extends QId<OrderItemAttributeValueId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QShippingOverride extends QueryObject {
    readonly Sku: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly DistributionCenterID: QNumberPath<number>;
    readonly ShippingCarrier: QStringPath<string>;
    readonly ShippingClass: QStringPath<string>;
    readonly TrackingNumber: QStringPath<string>;
    readonly TrackingUrl: QStringPath<string>;
    readonly SellerFulfillmentID: QStringPath<string>;
    readonly ShippedDateUtc: QDateTimeOffsetPath<string>;
    readonly ApplyShippingRules: QBooleanPath<boolean>;
    readonly EstimatedShipDateUtc: QDateTimeOffsetPath<string>;
}
export declare const qShippingOverride: QShippingOverride;
export declare class QExportStatus extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly ProfileID: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly ApplicationID: QNumberPath<number>;
    readonly DeveloperKey: QStringPath<string>;
    readonly Override: QBooleanPath<boolean>;
    readonly Order: QEntityPath<QOrder>;
}
export declare const qExportStatus: QExportStatus;
export declare class QExportStatusId extends QId<ExportStatusId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QAmazonVATInvoiceDocument extends QChannelDocumentBaseType {
    readonly OrderID: QNumberPath<number>;
    readonly AdjustmentID: QStringPath<string>;
    readonly Status: QEnumPath<typeof AmazonVATInvoiceRequestStatus>;
    readonly InvoiceNumber: QStringPath<string>;
    readonly TotalAmount: QNumberPath<number>;
    readonly TotalVATAmount: QNumberPath<number>;
    readonly CreateDateUTC: QDateTimeOffsetPath<string>;
    readonly UpdateDateUTC: QDateTimeOffsetPath<string>;
}
export declare const qAmazonVATInvoiceDocument: QAmazonVATInvoiceDocument;
export declare class QSiteAccount extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly SiteAccountName: QStringPath<string>;
    readonly SiteID: QNumberPath<number>;
    readonly SiteName: QStringPath<string>;
    readonly Enabled: QBooleanPath<boolean>;
    readonly Profile: QEntityPath<QProfile>;
}
export declare const qSiteAccount: QSiteAccount;
export declare class QSiteAccountId extends QId<SiteAccountId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QShippingLabelPartnerAccount extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly AccountName: QStringPath<string>;
    readonly PartnerName: QStringPath<string>;
    readonly Profile: QEntityPath<QProfile>;
}
export declare const qShippingLabelPartnerAccount: QShippingLabelPartnerAccount;
export declare class QShippingLabelPartnerAccountId extends QId<ShippingLabelPartnerAccountId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QNotSuppliedAmazonVATInvoiceDocument extends QNotSuppliedChannelDocumentBaseType {
    readonly OrderID: QNumberPath<number>;
    readonly AdjustmentID: QStringPath<string>;
    readonly CreateDateUTC: QDateTimeOffsetPath<string>;
}
export declare const qNotSuppliedAmazonVATInvoiceDocument: QNotSuppliedAmazonVATInvoiceDocument;
export declare class QWebhook extends QueryObject {
    readonly ID: QNumberPath<number>;
    readonly Name: QStringPath<string>;
    readonly Status: QEnumPath<typeof WebhookEndpointStatus>;
    readonly WebhookUri: QStringPath<string>;
    readonly SigningSecret: QStringPath<string>;
    readonly EventTypes: QEnumCollectionPath<typeof WebhookEventType>;
}
export declare const qWebhook: QWebhook;
export declare class QWebhookId extends QId<WebhookId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QNewSigningSecret extends QAction {
    private readonly params;
    constructor();
    getParams(): [];
}
export declare class QRetryFailedEvents extends QAction<RetryFailedEventsParams> {
    private readonly params;
    constructor();
    getParams(): QStringParam<string>[];
}
export declare class QShipOrderRequest extends QueryObject {
    readonly ShippedDateUtc: QDateTimeOffsetPath<string>;
    readonly TrackingNumber: QStringPath<string>;
    readonly ReturnTrackingNumber: QStringPath<string>;
    readonly ShippingCarrier: QStringPath<string>;
    readonly ShippingClass: QStringPath<string>;
    readonly DistributionCenterID: QNumberPath<number>;
    readonly SellerFulfillmentID: QStringPath<string>;
    readonly DeliveryStatus: QEnumPath<typeof DeliveryStatus>;
    readonly FulfillmentType: QEnumPath<typeof FulfillmentType>;
    readonly PreventMarketplaceCommunication: QBooleanPath<boolean>;
    readonly TrackingUrl: QStringPath<string>;
    readonly SerialShippingContainerCode: QStringPath<string>;
    readonly Items: QEntityCollectionPath<QShipOrderRequestItem>;
}
export declare const qShipOrderRequest: QShipOrderRequest;
export declare class QShippingItems extends QueryObject {
    readonly FulfillmentItemID: QNumberPath<number>;
    readonly OrderItemID: QNumberPath<number>;
    readonly Sku: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly Description: QStringPath<string>;
    readonly UnitWeight: QNumberPath<number>;
}
export declare const qShippingItems: QShippingItems;
export declare class QPickupLabelLineItem extends QueryObject {
    readonly OrderItemID: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly SerialNumbers: QCollectionPath<QStringCollection<any>>;
    readonly SiteOrderItemID: QStringPath<string>;
    readonly Sku: QStringPath<string>;
}
export declare const qPickupLabelLineItem: QPickupLabelLineItem;
export declare class QRmaConditionQuantity extends QueryObject {
    readonly Condition: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
}
export declare const qRmaConditionQuantity: QRmaConditionQuantity;
export declare class QQuantityUpdateRequest extends QueryObject {
    readonly CompleteDCList: QBooleanPath<boolean>;
    readonly UpdateType: QEnumPath<typeof QuantityUpdateType>;
    readonly Updates: QEntityCollectionPath<QDCxQtyUpdate>;
}
export declare const qQuantityUpdateRequest: QQuantityUpdateRequest;
export declare class QChildrenRemoveRequest extends QueryObject {
    readonly ChildProductIDList: QCollectionPath<QNumberCollection<any>>;
}
export declare const qChildrenRemoveRequest: QChildrenRemoveRequest;
export declare class QAttributesUpdateRequest extends QueryObject {
    readonly Attributes: QEntityCollectionPath<QAttributeUpdate>;
}
export declare const qAttributesUpdateRequest: QAttributesUpdateRequest;
export declare class QCancellationConfiguration extends QueryObject {
    readonly SupportsOrderCancellations: QBooleanPath<boolean>;
    readonly SupportsOrderItemCancellations: QBooleanPath<boolean>;
    readonly SupportsOrderItemRMACancellations: QBooleanPath<boolean>;
}
export declare const qCancellationConfiguration: QCancellationConfiguration;
export declare class QRefundConfiguration extends QueryObject {
    readonly SupportsOrderRefunds: QBooleanPath<boolean>;
    readonly SupportsOrderItemRefunds: QBooleanPath<boolean>;
    readonly SupportsOrderItemRMARefunds: QBooleanPath<boolean>;
}
export declare const qRefundConfiguration: QRefundConfiguration;
export declare class QCodeDescription extends QueryObject {
    readonly Code: QNumberPath<number>;
    readonly Description: QStringPath<string>;
}
export declare const qCodeDescription: QCodeDescription;
export declare class QShipOrderRequestItem extends QueryObject {
    readonly OrderItemID: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly Sku: QStringPath<string>;
    readonly Quantity: QNumberPath<number>;
    readonly SellerFulfillmentItemID: QStringPath<string>;
    readonly ReferenceSku: QStringPath<string>;
}
export declare const qShipOrderRequestItem: QShipOrderRequestItem;
export declare class QDCxQtyUpdate extends QueryObject {
    readonly DistributionCenterID: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
}
export declare const qDCxQtyUpdate: QDCxQtyUpdate;
export declare class QAttributeUpdate extends QueryObject {
    readonly Name: QStringPath<string>;
    readonly Value: QStringPath<string>;
}
export declare const qAttributeUpdate: QAttributeUpdate;
