declare type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

declare type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

// Giant Wikimedia API type
type WikiDaily = {
  tfa: {
    type: string;
    title: string;
    displaytitle: string;
    namespace: {
      id: number;
      text: string;
    };
    wikibase_item: string;
    titles: {
      canonical: string;
      normalized: string;
      display: string;
    };
    pageid: number;
    thumbnail: {
      source: string;
      width: number;
      height: number;
    };
    originalimage: {
      source: string;
      width: number;
      height: number;
    };
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: {
      desktop: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
      mobile: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
    };
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  };
  mostread: {
    date: string;
    articles: [
      {
        views: number;
        rank: number;
        view_history: [
          {
            date: string;
            views: number;
          },
          {
            date: string;
            views: number;
          },
          {
            date: string;
            views: number;
          },
          {
            date: string;
            views: number;
          },
          {
            date: string;
            views: number;
          }
        ];
        type: string;
        title: string;
        displaytitle: string;
        namespace: {
          id: number;
          text: string;
        };
        wikibase_item: string;
        titles: {
          canonical: string;
          normalized: string;
          display: string;
        };
        pageid: number;
        thumbnail: {
          source: string;
          width: number;
          height: number;
        };
        originalimage: {
          source: string;
          width: number;
          height: number;
        };
        lang: string;
        dir: string;
        revision: string;
        tid: string;
        timestamp: string;
        description: string;
        description_source: string;
        content_urls: {
          desktop: {
            page: string;
            revisions: string;
            edit: string;
            talk: string;
          };
          mobile: {
            page: string;
            revisions: string;
            edit: string;
            talk: string;
          };
        };
        extract: string;
        extract_html: string;
        normalizedtitle: string;
      },
      {
        documentation_note: string;
      }
    ];
  };
  image: {
    title: string;
    thumbnail: {
      source: string;
      width: number;
      height: number;
    };
    image: {
      source: string;
      width: number;
      height: number;
    };
    file_page: string;
    artist: {
      html: string;
      text: string;
      name: string;
      user_page: string;
    };
    credit: {
      html: string;
      text: string;
    };
    license: {
      type: string;
      code: string;
      url: string;
    };
    description: {
      html: string;
      text: string;
      lang: string;
    };
    wb_entity_id: string;
    structured: {
      captions: {};
    };
  };
  news: [
    {
      links: [
        {
          type: string;
          title: string;
          displaytitle: string;
          namespace: {
            id: number;
            text: string;
          };
          wikibase_item: string;
          titles: {
            canonical: string;
            normalized: string;
            display: string;
          };
          pageid: number;
          thumbnail: {
            source: string;
            width: number;
            height: number;
          };
          originalimage: {
            source: string;
            width: number;
            height: number;
          };
          lang: string;
          dir: string;
          revision: string;
          tid: string;
          timestamp: string;
          description: string;
          description_source: string;
          content_urls: {
            desktop: {
              page: string;
              revisions: string;
              edit: string;
              talk: string;
            };
            mobile: {
              page: string;
              revisions: string;
              edit: string;
              talk: string;
            };
          };
          extract: string;
          extract_html: string;
          normalizedtitle: string;
        }
      ];
      story: string;
    }
  ];
  onthisday: [
    {
      text: string;
      pages: [
        {
          type: string;
          title: string;
          displaytitle: string;
          namespace: {
            id: number;
            text: string;
          };
          wikibase_item: string;
          titles: {
            canonical: string;
            normalized: string;
            display: string;
          };
          pageid: number;
          thumbnail: {
            source: string;
            width: number;
            height: number;
          };
          originalimage: {
            source: string;
            width: number;
            height: number;
          };
          lang: string;
          dir: string;
          revision: string;
          tid: string;
          timestamp: string;
          description: string;
          description_source: string;
          content_urls: {
            desktop: {
              page: string;
              revisions: string;
              edit: string;
              talk: string;
            };
            mobile: {
              page: string;
              revisions: string;
              edit: string;
              talk: string;
            };
          };
          extract: string;
          extract_html: string;
          normalizedtitle: string;
        }
      ];
      year: string;
    }
  ];
};

type FeedResult = {
  query?: {
    pages?: WikiDaily[];
  };
};

interface ColumnMeta {
  field: string;
  header: string;
}

type FeaturedOutput = {
  image: string;
  description: string;
  mobilelink: string;
  desktoplink: string;
};

export interface OnThisDayInt {
  selected: Birth[];
  births: Birth[];
  deaths: Birth[];
  events: Birth[];
  holidays: Holiday[];
}

declare type OnThisDayType = {
  selected: Birth[];
  births: Birth[];
  deaths: Birth[];
  events: Birth[];
  holidays: Holiday[];
};

export interface Birth {
  text: string;
  pages: Page[];
  year: number;
}

export interface Page {
  type: Type;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Originalimage;
  originalimage?: Originalimage;
  lang: Lang;
  dir: Dir;
  revision: string;
  tid: string;
  timestamp: Date;
  description?: string;
  description_source?: DescriptionSource;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates;
}

export interface ContentUrls {
  desktop: Desktop;
  mobile: Desktop;
}

export interface Desktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export enum DescriptionSource {
  Local = "local",
}

export enum Dir {
  LTR = "ltr",
}

export enum Lang {
  En = "en",
}

export interface Namespace {
  id: number;
  text: string;
}

export interface Originalimage {
  source: string;
  width: number;
  height: number;
}

export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export enum Type {
  Standard = "standard",
}

export interface Holiday {
  text: string;
  pages: Page[];
}

export interface OutputInt {
  image: string;
  title: string;
  body: string;
  desktopLink: string;
  mobileLink: string;
  width: number | undefined;
  height: number | undefined;
}
