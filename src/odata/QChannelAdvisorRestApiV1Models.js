"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QOrderItemBundleComponent = exports.OrderItemAdjustment_QReturnShippingLabel = exports.OrderItemAdjustment_QRejectReturn = exports.OrderItemAdjustment_QApproveReturn = exports.OrderItemAdjustment_QRejectBuyerRequest = exports.OrderItemAdjustment_QApproveBuyerRequest = exports.QOrderItemAdjustmentId = exports.qOrderItemAdjustment = exports.QOrderItemAdjustment = exports.OrderAdjustment_QReturnShippingLabel = exports.OrderAdjustment_QRejectReturn = exports.OrderAdjustment_QApproveReturn = exports.OrderAdjustment_QRejectBuyerRequest = exports.OrderAdjustment_QApproveBuyerRequest = exports.QOrderAdjustmentId = exports.qOrderAdjustment = exports.QOrderAdjustment = exports.QOperatingHoursId = exports.qOperatingHours = exports.QOperatingHours = exports.QDistributionCenterId = exports.qDistributionCenter = exports.QDistributionCenter = exports.FulfillmentItem_QMove = exports.QFulfillmentItemId = exports.qFulfillmentItem = exports.QFulfillmentItem = exports.Fulfillment_QDeny = exports.Fulfillment_QConfirm = exports.Fulfillment_QMove = exports.QFulfillmentId = exports.qFulfillment = exports.QFulfillment = exports.OrderItem_QAdjust = exports.QOrderItemId = exports.qOrderItem = exports.QOrderItem = exports.Order_QCreate = exports.Order_QDeny = exports.Order_QConfirm = exports.Order_QExport = exports.Order_QAdjust = exports.Order_QPickupLabel = exports.Order_QPurchaseLabel = exports.Order_QShippingRates = exports.Order_QShip = exports.Order_QOrderDocuments = exports.QOrderId = exports.qOrder = exports.QOrder = void 0;
exports.qNotSuppliedChannelDocument = exports.QNotSuppliedChannelDocument = exports.QNotSuppliedChannelDocumentBaseType = exports.ChannelDocument_QNotSupplied = exports.ChannelDocument_QRetrieved = exports.QChannelDocumentId = exports.qChannelDocument = exports.QChannelDocument = exports.QChannelDocumentBaseType = exports.QPackageId = exports.qPackage = exports.QPackage = exports.QChildRelationshipId = exports.qChildRelationship = exports.QChildRelationship = exports.QProductBundleComponentId = exports.qProductBundleComponent = exports.QProductBundleComponent = exports.QProductLabelId = exports.qProductLabel = exports.QProductLabel = exports.QDCQuantityId = exports.qDCQuantity = exports.QDCQuantity = exports.QAttributeValueId = exports.qAttributeValue = exports.QAttributeValue = exports.QImageId = exports.qImage = exports.QImage = exports.QAliasRelationshipId = exports.qAliasRelationship = exports.QAliasRelationship = exports.Product_QUpdateAttributes = exports.Product_QRemoveChildren = exports.Product_QUpdateQuantity = exports.QProductId = exports.qProduct = exports.QProduct = exports.QProfileId = exports.qProfile = exports.QProfile = exports.QCustomFieldId = exports.qCustomField = exports.QCustomField = exports.QPromotionId = exports.qPromotion = exports.QPromotion = exports.QOrderItemBundleComponentId = exports.qOrderItemBundleComponent = void 0;
exports.QQuantityUpdateRequest = exports.qRmaConditionQuantity = exports.QRmaConditionQuantity = exports.qPickupLabelLineItem = exports.QPickupLabelLineItem = exports.qShippingItems = exports.QShippingItems = exports.qShipOrderRequest = exports.QShipOrderRequest = exports.QRetryFailedEvents = exports.QNewSigningSecret = exports.QWebhookId = exports.qWebhook = exports.QWebhook = exports.qNotSuppliedAmazonVATInvoiceDocument = exports.QNotSuppliedAmazonVATInvoiceDocument = exports.QShippingLabelPartnerAccountId = exports.qShippingLabelPartnerAccount = exports.QShippingLabelPartnerAccount = exports.QSiteAccountId = exports.qSiteAccount = exports.QSiteAccount = exports.qAmazonVATInvoiceDocument = exports.QAmazonVATInvoiceDocument = exports.QExportStatusId = exports.qExportStatus = exports.QExportStatus = exports.qShippingOverride = exports.QShippingOverride = exports.QOrderItemAttributeValueId = exports.qOrderItemAttributeValue = exports.QOrderItemAttributeValue = exports.QOrderAttributeValueId = exports.qOrderAttributeValue = exports.QOrderAttributeValue = exports.QOrderDocumentMetadataId = exports.qOrderDocumentMetadata = exports.QOrderDocumentMetadata = exports.OrderDocument_QMissing = exports.OrderDocument_QRetrieved = exports.qOrderDocument = exports.QOrderDocument = exports.QOrderDocumentFlyweightId = exports.qOrderDocumentFlyweight = exports.QOrderDocumentFlyweight = exports.QOrderDocumentFlyweightBaseType = exports.QSiteId = exports.qSite = exports.QSite = exports.QNotSuppliedChannelDocumentId = void 0;
exports.qAttributeUpdate = exports.QAttributeUpdate = exports.qDCxQtyUpdate = exports.QDCxQtyUpdate = exports.qShipOrderRequestItem = exports.QShipOrderRequestItem = exports.qCodeDescription = exports.QCodeDescription = exports.qRefundConfiguration = exports.QRefundConfiguration = exports.qCancellationConfiguration = exports.QCancellationConfiguration = exports.qAttributesUpdateRequest = exports.QAttributesUpdateRequest = exports.qChildrenRemoveRequest = exports.QChildrenRemoveRequest = exports.qQuantityUpdateRequest = void 0;
// @ts-nocheck
const odata_query_objects_1 = require("@odata2ts/odata-query-objects");
const ChannelAdvisorRestApiV1ModelsModel_1 = require("./ChannelAdvisorRestApiV1ModelsModel");
class QOrder extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.SiteID = new odata_query_objects_1.QNumberPath(this.withPrefix("SiteID"));
        this.SiteName = new odata_query_objects_1.QStringPath(this.withPrefix("SiteName"));
        this.UserDataPresent = new odata_query_objects_1.QNumberPath(this.withPrefix("UserDataPresent"));
        this.UserDataRemovalDateUTC = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("UserDataRemovalDateUTC"));
        this.SiteAccountID = new odata_query_objects_1.QNumberPath(this.withPrefix("SiteAccountID"));
        this.SiteOrderID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteOrderID"));
        this.SecondarySiteOrderID = new odata_query_objects_1.QStringPath(this.withPrefix("SecondarySiteOrderID"));
        this.SellerOrderID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerOrderID"));
        this.CheckoutSourceID = new odata_query_objects_1.QNumberPath(this.withPrefix("CheckoutSourceID"));
        this.Currency = new odata_query_objects_1.QStringPath(this.withPrefix("Currency"));
        this.CreatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreatedDateUtc"));
        this.ImportDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ImportDateUtc"));
        this.UpdatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("UpdatedDateUtc"));
        this.PublicNotes = new odata_query_objects_1.QStringPath(this.withPrefix("PublicNotes"));
        this.PrivateNotes = new odata_query_objects_1.QStringPath(this.withPrefix("PrivateNotes"));
        this.SpecialInstructions = new odata_query_objects_1.QStringPath(this.withPrefix("SpecialInstructions"));
        this.TotalPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalPrice"));
        this.TotalTaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalTaxPrice"));
        this.TotalShippingPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalShippingPrice"));
        this.TotalShippingTaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalShippingTaxPrice"));
        this.TotalInsurancePrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalInsurancePrice"));
        this.TotalGiftOptionPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalGiftOptionPrice"));
        this.TotalGiftOptionTaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalGiftOptionTaxPrice"));
        this.AdditionalCostOrDiscount = new odata_query_objects_1.QNumberPath(this.withPrefix("AdditionalCostOrDiscount"));
        this.EstimatedShipDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EstimatedShipDateUtc"));
        this.DeliverByDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("DeliverByDateUtc"));
        this.RequestedShippingCarrier = new odata_query_objects_1.QStringPath(this.withPrefix("RequestedShippingCarrier"));
        this.RequestedShippingClass = new odata_query_objects_1.QStringPath(this.withPrefix("RequestedShippingClass"));
        this.ResellerID = new odata_query_objects_1.QStringPath(this.withPrefix("ResellerID"));
        this.FlagID = new odata_query_objects_1.QNumberPath(this.withPrefix("FlagID"));
        this.FlagDescription = new odata_query_objects_1.QStringPath(this.withPrefix("FlagDescription"));
        this.OrderTags = new odata_query_objects_1.QStringPath(this.withPrefix("OrderTags"));
        this.DistributionCenterTypeRollup = new odata_query_objects_1.QEnumPath(this.withPrefix("DistributionCenterTypeRollup"), ChannelAdvisorRestApiV1ModelsModel_1.DistributionCenterRollupType);
        this.CheckoutStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("CheckoutStatus"), ChannelAdvisorRestApiV1ModelsModel_1.CheckoutStatus);
        this.PaymentStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("PaymentStatus"), ChannelAdvisorRestApiV1ModelsModel_1.PaymentStatus);
        this.ShippingStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("ShippingStatus"), ChannelAdvisorRestApiV1ModelsModel_1.ShippingStatus);
        this.CheckoutDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CheckoutDateUtc"));
        this.PaymentDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("PaymentDateUtc"));
        this.ShippingDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ShippingDateUtc"));
        this.BuyerUserId = new odata_query_objects_1.QStringPath(this.withPrefix("BuyerUserId"));
        this.BuyerEmailAddress = new odata_query_objects_1.QStringPath(this.withPrefix("BuyerEmailAddress"));
        this.BuyerEmailOptIn = new odata_query_objects_1.QBooleanPath(this.withPrefix("BuyerEmailOptIn"));
        this.OrderTaxType = new odata_query_objects_1.QEnumPath(this.withPrefix("OrderTaxType"), ChannelAdvisorRestApiV1ModelsModel_1.TaxType);
        this.ShippingTaxType = new odata_query_objects_1.QEnumPath(this.withPrefix("ShippingTaxType"), ChannelAdvisorRestApiV1ModelsModel_1.TaxType);
        this.GiftOptionsTaxType = new odata_query_objects_1.QEnumPath(this.withPrefix("GiftOptionsTaxType"), ChannelAdvisorRestApiV1ModelsModel_1.TaxType);
        this.PaymentMethod = new odata_query_objects_1.QStringPath(this.withPrefix("PaymentMethod"));
        this.PaymentTransactionID = new odata_query_objects_1.QStringPath(this.withPrefix("PaymentTransactionID"));
        this.PaymentPaypalAccountID = new odata_query_objects_1.QStringPath(this.withPrefix("PaymentPaypalAccountID"));
        this.PaymentCreditCardLast4 = new odata_query_objects_1.QStringPath(this.withPrefix("PaymentCreditCardLast4"));
        this.PaymentMerchantReferenceNumber = new odata_query_objects_1.QStringPath(this.withPrefix("PaymentMerchantReferenceNumber"));
        this.ShippingTitle = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingTitle"));
        this.ShippingFirstName = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingFirstName"));
        this.ShippingLastName = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingLastName"));
        this.ShippingSuffix = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingSuffix"));
        this.ShippingCompanyName = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCompanyName"));
        this.ShippingCompanyJobTitle = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCompanyJobTitle"));
        this.ShippingDaytimePhone = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingDaytimePhone"));
        this.ShippingEveningPhone = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingEveningPhone"));
        this.ShippingAddressLine1 = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingAddressLine1"));
        this.ShippingAddressLine2 = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingAddressLine2"));
        this.ShippingCity = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCity"));
        this.ShippingStateOrProvince = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingStateOrProvince"));
        this.ShippingStateOrProvinceName = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingStateOrProvinceName"));
        this.ShippingPostalCode = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingPostalCode"));
        this.ShippingCountry = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCountry"));
        this.BillingTitle = new odata_query_objects_1.QStringPath(this.withPrefix("BillingTitle"));
        this.BillingFirstName = new odata_query_objects_1.QStringPath(this.withPrefix("BillingFirstName"));
        this.BillingLastName = new odata_query_objects_1.QStringPath(this.withPrefix("BillingLastName"));
        this.BillingSuffix = new odata_query_objects_1.QStringPath(this.withPrefix("BillingSuffix"));
        this.BillingCompanyName = new odata_query_objects_1.QStringPath(this.withPrefix("BillingCompanyName"));
        this.BillingCompanyJobTitle = new odata_query_objects_1.QStringPath(this.withPrefix("BillingCompanyJobTitle"));
        this.BillingDaytimePhone = new odata_query_objects_1.QStringPath(this.withPrefix("BillingDaytimePhone"));
        this.BillingEveningPhone = new odata_query_objects_1.QStringPath(this.withPrefix("BillingEveningPhone"));
        this.BillingAddressLine1 = new odata_query_objects_1.QStringPath(this.withPrefix("BillingAddressLine1"));
        this.BillingAddressLine2 = new odata_query_objects_1.QStringPath(this.withPrefix("BillingAddressLine2"));
        this.BillingCity = new odata_query_objects_1.QStringPath(this.withPrefix("BillingCity"));
        this.BillingStateOrProvince = new odata_query_objects_1.QStringPath(this.withPrefix("BillingStateOrProvince"));
        this.BillingStateOrProvinceName = new odata_query_objects_1.QStringPath(this.withPrefix("BillingStateOrProvinceName"));
        this.BillingPostalCode = new odata_query_objects_1.QStringPath(this.withPrefix("BillingPostalCode"));
        this.BillingCountry = new odata_query_objects_1.QStringPath(this.withPrefix("BillingCountry"));
        this.PromotionCode = new odata_query_objects_1.QStringPath(this.withPrefix("PromotionCode"));
        this.PromotionAmount = new odata_query_objects_1.QNumberPath(this.withPrefix("PromotionAmount"));
        this.Items = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Items"), () => QOrderItem);
        this.Fulfillments = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Fulfillments"), () => QFulfillment);
        this.Adjustments = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Adjustments"), () => QOrderAdjustment);
        this.CustomFields = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("CustomFields"), () => QCustomField);
        this.OrderAttributes = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("OrderAttributes"), () => QOrderAttributeValue);
        this.Exports = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Exports"), () => QExportStatus);
        this.ChannelDocuments = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("ChannelDocuments"), () => QChannelDocument);
    }
}
exports.QOrder = QOrder;
exports.qOrder = new QOrder();
class QOrderId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderId = QOrderId;
class Order_QOrderDocuments extends odata_query_objects_1.QFunction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.OrderDocuments", new odata_query_objects_1.OperationReturnType(odata_query_objects_1.ReturnTypes.COMPLEX_COLLECTION, new odata_query_objects_1.QComplexParam("NONE", new QOrderDocumentFlyweight)));
        this.params = [];
    }
    getParams() {
        return this.params;
    }
    buildUrl(notEncoded = false) {
        return super.buildUrl(undefined, notEncoded);
    }
}
exports.Order_QOrderDocuments = Order_QOrderDocuments;
class Order_QShip extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Ship");
        this.params = [new odata_query_objects_1.QComplexParam("Value", new QShipOrderRequest())];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QShip = Order_QShip;
