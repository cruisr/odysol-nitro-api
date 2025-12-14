// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CategoriesAPI from './categories/categories';
import { Categories, CategoryRetrieveParams, CategoryRetrieveResponse } from './categories/categories';

export class Ship extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

Ship.Categories = Categories;

export declare namespace Ship {
  export {
    Categories as Categories,
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryRetrieveParams as CategoryRetrieveParams,
  };
}
