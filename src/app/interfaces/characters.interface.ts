
export interface Response {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Reference[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Reference[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Reference[];
    returned: number;
  }
  events: {
    available: number;
    collectionURI: string;
    items: Reference[];
    returned: number;
  };
  urls: Urls_data[];

}

export interface Reference {
  resourceURI: string;
  name: string;
  type?: string;
}


export interface Urls_data {
  type: string;
  url: string;
}