class Order_QShippingRates extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ShippingRates");
        this.params = [new odata_query_objects_1.QNumberParam("ShippingLabelPartnerAccountIDs"), new odata_query_objects_1.QComplexParam("Items", new QShippingItems()), new odata_query_objects_1.QNumberParam("PackageID"), new odata_query_objects_1.QBooleanParam("ApplyDeliverByDate"), new odata_query_objects_1.QDateTimeOffsetParam("DeliverByDateUtc"), new odata_query_objects_1.QEnumParam("DeliveryConfirmation"), new odata_query_objects_1.QNumberParam("DistributionCenterID"), new odata_query_objects_1.QNumberParam("InsuredAmount"), new odata_query_objects_1.QEnumParam("LabelFormat"), new odata_query_objects_1.QDateTimeOffsetParam("ShipDateUtc"), new odata_query_objects_1.QEnumParam("MeasurementUnit"), new odata_query_objects_1.QNumberParam("Height"), new odata_query_objects_1.QNumberParam("Length"), new odata_query_objects_1.QNumberParam("Width"), new odata_query_objects_1.QEnumParam("WeightUnit"), new odata_query_objects_1.QNumberParam("Weight"), new odata_query_objects_1.QBooleanParam("PurchaseCheapestRate"), new odata_query_objects_1.QStringParam("ShippingLabelRequestID"), new odata_query_objects_1.QStringParam("SourceCompanyName"), new odata_query_objects_1.QStringParam("SourceTitle"), new odata_query_objects_1.QStringParam("SourceFirstName"), new odata_query_objects_1.QStringParam("SourceLastName"), new odata_query_objects_1.QStringParam("SourceAddressLine1"), new odata_query_objects_1.QStringParam("SourceAddressLine2"), new odata_query_objects_1.QStringParam("SourceCity"), new odata_query_objects_1.QStringParam("SourceStateOrProvince"), new odata_query_objects_1.QStringParam("SourcePostalCode"), new odata_query_objects_1.QStringParam("SourceCountryCode"), new odata_query_objects_1.QStringParam("SourceEmailAddress"), new odata_query_objects_1.QStringParam("SourcePhoneNumber"), new odata_query_objects_1.QStringParam("DestinationCompanyName"), new odata_query_objects_1.QStringParam("DestinationTitle"), new odata_query_objects_1.QStringParam("DestinationFirstName"), new odata_query_objects_1.QStringParam("DestinationLastName"), new odata_query_objects_1.QStringParam("DestinationAddressLine1"), new odata_query_objects_1.QStringParam("DestinationAddressLine2"), new odata_query_objects_1.QStringParam("DestinationCity"), new odata_query_objects_1.QStringParam("DestinationStateOrProvince"), new odata_query_objects_1.QStringParam("DestinationPostalCode"), new odata_query_objects_1.QStringParam("DestinationCountryCode"), new odata_query_objects_1.QStringParam("DestinationEmailAddress"), new odata_query_objects_1.QStringParam("DestinationPhoneNumber"), new odata_query_objects_1.QBooleanParam("IsCommercialAddress"), new odata_query_objects_1.QBooleanParam("IncludeCustoms"), new odata_query_objects_1.QEnumParam("ExportReason"), new odata_query_objects_1.QStringParam("CertificateNumber"), new odata_query_objects_1.QStringParam("CustomsComments"), new odata_query_objects_1.QStringParam("EelPfc"), new odata_query_objects_1.QStringParam("FromCustomsReference"), new odata_query_objects_1.QStringParam("ImporterCustomsReference"), new odata_query_objects_1.QStringParam("InsuredNumber"), new odata_query_objects_1.QStringParam("LicenseNumber"), new odata_query_objects_1.QStringParam("ManufacturedCountryCode")];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QShippingRates = Order_QShippingRates;
class Order_QPurchaseLabel extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.PurchaseLabel");
        this.params = [new odata_query_objects_1.QGuidParam("RateID"), new odata_query_objects_1.QEnumParam("LabelFormat"), new odata_query_objects_1.QStringParam("ShippingLabelRequestID")];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QPurchaseLabel = Order_QPurchaseLabel;
class Order_QPickupLabel extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.PickupLabel");
        this.params = [new odata_query_objects_1.QEnumParam("MeasurementUnit"), new odata_query_objects_1.QNumberParam("Length"), new odata_query_objects_1.QNumberParam("Width"), new odata_query_objects_1.QNumberParam("Height"), new odata_query_objects_1.QEnumParam("WeightUnit"), new odata_query_objects_1.QNumberParam("Weight"), new odata_query_objects_1.QStringParam("HazmatLabels"), new odata_query_objects_1.QComplexParam("LineItems", new QPickupLabelLineItem())];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QPickupLabel = Order_QPickupLabel;
class Order_QAdjust extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Adjust");
        this.params = [new odata_query_objects_1.QNumberParam("AdjustmentAmount"), new odata_query_objects_1.QEnumParam("Reason"), new odata_query_objects_1.QBooleanParam("PreventSiteProcessing"), new odata_query_objects_1.QStringParam("SellerAdjustmentID"), new odata_query_objects_1.QBooleanParam("Restock"), new odata_query_objects_1.QBooleanParam("RefundOnly")];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QAdjust = Order_QAdjust;
