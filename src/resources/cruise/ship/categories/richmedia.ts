// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Richmedia extends APIResource {
  /**
   * Ship Categories (Rich Media)
   *
   * @example
   * ```ts
   * const richmedia =
   *   await client.cruise.ship.categories.richmedia.retrieve();
   * ```
   */
  retrieve(
    params: RichmediaRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RichmediaRetrieveResponse> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/cruise/ship/categories/richmedia/14393', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface RichmediaRetrieveResponse {
  data?: RichmediaRetrieveResponse.Data;

  isSucceed?: boolean;
}

export namespace RichmediaRetrieveResponse {
  export interface Data {
    id?: number;

    activities?: Array<Data.Activity>;

    categories?: Array<Data.Category>;

    contentInfo?: Data.ContentInfo;

    cruiselineId?: number;

    decks?: Array<Data.Deck>;

    facts?: Array<Data.Fact>;

    highlights?: Array<Data.Highlight>;

    languageId?: number;

    legends?: Array<Data.Legend>;

    media?: Data.Media;

    name?: string;

    priority?: number;

    vrUrl?: string;
  }

  export namespace Data {
    export interface Activity {
      id?: number;

      contentInfo?: Activity.ContentInfo;

      media?: Activity.Media;

      shipId?: number;

      subActivites?: Array<Activity.SubActivite>;

      type?: string;
    }

    export namespace Activity {
      export interface ContentInfo {
        longDescription?: string;

        name?: string;

        shortDescription?: string;
      }

      export interface Media {
        files?: Array<Media.File>;
      }

      export namespace Media {
        export interface File {
          imageType?: string;

          path?: string;

          type?: string;
        }
      }

      export interface SubActivite {
        id?: number;

        contentInfo?: SubActivite.ContentInfo;

        media?: SubActivite.Media;

        parentActivityId?: number;

        shipId?: number;

        vrUrl?: string;
      }

      export namespace SubActivite {
        export interface ContentInfo {
          longDescription?: string;

          name?: string;

          shortDescription?: string;
        }

        export interface Media {
          files?: Array<Media.File>;
        }

        export namespace Media {
          export interface File {
            imageType?: string;

            path?: string;

            type?: string;
          }
        }
      }
    }

    export interface Category {
      id?: number;

      active?: boolean;

      code?: string;

      color?: string;

      contentInfo?: Category.ContentInfo;

      decks?: string;

      media?: Category.Media;

      type?: string;

      vrUrl?: string;
    }

    export namespace Category {
      export interface ContentInfo {
        longDescription?: string;

        shortDescription?: string;
      }

      export interface Media {
        files?: Array<Media.File>;
      }

      export namespace Media {
        export interface File {
          imageType?: string;

          path?: string;

          type?: string;
        }
      }
    }

    export interface ContentInfo {
      longDescription?: string;

      name?: string;

      shortDescription?: string;
    }

    export interface Deck {
      id?: number;

      areas?: Array<Deck.Area>;

      cabins?: Array<Deck.Cabin>;

      categories?: string;

      contentInfo?: Deck.ContentInfo;

      coordinates?: Array<Deck.Coordinate>;

      media?: Deck.Media;

      name?: string;

      priority?: number;
    }

    export namespace Deck {
      export interface Area {
        id?: number;

        contentInfo?: Area.ContentInfo;

        cordinate?: Area.Cordinate;

        media?: Area.Media;
      }

      export namespace Area {
        export interface ContentInfo {
          name?: string;

          shortDescription?: string;
        }

        export interface Cordinate {
          xAxis?: number;

          yAxis?: number;
        }

        export interface Media {
          files?: Array<Media.File>;
        }

        export namespace Media {
          export interface File {
            path?: string;

            type?: string;
          }
        }
      }

      export interface Cabin {
        id?: number;

        categoryID?: number;

        deckImageMapping?: Cabin.DeckImageMapping;

        number?: string;
      }

      export namespace Cabin {
        export interface DeckImageMapping {
          xAxis?: number;

          yAxis?: number;
        }
      }

      export interface ContentInfo {
        longDescription?: string;

        name?: string;

        shortDescription?: string;
      }

      export interface Coordinate {
        position?: string;

        xAxis?: number;

        yAxis?: number;
      }

      export interface Media {
        files?: Array<Media.File>;
      }

      export namespace Media {
        export interface File {
          imageType?: string;

          path?: string;

          type?: string;
        }
      }
    }

    export interface Fact {
      category?: number;

      name?: string;

      priority?: number;

      value?: string;
    }

    export interface Highlight {
      id?: number;

      contentInfo?: Highlight.ContentInfo;

      priority?: number;

      shipID?: number;
    }

    export namespace Highlight {
      export interface ContentInfo {
        shortDescription?: string;
      }
    }

    export interface Legend {
      id?: number;

      contentInfo?: Legend.ContentInfo;

      media?: Legend.Media;
    }

    export namespace Legend {
      export interface ContentInfo {
        name?: string;
      }

      export interface Media {
        files?: Array<Media.File>;
      }

      export namespace Media {
        export interface File {
          path?: string;

          type?: string;
        }
      }
    }

    export interface Media {
      files?: Array<Media.File>;
    }

    export namespace Media {
      export interface File {
        path?: string;

        type?: string;
      }
    }
  }
}

export interface RichmediaRetrieveParams {
  SiteItemId?: string;
}

export declare namespace Richmedia {
  export {
    type RichmediaRetrieveResponse as RichmediaRetrieveResponse,
    type RichmediaRetrieveParams as RichmediaRetrieveParams,
  };
}
