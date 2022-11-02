export interface ProductUpdate {
    APIKEY: string;
    mvProduct: mvProduct;
    mvRecordAction: string;
    forceSkuUpdateEvenIfUsedInDocuments?: boolean;
    mvInsertUpdateDeleteSourceApplication?: string;
}

export interface SupplierClientUpdate {
    APIKEY: string;
    mvSupplierClient: mvSupplierClient;
    mvRecordAction: string;
    mvGrantPermissionsToAllUsers?: boolean;
    mvInsertUpdateDeleteSourceApplication?: string;
}

export interface InventoryLocationUpdate {
    APIKEY: string;
    mvInventoryLocation: mvInventoryLocation;
    mvRecordAction: string;
    mvInsertUpdateDeleteSourceApplication?: string;
}

export interface TaxUpdate {
    APIKEY: string;
    mvTax: mvTax;
    mvRecordAction: string;
    mvInsertUpdateDeleteSourceApplication?: string;
}
export interface DiscountUpdate {
    APIKEY: string;
    mvDiscount: mvDiscount;
    mvRecordAction: string;
    mvInsertUpdateDeleteSourceApplication?: string;
}

export interface SalesOrderUpdate {
    APIKEY: string;
    mvSalesOrder: mvSalesOrder;
    mvRecordAction: string;
    mvInsertUpdateDeleteSourceApplication?: string;
    AutoInsertBundledProductRows?: boolean;
}
export interface mvSalesOrder {
    SalesOrderId?: number;
    SalesOrderTypeId: number;
    SalesOrderTypeAbbreviation?: string;
    SalesOrderTypeDescription?: string;
    SalesOrderNo?: string;
    SalesOrderReferenceNo?: string;
    SalesOrderReferenceApplication?: string;
    SalesOrderDate?: Date;
    SalesOrderCustomOrderDate1?: Date;
    SalesOrderCustomOrderDate2?: Date;
    SalesOrderCurrencyCode?: string;
    SalesOrderClientID: number;
    SalesOrderClientName?: string;
    SalesOrderBillingAddress?: string;
    SalesOrderShippingAddress?: string;
    SalesOrderAddresses?: mvAddress[];
    SalesOrderContactPerson?: string;
    SalesOrderInventoryLocationID?: number;
    SalesOrderCustomFlag1?: boolean;
    SalesOrderCustomFlag2?: boolean;
    SalesOrderCustomFlag3?: boolean;
    SalesOrderCustomFlag4?: boolean;
    SalesOrderCustomFlag5?: boolean;
    SalesOrderCustomFlag6?: boolean;
    SalesOrderCustomFlag7?: boolean;
    SalesOrderCustomFlag8?: boolean;
    SalesOrderCustomFlag9?: boolean;
    SalesOrderCustomFlag10?: boolean;
    SalesOrderComments?: string;
    SalesOrderTags?: string;
    SalesOrderPaymentTermsEnumeration?: string
    SalesOrderPaymentMethod?: string
    SalesOrderTotalQuantity?: number;
    SalesOrderAmountSubtotalWithoutTaxAndDiscount?: number;
    SalesOrderAmountShipping?: number;
    SalesOrderAmountTotalDiscount?: number;
    SalesOrderAmountTotalTax?: number;
    SalesOrderAmountGrandTotal?: number;
    SalesOrderDetails: mvSalesOrderRow[];
    SalesOrderShipDocumentTypeID?: string;
    SalesOrderStatus?: string;
    chkReOpenOrCloseRelatedDocs?: boolean;
    SalesOrderCreationDate?: Date;
    SalesOrderLastUpdatedDate?: Date;
}

export interface mvSalesOrderRow {
    SalesOrderRowDetailID?: number;
    SalesOrderRowProductID?: number;
    SalesOrderRowProductSKU: string;
    SalesOrderRowProductDescription?: string;
    SalesOrderRowQuantity: number;
    SalesOrderRowShippedQuantity: number;
    SalesOrderRowInvoicedQuantity: number;
    SalesOrderRowUnitPriceWithoutTaxOrDiscount: number;
    SalesOrderRowTaxID?: number;
    SalesOrderTotalTaxAmount?: number;
    SalesOrderRowDiscountID?: number;
    SalesOrderRowTotalDiscountAmount?: number;
    SalesOrderRowTotalAmount?: number;
    SalesOrderRowSerialNumbers?: string[];
    SalesOrderRowBatchNumbers?: BatchNumberDetails[];
    SalesOrderRowRemarks?: string;
}
export interface BatchNumberDetails {
    BatchNumberName: string;
    ExpiryDate?: Date;
    AssignedQTYInDetail: number;
}
export interface mvDiscount {
    DiscountID?: number;
    DiscountName: string;
    DiscountDescription?: string;
    DiscountValue: number;
}
export interface mvTax {
    TaxID?: number;
    TaxName: string;
    TaxDescription?: string;
    TaxValue: number;
}