class Order_QExport extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Export");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QExport = Order_QExport;
class Order_QConfirm extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Confirm");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QConfirm = Order_QConfirm;
class Order_QDeny extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Deny");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QDeny = Order_QDeny;
class Order_QCreate extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Create", new odata_query_objects_1.OperationReturnType(odata_query_objects_1.ReturnTypes.COMPLEX, new odata_query_objects_1.QComplexParam("NONE", new QOrder)));
        this.params = [new odata_query_objects_1.QComplexParam("Order", new QOrder()), new odata_query_objects_1.QComplexParam("ShippingOverrides", new QShippingOverride())];
    }
    getParams() {
        return this.params;
    }
}
exports.Order_QCreate = Order_QCreate;
class QOrderItem extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.SiteOrderItemID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteOrderItemID"));
        this.SellerOrderItemID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerOrderItemID"));
        this.SiteListingID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteListingID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.Title = new odata_query_objects_1.QStringPath(this.withPrefix("Title"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.UnitPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("UnitPrice"));
        this.TaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("TaxPrice"));
        this.ShippingPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingPrice"));
        this.ShippingTaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingTaxPrice"));
        this.RecyclingFee = new odata_query_objects_1.QNumberPath(this.withPrefix("RecyclingFee"));
        this.UnitEstimatedShippingCost = new odata_query_objects_1.QNumberPath(this.withPrefix("UnitEstimatedShippingCost"));
        this.GiftMessage = new odata_query_objects_1.QStringPath(this.withPrefix("GiftMessage"));
        this.GiftNotes = new odata_query_objects_1.QStringPath(this.withPrefix("GiftNotes"));
        this.GiftPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftPrice"));
        this.GiftTaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftTaxPrice"));
        this.IsBundle = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsBundle"));
        this.ItemURL = new odata_query_objects_1.QStringPath(this.withPrefix("ItemURL"));
        this.HarmonizedCode = new odata_query_objects_1.QStringPath(this.withPrefix("HarmonizedCode"));
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
        this.BundleComponents = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("BundleComponents"), () => QOrderItemBundleComponent);
        this.FulfillmentItems = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("FulfillmentItems"), () => QFulfillmentItem);
        this.Promotions = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Promotions"), () => QPromotion);
        this.Adjustments = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Adjustments"), () => QOrderItemAdjustment);
        this.OrderItemAttributes = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("OrderItemAttributes"), () => QOrderItemAttributeValue);
    }
}
exports.QOrderItem = QOrderItem;
exports.qOrderItem = new QOrderItem();
class QOrderItemId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderItemId = QOrderItemId;
class OrderItem_QAdjust extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Adjust");
        this.params = [new odata_query_objects_1.QNumberParam("Quantity"), new odata_query_objects_1.QEnumParam("Reason"), new odata_query_objects_1.QBooleanParam("Restock"), new odata_query_objects_1.QNumberParam("ItemAdjustment"), new odata_query_objects_1.QNumberParam("TaxAdjustment"), new odata_query_objects_1.QNumberParam("ShippingAdjustment"), new odata_query_objects_1.QNumberParam("ShippingTaxAdjustment"), new odata_query_objects_1.QNumberParam("GiftWrapAdjustment"), new odata_query_objects_1.QNumberParam("GiftWrapTaxAdjustment"), new odata_query_objects_1.QNumberParam("RecyclingFeeAdjustment"), new odata_query_objects_1.QBooleanParam("PreventSiteProcessing"), new odata_query_objects_1.QStringParam("SellerAdjustmentID"), new odata_query_objects_1.QBooleanParam("ForceCalculateOmittedAmounts"), new odata_query_objects_1.QBooleanParam("RefundOnly")];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItem_QAdjust = OrderItem_QAdjust;
