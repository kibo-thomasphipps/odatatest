"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDocumentFlyweightService = exports.SiteCollectionService = exports.SiteService = exports.NotSuppliedChannelDocumentCollectionService = exports.NotSuppliedChannelDocumentService = exports.ChannelDocumentCollectionService = exports.ChannelDocumentService = exports.PackageCollectionService = exports.PackageService = exports.ChildRelationshipCollectionService = exports.ChildRelationshipService = exports.ProductBundleComponentCollectionService = exports.ProductBundleComponentService = exports.ProductLabelCollectionService = exports.ProductLabelService = exports.DCQuantityCollectionService = exports.DCQuantityService = exports.AttributeValueCollectionService = exports.AttributeValueService = exports.ImageCollectionService = exports.ImageService = exports.AliasRelationshipCollectionService = exports.AliasRelationshipService = exports.ProductCollectionService = exports.ProductService = exports.ProfileCollectionService = exports.ProfileService = exports.CustomFieldCollectionService = exports.CustomFieldService = exports.PromotionCollectionService = exports.PromotionService = exports.OrderItemBundleComponentCollectionService = exports.OrderItemBundleComponentService = exports.OrderItemAdjustmentCollectionService = exports.OrderItemAdjustmentService = exports.OrderAdjustmentCollectionService = exports.OrderAdjustmentService = exports.OperatingHoursCollectionService = exports.OperatingHoursService = exports.DistributionCenterCollectionService = exports.DistributionCenterService = exports.FulfillmentItemCollectionService = exports.FulfillmentItemService = exports.FulfillmentCollectionService = exports.FulfillmentService = exports.OrderItemCollectionService = exports.OrderItemService = exports.OrderCollectionService = exports.OrderService = exports.ChannelAdvisorRestApiV1ModelsService = void 0;
exports.CodeDescriptionService = exports.RefundConfigurationService = exports.CancellationConfigurationService = exports.WebhookCollectionService = exports.WebhookService = exports.NotSuppliedAmazonVATInvoiceDocumentCollectionService = exports.NotSuppliedAmazonVATInvoiceDocumentService = exports.ShippingLabelPartnerAccountCollectionService = exports.ShippingLabelPartnerAccountService = exports.SiteAccountCollectionService = exports.SiteAccountService = exports.AmazonVATInvoiceDocumentCollectionService = exports.AmazonVATInvoiceDocumentService = exports.ExportStatusCollectionService = exports.ExportStatusService = exports.OrderItemAttributeValueCollectionService = exports.OrderItemAttributeValueService = exports.OrderAttributeValueCollectionService = exports.OrderAttributeValueService = exports.OrderDocumentMetadataCollectionService = exports.OrderDocumentMetadataService = exports.OrderDocumentCollectionService = exports.OrderDocumentService = exports.OrderDocumentFlyweightCollectionService = void 0;
const odata_query_objects_1 = require("@odata2ts/odata-query-objects");
const odata_service_1 = require("@odata2ts/odata-service");
const QChannelAdvisorRestApiV1Models_1 = require("./QChannelAdvisorRestApiV1Models");
const ChannelAdvisorRestApiV1ModelsModel_1 = require("./ChannelAdvisorRestApiV1ModelsModel");
class ChannelAdvisorRestApiV1ModelsService extends odata_service_1.ODataService {
    Orders(id) {
        const fieldName = "Orders";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderCollectionService(client, path, fieldName, options)
            : new OrderService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItems(id) {
        const fieldName = "OrderItems";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemCollectionService(client, path, fieldName, options)
            : new OrderItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Fulfillments(id) {
        const fieldName = "Fulfillments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentCollectionService(client, path, fieldName, options)
            : new FulfillmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    FulfillmentItems(id) {
        const fieldName = "FulfillmentItems";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentItemCollectionService(client, path, fieldName, options)
            : new FulfillmentItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DistributionCenters(id) {
        const fieldName = "DistributionCenters";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DistributionCenterCollectionService(client, path, fieldName, options)
            : new DistributionCenterService(client, path, new QChannelAdvisorRestApiV1Models_1.QDistributionCenterId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OperatingHours(id) {
        const fieldName = "OperatingHours";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OperatingHoursCollectionService(client, path, fieldName, options)
            : new OperatingHoursService(client, path, new QChannelAdvisorRestApiV1Models_1.QOperatingHoursId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderAdjustments(id) {
        const fieldName = "OrderAdjustments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderAdjustmentCollectionService(client, path, fieldName, options)
            : new OrderAdjustmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderAdjustmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItemAdjustments(id) {
        const fieldName = "OrderItemAdjustments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemAdjustmentCollectionService(client, path, fieldName, options)
            : new OrderItemAdjustmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemAdjustmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItemBundleComponents(id) {
        const fieldName = "OrderItemBundleComponents";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemBundleComponentCollectionService(client, path, fieldName, options)
            : new OrderItemBundleComponentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemBundleComponentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItemPromotions(id) {
        const fieldName = "OrderItemPromotions";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PromotionCollectionService(client, path, fieldName, options)
            : new PromotionService(client, path, new QChannelAdvisorRestApiV1Models_1.QPromotionId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    CustomFields(id) {
        const fieldName = "CustomFields";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new CustomFieldCollectionService(client, path, fieldName, options)
            : new CustomFieldService(client, path, new QChannelAdvisorRestApiV1Models_1.QCustomFieldId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Profiles(id) {
        const fieldName = "Profiles";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProfileCollectionService(client, path, fieldName, options)
            : new ProfileService(client, path, new QChannelAdvisorRestApiV1Models_1.QProfileId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Products(id) {
        const fieldName = "Products";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProductCollectionService(client, path, fieldName, options)
            : new ProductService(client, path, new QChannelAdvisorRestApiV1Models_1.QProductId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    AliasRelationships(id) {
        const fieldName = "AliasRelationships";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AliasRelationshipCollectionService(client, path, fieldName, options)
            : new AliasRelationshipService(client, path, new QChannelAdvisorRestApiV1Models_1.QAliasRelationshipId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Images(id) {
        const fieldName = "Images";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ImageCollectionService(client, path, fieldName, options)
            : new ImageService(client, path, new QChannelAdvisorRestApiV1Models_1.QImageId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    AttributeValues(id) {
        const fieldName = "AttributeValues";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AttributeValueCollectionService(client, path, fieldName, options)
            : new AttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DCQuantities(id) {
        const fieldName = "DCQuantities";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DCQuantityCollectionService(client, path, fieldName, options)
            : new DCQuantityService(client, path, new QChannelAdvisorRestApiV1Models_1.QDCQuantityId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ProductLabels(id) {
        const fieldName = "ProductLabels";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProductLabelCollectionService(client, path, fieldName, options)
            : new ProductLabelService(client, path, new QChannelAdvisorRestApiV1Models_1.QProductLabelId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ProductBundleComponents(id) {
        const fieldName = "ProductBundleComponents";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProductBundleComponentCollectionService(client, path, fieldName, options)
            : new ProductBundleComponentService(client, path, new QChannelAdvisorRestApiV1Models_1.QProductBundleComponentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Children(id) {
        const fieldName = "Children";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ChildRelationshipCollectionService(client, path, fieldName, options)
            : new ChildRelationshipService(client, path, new QChannelAdvisorRestApiV1Models_1.QChildRelationshipId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Packages(id) {
        const fieldName = "Packages";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PackageCollectionService(client, path, fieldName, options)
            : new PackageService(client, path, new QChannelAdvisorRestApiV1Models_1.QPackageId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ChannelDocuments(id) {
        const fieldName = "ChannelDocuments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ChannelDocumentCollectionService(client, path, fieldName, options)
            : new ChannelDocumentService(client, path, new QChannelAdvisorRestApiV1Models_1.QChannelDocumentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    NotSuppliedChannelDocument(id) {
        const fieldName = "NotSuppliedChannelDocument";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new NotSuppliedChannelDocumentCollectionService(client, path, fieldName, options)
            : new NotSuppliedChannelDocumentService(client, path, new QChannelAdvisorRestApiV1Models_1.QNotSuppliedChannelDocumentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Webhooks(id) {
        const fieldName = "Webhooks";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new WebhookCollectionService(client, path, fieldName, options)
            : new WebhookService(client, path, new QChannelAdvisorRestApiV1Models_1.QWebhookId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Sites(id) {
        const fieldName = "Sites";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new SiteCollectionService(client, path, fieldName, options)
            : new SiteService(client, path, new QChannelAdvisorRestApiV1Models_1.QSiteId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderDocuments(id) {
        const fieldName = "OrderDocuments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderDocumentCollectionService(client, path, fieldName, options)
            : new OrderDocumentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentFlyweightId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderDocumentFlyweights(id) {
        const fieldName = "OrderDocumentFlyweights";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderDocumentFlyweightCollectionService(client, path, fieldName, options)
            : new OrderDocumentFlyweightService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentFlyweightId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderDocumentMetadata(id) {
        const fieldName = "OrderDocumentMetadata";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderDocumentMetadataCollectionService(client, path, fieldName, options)
            : new OrderDocumentMetadataService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentMetadataId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderAttributeValues(id) {
        const fieldName = "OrderAttributeValues";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderAttributeValueCollectionService(client, path, fieldName, options)
            : new OrderAttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItemAttributeValues(id) {
        const fieldName = "OrderItemAttributeValues";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemAttributeValueCollectionService(client, path, fieldName, options)
            : new OrderItemAttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
exports.ChannelAdvisorRestApiV1ModelsService = ChannelAdvisorRestApiV1ModelsService;
class OrderService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrder, options);
    }
    Items(id) {
        const fieldName = "Items";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemCollectionService(client, path, fieldName, options)
            : new OrderItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Fulfillments(id) {
        const fieldName = "Fulfillments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentCollectionService(client, path, fieldName, options)
            : new FulfillmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Adjustments(id) {
        const fieldName = "Adjustments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderAdjustmentCollectionService(client, path, fieldName, options)
            : new OrderAdjustmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderAdjustmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    CustomFields(id) {
        const fieldName = "CustomFields";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new CustomFieldCollectionService(client, path, fieldName, options)
            : new CustomFieldService(client, path, new QChannelAdvisorRestApiV1Models_1.QCustomFieldId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderAttributes(id) {
        const fieldName = "OrderAttributes";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderAttributeValueCollectionService(client, path, fieldName, options)
            : new OrderAttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Exports(id) {
        const fieldName = "Exports";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ExportStatusCollectionService(client, path, fieldName, options)
            : new ExportStatusService(client, path, new QChannelAdvisorRestApiV1Models_1.QExportStatusId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ChannelDocuments(id) {
        const fieldName = "ChannelDocuments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ChannelDocumentCollectionService(client, path, fieldName, options)
            : new ChannelDocumentService(client, path, new QChannelAdvisorRestApiV1Models_1.QChannelDocumentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    async OrderDocuments(requestConfig) {
        if (!this._Order_QOrderDocuments) {
            this._Order_QOrderDocuments = new QChannelAdvisorRestApiV1Models_1.Order_QOrderDocuments();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QOrderDocuments.buildUrl(isUrlNotEncoded()));
        const response = await client.get(url, requestConfig, getDefaultHeaders());
        return this._Order_QOrderDocuments.convertResponse(response);
    }
    async Ship(params, requestConfig) {
        if (!this._Order_QShip) {
            this._Order_QShip = new QChannelAdvisorRestApiV1Models_1.Order_QShip();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QShip.buildUrl());
        return client.post(url, this._Order_QShip.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async ShippingRates(params, requestConfig) {
        if (!this._Order_QShippingRates) {
            this._Order_QShippingRates = new QChannelAdvisorRestApiV1Models_1.Order_QShippingRates();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QShippingRates.buildUrl());
        return client.post(url, this._Order_QShippingRates.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async PurchaseLabel(params, requestConfig) {
        if (!this._Order_QPurchaseLabel) {
            this._Order_QPurchaseLabel = new QChannelAdvisorRestApiV1Models_1.Order_QPurchaseLabel();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QPurchaseLabel.buildUrl());
        return client.post(url, this._Order_QPurchaseLabel.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async PickupLabel(params, requestConfig) {
        if (!this._Order_QPickupLabel) {
            this._Order_QPickupLabel = new QChannelAdvisorRestApiV1Models_1.Order_QPickupLabel();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QPickupLabel.buildUrl());
        return client.post(url, this._Order_QPickupLabel.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async Adjust(params, requestConfig) {
        if (!this._Order_QAdjust) {
            this._Order_QAdjust = new QChannelAdvisorRestApiV1Models_1.Order_QAdjust();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QAdjust.buildUrl());
        return client.post(url, this._Order_QAdjust.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async Export(requestConfig) {
        if (!this._Order_QExport) {
            this._Order_QExport = new QChannelAdvisorRestApiV1Models_1.Order_QExport();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QExport.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async Confirm(requestConfig) {
        if (!this._Order_QConfirm) {
            this._Order_QConfirm = new QChannelAdvisorRestApiV1Models_1.Order_QConfirm();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QConfirm.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async Deny(requestConfig) {
        if (!this._Order_QDeny) {
            this._Order_QDeny = new QChannelAdvisorRestApiV1Models_1.Order_QDeny();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QDeny.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
}
exports.OrderService = OrderService;
class OrderCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrder, new QChannelAdvisorRestApiV1Models_1.QOrderId(name), options);
    }
    async Create(params, requestConfig) {
        if (!this._Order_QCreate) {
            this._Order_QCreate = new QChannelAdvisorRestApiV1Models_1.Order_QCreate();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Order_QCreate.buildUrl());
        const response = await client.post(url, this._Order_QCreate.convertUserParams(params), requestConfig, getDefaultHeaders());
        return this._Order_QCreate.convertResponse(response);
    }
}
exports.OrderCollectionService = OrderCollectionService;
class OrderItemService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItem, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
    BundleComponents(id) {
        const fieldName = "BundleComponents";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemBundleComponentCollectionService(client, path, fieldName, options)
            : new OrderItemBundleComponentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemBundleComponentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    FulfillmentItems(id) {
        const fieldName = "FulfillmentItems";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentItemCollectionService(client, path, fieldName, options)
            : new FulfillmentItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Promotions(id) {
        const fieldName = "Promotions";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new PromotionCollectionService(client, path, fieldName, options)
            : new PromotionService(client, path, new QChannelAdvisorRestApiV1Models_1.QPromotionId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Adjustments(id) {
        const fieldName = "Adjustments";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemAdjustmentCollectionService(client, path, fieldName, options)
            : new OrderItemAdjustmentService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemAdjustmentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    OrderItemAttributes(id) {
        const fieldName = "OrderItemAttributes";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderItemAttributeValueCollectionService(client, path, fieldName, options)
            : new OrderItemAttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderItemAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    async Adjust(params, requestConfig) {
        if (!this._OrderItem_QAdjust) {
            this._OrderItem_QAdjust = new QChannelAdvisorRestApiV1Models_1.OrderItem_QAdjust();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItem_QAdjust.buildUrl());
        return client.post(url, this._OrderItem_QAdjust.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
}
exports.OrderItemService = OrderItemService;
class OrderItemCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItem, new QChannelAdvisorRestApiV1Models_1.QOrderItemId(name), options);
    }
}
exports.OrderItemCollectionService = OrderItemCollectionService;
class FulfillmentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qFulfillment, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
    Items(id) {
        const fieldName = "Items";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentItemCollectionService(client, path, fieldName, options)
            : new FulfillmentItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    async Move(params, requestConfig) {
        if (!this._Fulfillment_QMove) {
            this._Fulfillment_QMove = new QChannelAdvisorRestApiV1Models_1.Fulfillment_QMove();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Fulfillment_QMove.buildUrl());
        return client.post(url, this._Fulfillment_QMove.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async Confirm(requestConfig) {
        if (!this._Fulfillment_QConfirm) {
            this._Fulfillment_QConfirm = new QChannelAdvisorRestApiV1Models_1.Fulfillment_QConfirm();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Fulfillment_QConfirm.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async Deny(requestConfig) {
        if (!this._Fulfillment_QDeny) {
            this._Fulfillment_QDeny = new QChannelAdvisorRestApiV1Models_1.Fulfillment_QDeny();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Fulfillment_QDeny.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
}
exports.FulfillmentService = FulfillmentService;
class FulfillmentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qFulfillment, new QChannelAdvisorRestApiV1Models_1.QFulfillmentId(name), options);
    }
}
exports.FulfillmentCollectionService = FulfillmentCollectionService;
class FulfillmentItemService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qFulfillmentItem, options);
    }
    Fulfillment() {
        if (!this._Fulfillment) {
            const { client, path, options } = this.__base;
            this._Fulfillment = new FulfillmentService(client, path, "Fulfillment", options);
        }
        return this._Fulfillment;
    }
    OrderItem() {
        if (!this._OrderItem) {
            const { client, path, options } = this.__base;
            this._OrderItem = new OrderItemService(client, path, "OrderItem", options);
        }
        return this._OrderItem;
    }
    BundleComponent() {
        if (!this._BundleComponent) {
            const { client, path, options } = this.__base;
            this._BundleComponent = new OrderItemBundleComponentService(client, path, "BundleComponent", options);
        }
        return this._BundleComponent;
    }
    async Move(params, requestConfig) {
        if (!this._FulfillmentItem_QMove) {
            this._FulfillmentItem_QMove = new QChannelAdvisorRestApiV1Models_1.FulfillmentItem_QMove();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._FulfillmentItem_QMove.buildUrl());
        return client.post(url, this._FulfillmentItem_QMove.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
}
exports.FulfillmentItemService = FulfillmentItemService;
class FulfillmentItemCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qFulfillmentItem, new QChannelAdvisorRestApiV1Models_1.QFulfillmentItemId(name), options);
    }
}
exports.FulfillmentItemCollectionService = FulfillmentItemCollectionService;
class DistributionCenterService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qDistributionCenter, options);
    }
    OperatingHours(id) {
        const fieldName = "OperatingHours";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OperatingHoursCollectionService(client, path, fieldName, options)
            : new OperatingHoursService(client, path, new QChannelAdvisorRestApiV1Models_1.QOperatingHoursId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
exports.DistributionCenterService = DistributionCenterService;
class DistributionCenterCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qDistributionCenter, new QChannelAdvisorRestApiV1Models_1.QDistributionCenterId(name), options);
    }
}
exports.DistributionCenterCollectionService = DistributionCenterCollectionService;
class OperatingHoursService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOperatingHours, options);
    }
}
exports.OperatingHoursService = OperatingHoursService;
class OperatingHoursCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOperatingHours, new QChannelAdvisorRestApiV1Models_1.QOperatingHoursId(name), options);
    }
}
exports.OperatingHoursCollectionService = OperatingHoursCollectionService;
class OrderAdjustmentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderAdjustment, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
    async ApproveBuyerRequest(requestConfig) {
        if (!this._OrderAdjustment_QApproveBuyerRequest) {
            this._OrderAdjustment_QApproveBuyerRequest = new QChannelAdvisorRestApiV1Models_1.OrderAdjustment_QApproveBuyerRequest();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderAdjustment_QApproveBuyerRequest.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async RejectBuyerRequest(requestConfig) {
        if (!this._OrderAdjustment_QRejectBuyerRequest) {
            this._OrderAdjustment_QRejectBuyerRequest = new QChannelAdvisorRestApiV1Models_1.OrderAdjustment_QRejectBuyerRequest();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderAdjustment_QRejectBuyerRequest.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async ApproveReturn(requestConfig) {
        if (!this._OrderAdjustment_QApproveReturn) {
            this._OrderAdjustment_QApproveReturn = new QChannelAdvisorRestApiV1Models_1.OrderAdjustment_QApproveReturn();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderAdjustment_QApproveReturn.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async RejectReturn(requestConfig) {
        if (!this._OrderAdjustment_QRejectReturn) {
            this._OrderAdjustment_QRejectReturn = new QChannelAdvisorRestApiV1Models_1.OrderAdjustment_QRejectReturn();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderAdjustment_QRejectReturn.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async ReturnShippingLabel(requestConfig) {
        if (!this._OrderAdjustment_QReturnShippingLabel) {
            this._OrderAdjustment_QReturnShippingLabel = new QChannelAdvisorRestApiV1Models_1.OrderAdjustment_QReturnShippingLabel();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderAdjustment_QReturnShippingLabel.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
}
exports.OrderAdjustmentService = OrderAdjustmentService;
class OrderAdjustmentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderAdjustment, new QChannelAdvisorRestApiV1Models_1.QOrderAdjustmentId(name), options);
    }
}
exports.OrderAdjustmentCollectionService = OrderAdjustmentCollectionService;
class OrderItemAdjustmentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemAdjustment, options);
    }
    OrderItem() {
        if (!this._OrderItem) {
            const { client, path, options } = this.__base;
            this._OrderItem = new OrderItemService(client, path, "OrderItem", options);
        }
        return this._OrderItem;
    }
    async ApproveBuyerRequest(requestConfig) {
        if (!this._OrderItemAdjustment_QApproveBuyerRequest) {
            this._OrderItemAdjustment_QApproveBuyerRequest = new QChannelAdvisorRestApiV1Models_1.OrderItemAdjustment_QApproveBuyerRequest();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItemAdjustment_QApproveBuyerRequest.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async RejectBuyerRequest(requestConfig) {
        if (!this._OrderItemAdjustment_QRejectBuyerRequest) {
            this._OrderItemAdjustment_QRejectBuyerRequest = new QChannelAdvisorRestApiV1Models_1.OrderItemAdjustment_QRejectBuyerRequest();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItemAdjustment_QRejectBuyerRequest.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async ApproveReturn(params, requestConfig) {
        if (!this._OrderItemAdjustment_QApproveReturn) {
            this._OrderItemAdjustment_QApproveReturn = new QChannelAdvisorRestApiV1Models_1.OrderItemAdjustment_QApproveReturn();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItemAdjustment_QApproveReturn.buildUrl());
        return client.post(url, this._OrderItemAdjustment_QApproveReturn.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async RejectReturn(params, requestConfig) {
        if (!this._OrderItemAdjustment_QRejectReturn) {
            this._OrderItemAdjustment_QRejectReturn = new QChannelAdvisorRestApiV1Models_1.OrderItemAdjustment_QRejectReturn();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItemAdjustment_QRejectReturn.buildUrl());
        return client.post(url, this._OrderItemAdjustment_QRejectReturn.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async ReturnShippingLabel(requestConfig) {
        if (!this._OrderItemAdjustment_QReturnShippingLabel) {
            this._OrderItemAdjustment_QReturnShippingLabel = new QChannelAdvisorRestApiV1Models_1.OrderItemAdjustment_QReturnShippingLabel();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderItemAdjustment_QReturnShippingLabel.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
}
exports.OrderItemAdjustmentService = OrderItemAdjustmentService;
class OrderItemAdjustmentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemAdjustment, new QChannelAdvisorRestApiV1Models_1.QOrderItemAdjustmentId(name), options);
    }
}
exports.OrderItemAdjustmentCollectionService = OrderItemAdjustmentCollectionService;
class OrderItemBundleComponentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemBundleComponent, options);
    }
    OrderItem() {
        if (!this._OrderItem) {
            const { client, path, options } = this.__base;
            this._OrderItem = new OrderItemService(client, path, "OrderItem", options);
        }
        return this._OrderItem;
    }
    FulfillmentItems(id) {
        const fieldName = "FulfillmentItems";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new FulfillmentItemCollectionService(client, path, fieldName, options)
            : new FulfillmentItemService(client, path, new QChannelAdvisorRestApiV1Models_1.QFulfillmentItemId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
exports.OrderItemBundleComponentService = OrderItemBundleComponentService;
class OrderItemBundleComponentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemBundleComponent, new QChannelAdvisorRestApiV1Models_1.QOrderItemBundleComponentId(name), options);
    }
}
exports.OrderItemBundleComponentCollectionService = OrderItemBundleComponentCollectionService;
class PromotionService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qPromotion, options);
    }
    OrderItem() {
        if (!this._OrderItem) {
            const { client, path, options } = this.__base;
            this._OrderItem = new OrderItemService(client, path, "OrderItem", options);
        }
        return this._OrderItem;
    }
}
exports.PromotionService = PromotionService;
class PromotionCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qPromotion, new QChannelAdvisorRestApiV1Models_1.QPromotionId(name), options);
    }
}
exports.PromotionCollectionService = PromotionCollectionService;
class CustomFieldService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qCustomField, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
}
exports.CustomFieldService = CustomFieldService;
class CustomFieldCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qCustomField, new QChannelAdvisorRestApiV1Models_1.QCustomFieldId(name), options);
    }
}
exports.CustomFieldCollectionService = CustomFieldCollectionService;
class ProfileService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProfile, options);
    }
    SiteAccounts(id) {
        const fieldName = "SiteAccounts";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new SiteAccountCollectionService(client, path, fieldName, options)
            : new SiteAccountService(client, path, new QChannelAdvisorRestApiV1Models_1.QSiteAccountId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    ShippingLabelPartnerAccounts(id) {
        const fieldName = "ShippingLabelPartnerAccounts";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ShippingLabelPartnerAccountCollectionService(client, path, fieldName, options)
            : new ShippingLabelPartnerAccountService(client, path, new QChannelAdvisorRestApiV1Models_1.QShippingLabelPartnerAccountId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
}
exports.ProfileService = ProfileService;
class ProfileCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProfile, new QChannelAdvisorRestApiV1Models_1.QProfileId(name), options);
    }
}
exports.ProfileCollectionService = ProfileCollectionService;
class ProductService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProduct, options);
    }
    Attributes(id) {
        const fieldName = "Attributes";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AttributeValueCollectionService(client, path, fieldName, options)
            : new AttributeValueService(client, path, new QChannelAdvisorRestApiV1Models_1.QAttributeValueId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    DCQuantities(id) {
        const fieldName = "DCQuantities";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new DCQuantityCollectionService(client, path, fieldName, options)
            : new DCQuantityService(client, path, new QChannelAdvisorRestApiV1Models_1.QDCQuantityId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Images(id) {
        const fieldName = "Images";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ImageCollectionService(client, path, fieldName, options)
            : new ImageService(client, path, new QChannelAdvisorRestApiV1Models_1.QImageId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Labels(id) {
        const fieldName = "Labels";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProductLabelCollectionService(client, path, fieldName, options)
            : new ProductLabelService(client, path, new QChannelAdvisorRestApiV1Models_1.QProductLabelId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    BundleComponents(id) {
        const fieldName = "BundleComponents";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ProductBundleComponentCollectionService(client, path, fieldName, options)
            : new ProductBundleComponentService(client, path, new QChannelAdvisorRestApiV1Models_1.QProductBundleComponentId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    Children(id) {
        const fieldName = "Children";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new ChildRelationshipCollectionService(client, path, fieldName, options)
            : new ChildRelationshipService(client, path, new QChannelAdvisorRestApiV1Models_1.QChildRelationshipId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    AliasRelationships(id) {
        const fieldName = "AliasRelationships";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new AliasRelationshipCollectionService(client, path, fieldName, options)
            : new AliasRelationshipService(client, path, new QChannelAdvisorRestApiV1Models_1.QAliasRelationshipId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    async UpdateQuantity(params, requestConfig) {
        if (!this._Product_QUpdateQuantity) {
            this._Product_QUpdateQuantity = new QChannelAdvisorRestApiV1Models_1.Product_QUpdateQuantity();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Product_QUpdateQuantity.buildUrl());
        return client.post(url, this._Product_QUpdateQuantity.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async RemoveChildren(params, requestConfig) {
        if (!this._Product_QRemoveChildren) {
            this._Product_QRemoveChildren = new QChannelAdvisorRestApiV1Models_1.Product_QRemoveChildren();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Product_QRemoveChildren.buildUrl());
        return client.post(url, this._Product_QRemoveChildren.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
    async UpdateAttributes(params, requestConfig) {
        if (!this._Product_QUpdateAttributes) {
            this._Product_QUpdateAttributes = new QChannelAdvisorRestApiV1Models_1.Product_QUpdateAttributes();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._Product_QUpdateAttributes.buildUrl());
        return client.post(url, this._Product_QUpdateAttributes.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
}
exports.ProductService = ProductService;
class ProductCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProduct, new QChannelAdvisorRestApiV1Models_1.QProductId(name), options);
    }
}
exports.ProductCollectionService = ProductCollectionService;
class AliasRelationshipService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAliasRelationship, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.AliasRelationshipService = AliasRelationshipService;
class AliasRelationshipCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAliasRelationship, new QChannelAdvisorRestApiV1Models_1.QAliasRelationshipId(name), options);
    }
}
exports.AliasRelationshipCollectionService = AliasRelationshipCollectionService;
class ImageService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qImage, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.ImageService = ImageService;
class ImageCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qImage, new QChannelAdvisorRestApiV1Models_1.QImageId(name), options);
    }
}
exports.ImageCollectionService = ImageCollectionService;
class AttributeValueService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAttributeValue, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.AttributeValueService = AttributeValueService;
class AttributeValueCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAttributeValue, new QChannelAdvisorRestApiV1Models_1.QAttributeValueId(name), options);
    }
}
exports.AttributeValueCollectionService = AttributeValueCollectionService;
class DCQuantityService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qDCQuantity, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.DCQuantityService = DCQuantityService;
class DCQuantityCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qDCQuantity, new QChannelAdvisorRestApiV1Models_1.QDCQuantityId(name), options);
    }
}
exports.DCQuantityCollectionService = DCQuantityCollectionService;
class ProductLabelService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProductLabel, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.ProductLabelService = ProductLabelService;
class ProductLabelCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProductLabel, new QChannelAdvisorRestApiV1Models_1.QProductLabelId(name), options);
    }
}
exports.ProductLabelCollectionService = ProductLabelCollectionService;
class ProductBundleComponentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProductBundleComponent, options);
    }
    Product() {
        if (!this._Product) {
            const { client, path, options } = this.__base;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    }
}
exports.ProductBundleComponentService = ProductBundleComponentService;
class ProductBundleComponentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qProductBundleComponent, new QChannelAdvisorRestApiV1Models_1.QProductBundleComponentId(name), options);
    }
}
exports.ProductBundleComponentCollectionService = ProductBundleComponentCollectionService;
class ChildRelationshipService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qChildRelationship, options);
    }
    ChildProduct() {
        if (!this._ChildProduct) {
            const { client, path, options } = this.__base;
            this._ChildProduct = new ProductService(client, path, "ChildProduct", options);
        }
        return this._ChildProduct;
    }
}
exports.ChildRelationshipService = ChildRelationshipService;
class ChildRelationshipCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qChildRelationship, new QChannelAdvisorRestApiV1Models_1.QChildRelationshipId(name), options);
    }
}
exports.ChildRelationshipCollectionService = ChildRelationshipCollectionService;
class PackageService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qPackage, options);
    }
}
exports.PackageService = PackageService;
class PackageCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qPackage, new QChannelAdvisorRestApiV1Models_1.QPackageId(name), options);
    }
}
exports.PackageCollectionService = PackageCollectionService;
class ChannelDocumentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qChannelDocument, options);
    }
    async Retrieved(requestConfig) {
        if (!this._ChannelDocument_QRetrieved) {
            this._ChannelDocument_QRetrieved = new QChannelAdvisorRestApiV1Models_1.ChannelDocument_QRetrieved();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._ChannelDocument_QRetrieved.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    asAmazonVATInvoiceDocumentService() {
        const { client, path, options } = this.__base;
        return new AmazonVATInvoiceDocumentService(client, path, "ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.ChannelDocumentService = ChannelDocumentService;
class ChannelDocumentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qChannelDocument, new QChannelAdvisorRestApiV1Models_1.QChannelDocumentId(name), options);
    }
    async NotSupplied(requestConfig) {
        if (!this._ChannelDocument_QNotSupplied) {
            this._ChannelDocument_QNotSupplied = new QChannelAdvisorRestApiV1Models_1.ChannelDocument_QNotSupplied();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._ChannelDocument_QNotSupplied.buildUrl(isUrlNotEncoded()));
        const response = await client.get(url, requestConfig, getDefaultHeaders());
        return this._ChannelDocument_QNotSupplied.convertResponse(response);
    }
    asAmazonVATInvoiceDocumentCollectionService() {
        const { client, path, options } = this.__base;
        return new AmazonVATInvoiceDocumentCollectionService(client, path, "ChannelAdvisor.RestApi.V1.Models.AmazonVATInvoiceDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.ChannelDocumentCollectionService = ChannelDocumentCollectionService;
class NotSuppliedChannelDocumentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qNotSuppliedChannelDocument, options);
    }
    asNotSuppliedAmazonVATInvoiceDocumentService() {
        const { client, path, options } = this.__base;
        return new NotSuppliedAmazonVATInvoiceDocumentService(client, path, "ChannelAdvisor.RestApi.V1.Models.NotSuppliedAmazonVATInvoiceDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.NotSuppliedChannelDocumentService = NotSuppliedChannelDocumentService;
class NotSuppliedChannelDocumentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qNotSuppliedChannelDocument, new QChannelAdvisorRestApiV1Models_1.QNotSuppliedChannelDocumentId(name), options);
    }
    asNotSuppliedAmazonVATInvoiceDocumentCollectionService() {
        const { client, path, options } = this.__base;
        return new NotSuppliedAmazonVATInvoiceDocumentCollectionService(client, path, "ChannelAdvisor.RestApi.V1.Models.NotSuppliedAmazonVATInvoiceDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.NotSuppliedChannelDocumentCollectionService = NotSuppliedChannelDocumentCollectionService;
class SiteService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qSite, options);
    }
    CancellationConfiguration() {
        if (!this._CancellationConfiguration) {
            const { client, path, options } = this.__base;
            this._CancellationConfiguration = new CancellationConfigurationService(client, path, "CancellationConfiguration", options);
        }
        return this._CancellationConfiguration;
    }
    RefundConfiguration() {
        if (!this._RefundConfiguration) {
            const { client, path, options } = this.__base;
            this._RefundConfiguration = new RefundConfigurationService(client, path, "RefundConfiguration", options);
        }
        return this._RefundConfiguration;
    }
    AdjustmentReasons() {
        if (!this._AdjustmentReasons) {
            const { client, path, options } = this.__base;
            this._AdjustmentReasons = new odata_service_1.CollectionServiceV4(client, path, "AdjustmentReasons", QChannelAdvisorRestApiV1Models_1.qCodeDescription, options);
        }
        return this._AdjustmentReasons;
    }
}
exports.SiteService = SiteService;
class SiteCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qSite, new QChannelAdvisorRestApiV1Models_1.QSiteId(name), options);
    }
}
exports.SiteCollectionService = SiteCollectionService;
class OrderDocumentFlyweightService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocumentFlyweight, options);
    }
    asOrderDocumentService() {
        const { client, path, options } = this.__base;
        return new OrderDocumentService(client, path, "ChannelAdvisor.RestApi.V1.Models.OrderDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.OrderDocumentFlyweightService = OrderDocumentFlyweightService;
class OrderDocumentFlyweightCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocumentFlyweight, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentFlyweightId(name), options);
    }
    asOrderDocumentCollectionService() {
        const { client, path, options } = this.__base;
        return new OrderDocumentCollectionService(client, path, "ChannelAdvisor.RestApi.V1.Models.OrderDocument", Object.assign(Object.assign({}, options), { subtype: true }));
    }
}
exports.OrderDocumentFlyweightCollectionService = OrderDocumentFlyweightCollectionService;
class OrderDocumentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocument, options);
    }
    Metadata(id) {
        const fieldName = "Metadata";
        const { client, path, options, isUrlNotEncoded } = this.__base;
        return typeof id === "undefined" || id === null
            ? new OrderDocumentMetadataCollectionService(client, path, fieldName, options)
            : new OrderDocumentMetadataService(client, path, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentMetadataId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    }
    async Retrieved(requestConfig) {
        if (!this._OrderDocument_QRetrieved) {
            this._OrderDocument_QRetrieved = new QChannelAdvisorRestApiV1Models_1.OrderDocument_QRetrieved();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderDocument_QRetrieved.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
}
exports.OrderDocumentService = OrderDocumentService;
class OrderDocumentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocument, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentFlyweightId(name), options);
    }
    async Missing(requestConfig) {
        if (!this._OrderDocument_QMissing) {
            this._OrderDocument_QMissing = new QChannelAdvisorRestApiV1Models_1.OrderDocument_QMissing();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._OrderDocument_QMissing.buildUrl(isUrlNotEncoded()));
        const response = await client.get(url, requestConfig, getDefaultHeaders());
        return this._OrderDocument_QMissing.convertResponse(response);
    }
}
exports.OrderDocumentCollectionService = OrderDocumentCollectionService;
class OrderDocumentMetadataService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocumentMetadata, options);
    }
}
exports.OrderDocumentMetadataService = OrderDocumentMetadataService;
class OrderDocumentMetadataCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderDocumentMetadata, new QChannelAdvisorRestApiV1Models_1.QOrderDocumentMetadataId(name), options);
    }
}
exports.OrderDocumentMetadataCollectionService = OrderDocumentMetadataCollectionService;
class OrderAttributeValueService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderAttributeValue, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
}
exports.OrderAttributeValueService = OrderAttributeValueService;
class OrderAttributeValueCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderAttributeValue, new QChannelAdvisorRestApiV1Models_1.QOrderAttributeValueId(name), options);
    }
}
exports.OrderAttributeValueCollectionService = OrderAttributeValueCollectionService;
class OrderItemAttributeValueService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemAttributeValue, options);
    }
    OrderItem() {
        if (!this._OrderItem) {
            const { client, path, options } = this.__base;
            this._OrderItem = new OrderItemService(client, path, "OrderItem", options);
        }
        return this._OrderItem;
    }
}
exports.OrderItemAttributeValueService = OrderItemAttributeValueService;
class OrderItemAttributeValueCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qOrderItemAttributeValue, new QChannelAdvisorRestApiV1Models_1.QOrderItemAttributeValueId(name), options);
    }
}
exports.OrderItemAttributeValueCollectionService = OrderItemAttributeValueCollectionService;
class ExportStatusService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qExportStatus, options);
    }
    Order() {
        if (!this._Order) {
            const { client, path, options } = this.__base;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    }
}
exports.ExportStatusService = ExportStatusService;
class ExportStatusCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qExportStatus, new QChannelAdvisorRestApiV1Models_1.QExportStatusId(name), options);
    }
}
exports.ExportStatusCollectionService = ExportStatusCollectionService;
class AmazonVATInvoiceDocumentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAmazonVATInvoiceDocument, options);
    }
}
exports.AmazonVATInvoiceDocumentService = AmazonVATInvoiceDocumentService;
class AmazonVATInvoiceDocumentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qAmazonVATInvoiceDocument, new QChannelAdvisorRestApiV1Models_1.QChannelDocumentId(name), options);
    }
}
exports.AmazonVATInvoiceDocumentCollectionService = AmazonVATInvoiceDocumentCollectionService;
class SiteAccountService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qSiteAccount, options);
    }
    Profile() {
        if (!this._Profile) {
            const { client, path, options } = this.__base;
            this._Profile = new ProfileService(client, path, "Profile", options);
        }
        return this._Profile;
    }
}
exports.SiteAccountService = SiteAccountService;
class SiteAccountCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qSiteAccount, new QChannelAdvisorRestApiV1Models_1.QSiteAccountId(name), options);
    }
}
exports.SiteAccountCollectionService = SiteAccountCollectionService;
class ShippingLabelPartnerAccountService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qShippingLabelPartnerAccount, options);
    }
    Profile() {
        if (!this._Profile) {
            const { client, path, options } = this.__base;
            this._Profile = new ProfileService(client, path, "Profile", options);
        }
        return this._Profile;
    }
}
exports.ShippingLabelPartnerAccountService = ShippingLabelPartnerAccountService;
class ShippingLabelPartnerAccountCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qShippingLabelPartnerAccount, new QChannelAdvisorRestApiV1Models_1.QShippingLabelPartnerAccountId(name), options);
    }
}
exports.ShippingLabelPartnerAccountCollectionService = ShippingLabelPartnerAccountCollectionService;
class NotSuppliedAmazonVATInvoiceDocumentService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qNotSuppliedAmazonVATInvoiceDocument, options);
    }
}
exports.NotSuppliedAmazonVATInvoiceDocumentService = NotSuppliedAmazonVATInvoiceDocumentService;
class NotSuppliedAmazonVATInvoiceDocumentCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qNotSuppliedAmazonVATInvoiceDocument, new QChannelAdvisorRestApiV1Models_1.QNotSuppliedChannelDocumentId(name), options);
    }
}
exports.NotSuppliedAmazonVATInvoiceDocumentCollectionService = NotSuppliedAmazonVATInvoiceDocumentCollectionService;
class WebhookService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qWebhook, options);
    }
    EventTypes() {
        if (!this._EventTypes) {
            const { client, path, options } = this.__base;
            this._EventTypes = new odata_service_1.CollectionServiceV4(client, path, "EventTypes", new odata_query_objects_1.QEnumCollection(ChannelAdvisorRestApiV1ModelsModel_1.WebhookEventType), options);
        }
        return this._EventTypes;
    }
    async NewSigningSecret(requestConfig) {
        if (!this._QNewSigningSecret) {
            this._QNewSigningSecret = new QChannelAdvisorRestApiV1Models_1.QNewSigningSecret();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._QNewSigningSecret.buildUrl());
        return client.post(url, {}, requestConfig, getDefaultHeaders());
    }
    async RetryFailedEvents(params, requestConfig) {
        if (!this._QRetryFailedEvents) {
            this._QRetryFailedEvents = new QChannelAdvisorRestApiV1Models_1.QRetryFailedEvents();
        }
        const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } = this.__base;
        const url = addFullPath(this._QRetryFailedEvents.buildUrl());
        return client.post(url, this._QRetryFailedEvents.convertUserParams(params), requestConfig, getDefaultHeaders());
    }
}
exports.WebhookService = WebhookService;
class WebhookCollectionService extends odata_service_1.EntitySetServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qWebhook, new QChannelAdvisorRestApiV1Models_1.QWebhookId(name), options);
    }
}
exports.WebhookCollectionService = WebhookCollectionService;
class CancellationConfigurationService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qCancellationConfiguration, options);
    }
}
exports.CancellationConfigurationService = CancellationConfigurationService;
class RefundConfigurationService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qRefundConfiguration, options);
    }
}
exports.RefundConfigurationService = RefundConfigurationService;
class CodeDescriptionService extends odata_service_1.EntityTypeServiceV4 {
    constructor(client, basePath, name, options) {
        super(client, basePath, name, QChannelAdvisorRestApiV1Models_1.qCodeDescription, options);
    }
}
exports.CodeDescriptionService = CodeDescriptionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbEFkdmlzb3JSZXN0QXBpVjFNb2RlbHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhbm5lbEFkdmlzb3JSZXN0QXBpVjFNb2RlbHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSx1RUFBZ0U7QUFFaEUsMkRBQWtKO0FBR2xKLHFGQUE2ckU7QUFDN3JFLDZGQUF3RTtBQUV4RSxNQUFhLG9DQUFnRixTQUFRLDRCQUF3QjtJQUdsSCxNQUFNLENBQUMsRUFBd0I7UUFDbEMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9ELE9BQU8sT0FBTyxFQUFFLEtBQUssV0FBVyxJQUFJLEVBQUUsS0FBSyxJQUFJO1lBQy9DLENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztZQUM5RCxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLHlDQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFJTSxVQUFVLENBQUMsRUFBNEI7UUFDMUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQy9CLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9ELE9BQU8sT0FBTyxFQUFFLEtBQUssV0FBVyxJQUFJLEVBQUUsS0FBSyxJQUFJO1lBQy9DLENBQUMsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8s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