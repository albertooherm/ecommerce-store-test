export interface Product {
  id: string;
  productUserId: string | null;
  sku: string;
  name: string;
  subName: string | null;
  upc: string | null;
  gtin: string | null;
  description: string | null;
  currency: string;
  productType: string | null;
  quantity: string;
  price: number;
  cost: string | null;
  discount: string | null;
  dimensions: {
    width: string | null;
    height: string | null;
    length: string | null;
    weight: string;
  };
  units: {
    width: string | null;
    height: string | null;
    length: string | null;
    weight: string;
  };
  category: {
    id: string | null;
    name: string | null;
    all: any[];
  };
  tags: any[];
  status: {
    id: string | null;
    visibility: string;
    active: string;
    status: string;
    ecartapiId: string;
    ecartapi: string;
    hasOptions: string | null;
    inStock: string | null;
  };
  variants: Variant[];
  options: Option[];
  associatedItems: any[];
  logistic: {
    me1Suported: string | null;
    mode: string | null;
    type: string | null;
    free: string;
    direction: string | null;
    dimensions: any | null;
    rates: any[];
  };
  images: Image[];
  imageUrl: string;
  condition: string | null;
  link: string;
  dates: {
    createdAt: string;
    updatedAt: string;
  };
  vendor: string;
  sellOutStock: string | null;
  locations: any[];
  internationalShipment: any[];
}

export interface Variant {
  id: string;
  productId: string;
  productUserId: string | null;
  barcode: string | null;
  name: string;
  price: string;
  currency: string | null;
  sku: string;
  fulfillmentService: string;
  option1: string;
  option2: string | null;
  option3: string | null;
  dimensions: {
    width: string | null;
    height: string | null;
    length: string | null;
    weight: string;
  };
  units: {
    width: string | null;
    height: string | null;
    length: string | null;
    weight: string;
  };
  inventory: {
    itemId: string;
    quantity: string;
  };
  status: {
    active: string;
  };
  requireShipping: string;
  bundled: string;
  countryCodeOrigin: string | null;
  provinceCodeOrigin: string | null;
  harmonizedSystemCode: string | null;
  countryHarmonizedSystemCode: any[];
  imageId: string | null;
  imageUrl: string | null;
  dates: {
    createdAt: string;
    updatedAt: string;
  };
  ecartapiUrl: string;
}

export interface Option {
  id: string;
  name: string;
  values: string[];
}

export interface Image {
  id: string;
  url: string;
  variantIds: any[];
  ecartapiUrl: string;
}