class QFulfillment extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.CreatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreatedDateUtc"));
        this.UpdatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("UpdatedDateUtc"));
        this.Type = new odata_query_objects_1.QEnumPath(this.withPrefix("Type"), ChannelAdvisorRestApiV1ModelsModel_1.FulfillmentType);
        this.DeliveryStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("DeliveryStatus"), ChannelAdvisorRestApiV1ModelsModel_1.DeliveryStatus);
        this.TrackingNumber = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingNumber"));
        this.TrackingUrl = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingUrl"));
        this.ReturnTrackingNumber = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnTrackingNumber"));
        this.ShippingCarrier = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCarrier"));
        this.ShippingClass = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingClass"));
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.ExternalFulfillmentCenterCode = new odata_query_objects_1.QStringPath(this.withPrefix("ExternalFulfillmentCenterCode"));
        this.ExternalFulfillmentStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("ExternalFulfillmentStatus"), ChannelAdvisorRestApiV1ModelsModel_1.FulfillmentRequestStatus);
        this.ShippingCost = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingCost"));
        this.InsuranceCost = new odata_query_objects_1.QNumberPath(this.withPrefix("InsuranceCost"));
        this.TaxCost = new odata_query_objects_1.QNumberPath(this.withPrefix("TaxCost"));
        this.ShippedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ShippedDateUtc"));
        this.SellerFulfillmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerFulfillmentID"));
        this.HasShippingLabel = new odata_query_objects_1.QBooleanPath(this.withPrefix("HasShippingLabel"));
        this.HasChannelPackingSlip = new odata_query_objects_1.QBooleanPath(this.withPrefix("HasChannelPackingSlip"));
        this.HasReturnLabel = new odata_query_objects_1.QBooleanPath(this.withPrefix("HasReturnLabel"));
        this.HasChannelReturnLabel = new odata_query_objects_1.QBooleanPath(this.withPrefix("HasChannelReturnLabel"));
        this.ExternalFulfillmentNumber = new odata_query_objects_1.QStringPath(this.withPrefix("ExternalFulfillmentNumber"));
        this.ExternalFulfillmentReferenceNumber = new odata_query_objects_1.QStringPath(this.withPrefix("ExternalFulfillmentReferenceNumber"));
        this.ShippingLabelRequestID = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingLabelRequestID"));
        this.StagingLocation = new odata_query_objects_1.QStringPath(this.withPrefix("StagingLocation"));
        this.SerialShippingContainerCode = new odata_query_objects_1.QStringPath(this.withPrefix("SerialShippingContainerCode"));
        this.EarliestDeliveryDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EarliestDeliveryDateUtc"));
        this.EarliestShipDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EarliestShipDateUtc"));
        this.EstimatedDeliveryDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EstimatedDeliveryDateUtc"));
        this.EstimatedShipDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EstimatedShipDateUtc"));
        this.LabelFormat = new odata_query_objects_1.QEnumPath(this.withPrefix("LabelFormat"), ChannelAdvisorRestApiV1ModelsModel_1.LabelFormatType);
        this.ReturnLabelFormat = new odata_query_objects_1.QEnumPath(this.withPrefix("ReturnLabelFormat"), ChannelAdvisorRestApiV1ModelsModel_1.LabelFormatType);
        this.ChannelReturnLabelFormat = new odata_query_objects_1.QEnumPath(this.withPrefix("ChannelReturnLabelFormat"), ChannelAdvisorRestApiV1ModelsModel_1.LabelFormatType);
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
        this.Items = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Items"), () => QFulfillmentItem);
    }
}
exports.QFulfillment = QFulfillment;
exports.qFulfillment = new QFulfillment();
class QFulfillmentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QFulfillmentId = QFulfillmentId;
class Fulfillment_QMove extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Move");
        this.params = [new odata_query_objects_1.QNumberParam("DestinationFulfillmentID")];
    }
    getParams() {
        return this.params;
    }
}
exports.Fulfillment_QMove = Fulfillment_QMove;
class Fulfillment_QConfirm extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Confirm");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.Fulfillment_QConfirm = Fulfillment_QConfirm;
class Fulfillment_QDeny extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Deny");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.Fulfillment_QDeny = Fulfillment_QDeny;
class QFulfillmentItem extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.DistributionCenterItemUnitCost = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterItemUnitCost"));
        this.DistributionCenterShippingCost = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterShippingCost"));
        this.DistributionCenterCalculatedItemUnitCost = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterCalculatedItemUnitCost"));
        this.DistributionCenterCalculatedShippingCost = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterCalculatedShippingCost"));
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.FulfillmentID = new odata_query_objects_1.QNumberPath(this.withPrefix("FulfillmentID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.SellerFulfillmentItemID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerFulfillmentItemID"));
        this.MarketplaceShippingStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("MarketplaceShippingStatus"), ChannelAdvisorRestApiV1ModelsModel_1.FulfillmentItemSiteCommunicationStatus);
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.WarehouseLocation = new odata_query_objects_1.QStringPath(this.withPrefix("WarehouseLocation"));
        this.Fulfillment = new odata_query_objects_1.QEntityPath(this.withPrefix("Fulfillment"), () => QFulfillment);
        this.OrderItem = new odata_query_objects_1.QEntityPath(this.withPrefix("OrderItem"), () => QOrderItem);
        this.BundleComponent = new odata_query_objects_1.QEntityPath(this.withPrefix("BundleComponent"), () => QOrderItemBundleComponent);
    }
}
exports.QFulfillmentItem = QFulfillmentItem;
exports.qFulfillmentItem = new QFulfillmentItem();
class QFulfillmentItemId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QFulfillmentItemId = QFulfillmentItemId;
class FulfillmentItem_QMove extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Move");
        this.params = [new odata_query_objects_1.QNumberParam("DestinationFulfillmentID"), new odata_query_objects_1.QNumberParam("Quantity")];
    }
    getParams() {
        return this.params;
    }
}
exports.FulfillmentItem_QMove = FulfillmentItem_QMove;
class QDistributionCenter extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Code = new odata_query_objects_1.QStringPath(this.withPrefix("Code"));
        this.FulfillmentPartnerName = new odata_query_objects_1.QStringPath(this.withPrefix("FulfillmentPartnerName"));
        this.ContactName = new odata_query_objects_1.QStringPath(this.withPrefix("ContactName"));
        this.ContactEmail = new odata_query_objects_1.QStringPath(this.withPrefix("ContactEmail"));
        this.ContactPhone = new odata_query_objects_1.QStringPath(this.withPrefix("ContactPhone"));
        this.Address1 = new odata_query_objects_1.QStringPath(this.withPrefix("Address1"));
        this.Address2 = new odata_query_objects_1.QStringPath(this.withPrefix("Address2"));
        this.City = new odata_query_objects_1.QStringPath(this.withPrefix("City"));
        this.StateOrProvince = new odata_query_objects_1.QStringPath(this.withPrefix("StateOrProvince"));
        this.Country = new odata_query_objects_1.QStringPath(this.withPrefix("Country"));
        this.PostalCode = new odata_query_objects_1.QStringPath(this.withPrefix("PostalCode"));
        this.PickupLocation = new odata_query_objects_1.QBooleanPath(this.withPrefix("PickupLocation"));
        this.ShipLocation = new odata_query_objects_1.QBooleanPath(this.withPrefix("ShipLocation"));
        this.Type = new odata_query_objects_1.QEnumPath(this.withPrefix("Type"), ChannelAdvisorRestApiV1ModelsModel_1.DistributionCenterType);
        this.IsExternallyManaged = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsExternallyManaged"));
        this.IsDeleted = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsDeleted"));
        this.DeletedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("DeletedDateUtc"));
        this.County = new odata_query_objects_1.QStringPath(this.withPrefix("County"));
        this.District = new odata_query_objects_1.QStringPath(this.withPrefix("District"));
        this.TimeZone = new odata_query_objects_1.QStringPath(this.withPrefix("TimeZone"));
        this.HandlingTimeMinutes = new odata_query_objects_1.QNumberPath(this.withPrefix("HandlingTimeMinutes"));
        this.DeliveryAvailable = new odata_query_objects_1.QBooleanPath(this.withPrefix("DeliveryAvailable"));
        this.PickupOrderHoldMinutes = new odata_query_objects_1.QNumberPath(this.withPrefix("PickupOrderHoldMinutes"));
        this.ThroughputLimitNumber = new odata_query_objects_1.QNumberPath(this.withPrefix("ThroughputLimitNumber"));
        this.ThroughputLimitUnits = new odata_query_objects_1.QEnumPath(this.withPrefix("ThroughputLimitUnits"), ChannelAdvisorRestApiV1ModelsModel_1.ThroughputLimitUnits);
        this.MainPhone = new odata_query_objects_1.QStringPath(this.withPrefix("MainPhone"));
        this.AltPhone = new odata_query_objects_1.QStringPath(this.withPrefix("AltPhone"));
        this.Fax = new odata_query_objects_1.QStringPath(this.withPrefix("Fax"));
        this.HomePage = new odata_query_objects_1.QStringPath(this.withPrefix("HomePage"));
        this.Email = new odata_query_objects_1.QStringPath(this.withPrefix("Email"));
        this.BusinessDescription = new odata_query_objects_1.QStringPath(this.withPrefix("BusinessDescription"));
        this.Latitude = new odata_query_objects_1.QNumberPath(this.withPrefix("Latitude"));
        this.Longitude = new odata_query_objects_1.QNumberPath(this.withPrefix("Longitude"));
        this.StoreCategories = new odata_query_objects_1.QStringPath(this.withPrefix("StoreCategories"));
        this.CourierPickupInstructions = new odata_query_objects_1.QStringPath(this.withPrefix("CourierPickupInstructions"));
        this.CustomerPickupInstructions = new odata_query_objects_1.QStringPath(this.withPrefix("CustomerPickupInstructions"));
        this.PickupInstructions = new odata_query_objects_1.QStringPath(this.withPrefix("PickupInstructions"));
        this.OperatingHours = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("OperatingHours"), () => QOperatingHours);
    }
}
exports.QDistributionCenter = QDistributionCenter;
exports.qDistributionCenter = new QDistributionCenter();
class QDistributionCenterId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QDistributionCenterId = QDistributionCenterId;
class QOperatingHours extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.DayID = new odata_query_objects_1.QEnumPath(this.withPrefix("DayID"), ChannelAdvisorRestApiV1ModelsModel_1.DayIdentifier);
        this.OpenTime = new odata_query_objects_1.QStringPath(this.withPrefix("OpenTime"));
        this.CloseTime = new odata_query_objects_1.QStringPath(this.withPrefix("CloseTime"));
    }
}
exports.QOperatingHours = QOperatingHours;
exports.qOperatingHours = new QOperatingHours();
class QOperatingHoursId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QEnumParam("DayID"), new odata_query_objects_1.QNumberParam("DistributionCenterID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOperatingHoursId = QOperatingHoursId;
class QOrderAdjustment extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.CreatedSource = new odata_query_objects_1.QEnumPath(this.withPrefix("CreatedSource"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentSource);
        this.LastUpdatedSource = new odata_query_objects_1.QEnumPath(this.withPrefix("LastUpdatedSource"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentSource);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.IsRestock = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsRestock"));
        this.Reason = new odata_query_objects_1.QEnumPath(this.withPrefix("Reason"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentReason);
        this.ItemAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ItemAdjustment"));
        this.TaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("TaxAdjustment"));
        this.ShippingAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingAdjustment"));
        this.ShippingTaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingTaxAdjustment"));
        this.GiftWrapAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftWrapAdjustment"));
        this.GiftWrapTaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftWrapTaxAdjustment"));
        this.RecyclingFeeAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("RecyclingFeeAdjustment"));
        this.Type = new odata_query_objects_1.QEnumPath(this.withPrefix("Type"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentType);
        this.SellerAdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerAdjustmentID"));
        this.SiteAdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteAdjustmentID"));
        this.SiteRefundDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("SiteRefundDateUtc"));
        this.AdjustmentTransactionID = new odata_query_objects_1.QStringPath(this.withPrefix("AdjustmentTransactionID"));
        this.PublicNotes = new odata_query_objects_1.QStringPath(this.withPrefix("PublicNotes"));
        this.Comment = new odata_query_objects_1.QStringPath(this.withPrefix("Comment"));
        this.CreatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreatedDateUtc"));
        this.RequestStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("RequestStatus"), ChannelAdvisorRestApiV1ModelsModel_1.AsyncStatus);
        this.RestockStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("RestockStatus"), ChannelAdvisorRestApiV1ModelsModel_1.AsyncStatus);
        this.RmaNumber = new odata_query_objects_1.QStringPath(this.withPrefix("RmaNumber"));
        this.ReturnShippingFee = new odata_query_objects_1.QNumberPath(this.withPrefix("ReturnShippingFee"));
        this.RestockingFee = new odata_query_objects_1.QNumberPath(this.withPrefix("RestockingFee"));
        this.ReturnTrackingNumberOrUrl = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnTrackingNumberOrUrl"));
        this.ReturnShippingMethod = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnShippingMethod"));
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
    }
}
exports.QOrderAdjustment = QOrderAdjustment;
exports.qOrderAdjustment = new QOrderAdjustment();
class QOrderAdjustmentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderAdjustmentId = QOrderAdjustmentId;
class OrderAdjustment_QApproveBuyerRequest extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ApproveBuyerRequest");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderAdjustment_QApproveBuyerRequest = OrderAdjustment_QApproveBuyerRequest;
class OrderAdjustment_QRejectBuyerRequest extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RejectBuyerRequest");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderAdjustment_QRejectBuyerRequest = OrderAdjustment_QRejectBuyerRequest;
class OrderAdjustment_QApproveReturn extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ApproveReturn");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderAdjustment_QApproveReturn = OrderAdjustment_QApproveReturn;
class OrderAdjustment_QRejectReturn extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RejectReturn");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderAdjustment_QRejectReturn = OrderAdjustment_QRejectReturn;
class OrderAdjustment_QReturnShippingLabel extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ReturnShippingLabel");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderAdjustment_QReturnShippingLabel = OrderAdjustment_QReturnShippingLabel;
class QOrderItemAdjustment extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.CreatedSource = new odata_query_objects_1.QEnumPath(this.withPrefix("CreatedSource"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentSource);
        this.LastUpdatedSource = new odata_query_objects_1.QEnumPath(this.withPrefix("LastUpdatedSource"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentSource);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.IsRestock = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsRestock"));
        this.Reason = new odata_query_objects_1.QEnumPath(this.withPrefix("Reason"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentReason);
        this.ItemAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ItemAdjustment"));
        this.TaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("TaxAdjustment"));
        this.ShippingAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingAdjustment"));
        this.ShippingTaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingTaxAdjustment"));
        this.GiftWrapAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftWrapAdjustment"));
        this.GiftWrapTaxAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("GiftWrapTaxAdjustment"));
        this.RecyclingFeeAdjustment = new odata_query_objects_1.QNumberPath(this.withPrefix("RecyclingFeeAdjustment"));
        this.Type = new odata_query_objects_1.QEnumPath(this.withPrefix("Type"), ChannelAdvisorRestApiV1ModelsModel_1.AdjustmentType);
        this.SellerAdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerAdjustmentID"));
        this.SiteAdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteAdjustmentID"));
        this.SiteRefundDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("SiteRefundDateUtc"));
        this.AdjustmentTransactionID = new odata_query_objects_1.QStringPath(this.withPrefix("AdjustmentTransactionID"));
        this.PublicNotes = new odata_query_objects_1.QStringPath(this.withPrefix("PublicNotes"));
        this.Comment = new odata_query_objects_1.QStringPath(this.withPrefix("Comment"));
        this.CreatedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreatedDateUtc"));
        this.RequestStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("RequestStatus"), ChannelAdvisorRestApiV1ModelsModel_1.AsyncStatus);
        this.RestockStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("RestockStatus"), ChannelAdvisorRestApiV1ModelsModel_1.AsyncStatus);
        this.RmaNumber = new odata_query_objects_1.QStringPath(this.withPrefix("RmaNumber"));
        this.ReturnShippingFee = new odata_query_objects_1.QNumberPath(this.withPrefix("ReturnShippingFee"));
        this.RestockingFee = new odata_query_objects_1.QNumberPath(this.withPrefix("RestockingFee"));
        this.ReturnTrackingNumberOrUrl = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnTrackingNumberOrUrl"));
        this.ReturnShippingMethod = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnShippingMethod"));
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.OrderItem = new odata_query_objects_1.QEntityPath(this.withPrefix("OrderItem"), () => QOrderItem);
    }
}
exports.QOrderItemAdjustment = QOrderItemAdjustment;
exports.qOrderItemAdjustment = new QOrderItemAdjustment();
class QOrderItemAdjustmentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderItemAdjustmentId = QOrderItemAdjustmentId;
class OrderItemAdjustment_QApproveBuyerRequest extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ApproveBuyerRequest");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItemAdjustment_QApproveBuyerRequest = OrderItemAdjustment_QApproveBuyerRequest;
class OrderItemAdjustment_QRejectBuyerRequest extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RejectBuyerRequest");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItemAdjustment_QRejectBuyerRequest = OrderItemAdjustment_QRejectBuyerRequest;
class OrderItemAdjustment_QApproveReturn extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ApproveReturn");
        this.params = [new odata_query_objects_1.QComplexParam("ConditionQuantityList", new QRmaConditionQuantity())];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItemAdjustment_QApproveReturn = OrderItemAdjustment_QApproveReturn;
