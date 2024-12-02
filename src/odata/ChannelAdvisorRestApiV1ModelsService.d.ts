import type { ODataCollectionResponseV4, ODataModelResponseV4 } from "@odata2ts/odata-core";
import type { EnumCollection } from "@odata2ts/odata-query-objects";
import { QEnumCollection } from "@odata2ts/odata-query-objects";
import type { ODataHttpClient, ODataHttpClientConfig, HttpResponseModel } from "@odata2ts/http-client-api";
import { ODataService, EntityTypeServiceV4, ODataServiceOptionsInternal, EntitySetServiceV4, CollectionServiceV4 } from "@odata2ts/odata-service";
import type { OrderId, OrderItemId, FulfillmentId, FulfillmentItemId, DistributionCenterId, OperatingHoursId, OrderAdjustmentId, OrderItemAdjustmentId, OrderItemBundleComponentId, PromotionId, CustomFieldId, ProfileId, ProductId, AliasRelationshipId, ImageId, AttributeValueId, DCQuantityId, ProductLabelId, ProductBundleComponentId, ChildRelationshipId, PackageId, ChannelDocumentId, NotSuppliedChannelDocumentId, WebhookId, SiteId, OrderDocumentFlyweightId, OrderDocumentMetadataId, OrderAttributeValueId, OrderItemAttributeValueId, Order, EditableOrder, ExportStatusId, OrderDocumentFlyweight, Order_ShipParams, Order_ShippingRatesParams, Order_PurchaseLabelParams, Order_PickupLabelParams, Order_AdjustParams, Order_CreateParams, OrderItem, EditableOrderItem, OrderItem_AdjustParams, Fulfillment, EditableFulfillment, Fulfillment_MoveParams, FulfillmentItem, EditableFulfillmentItem, FulfillmentItem_MoveParams, DistributionCenter, EditableDistributionCenter, OperatingHours, EditableOperatingHours, OrderAdjustment, EditableOrderAdjustment, OrderItemAdjustment, EditableOrderItemAdjustment, OrderItemAdjustment_ApproveReturnParams, OrderItemAdjustment_RejectReturnParams, OrderItemBundleComponent, EditableOrderItemBundleComponent, Promotion, EditablePromotion, CustomField, EditableCustomField, Profile, EditableProfile, SiteAccountId, ShippingLabelPartnerAccountId, Product, EditableProduct, Product_UpdateQuantityParams, Product_RemoveChildrenParams, Product_UpdateAttributesParams, AliasRelationship, EditableAliasRelationship, Image, EditableImage, AttributeValue, EditableAttributeValue, DCQuantity, EditableDCQuantity, ProductLabel, EditableProductLabel, ProductBundleComponent, EditableProductBundleComponent, ChildRelationship, EditableChildRelationship, Package, EditablePackage, ChannelDocument, EditableChannelDocument, NotSuppliedChannelDocument, EditableNotSuppliedChannelDocument, Site, EditableSite, CodeDescription, EditableCodeDescription, EditableOrderDocumentFlyweight, OrderDocument, EditableOrderDocument, OrderDocumentMetadata, EditableOrderDocumentMetadata, OrderAttributeValue, EditableOrderAttributeValue, OrderItemAttributeValue, EditableOrderItemAttributeValue, ExportStatus, EditableExportStatus, AmazonVATInvoiceDocument, EditableAmazonVATInvoiceDocument, SiteAccount, EditableSiteAccount, ShippingLabelPartnerAccount, EditableShippingLabelPartnerAccount, NotSuppliedAmazonVATInvoiceDocument, EditableNotSuppliedAmazonVATInvoiceDocument, Webhook, EditableWebhook, RetryFailedEventsParams, CancellationConfiguration, EditableCancellationConfiguration, RefundConfiguration, EditableRefundConfiguration } from "./ChannelAdvisorRestApiV1ModelsModel";
import type { QOrder, QOrderItem, QFulfillment, QFulfillmentItem, QDistributionCenter, QOperatingHours, QOrderAdjustment, QOrderItemAdjustment, QOrderItemBundleComponent, QPromotion, QCustomField, QProfile, QProduct, QAliasRelationship, QImage, QAttributeValue, QDCQuantity, QProductLabel, QProductBundleComponent, QChildRelationship, QPackage, QChannelDocument, QNotSuppliedChannelDocument, QSite, QCodeDescription, QOrderDocumentFlyweight, QOrderDocument, QOrderDocumentMetadata, QOrderAttributeValue, QOrderItemAttributeValue, QExportStatus, QAmazonVATInvoiceDocument, QSiteAccount, QShippingLabelPartnerAccount, QNotSuppliedAmazonVATInvoiceDocument, QWebhook, QCancellationConfiguration, QRefundConfiguration } from "./QChannelAdvisorRestApiV1Models";
import { WebhookEventType } from "./ChannelAdvisorRestApiV1ModelsModel";
export declare class ChannelAdvisorRestApiV1ModelsService<in out ClientType extends ODataHttpClient> extends ODataService<ClientType> {
    Orders(): OrderCollectionService<ClientType>;
    Orders(id: OrderId): OrderService<ClientType>;
    OrderItems(): OrderItemCollectionService<ClientType>;
    OrderItems(id: OrderItemId): OrderItemService<ClientType>;
    Fulfillments(): FulfillmentCollectionService<ClientType>;
    Fulfillments(id: FulfillmentId): FulfillmentService<ClientType>;
    FulfillmentItems(): FulfillmentItemCollectionService<ClientType>;
    FulfillmentItems(id: FulfillmentItemId): FulfillmentItemService<ClientType>;
    DistributionCenters(): DistributionCenterCollectionService<ClientType>;
    DistributionCenters(id: DistributionCenterId): DistributionCenterService<ClientType>;
    OperatingHours(): OperatingHoursCollectionService<ClientType>;
    OperatingHours(id: OperatingHoursId): OperatingHoursService<ClientType>;
    OrderAdjustments(): OrderAdjustmentCollectionService<ClientType>;
    OrderAdjustments(id: OrderAdjustmentId): OrderAdjustmentService<ClientType>;
    OrderItemAdjustments(): OrderItemAdjustmentCollectionService<ClientType>;
    OrderItemAdjustments(id: OrderItemAdjustmentId): OrderItemAdjustmentService<ClientType>;
    OrderItemBundleComponents(): OrderItemBundleComponentCollectionService<ClientType>;
    OrderItemBundleComponents(id: OrderItemBundleComponentId): OrderItemBundleComponentService<ClientType>;
    OrderItemPromotions(): PromotionCollectionService<ClientType>;
    OrderItemPromotions(id: PromotionId): PromotionService<ClientType>;
    CustomFields(): CustomFieldCollectionService<ClientType>;
    CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
    Profiles(): ProfileCollectionService<ClientType>;
    Profiles(id: ProfileId): ProfileService<ClientType>;
    Products(): ProductCollectionService<ClientType>;
    Products(id: ProductId): ProductService<ClientType>;
    AliasRelationships(): AliasRelationshipCollectionService<ClientType>;
    AliasRelationships(id: AliasRelationshipId): AliasRelationshipService<ClientType>;
    Images(): ImageCollectionService<ClientType>;
    Images(id: ImageId): ImageService<ClientType>;
    AttributeValues(): AttributeValueCollectionService<ClientType>;
    AttributeValues(id: AttributeValueId): AttributeValueService<ClientType>;
    DCQuantities(): DCQuantityCollectionService<ClientType>;
    DCQuantities(id: DCQuantityId): DCQuantityService<ClientType>;
    ProductLabels(): ProductLabelCollectionService<ClientType>;
    ProductLabels(id: ProductLabelId): ProductLabelService<ClientType>;
    ProductBundleComponents(): ProductBundleComponentCollectionService<ClientType>;
    ProductBundleComponents(id: ProductBundleComponentId): ProductBundleComponentService<ClientType>;
    Children(): ChildRelationshipCollectionService<ClientType>;
    Children(id: ChildRelationshipId): ChildRelationshipService<ClientType>;
    Packages(): PackageCollectionService<ClientType>;
    Packages(id: PackageId): PackageService<ClientType>;
    ChannelDocuments(): ChannelDocumentCollectionService<ClientType>;
    ChannelDocuments(id: ChannelDocumentId): ChannelDocumentService<ClientType>;
    NotSuppliedChannelDocument(): NotSuppliedChannelDocumentCollectionService<ClientType>;
    NotSuppliedChannelDocument(id: NotSuppliedChannelDocumentId): NotSuppliedChannelDocumentService<ClientType>;
    Webhooks(): WebhookCollectionService<ClientType>;
    Webhooks(id: WebhookId): WebhookService<ClientType>;
    Sites(): SiteCollectionService<ClientType>;
    Sites(id: SiteId): SiteService<ClientType>;
    OrderDocuments(): OrderDocumentCollectionService<ClientType>;
    OrderDocuments(id: OrderDocumentFlyweightId): OrderDocumentService<ClientType>;
    OrderDocumentFlyweights(): OrderDocumentFlyweightCollectionService<ClientType>;
    OrderDocumentFlyweights(id: OrderDocumentFlyweightId): OrderDocumentFlyweightService<ClientType>;
    OrderDocumentMetadata(): OrderDocumentMetadataCollectionService<ClientType>;
    OrderDocumentMetadata(id: OrderDocumentMetadataId): OrderDocumentMetadataService<ClientType>;
    OrderAttributeValues(): OrderAttributeValueCollectionService<ClientType>;
    OrderAttributeValues(id: OrderAttributeValueId): OrderAttributeValueService<ClientType>;
    OrderItemAttributeValues(): OrderItemAttributeValueCollectionService<ClientType>;
    OrderItemAttributeValues(id: OrderItemAttributeValueId): OrderItemAttributeValueService<ClientType>;
}
export declare class OrderService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Order, EditableOrder, QOrder> {
    private _Order_QOrderDocuments?;
    private _Order_QShip?;
    private _Order_QShippingRates?;
    private _Order_QPurchaseLabel?;
    private _Order_QPickupLabel?;
    private _Order_QAdjust?;
    private _Order_QExport?;
    private _Order_QConfirm?;
    private _Order_QDeny?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Items(): OrderItemCollectionService<ClientType>;
    Items(id: OrderItemId): OrderItemService<ClientType>;
    Fulfillments(): FulfillmentCollectionService<ClientType>;
    Fulfillments(id: FulfillmentId): FulfillmentService<ClientType>;
    Adjustments(): OrderAdjustmentCollectionService<ClientType>;
    Adjustments(id: OrderAdjustmentId): OrderAdjustmentService<ClientType>;
    CustomFields(): CustomFieldCollectionService<ClientType>;
    CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
    OrderAttributes(): OrderAttributeValueCollectionService<ClientType>;
    OrderAttributes(id: OrderAttributeValueId): OrderAttributeValueService<ClientType>;
    Exports(): ExportStatusCollectionService<ClientType>;
    Exports(id: ExportStatusId): ExportStatusService<ClientType>;
    ChannelDocuments(): ChannelDocumentCollectionService<ClientType>;
    ChannelDocuments(id: ChannelDocumentId): ChannelDocumentService<ClientType>;
    OrderDocuments(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataCollectionResponseV4<OrderDocumentFlyweight>>>;
    Ship(params: Order_ShipParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    ShippingRates(params: Order_ShippingRatesParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    PurchaseLabel(params: Order_PurchaseLabelParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    PickupLabel(params: Order_PickupLabelParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Adjust(params: Order_AdjustParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Export(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Confirm(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Deny(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class OrderCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Order, EditableOrder, QOrder, OrderId> {
    private _Order_QCreate?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Create(params: Order_CreateParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<Order>>>;
}
export declare class OrderItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderItem, EditableOrderItem, QOrderItem> {
    private _Order?;
    private _OrderItem_QAdjust?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
    BundleComponents(): OrderItemBundleComponentCollectionService<ClientType>;
    BundleComponents(id: OrderItemBundleComponentId): OrderItemBundleComponentService<ClientType>;
    FulfillmentItems(): FulfillmentItemCollectionService<ClientType>;
    FulfillmentItems(id: FulfillmentItemId): FulfillmentItemService<ClientType>;
    Promotions(): PromotionCollectionService<ClientType>;
    Promotions(id: PromotionId): PromotionService<ClientType>;
    Adjustments(): OrderItemAdjustmentCollectionService<ClientType>;
    Adjustments(id: OrderItemAdjustmentId): OrderItemAdjustmentService<ClientType>;
    OrderItemAttributes(): OrderItemAttributeValueCollectionService<ClientType>;
    OrderItemAttributes(id: OrderItemAttributeValueId): OrderItemAttributeValueService<ClientType>;
    Adjust(params: OrderItem_AdjustParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class OrderItemCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderItem, EditableOrderItem, QOrderItem, OrderItemId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class FulfillmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Fulfillment, EditableFulfillment, QFulfillment> {
    private _Order?;
    private _Fulfillment_QMove?;
    private _Fulfillment_QConfirm?;
    private _Fulfillment_QDeny?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
    Items(): FulfillmentItemCollectionService<ClientType>;
    Items(id: FulfillmentItemId): FulfillmentItemService<ClientType>;
    Move(params: Fulfillment_MoveParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Confirm(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    Deny(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class FulfillmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Fulfillment, EditableFulfillment, QFulfillment, FulfillmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class FulfillmentItemService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, FulfillmentItem, EditableFulfillmentItem, QFulfillmentItem> {
    private _Fulfillment?;
    private _OrderItem?;
    private _BundleComponent?;
    private _FulfillmentItem_QMove?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Fulfillment(): FulfillmentService<ClientType>;
    OrderItem(): OrderItemService<ClientType>;
    BundleComponent(): OrderItemBundleComponentService<ClientType>;
    Move(params: FulfillmentItem_MoveParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class FulfillmentItemCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, FulfillmentItem, EditableFulfillmentItem, QFulfillmentItem, FulfillmentItemId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DistributionCenterService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DistributionCenter, EditableDistributionCenter, QDistributionCenter> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    OperatingHours(): OperatingHoursCollectionService<ClientType>;
    OperatingHours(id: OperatingHoursId): OperatingHoursService<ClientType>;
}
export declare class DistributionCenterCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DistributionCenter, EditableDistributionCenter, QDistributionCenter, DistributionCenterId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OperatingHoursService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OperatingHours, EditableOperatingHours, QOperatingHours> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OperatingHoursCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OperatingHours, EditableOperatingHours, QOperatingHours, OperatingHoursId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderAdjustmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderAdjustment, EditableOrderAdjustment, QOrderAdjustment> {
    private _Order?;
    private _OrderAdjustment_QApproveBuyerRequest?;
    private _OrderAdjustment_QRejectBuyerRequest?;
    private _OrderAdjustment_QApproveReturn?;
    private _OrderAdjustment_QRejectReturn?;
    private _OrderAdjustment_QReturnShippingLabel?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
    ApproveBuyerRequest(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RejectBuyerRequest(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    ApproveReturn(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RejectReturn(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    ReturnShippingLabel(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class OrderAdjustmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderAdjustment, EditableOrderAdjustment, QOrderAdjustment, OrderAdjustmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderItemAdjustmentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderItemAdjustment, EditableOrderItemAdjustment, QOrderItemAdjustment> {
    private _OrderItem?;
    private _OrderItemAdjustment_QApproveBuyerRequest?;
    private _OrderItemAdjustment_QRejectBuyerRequest?;
    private _OrderItemAdjustment_QApproveReturn?;
    private _OrderItemAdjustment_QRejectReturn?;
    private _OrderItemAdjustment_QReturnShippingLabel?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    OrderItem(): OrderItemService<ClientType>;
    ApproveBuyerRequest(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RejectBuyerRequest(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    ApproveReturn(params: OrderItemAdjustment_ApproveReturnParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RejectReturn(params: OrderItemAdjustment_RejectReturnParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    ReturnShippingLabel(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class OrderItemAdjustmentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderItemAdjustment, EditableOrderItemAdjustment, QOrderItemAdjustment, OrderItemAdjustmentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderItemBundleComponentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderItemBundleComponent, EditableOrderItemBundleComponent, QOrderItemBundleComponent> {
    private _OrderItem?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    OrderItem(): OrderItemService<ClientType>;
    FulfillmentItems(): FulfillmentItemCollectionService<ClientType>;
    FulfillmentItems(id: FulfillmentItemId): FulfillmentItemService<ClientType>;
}
export declare class OrderItemBundleComponentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderItemBundleComponent, EditableOrderItemBundleComponent, QOrderItemBundleComponent, OrderItemBundleComponentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class PromotionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Promotion, EditablePromotion, QPromotion> {
    private _OrderItem?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    OrderItem(): OrderItemService<ClientType>;
}
export declare class PromotionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Promotion, EditablePromotion, QPromotion, PromotionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class CustomFieldService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, CustomField, EditableCustomField, QCustomField> {
    private _Order?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
}
export declare class CustomFieldCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, CustomField, EditableCustomField, QCustomField, CustomFieldId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ProfileService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Profile, EditableProfile, QProfile> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    SiteAccounts(): SiteAccountCollectionService<ClientType>;
    SiteAccounts(id: SiteAccountId): SiteAccountService<ClientType>;
    ShippingLabelPartnerAccounts(): ShippingLabelPartnerAccountCollectionService<ClientType>;
    ShippingLabelPartnerAccounts(id: ShippingLabelPartnerAccountId): ShippingLabelPartnerAccountService<ClientType>;
}
export declare class ProfileCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Profile, EditableProfile, QProfile, ProfileId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ProductService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Product, EditableProduct, QProduct> {
    private _Product_QUpdateQuantity?;
    private _Product_QRemoveChildren?;
    private _Product_QUpdateAttributes?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Attributes(): AttributeValueCollectionService<ClientType>;
    Attributes(id: AttributeValueId): AttributeValueService<ClientType>;
    DCQuantities(): DCQuantityCollectionService<ClientType>;
    DCQuantities(id: DCQuantityId): DCQuantityService<ClientType>;
    Images(): ImageCollectionService<ClientType>;
    Images(id: ImageId): ImageService<ClientType>;
    Labels(): ProductLabelCollectionService<ClientType>;
    Labels(id: ProductLabelId): ProductLabelService<ClientType>;
    BundleComponents(): ProductBundleComponentCollectionService<ClientType>;
    BundleComponents(id: ProductBundleComponentId): ProductBundleComponentService<ClientType>;
    Children(): ChildRelationshipCollectionService<ClientType>;
    Children(id: ChildRelationshipId): ChildRelationshipService<ClientType>;
    AliasRelationships(): AliasRelationshipCollectionService<ClientType>;
    AliasRelationships(id: AliasRelationshipId): AliasRelationshipService<ClientType>;
    UpdateQuantity(params: Product_UpdateQuantityParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RemoveChildren(params: Product_RemoveChildrenParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    UpdateAttributes(params: Product_UpdateAttributesParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class ProductCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Product, EditableProduct, QProduct, ProductId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class AliasRelationshipService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, AliasRelationship, EditableAliasRelationship, QAliasRelationship> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class AliasRelationshipCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, AliasRelationship, EditableAliasRelationship, QAliasRelationship, AliasRelationshipId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ImageService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Image, EditableImage, QImage> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class ImageCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Image, EditableImage, QImage, ImageId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class AttributeValueService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, AttributeValue, EditableAttributeValue, QAttributeValue> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class AttributeValueCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, AttributeValue, EditableAttributeValue, QAttributeValue, AttributeValueId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class DCQuantityService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, DCQuantity, EditableDCQuantity, QDCQuantity> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class DCQuantityCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, DCQuantity, EditableDCQuantity, QDCQuantity, DCQuantityId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ProductLabelService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ProductLabel, EditableProductLabel, QProductLabel> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class ProductLabelCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ProductLabel, EditableProductLabel, QProductLabel, ProductLabelId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ProductBundleComponentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ProductBundleComponent, EditableProductBundleComponent, QProductBundleComponent> {
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Product(): ProductService<ClientType>;
}
export declare class ProductBundleComponentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ProductBundleComponent, EditableProductBundleComponent, QProductBundleComponent, ProductBundleComponentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ChildRelationshipService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ChildRelationship, EditableChildRelationship, QChildRelationship> {
    private _ChildProduct?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    ChildProduct(): ProductService<ClientType>;
}
export declare class ChildRelationshipCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ChildRelationship, EditableChildRelationship, QChildRelationship, ChildRelationshipId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class PackageService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Package, EditablePackage, QPackage> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class PackageCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Package, EditablePackage, QPackage, PackageId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ChannelDocumentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ChannelDocument, EditableChannelDocument, QChannelDocument> {
    private _ChannelDocument_QRetrieved?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Retrieved(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    asAmazonVATInvoiceDocumentService(): AmazonVATInvoiceDocumentService<any>;
}
export declare class ChannelDocumentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ChannelDocument, EditableChannelDocument, QChannelDocument, ChannelDocumentId> {
    private _ChannelDocument_QNotSupplied?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    NotSupplied(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataCollectionResponseV4<NotSuppliedChannelDocument>>>;
    asAmazonVATInvoiceDocumentCollectionService(): AmazonVATInvoiceDocumentCollectionService<any>;
}
export declare class NotSuppliedChannelDocumentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, NotSuppliedChannelDocument, EditableNotSuppliedChannelDocument, QNotSuppliedChannelDocument> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    asNotSuppliedAmazonVATInvoiceDocumentService(): NotSuppliedAmazonVATInvoiceDocumentService<any>;
}
export declare class NotSuppliedChannelDocumentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, NotSuppliedChannelDocument, EditableNotSuppliedChannelDocument, QNotSuppliedChannelDocument, NotSuppliedChannelDocumentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    asNotSuppliedAmazonVATInvoiceDocumentCollectionService(): NotSuppliedAmazonVATInvoiceDocumentCollectionService<any>;
}
export declare class SiteService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Site, EditableSite, QSite> {
    private _CancellationConfiguration?;
    private _RefundConfiguration?;
    private _AdjustmentReasons?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    CancellationConfiguration(): CancellationConfigurationService<ClientType>;
    RefundConfiguration(): RefundConfigurationService<ClientType>;
    AdjustmentReasons(): CollectionServiceV4<ClientType, CodeDescription, QCodeDescription, EditableCodeDescription>;
}
export declare class SiteCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Site, EditableSite, QSite, SiteId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderDocumentFlyweightService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderDocumentFlyweight, EditableOrderDocumentFlyweight, QOrderDocumentFlyweight> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    asOrderDocumentService(): OrderDocumentService<any>;
}
export declare class OrderDocumentFlyweightCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderDocumentFlyweight, EditableOrderDocumentFlyweight, QOrderDocumentFlyweight, OrderDocumentFlyweightId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    asOrderDocumentCollectionService(): OrderDocumentCollectionService<any>;
}
export declare class OrderDocumentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderDocument, EditableOrderDocument, QOrderDocument> {
    private _OrderDocument_QRetrieved?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Metadata(): OrderDocumentMetadataCollectionService<ClientType>;
    Metadata(id: OrderDocumentMetadataId): OrderDocumentMetadataService<ClientType>;
    Retrieved(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class OrderDocumentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderDocument, EditableOrderDocument, QOrderDocument, OrderDocumentFlyweightId> {
    private _OrderDocument_QMissing?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Missing(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataCollectionResponseV4<Order>>>;
}
export declare class OrderDocumentMetadataService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderDocumentMetadata, EditableOrderDocumentMetadata, QOrderDocumentMetadata> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderDocumentMetadataCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderDocumentMetadata, EditableOrderDocumentMetadata, QOrderDocumentMetadata, OrderDocumentMetadataId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderAttributeValueService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderAttributeValue, EditableOrderAttributeValue, QOrderAttributeValue> {
    private _Order?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
}
export declare class OrderAttributeValueCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderAttributeValue, EditableOrderAttributeValue, QOrderAttributeValue, OrderAttributeValueId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderItemAttributeValueService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, OrderItemAttributeValue, EditableOrderItemAttributeValue, QOrderItemAttributeValue> {
    private _OrderItem?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    OrderItem(): OrderItemService<ClientType>;
}
export declare class OrderItemAttributeValueCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, OrderItemAttributeValue, EditableOrderItemAttributeValue, QOrderItemAttributeValue, OrderItemAttributeValueId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ExportStatusService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ExportStatus, EditableExportStatus, QExportStatus> {
    private _Order?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
}
export declare class ExportStatusCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ExportStatus, EditableExportStatus, QExportStatus, ExportStatusId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class AmazonVATInvoiceDocumentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, AmazonVATInvoiceDocument, EditableAmazonVATInvoiceDocument, QAmazonVATInvoiceDocument> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class AmazonVATInvoiceDocumentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, AmazonVATInvoiceDocument, EditableAmazonVATInvoiceDocument, QAmazonVATInvoiceDocument, ChannelDocumentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class SiteAccountService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, SiteAccount, EditableSiteAccount, QSiteAccount> {
    private _Profile?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Profile(): ProfileService<ClientType>;
}
export declare class SiteAccountCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, SiteAccount, EditableSiteAccount, QSiteAccount, SiteAccountId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ShippingLabelPartnerAccountService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, ShippingLabelPartnerAccount, EditableShippingLabelPartnerAccount, QShippingLabelPartnerAccount> {
    private _Profile?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Profile(): ProfileService<ClientType>;
}
export declare class ShippingLabelPartnerAccountCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, ShippingLabelPartnerAccount, EditableShippingLabelPartnerAccount, QShippingLabelPartnerAccount, ShippingLabelPartnerAccountId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class NotSuppliedAmazonVATInvoiceDocumentService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, NotSuppliedAmazonVATInvoiceDocument, EditableNotSuppliedAmazonVATInvoiceDocument, QNotSuppliedAmazonVATInvoiceDocument> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class NotSuppliedAmazonVATInvoiceDocumentCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, NotSuppliedAmazonVATInvoiceDocument, EditableNotSuppliedAmazonVATInvoiceDocument, QNotSuppliedAmazonVATInvoiceDocument, NotSuppliedChannelDocumentId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class WebhookService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Webhook, EditableWebhook, QWebhook> {
    private _EventTypes?;
    private _QNewSigningSecret?;
    private _QRetryFailedEvents?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    EventTypes(): CollectionServiceV4<ClientType, EnumCollection<typeof WebhookEventType>, QEnumCollection<typeof WebhookEventType>>;
    NewSigningSecret(requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
    RetryFailedEvents(params: RetryFailedEventsParams, requestConfig?: ODataHttpClientConfig<ClientType>): Promise<HttpResponseModel<ODataModelResponseV4<void>>>;
}
export declare class WebhookCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Webhook, EditableWebhook, QWebhook, WebhookId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class CancellationConfigurationService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, CancellationConfiguration, EditableCancellationConfiguration, QCancellationConfiguration> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class RefundConfigurationService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, RefundConfiguration, EditableRefundConfiguration, QRefundConfiguration> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class CodeDescriptionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, CodeDescription, EditableCodeDescription, QCodeDescription> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