export interface mvInventoryLocation {
    InventoryLocationID?: number;
    InventoryLocationName: string;
    InventoryLocationAbbreviation: string;
    InventoryLocationAddress?: string;
    Address?: mvAddress;
    InventoryLocationCurrencyCode?: string;
    InventoryLocationCompanyId?: number;
    InventoryLocationIsDeleted?: boolean;
    InventoryLocationIsTransit?: boolean;
}

export interface mvProduct {
    ProductID?: number;
    ProductType?: string;
    ProductSKU: string;
    ProductEAN?: string;
    ProductDescription: string;
    ProductVersion?: string;
    ProductLongDescription?: string;
    ProductCategoryID?: number;
    mvProductCategory?: mvProductCategory;
    ProductUnitOfMeasurement?: string
    ProductSellingPrice?: number;
    ProductPurchasePrice?: number;
    ProductUnitCost?: mvProductUnitCostPerCompany[];
    ProductWeight?: number;
    ProductWeightUnitID?: number;
    mvProductWeightUnit?: mvWeightUnit;
    ProductLength?: number;
    ProductBreadth?: number;
    ProductHeight?: number;
    ProductImageURL?: string;
    ProductComments?: string;
    ProductCustomField1?: string;
    ProductCustomField2?: string;
    ProductCustomField3?: string;
    ProductCustomField4?: string;
    ProductCustomField5?: string;
    ProductCustomField6?: string;
    ProductCustomField7?: string;
    ProductCustomField8?: string;
    ProductCustomField9?: string;
    ProductCustomField10?: string;
    ProductMainSupplierID?: number;
    mvProductMainSupplier?: mvSupplierClient;
    ProductMainSupplierPrice?: number;
    ProductMainSupplierSKU?: string;
    ProductMainSupplierDescription?: string;
    ProductCreationDate?: Date;
    ProductOption1?: boolean;
    ProductOption2?: boolean;
    ProductOption3?: boolean;
    ProductOption4?: boolean;
    ProductOption5?: boolean;
    IsInventorySerialised?: boolean;
    IsBatchNumbersEnabled?: boolean;
    SerialNumberPrefix?: string;
    SerialNumberLength?: number;
}

export interface mvProductCategory {
    ProductCategoryID?: number;
    ProductCategoryName: string;
    ProductCategoryDescription?: string;
}
export interface mvProductUnitCostPerCompany {
    CompanyName?: string;
    CompanyCurrencyCode?: string;
    ProductUnitCost?: number;
}
export interface mvWeightUnit {
    WeightUnitID?: number;
    WeightUnitAbbrev?: string;
    WeightUnitName?: string;
    WeightUnitConversionToGrams?: number;
}
export interface mvSupplierClient {
    SupplierClientID?: number;
    SupplierClientType?: string;
    SupplierClientName: string,
    SupplierClientBillingAddress?: string;
    SupplierClientShippingAddress1?: string;
    SupplierClientShippingAddress2?: string;
    SupplierClientAddresses?: mvAddress[];
    SupplierClientPhone1?: string;
    SupplierClientPhone2?: string;
    SupplierClientFax?: string;
    SupplierClientIM?: string;
    SupplierClientEmail?: string;
    SupplierClientTaxID?: string;
    SupplierClientCurrency?: string;
    SupplierClientPaymentTermsEnum?: string;
    SupplierClientPaymentMethodEnum?: string;
    SupplierClientComments?: string;
    SupplierClientCustomField1?: string;
    SupplierClientCustomField2?: string;
    SupplierClientCustomField3?: string;
    SupplierClientCustomField4?: string;
    SupplierClientCustomField5?: string;
    SupplierClientOption1?: boolean;
    SupplierClientOption2?: boolean;
    SupplierClientOption3?: boolean;
    SupplierClientOption4?: boolean;
    SupplierClientOption5?: boolean;
    SupplierClientCreationDate?: Date;
    mvContacts?: mvContactPerson[];
}
export interface mvAddress {
    AddressType: string;
    AddressLine1?: string;
    AddressLine2?: string;
    AddressLine3?: string;
    TaxIdNumber?: string;
    Organization?: string;
    City?: string;
    State?: string;
    Country?: string;
    CountryName?: string;
    Longitude?: string;
    Latitude?: string;
    ZipCode?: string;
}
export interface mvContactPerson {
    ContactId: number;
    ContactName: string;
    ContactDepartment: string;
    ContactAddress: string;
    ContactFullAddress: mvAddress;
    ContactEmail: string;
    ContactPhone1: string;
    ContactPhone2: string;
    ContactFax: string;
    ContactIM: string;
    ContactCustomField1: string;
    ContactCustomField2: string;
    ContactIsPrimary: boolean;
    mvSuppliersClients?: mvSupplierClient[];
}