class OrderItemAdjustment_QRejectReturn extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RejectReturn");
        this.params = [new odata_query_objects_1.QComplexParam("ConditionQuantityList", new QRmaConditionQuantity())];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItemAdjustment_QRejectReturn = OrderItemAdjustment_QRejectReturn;
class OrderItemAdjustment_QReturnShippingLabel extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.ReturnShippingLabel");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderItemAdjustment_QReturnShippingLabel = OrderItemAdjustment_QReturnShippingLabel;
class QOrderItemBundleComponent extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.BundleProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("BundleProductID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.BundleSku = new odata_query_objects_1.QStringPath(this.withPrefix("BundleSku"));
        this.Title = new odata_query_objects_1.QStringPath(this.withPrefix("Title"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
        this.OrderItem = new odata_query_objects_1.QEntityPath(this.withPrefix("OrderItem"), () => QOrderItem);
        this.FulfillmentItems = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("FulfillmentItems"), () => QFulfillmentItem);
    }
}
exports.QOrderItemBundleComponent = QOrderItemBundleComponent;
exports.qOrderItemBundleComponent = new QOrderItemBundleComponent();
class QOrderItemBundleComponentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("OrderID"), new odata_query_objects_1.QNumberParam("OrderItemID"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderItemBundleComponentId = QOrderItemBundleComponentId;
class QPromotion extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.Code = new odata_query_objects_1.QStringPath(this.withPrefix("Code"));
        this.Amount = new odata_query_objects_1.QNumberPath(this.withPrefix("Amount"));
        this.ShippingAmount = new odata_query_objects_1.QNumberPath(this.withPrefix("ShippingAmount"));
        this.OrderItem = new odata_query_objects_1.QEntityPath(this.withPrefix("OrderItem"), () => QOrderItem);
    }
}
exports.QPromotion = QPromotion;
exports.qPromotion = new QPromotion();
class QPromotionId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QPromotionId = QPromotionId;
class QCustomField extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.FieldID = new odata_query_objects_1.QNumberPath(this.withPrefix("FieldID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
    }
}
exports.QCustomField = QCustomField;
exports.qCustomField = new QCustomField();
class QCustomFieldId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("FieldID"), new odata_query_objects_1.QNumberParam("OrderID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QCustomFieldId = QCustomFieldId;
class QProfile extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.AccountName = new odata_query_objects_1.QStringPath(this.withPrefix("AccountName"));
        this.CompanyName = new odata_query_objects_1.QStringPath(this.withPrefix("CompanyName"));
        this.CurrencyCode = new odata_query_objects_1.QStringPath(this.withPrefix("CurrencyCode"));
        this.TimeZoneRegion = new odata_query_objects_1.QStringPath(this.withPrefix("TimeZoneRegion"));
        this.TimeZoneDescription = new odata_query_objects_1.QStringPath(this.withPrefix("TimeZoneDescription"));
        this.DefaultDistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DefaultDistributionCenterID"));
        this.SiteAccounts = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("SiteAccounts"), () => QSiteAccount);
        this.ShippingLabelPartnerAccounts = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("ShippingLabelPartnerAccounts"), () => QShippingLabelPartnerAccount);
    }
}
exports.QProfile = QProfile;
exports.qProfile = new QProfile();
class QProfileId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QProfileId = QProfileId;
class QProduct extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.CreateDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreateDateUtc"));
        this.UpdateDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("UpdateDateUtc"));
        this.QuantityUpdateDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("QuantityUpdateDateUtc"));
        this.IsAvailableInStore = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsAvailableInStore"));
        this.IsBlocked = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsBlocked"));
        this.IsBlockedFromAdvertising = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsBlockedFromAdvertising"));
        this.IsExternalQuantityBlocked = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsExternalQuantityBlocked"));
        this.InfiniteQuantity = new odata_query_objects_1.QBooleanPath(this.withPrefix("InfiniteQuantity"));
        this.BlockComment = new odata_query_objects_1.QStringPath(this.withPrefix("BlockComment"));
        this.BlockedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("BlockedDateUtc"));
        this.BlockedFromAdvertisingDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("BlockedFromAdvertisingDateUtc"));
        this.ReceivedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ReceivedDateUtc"));
        this.LastSaleDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("LastSaleDateUtc"));
        this.ASIN = new odata_query_objects_1.QStringPath(this.withPrefix("ASIN"));
        this.Brand = new odata_query_objects_1.QStringPath(this.withPrefix("Brand"));
        this.Condition = new odata_query_objects_1.QStringPath(this.withPrefix("Condition"));
        this.Description = new odata_query_objects_1.QStringPath(this.withPrefix("Description"));
        this.EAN = new odata_query_objects_1.QStringPath(this.withPrefix("EAN"));
        this.FlagDescription = new odata_query_objects_1.QStringPath(this.withPrefix("FlagDescription"));
        this.Flag = new odata_query_objects_1.QEnumPath(this.withPrefix("Flag"), ChannelAdvisorRestApiV1ModelsModel_1.FlagType);
        this.HarmonizedCode = new odata_query_objects_1.QStringPath(this.withPrefix("HarmonizedCode"));
        this.ISBN = new odata_query_objects_1.QStringPath(this.withPrefix("ISBN"));
        this.Manufacturer = new odata_query_objects_1.QStringPath(this.withPrefix("Manufacturer"));
        this.MPN = new odata_query_objects_1.QStringPath(this.withPrefix("MPN"));
        this.ShortDescription = new odata_query_objects_1.QStringPath(this.withPrefix("ShortDescription"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.Subtitle = new odata_query_objects_1.QStringPath(this.withPrefix("Subtitle"));
        this.TaxProductCode = new odata_query_objects_1.QStringPath(this.withPrefix("TaxProductCode"));
        this.Title = new odata_query_objects_1.QStringPath(this.withPrefix("Title"));
        this.UPC = new odata_query_objects_1.QStringPath(this.withPrefix("UPC"));
        this.WarehouseLocation = new odata_query_objects_1.QStringPath(this.withPrefix("WarehouseLocation"));
        this.Warranty = new odata_query_objects_1.QStringPath(this.withPrefix("Warranty"));
        this.MultipackQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("MultipackQuantity"));
        this.Height = new odata_query_objects_1.QNumberPath(this.withPrefix("Height"));
        this.Length = new odata_query_objects_1.QNumberPath(this.withPrefix("Length"));
        this.Width = new odata_query_objects_1.QNumberPath(this.withPrefix("Width"));
        this.Weight = new odata_query_objects_1.QNumberPath(this.withPrefix("Weight"));
        this.Cost = new odata_query_objects_1.QNumberPath(this.withPrefix("Cost"));
        this.Margin = new odata_query_objects_1.QNumberPath(this.withPrefix("Margin"));
        this.RetailPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("RetailPrice"));
        this.StartingPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("StartingPrice"));
        this.ReservePrice = new odata_query_objects_1.QNumberPath(this.withPrefix("ReservePrice"));
        this.BuyItNowPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("BuyItNowPrice"));
        this.StorePrice = new odata_query_objects_1.QNumberPath(this.withPrefix("StorePrice"));
        this.SecondChancePrice = new odata_query_objects_1.QNumberPath(this.withPrefix("SecondChancePrice"));
        this.MinPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("MinPrice"));
        this.MaxPrice = new odata_query_objects_1.QNumberPath(this.withPrefix("MaxPrice"));
        this.EstimatedShippingCost = new odata_query_objects_1.QNumberPath(this.withPrefix("EstimatedShippingCost"));
        this.SupplierName = new odata_query_objects_1.QStringPath(this.withPrefix("SupplierName"));
        this.SupplierCode = new odata_query_objects_1.QStringPath(this.withPrefix("SupplierCode"));
        this.SupplierPO = new odata_query_objects_1.QStringPath(this.withPrefix("SupplierPO"));
        this.Classification = new odata_query_objects_1.QStringPath(this.withPrefix("Classification"));
        this.IsDisplayInStore = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsDisplayInStore"));
        this.StoreTitle = new odata_query_objects_1.QStringPath(this.withPrefix("StoreTitle"));
        this.StoreDescription = new odata_query_objects_1.QStringPath(this.withPrefix("StoreDescription"));
        this.BundleType = new odata_query_objects_1.QEnumPath(this.withPrefix("BundleType"), ChannelAdvisorRestApiV1ModelsModel_1.BundleType);
        this.ProductType = new odata_query_objects_1.QEnumPath(this.withPrefix("ProductType"), ChannelAdvisorRestApiV1ModelsModel_1.InventoryItemType);
        this.TotalAvailableQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalAvailableQuantity"));
        this.OpenAllocatedQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("OpenAllocatedQuantity"));
        this.OpenAllocatedQuantityPooled = new odata_query_objects_1.QNumberPath(this.withPrefix("OpenAllocatedQuantityPooled"));
        this.PendingCheckoutQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingCheckoutQuantity"));
        this.PendingCheckoutQuantityPooled = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingCheckoutQuantityPooled"));
        this.PendingPaymentQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingPaymentQuantity"));
        this.PendingPaymentQuantityPooled = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingPaymentQuantityPooled"));
        this.PendingShipmentQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingShipmentQuantity"));
        this.PendingShipmentQuantityPooled = new odata_query_objects_1.QNumberPath(this.withPrefix("PendingShipmentQuantityPooled"));
        this.TotalQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalQuantity"));
        this.TotalQuantityPooled = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalQuantityPooled"));
        this.QuantitySoldLast7Days = new odata_query_objects_1.QNumberPath(this.withPrefix("QuantitySoldLast7Days"));
        this.QuantitySoldLast14Days = new odata_query_objects_1.QNumberPath(this.withPrefix("QuantitySoldLast14Days"));
        this.QuantitySoldLast30Days = new odata_query_objects_1.QNumberPath(this.withPrefix("QuantitySoldLast30Days"));
        this.QuantitySoldLast60Days = new odata_query_objects_1.QNumberPath(this.withPrefix("QuantitySoldLast60Days"));
        this.QuantitySoldLast90Days = new odata_query_objects_1.QNumberPath(this.withPrefix("QuantitySoldLast90Days"));
        this.IsParent = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsParent"));
        this.IsInRelationship = new odata_query_objects_1.QBooleanPath(this.withPrefix("IsInRelationship"));
        this.CopyToChildren = new odata_query_objects_1.QBooleanPath(this.withPrefix("CopyToChildren"));
        this.CopyToAliases = new odata_query_objects_1.QStringPath(this.withPrefix("CopyToAliases"));
        this.ParentProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ParentProductID"));
        this.ParentSku = new odata_query_objects_1.QStringPath(this.withPrefix("ParentSku"));
        this.RelationshipName = new odata_query_objects_1.QStringPath(this.withPrefix("RelationshipName"));
        this.VaryBy = new odata_query_objects_1.QStringPath(this.withPrefix("VaryBy"));
        this.AliasType = new odata_query_objects_1.QEnumPath(this.withPrefix("AliasType"), ChannelAdvisorRestApiV1ModelsModel_1.AliasType);
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.Attributes = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Attributes"), () => QAttributeValue);
        this.DCQuantities = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("DCQuantities"), () => QDCQuantity);
        this.Images = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Images"), () => QImage);
        this.Labels = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Labels"), () => QProductLabel);
        this.BundleComponents = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("BundleComponents"), () => QProductBundleComponent);
        this.Children = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Children"), () => QChildRelationship);
        this.AliasRelationships = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("AliasRelationships"), () => QAliasRelationship);
    }
}
exports.QProduct = QProduct;
exports.qProduct = new QProduct();
class QProductId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QProductId = QProductId;
class Product_QUpdateQuantity extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.UpdateQuantity");
        this.params = [new odata_query_objects_1.QComplexParam("Value", new QQuantityUpdateRequest())];
    }
    getParams() {
        return this.params;
    }
}
exports.Product_QUpdateQuantity = Product_QUpdateQuantity;
class Product_QRemoveChildren extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RemoveChildren");
        this.params = [new odata_query_objects_1.QComplexParam("Value", new QChildrenRemoveRequest())];
    }
    getParams() {
        return this.params;
    }
}
exports.Product_QRemoveChildren = Product_QRemoveChildren;
class Product_QUpdateAttributes extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.UpdateAttributes");
        this.params = [new odata_query_objects_1.QComplexParam("Value", new QAttributesUpdateRequest())];
    }
    getParams() {
        return this.params;
    }
}
exports.Product_QUpdateAttributes = Product_QUpdateAttributes;
class QAliasRelationship extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.AliasProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("AliasProductID"));
        this.ReferenceProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ReferenceProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.AliasProductSku = new odata_query_objects_1.QStringPath(this.withPrefix("AliasProductSku"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QAliasRelationship = QAliasRelationship;
exports.qAliasRelationship = new QAliasRelationship();
class QAliasRelationshipId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("AliasProductID"), new odata_query_objects_1.QNumberParam("ProfileID"), new odata_query_objects_1.QNumberParam("ReferenceProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QAliasRelationshipId = QAliasRelationshipId;
class QImage extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.PlacementName = new odata_query_objects_1.QStringPath(this.withPrefix("PlacementName"));
        this.Abbreviation = new odata_query_objects_1.QStringPath(this.withPrefix("Abbreviation"));
        this.Url = new odata_query_objects_1.QStringPath(this.withPrefix("Url"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QImage = QImage;
exports.qImage = new QImage();
class QImageId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("PlacementName"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QImageId = QImageId;
class QAttributeValue extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QAttributeValue = QAttributeValue;
exports.qAttributeValue = new QAttributeValue();
class QAttributeValueId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("Name"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QAttributeValueId = QAttributeValueId;
class QDCQuantity extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.AvailableQuantity = new odata_query_objects_1.QNumberPath(this.withPrefix("AvailableQuantity"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QDCQuantity = QDCQuantity;
exports.qDCQuantity = new QDCQuantity();
class QDCQuantityId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("DistributionCenterID"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QDCQuantityId = QDCQuantityId;
class QProductLabel extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QProductLabel = QProductLabel;
exports.qProductLabel = new QProductLabel();
class QProductLabelId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("Name"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QProductLabelId = QProductLabelId;
class QProductBundleComponent extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.ComponentID = new odata_query_objects_1.QNumberPath(this.withPrefix("ComponentID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.ComponentSku = new odata_query_objects_1.QStringPath(this.withPrefix("ComponentSku"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.Product = new odata_query_objects_1.QEntityPath(this.withPrefix("Product"), () => QProduct);
    }
}
exports.QProductBundleComponent = QProductBundleComponent;
exports.qProductBundleComponent = new QProductBundleComponent();
class QProductBundleComponentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ComponentID"), new odata_query_objects_1.QNumberParam("ProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QProductBundleComponentId = QProductBundleComponentId;
class QChildRelationship extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ParentProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ParentProductID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.ChildProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ChildProductID"));
        this.ChildProduct = new odata_query_objects_1.QEntityPath(this.withPrefix("ChildProduct"), () => QProduct);
    }
}
exports.QChildRelationship = QChildRelationship;
exports.qChildRelationship = new QChildRelationship();
class QChildRelationshipId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ChildProductID"), new odata_query_objects_1.QNumberParam("ParentProductID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QChildRelationshipId = QChildRelationshipId;
class QPackage extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Description = new odata_query_objects_1.QStringPath(this.withPrefix("Description"));
        this.ShippingCarrier = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCarrier"));
        this.Length = new odata_query_objects_1.QNumberPath(this.withPrefix("Length"));
        this.Width = new odata_query_objects_1.QNumberPath(this.withPrefix("Width"));
        this.Height = new odata_query_objects_1.QNumberPath(this.withPrefix("Height"));
        this.EmptyWeight = new odata_query_objects_1.QNumberPath(this.withPrefix("EmptyWeight"));
    }
}
exports.QPackage = QPackage;
exports.qPackage = new QPackage();
class QPackageId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QPackageId = QPackageId;
class QChannelDocumentBaseType extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.DocumentKey = new odata_query_objects_1.QStringPath(this.withPrefix("DocumentKey"));
        this.Contents = new odata_query_objects_1.QStringPath(this.withPrefix("Contents"));
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.DocumentType = new odata_query_objects_1.QEnumPath(this.withPrefix("DocumentType"), ChannelAdvisorRestApiV1ModelsModel_1.ChannelDocumentType);
    }
}
exports.QChannelDocumentBaseType = QChannelDocumentBaseType;
class QChannelDocument extends QChannelDocumentBaseType {
    constructor() {
        super(...arguments);
        this.__subtypeMapping = { "ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceDocument": "QAmazonVATInvoiceDocument" };
    }
    get QAmazonVATInvoiceDocument_OrderID() {
        return this.__asQAmazonVATInvoiceDocument().OrderID;
    }
    get QAmazonVATInvoiceDocument_AdjustmentID() {
        return this.__asQAmazonVATInvoiceDocument().AdjustmentID;
    }
    get QAmazonVATInvoiceDocument_Status() {
        return this.__asQAmazonVATInvoiceDocument().Status;
    }
    get QAmazonVATInvoiceDocument_InvoiceNumber() {
        return this.__asQAmazonVATInvoiceDocument().InvoiceNumber;
    }
    get QAmazonVATInvoiceDocument_TotalAmount() {
        return this.__asQAmazonVATInvoiceDocument().TotalAmount;
    }
    get QAmazonVATInvoiceDocument_TotalVATAmount() {
        return this.__asQAmazonVATInvoiceDocument().TotalVATAmount;
    }
    get QAmazonVATInvoiceDocument_CreateDateUTC() {
        return this.__asQAmazonVATInvoiceDocument().CreateDateUTC;
    }
    get QAmazonVATInvoiceDocument_UpdateDateUTC() {
        return this.__asQAmazonVATInvoiceDocument().UpdateDateUTC;
    }
    __asQAmazonVATInvoiceDocument() {
        return new QAmazonVATInvoiceDocument(this.withPrefix("ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceDocument"));
    }
}
exports.QChannelDocument = QChannelDocument;
Object.defineProperties(QChannelDocument.prototype, { QAmazonVATInvoiceDocument_OrderID: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_AdjustmentID: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_Status: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_InvoiceNumber: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_TotalAmount: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_TotalVATAmount: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_CreateDateUTC: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QAmazonVATInvoiceDocument_UpdateDateUTC: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION });
exports.qChannelDocument = new QChannelDocument();
class QChannelDocumentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("DocumentKey")];
    }
    getParams() {
        return this.params;
    }
}
exports.QChannelDocumentId = QChannelDocumentId;
class ChannelDocument_QRetrieved extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Retrieved");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.ChannelDocument_QRetrieved = ChannelDocument_QRetrieved;
class ChannelDocument_QNotSupplied extends odata_query_objects_1.QFunction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.NotSupplied", new odata_query_objects_1.OperationReturnType(odata_query_objects_1.ReturnTypes.COMPLEX_COLLECTION, new odata_query_objects_1.QComplexParam("NONE", new QNotSuppliedChannelDocument)));
        this.params = [];
    }
    getParams() {
        return this.params;
    }
    buildUrl(notEncoded = false) {
        return super.buildUrl(undefined, notEncoded);
    }
}
exports.ChannelDocument_QNotSupplied = ChannelDocument_QNotSupplied;
class QNotSuppliedChannelDocumentBaseType extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.DocumentType = new odata_query_objects_1.QEnumPath(this.withPrefix("DocumentType"), ChannelAdvisorRestApiV1ModelsModel_1.ChannelDocumentType);
    }
}
exports.QNotSuppliedChannelDocumentBaseType = QNotSuppliedChannelDocumentBaseType;
class QNotSuppliedChannelDocument extends QNotSuppliedChannelDocumentBaseType {
    constructor() {
        super(...arguments);
        this.__subtypeMapping = { "ChannelAdvisor.RestApi.V1.Models.NotSuppliedAmazonVATInvoiceDocument": "QNotSuppliedAmazonVATInvoiceDocument" };
    }
    get QNotSuppliedAmazonVATInvoiceDocument_OrderID() {
        return this.__asQNotSuppliedAmazonVATInvoiceDocument().OrderID;
    }
    get QNotSuppliedAmazonVATInvoiceDocument_AdjustmentID() {
        return this.__asQNotSuppliedAmazonVATInvoiceDocument().AdjustmentID;
    }
    get QNotSuppliedAmazonVATInvoiceDocument_CreateDateUTC() {
        return this.__asQNotSuppliedAmazonVATInvoiceDocument().CreateDateUTC;
    }
    __asQNotSuppliedAmazonVATInvoiceDocument() {
        return new QNotSuppliedAmazonVATInvoiceDocument(this.withPrefix("ChannelAdvisor.RestApi.V1.Models.NotSuppliedAmazonVATInvoiceDocument"));
    }
}
exports.QNotSuppliedChannelDocument = QNotSuppliedChannelDocument;
Object.defineProperties(QNotSuppliedChannelDocument.prototype, { QNotSuppliedAmazonVATInvoiceDocument_OrderID: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QNotSuppliedAmazonVATInvoiceDocument_AdjustmentID: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QNotSuppliedAmazonVATInvoiceDocument_CreateDateUTC: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION });
exports.qNotSuppliedChannelDocument = new QNotSuppliedChannelDocument();
class QNotSuppliedChannelDocumentId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QNotSuppliedChannelDocumentId = QNotSuppliedChannelDocumentId;
class QSite extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.SiteName = new odata_query_objects_1.QStringPath(this.withPrefix("SiteName"));
        this.SiteCategoryID = new odata_query_objects_1.QNumberPath(this.withPrefix("SiteCategoryID"));
        this.SiteCategoryName = new odata_query_objects_1.QStringPath(this.withPrefix("SiteCategoryName"));
        this.CancellationConfiguration = new odata_query_objects_1.QEntityPath(this.withPrefix("CancellationConfiguration"), () => QCancellationConfiguration);
        this.RefundConfiguration = new odata_query_objects_1.QEntityPath(this.withPrefix("RefundConfiguration"), () => QRefundConfiguration);
        this.AdjustmentReasons = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("AdjustmentReasons"), () => QCodeDescription);
    }
}
exports.QSite = QSite;
exports.qSite = new QSite();
class QSiteId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QSiteId = QSiteId;
class QOrderDocumentFlyweightBaseType extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.DocumentKey = new odata_query_objects_1.QStringPath(this.withPrefix("DocumentKey"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.CreateDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreateDateUtc"));
        this.DocumentType = new odata_query_objects_1.QEnumPath(this.withPrefix("DocumentType"), ChannelAdvisorRestApiV1ModelsModel_1.DocumentType);
        this.MimeType = new odata_query_objects_1.QStringPath(this.withPrefix("MimeType"));
        this.DocumentSource = new odata_query_objects_1.QEnumPath(this.withPrefix("DocumentSource"), ChannelAdvisorRestApiV1ModelsModel_1.DocumentSourceType);
    }
}
exports.QOrderDocumentFlyweightBaseType = QOrderDocumentFlyweightBaseType;
class QOrderDocumentFlyweight extends QOrderDocumentFlyweightBaseType {
    constructor() {
        super(...arguments);
        this.__subtypeMapping = { "ChannelAdvisor.RestApi.V1.Models.OrderDocument": "QOrderDocument" };
    }
    get QOrderDocument_Content() {
        return this.__asQOrderDocument().Content;
    }
    get QOrderDocument_Metadata() {
        return this.__asQOrderDocument().Metadata;
    }
    __asQOrderDocument() {
        return new QOrderDocument(this.withPrefix("ChannelAdvisor.RestApi.V1.Models.OrderDocument"));
    }
}
exports.QOrderDocumentFlyweight = QOrderDocumentFlyweight;
Object.defineProperties(QOrderDocumentFlyweight.prototype, { QOrderDocument_Content: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION, QOrderDocument_Metadata: odata_query_objects_1.ENUMERABLE_PROP_DEFINITION });
exports.qOrderDocumentFlyweight = new QOrderDocumentFlyweight();
class QOrderDocumentFlyweightId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("DocumentKey"), new odata_query_objects_1.QNumberParam("OrderID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderDocumentFlyweightId = QOrderDocumentFlyweightId;
class QOrderDocument extends QOrderDocumentFlyweightBaseType {
    constructor() {
        super(...arguments);
        this.Content = new odata_query_objects_1.QStringPath(this.withPrefix("Content"));
        this.Metadata = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Metadata"), () => QOrderDocumentMetadata);
    }
}
exports.QOrderDocument = QOrderDocument;
exports.qOrderDocument = new QOrderDocument();
class OrderDocument_QRetrieved extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Retrieved");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.OrderDocument_QRetrieved = OrderDocument_QRetrieved;
class OrderDocument_QMissing extends odata_query_objects_1.QFunction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.Missing", new odata_query_objects_1.OperationReturnType(odata_query_objects_1.ReturnTypes.COMPLEX_COLLECTION, new odata_query_objects_1.QComplexParam("NONE", new QOrder)));
        this.params = [];
    }
    getParams() {
        return this.params;
    }
    buildUrl(notEncoded = false) {
        return super.buildUrl(undefined, notEncoded);
    }
}
exports.OrderDocument_QMissing = OrderDocument_QMissing;
class QOrderDocumentMetadata extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Key = new odata_query_objects_1.QStringPath(this.withPrefix("Key"));
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
    }
}
exports.QOrderDocumentMetadata = QOrderDocumentMetadata;
exports.qOrderDocumentMetadata = new QOrderDocumentMetadata();
class QOrderDocumentMetadataId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("Key")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderDocumentMetadataId = QOrderDocumentMetadataId;
class QOrderAttributeValue extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
    }
}
exports.QOrderAttributeValue = QOrderAttributeValue;
exports.qOrderAttributeValue = new QOrderAttributeValue();
class QOrderAttributeValueId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("Name"), new odata_query_objects_1.QNumberParam("OrderID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderAttributeValueId = QOrderAttributeValueId;
class QOrderItemAttributeValue extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderItem = new odata_query_objects_1.QEntityPath(this.withPrefix("OrderItem"), () => QOrderItem);
    }
}
exports.QOrderItemAttributeValue = QOrderItemAttributeValue;
exports.qOrderItemAttributeValue = new QOrderItemAttributeValue();
class QOrderItemAttributeValueId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QStringParam("Name"), new odata_query_objects_1.QNumberParam("OrderItemID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QOrderItemAttributeValueId = QOrderItemAttributeValueId;
class QShippingOverride extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.ShippingCarrier = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCarrier"));
        this.ShippingClass = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingClass"));
        this.TrackingNumber = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingNumber"));
        this.TrackingUrl = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingUrl"));
        this.SellerFulfillmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerFulfillmentID"));
        this.ShippedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ShippedDateUtc"));
        this.ApplyShippingRules = new odata_query_objects_1.QBooleanPath(this.withPrefix("ApplyShippingRules"));
        this.EstimatedShipDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("EstimatedShipDateUtc"));
    }
}
exports.QShippingOverride = QShippingOverride;
exports.qShippingOverride = new QShippingOverride();
class QExportStatus extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.ProfileID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProfileID"));
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.ApplicationID = new odata_query_objects_1.QNumberPath(this.withPrefix("ApplicationID"));
        this.DeveloperKey = new odata_query_objects_1.QStringPath(this.withPrefix("DeveloperKey"));
        this.Override = new odata_query_objects_1.QBooleanPath(this.withPrefix("Override"));
        this.Order = new odata_query_objects_1.QEntityPath(this.withPrefix("Order"), () => QOrder);
    }
}
exports.QExportStatus = QExportStatus;
exports.qExportStatus = new QExportStatus();
class QExportStatusId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QExportStatusId = QExportStatusId;
class QAmazonVATInvoiceDocument extends QChannelDocumentBaseType {
    constructor() {
        super(...arguments);
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.AdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("AdjustmentID"));
        this.Status = new odata_query_objects_1.QEnumPath(this.withPrefix("Status"), ChannelAdvisorRestApiV1ModelsModel_1.AmazonVATInvoiceRequestStatus);
        this.InvoiceNumber = new odata_query_objects_1.QStringPath(this.withPrefix("InvoiceNumber"));
        this.TotalAmount = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalAmount"));
        this.TotalVATAmount = new odata_query_objects_1.QNumberPath(this.withPrefix("TotalVATAmount"));
        this.CreateDateUTC = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreateDateUTC"));
        this.UpdateDateUTC = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("UpdateDateUTC"));
    }
}
exports.QAmazonVATInvoiceDocument = QAmazonVATInvoiceDocument;
exports.qAmazonVATInvoiceDocument = new QAmazonVATInvoiceDocument();
class QSiteAccount extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.SiteAccountName = new odata_query_objects_1.QStringPath(this.withPrefix("SiteAccountName"));
        this.SiteID = new odata_query_objects_1.QNumberPath(this.withPrefix("SiteID"));
        this.SiteName = new odata_query_objects_1.QStringPath(this.withPrefix("SiteName"));
        this.Enabled = new odata_query_objects_1.QBooleanPath(this.withPrefix("Enabled"));
        this.Profile = new odata_query_objects_1.QEntityPath(this.withPrefix("Profile"), () => QProfile);
    }
}
exports.QSiteAccount = QSiteAccount;
exports.qSiteAccount = new QSiteAccount();
class QSiteAccountId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QSiteAccountId = QSiteAccountId;
class QShippingLabelPartnerAccount extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.AccountName = new odata_query_objects_1.QStringPath(this.withPrefix("AccountName"));
        this.PartnerName = new odata_query_objects_1.QStringPath(this.withPrefix("PartnerName"));
        this.Profile = new odata_query_objects_1.QEntityPath(this.withPrefix("Profile"), () => QProfile);
    }
}
exports.QShippingLabelPartnerAccount = QShippingLabelPartnerAccount;
exports.qShippingLabelPartnerAccount = new QShippingLabelPartnerAccount();
class QShippingLabelPartnerAccountId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QShippingLabelPartnerAccountId = QShippingLabelPartnerAccountId;
class QNotSuppliedAmazonVATInvoiceDocument extends QNotSuppliedChannelDocumentBaseType {
    constructor() {
        super(...arguments);
        this.OrderID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderID"));
        this.AdjustmentID = new odata_query_objects_1.QStringPath(this.withPrefix("AdjustmentID"));
        this.CreateDateUTC = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("CreateDateUTC"));
    }
}
exports.QNotSuppliedAmazonVATInvoiceDocument = QNotSuppliedAmazonVATInvoiceDocument;
exports.qNotSuppliedAmazonVATInvoiceDocument = new QNotSuppliedAmazonVATInvoiceDocument();
class QWebhook extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ID = new odata_query_objects_1.QNumberPath(this.withPrefix("ID"));
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Status = new odata_query_objects_1.QEnumPath(this.withPrefix("Status"), ChannelAdvisorRestApiV1ModelsModel_1.WebhookEndpointStatus);
        this.WebhookUri = new odata_query_objects_1.QStringPath(this.withPrefix("WebhookUri"));
        this.SigningSecret = new odata_query_objects_1.QStringPath(this.withPrefix("SigningSecret"));
        this.EventTypes = new odata_query_objects_1.QEnumCollectionPath(this.withPrefix("EventTypes"), ChannelAdvisorRestApiV1ModelsModel_1.WebhookEventType);
    }
}
exports.QWebhook = QWebhook;
exports.qWebhook = new QWebhook();
class QWebhookId extends odata_query_objects_1.QId {
    constructor() {
        super(...arguments);
        this.params = [new odata_query_objects_1.QNumberParam("ID")];
    }
    getParams() {
        return this.params;
    }
}
exports.QWebhookId = QWebhookId;
class QNewSigningSecret extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.NewSigningSecret");
        this.params = [];
    }
    getParams() {
        return this.params;
    }
}
exports.QNewSigningSecret = QNewSigningSecret;
class QRetryFailedEvents extends odata_query_objects_1.QAction {
    constructor() {
        super("ChannelAdvisor.RestApi.V1.Models.RetryFailedEvents");
        this.params = [new odata_query_objects_1.QStringParam("Token")];
    }
    getParams() {
        return this.params;
    }
}
exports.QRetryFailedEvents = QRetryFailedEvents;
class QShipOrderRequest extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ShippedDateUtc = new odata_query_objects_1.QDateTimeOffsetPath(this.withPrefix("ShippedDateUtc"));
        this.TrackingNumber = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingNumber"));
        this.ReturnTrackingNumber = new odata_query_objects_1.QStringPath(this.withPrefix("ReturnTrackingNumber"));
        this.ShippingCarrier = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingCarrier"));
        this.ShippingClass = new odata_query_objects_1.QStringPath(this.withPrefix("ShippingClass"));
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.SellerFulfillmentID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerFulfillmentID"));
        this.DeliveryStatus = new odata_query_objects_1.QEnumPath(this.withPrefix("DeliveryStatus"), ChannelAdvisorRestApiV1ModelsModel_1.DeliveryStatus);
        this.FulfillmentType = new odata_query_objects_1.QEnumPath(this.withPrefix("FulfillmentType"), ChannelAdvisorRestApiV1ModelsModel_1.FulfillmentType);
        this.PreventMarketplaceCommunication = new odata_query_objects_1.QBooleanPath(this.withPrefix("PreventMarketplaceCommunication"));
        this.TrackingUrl = new odata_query_objects_1.QStringPath(this.withPrefix("TrackingUrl"));
        this.SerialShippingContainerCode = new odata_query_objects_1.QStringPath(this.withPrefix("SerialShippingContainerCode"));
        this.Items = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Items"), () => QShipOrderRequestItem);
    }
}
exports.QShipOrderRequest = QShipOrderRequest;
exports.qShipOrderRequest = new QShipOrderRequest();
class QShippingItems extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.FulfillmentItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("FulfillmentItemID"));
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.Description = new odata_query_objects_1.QStringPath(this.withPrefix("Description"));
        this.UnitWeight = new odata_query_objects_1.QNumberPath(this.withPrefix("UnitWeight"));
    }
}
exports.QShippingItems = QShippingItems;
exports.qShippingItems = new QShippingItems();
class QPickupLabelLineItem extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.SerialNumbers = new odata_query_objects_1.QCollectionPath(this.withPrefix("SerialNumbers"), () => odata_query_objects_1.QStringCollection);
        this.SiteOrderItemID = new odata_query_objects_1.QStringPath(this.withPrefix("SiteOrderItemID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
    }
}
exports.QPickupLabelLineItem = QPickupLabelLineItem;
exports.qPickupLabelLineItem = new QPickupLabelLineItem();
class QRmaConditionQuantity extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Condition = new odata_query_objects_1.QStringPath(this.withPrefix("Condition"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
    }
}
exports.QRmaConditionQuantity = QRmaConditionQuantity;
exports.qRmaConditionQuantity = new QRmaConditionQuantity();
class QQuantityUpdateRequest extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.CompleteDCList = new odata_query_objects_1.QBooleanPath(this.withPrefix("CompleteDCList"));
        this.UpdateType = new odata_query_objects_1.QEnumPath(this.withPrefix("UpdateType"), ChannelAdvisorRestApiV1ModelsModel_1.QuantityUpdateType);
        this.Updates = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Updates"), () => QDCxQtyUpdate);
    }
}
exports.QQuantityUpdateRequest = QQuantityUpdateRequest;
exports.qQuantityUpdateRequest = new QQuantityUpdateRequest();
class QChildrenRemoveRequest extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.ChildProductIDList = new odata_query_objects_1.QCollectionPath(this.withPrefix("ChildProductIDList"), () => odata_query_objects_1.QNumberCollection);
    }
}
exports.QChildrenRemoveRequest = QChildrenRemoveRequest;
exports.qChildrenRemoveRequest = new QChildrenRemoveRequest();
class QAttributesUpdateRequest extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Attributes = new odata_query_objects_1.QEntityCollectionPath(this.withPrefix("Attributes"), () => QAttributeUpdate);
    }
}
exports.QAttributesUpdateRequest = QAttributesUpdateRequest;
exports.qAttributesUpdateRequest = new QAttributesUpdateRequest();
class QCancellationConfiguration extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.SupportsOrderCancellations = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderCancellations"));
        this.SupportsOrderItemCancellations = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderItemCancellations"));
        this.SupportsOrderItemRMACancellations = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderItemRMACancellations"));
    }
}
exports.QCancellationConfiguration = QCancellationConfiguration;
exports.qCancellationConfiguration = new QCancellationConfiguration();
class QRefundConfiguration extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.SupportsOrderRefunds = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderRefunds"));
        this.SupportsOrderItemRefunds = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderItemRefunds"));
        this.SupportsOrderItemRMARefunds = new odata_query_objects_1.QBooleanPath(this.withPrefix("SupportsOrderItemRMARefunds"));
    }
}
exports.QRefundConfiguration = QRefundConfiguration;
exports.qRefundConfiguration = new QRefundConfiguration();
class QCodeDescription extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Code = new odata_query_objects_1.QNumberPath(this.withPrefix("Code"));
        this.Description = new odata_query_objects_1.QStringPath(this.withPrefix("Description"));
    }
}
exports.QCodeDescription = QCodeDescription;
exports.qCodeDescription = new QCodeDescription();
class QShipOrderRequestItem extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.OrderItemID = new odata_query_objects_1.QNumberPath(this.withPrefix("OrderItemID"));
        this.ProductID = new odata_query_objects_1.QNumberPath(this.withPrefix("ProductID"));
        this.Sku = new odata_query_objects_1.QStringPath(this.withPrefix("Sku"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
        this.SellerFulfillmentItemID = new odata_query_objects_1.QStringPath(this.withPrefix("SellerFulfillmentItemID"));
        this.ReferenceSku = new odata_query_objects_1.QStringPath(this.withPrefix("ReferenceSku"));
    }
}
exports.QShipOrderRequestItem = QShipOrderRequestItem;
exports.qShipOrderRequestItem = new QShipOrderRequestItem();
class QDCxQtyUpdate extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.DistributionCenterID = new odata_query_objects_1.QNumberPath(this.withPrefix("DistributionCenterID"));
        this.Quantity = new odata_query_objects_1.QNumberPath(this.withPrefix("Quantity"));
    }
}
exports.QDCxQtyUpdate = QDCxQtyUpdate;
exports.qDCxQtyUpdate = new QDCxQtyUpdate();
class QAttributeUpdate extends odata_query_objects_1.QueryObject {
    constructor() {
        super(...arguments);
        this.Name = new odata_query_objects_1.QStringPath(this.withPrefix("Name"));
        this.Value = new odata_query_objects_1.QStringPath(this.withPrefix("Value"));
    }
}
exports.QAttributeUpdate = QAttributeUpdate;
exports.qAttributeUpdate = new QAttributeUpdate();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUNoYW5uZWxBZHZpc29yUmVzdEFwaVYxTW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUUNoYW5uZWxBZHZpc29yUmVzdEFwaVYxTW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGNBQWM7QUFDZCx1RUFBbWI7QUFFbmIsNkZBQXFrQjtBQUVya0IsTUFBYSxNQUFPLFNBQVEsaUNBQVc7SUFBdkM7O1FBQ29CLE9BQUUsR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGNBQVMsR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFELFdBQU0sR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGFBQVEsR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hELG9CQUFlLEdBQUcsSUFBSSxpQ0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLDJCQUFzQixHQUFHLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDNUYsa0JBQWEsR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGdCQUFXLEdBQUcsSUFBSSxpQ0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5RCx5QkFBb0IsR0FBRyxJQUFJLGlDQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDaEYsa0JBQWEsR0FBRyxJ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